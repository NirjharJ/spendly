// Layout — replaces base.html block structure
// Wraps children in <Navbar> + <main class="main-content"> + <Footer>
// Flask equivalent: {% extends "base.html" %} ... {% block content %}{% endblock %}

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </>
    );
}
