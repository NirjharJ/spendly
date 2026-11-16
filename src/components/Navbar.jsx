// Navbar — extracted from base.html
// Replaces: <nav class="navbar"> ... </nav>
// Flask equivalent: url_for('landing'), url_for('login'), url_for('register')

import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-inner">
                <Link to="/" className="nav-brand">
                    <span className="brand-icon">&#x25C8;</span>
                    <span className="brand-name">Spendly</span>
                </Link>
                <div className="nav-links">
                    <Link to="/login">Sign in</Link>
                    <Link to="/register" className="nav-cta">Get started</Link>
                </div>
            </div>
        </nav>
    );
}
