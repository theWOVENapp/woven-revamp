import { NavLink } from 'react-router-dom';
import wovenLogo from '../dist/assets/images/WOVEN Color 1.png';

const Footer = () => {
  return (
    <footer className="site-footer expanded-footer">
      <div className="footer-grid">
        <div>
          <NavLink to="/" className="logo-link" aria-label="Woven home"><span className="logo" aria-label="Woven"><img src={wovenLogo} alt="Woven" /></span></NavLink>
          <p className="footer-description">Connecting your brand narrative across the digital landscape with editorial precision.</p>
        </div>

        <div className="footer-links">
          <NavLink to="/">Product</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/cookie-policy">Cookie Policy</NavLink>
        </div>

        <div className="footer-links">
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/terms-of-service">Terms of Service</NavLink>
          <a href="mailto:hello@woven.example">Contact Us</a>
        </div>

        <div className="footer-links">
          <span>Social</span>
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#instagram">Instagram</a>
        </div>
      </div>

      <p className="footer-copyright">© 2025 Woven Connectivity. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
