import os
from typing import Optional


def get_env(name: str, default: Optional[str] = None) -> str:
    """Fetch an environment variable.

    - If default is provided, return it when missing
    - If both missing and no default, raise to fail-fast on required config
    """
    value = os.getenv(name, default)
    if value is None:
        raise RuntimeError(f"Missing required env var: {name}")
    return value


