import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Features from './Features';
import Home from './Home';
import Pricing from './Pricing';
import './styles.css';
import './legal.css';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import CookiePolicyPage from './CookiePolicyPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import ResourcesPage from './ResourcesPage';
import TermsOfServicePage from './TermsOfServicePage';


function App() {
  return <Layout>
  <Routes>
<Route path="/" element={<Home />} />
  <Route path="/features" element={<Features />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/cookie-policy" element={<CookiePolicyPage />} />
  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
  <Route path="/resources" element={<ResourcesPage />} />
  <Route path="/terms-of-service" element={<TermsOfServicePage />} />
  <Route path="*" element={<Home />} />

  </Routes>
  </Layout>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>);
