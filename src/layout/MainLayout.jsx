import { Link, NavLink, Outlet } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/account', label: 'Account' },
];

function MainLayout() {
  return (
    <div className="app-shell">
      <header className="top-nav container">
        <Link to="/" className="brand-mark">
          THARI
        </Link>
        <nav>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="container page-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-links">
            <a href="#" aria-label="Privacy Policy">
              Privacy Policy
            </a>
            <a href="#" aria-label="Terms">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
