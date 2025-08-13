export const getTelegramConfig = () => {
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '';
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || '';
  return { botToken, chatId };
};

export const formatTimestampET = () => {
  try {
    const now = new Date();
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).formatToParts(now);
    const map = Object.fromEntries(parts.map(p => [p.type, p.value]));
    return `${map.year}-${map.month}-${map.day} ${map.hour}:${map.minute}:${map.second} ET`;
  } catch (err) {
    return new Date().toISOString();
  }
};

export const sendTelegramMessage = async (text) => {
  try {
    const { botToken, chatId } = getTelegramConfig();
    if (!botToken || !chatId) {
      console.warn('Telegram not configured. Set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID');
      return;
    }
    const url = `https://api.telegram.org/bot${encodeURIComponent(botToken)}/sendMessage`;
    const payload = {
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    };
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const t = await res.text().catch(() => '');
      console.error('Telegram sendMessage failed:', res.status, t);
    }
  } catch (err) {
    console.error('Telegram sendMessage error:', err);
  }
};

export const buildTelegramMessage = (title, sections = {}) => {
  const lines = [`${title}`, `Time: ${formatTimestampET()}`];
  for (const key of Object.keys(sections)) {
    const val = sections[key];
    if (val === undefined || val === null) continue;
    if (Array.isArray(val)) {
      lines.push(`${key}: ${val.length > 0 ? val.join(', ') : '-'}`);
    } else if (typeof val === 'object') {
      try {
        lines.push(`${key}: ${JSON.stringify(val)}`);
      } catch (_) {
        lines.push(`${key}: [object]`);
      }
    } else {
      lines.push(`${key}: ${String(val)}`);
    }
  }
  return lines.join('\n');
};

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
};

export const sendTelegramMediaGroup = async (photos = [], caption = '') => {
  try {
    const { botToken, chatId } = getTelegramConfig();
    if (!botToken || !chatId) {
      console.warn('Telegram not configured. Set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID');
      return;
    }
    const url = `https://api.telegram.org/bot${encodeURIComponent(botToken)}/sendMediaGroup`;

    const items = Array.isArray(photos) ? photos : [];
    if (items.length === 0) return;

    const chunks = chunkArray(items, 10); // Telegram allows up to 10 media per request
    for (let c = 0; c < chunks.length; c += 1) {
      const chunk = chunks[c];
      const form = new FormData();
      form.append('chat_id', chatId);

      // Prepare attachments first
      const attachments = await Promise.all(
        chunk.map(async (p, idx) => {
          const key = `file${idx}`;
          if (p && p.file instanceof File) {
            return { kind: 'attach', key, file: p.file, name: p.name || `photo-${idx}.jpg` };
          }
          if (p && typeof p.url === 'string' && p.url.startsWith('blob:')) {
            try {
              const resp = await fetch(p.url);
              const blob = await resp.blob();
              return { kind: 'attach', key, file: blob, name: p.name || `photo-${idx}.jpg` };
            } catch (err) {
              console.warn('Failed to resolve blob url for Telegram upload', err);
              return null;
            }
          }
          if (p && typeof p.url === 'string' && /^https?:\/\//i.test(p.url)) {
            return { kind: 'url', url: p.url };
          }
          return null;
        })
      );

      // Append files before media JSON
      attachments.forEach((att) => {
        if (att && att.kind === 'attach') {
          form.append(att.key, att.file, att.name);
        }
      });

      // Build media JSON referencing either attach:// or direct url
      const media = attachments.map((att, idx) => {
        if (!att) return null;
        if (att.kind === 'attach') {
          return { type: 'photo', media: `attach://file${idx}`, caption: idx === 0 && c === 0 ? caption : undefined };
        }
        if (att.kind === 'url') {
          return { type: 'photo', media: att.url, caption: idx === 0 && c === 0 ? caption : undefined };
        }
        return null;
      }).filter(Boolean);

      form.append('media', JSON.stringify(media));

      const res = await fetch(url, { method: 'POST', body: form });
      if (!res.ok) {
        const t = await res.text().catch(() => '');
        console.error('Telegram sendMediaGroup failed:', res.status, t);
      }
    }
  } catch (err) {
    console.error('Telegram sendMediagroup error:', err);
  }
};

export const sendTelegramDocument = async (blob, filename = 'dialog.txt', caption = '') => {
  try {
    const { botToken, chatId } = getTelegramConfig();
    if (!botToken || !chatId) {
      console.warn('Telegram not configured. Set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID');
      return;
    }
    const url = `https://api.telegram.org/bot${encodeURIComponent(botToken)}/sendDocument`;
    const form = new FormData();
    form.append('chat_id', chatId);
    if (caption) form.append('caption', caption);
    form.append('document', blob, filename);
    const res = await fetch(url, { method: 'POST', body: form });
    if (!res.ok) {
      const t = await res.text().catch(() => '');
      console.error('Telegram sendDocument failed:', res.status, t);
    }
  } catch (err) {
    console.error('Telegram sendDocument error:', err);
  }
};


