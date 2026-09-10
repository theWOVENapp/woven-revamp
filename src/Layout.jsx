import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';


const navItems = [
  { label: 'Product', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' }
];

export function Logo() {
  return <span className="brand"><span className="brand-mark">✦</span><span>woven</span></span>;
}

export function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('woven-theme') || 'dark');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => setMenuOpen(false), [location.pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('woven-theme', theme);
  }, [theme]);

  return (
    <div className="site-shell">
      <header className="navbar">
        <NavLink to="/" className="logo-link" aria-label="Woven home"><Logo /></NavLink>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{item.label}</NavLink>)}
        </nav>
        <div className="nav-actions">
          <button className="button button-ghost desktop-only" onClick={() => window.alert('Sign in is coming soon.')}>Sign in</button>
          <button className="button button-primary" onClick={() => navigate('/pricing')}>Get started <span aria-hidden="true">↗</span></button>
          <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span></button>
          <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function SectionTitle({ eyebrow, children, align = 'center' }) {
  return <div className={`section-title ${align}`}><span className="eyebrow">{eyebrow}</span><h2>{children}</h2></div>;
}
