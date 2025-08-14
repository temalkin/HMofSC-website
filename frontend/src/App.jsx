import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import Home from './pages/Home';
import About from './pages/About';
import ServicesOverview from './pages/ServicesOverview';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import AIAssistant from './pages/AIAssistant';
import Calculator from './pages/Calculator';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Individual Service Pages
import FurnitureAssembly from './pages/services/FurnitureAssembly';
import AssistedLivingModifications from './pages/services/AssistedLivingModifications';
import AtticLadderInstallation from './pages/services/AtticLadderInstallation';
import BathroomRemodeling from './pages/services/BathroomRemodeling';
import CarpentryWoodworking from './pages/services/CarpentryWoodworking';
import CommercialPropertyMaintenance from './pages/services/CommercialPropertyMaintenance';
import ComprehensiveHomeRenovations from './pages/services/ComprehensiveHomeRenovations';
import CountertopInstallation from './pages/services/CountertopInstallation';
import DryerVentCleaning from './pages/services/DryerVentCleaning';
import DrywallInstallationRepair from './pages/services/DrywallInstallationRepair';
import TVMountInstallation from './pages/services/TVMountInstallation';
import GeneralHomeRepairs from './pages/services/GeneralHomeRepairs';
import PressureWashing from './pages/services/PressureWashing';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 font-sf">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesOverview />} />
              
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/ai-assistant" element={<AIAssistant />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* Service Pages */}
              <Route path="/services/furniture-assembly" element={<FurnitureAssembly />} />
              <Route path="/services/assisted-living-modifications" element={<AssistedLivingModifications />} />
              <Route path="/services/attic-ladder-installation" element={<AtticLadderInstallation />} />
              <Route path="/services/bathroom-remodeling" element={<BathroomRemodeling />} />
              <Route path="/services/carpentry-woodworking" element={<CarpentryWoodworking />} />
              <Route path="/services/commercial-property-maintenance" element={<CommercialPropertyMaintenance />} />
              <Route path="/services/comprehensive-home-renovations" element={<ComprehensiveHomeRenovations />} />
              <Route path="/services/countertop-installation" element={<CountertopInstallation />} />
              <Route path="/services/dryer-vent-cleaning" element={<DryerVentCleaning />} />
              <Route path="/services/drywall-installation-repair" element={<DrywallInstallationRepair />} />
              <Route path="/services/tv-mount-installation" element={<TVMountInstallation />} />
              <Route path="/services/general-home-repairs" element={<GeneralHomeRepairs />} />
              <Route path="/services/pressure-washing" element={<PressureWashing />} />
              
              {/* For now, these routes will redirect to the main services page */}
              <Route path="/services/*" element={<ServicesOverview />} />
            </Routes>
          </main>
          <Footer />
          <FloatingCallButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;