// Login page — transcribed from templates/login.html
// Flask route: @app.route("/login") → render_template("login.html")
// This is a real GET route in the Flask app.
// The form POST handling is NOT implemented in the Flask app (no POST handler).
// Placeholder: "{% if error %}<div class='auth-error'>{{ error }}</div>{% endif %}"
// — error display preserved as a comment since Flask has no error logic.

import { Link } from 'react-router-dom';

// Flask has no POST handler for /login, so form submission is not implemented.
// The Flask template shows: {% if error %}<div class="auth-error">{{ error }}</div>{% endif %}
// but there is no error variable passed — this is purely display-only.

export default function Login() {
    return (
        <section className="auth-section">
            <div className="auth-container">

                <div className="auth-header">
                    <h1 className="auth-title">Welcome back</h1>
                    <p className="auth-subtitle">Sign in to your Spendly account</p>
                </div>

                <div className="auth-card">
                    {/* Flask has no POST handler for /login, so form submission is not implemented. */}
                    {/* The Jinja2 error block is preserved as a comment since there's no error logic. */}
                    {/* {% if error %}<div class="auth-error">{{ error }}</div>{% endif %} */}

                    {/* No POST handler exists in the Flask app — form is display-only. */}
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="nitish@example.com"
                                required
                                autoFocus
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-input"
                                placeholder="Your password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn-submit">Sign in</button>
                    </form>
                </div>

                <p className="auth-switch">
                    Don't have an account?
                    <Link to="/register">Create one free</Link>
                </p>

            </div>
        </section>
    );
}
