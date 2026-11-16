// Register page — transcribed from templates/register.html
// Flask route: @app.route("/register") → render_template("register.html")
// This is a real GET route in the Flask app.
// The form POST handling is NOT implemented in the Flask app (no POST handler).
// Placeholder: "{% if error %}<div class='auth-error'>{{ error }}</div>{% endif %}"
// — error display preserved as a comment since Flask has no error logic.

import { Link } from 'react-router-dom';

// Flask has no POST handler for /register, so form submission is not implemented.
// The Flask template shows: {% if error %}<div class="auth-error">{{ error }}</div>{% endif %}
// but there is no error variable passed — this is purely display-only.

export default function Register() {
    return (
        <section className="auth-section">
            <div className="auth-container">

                <div className="auth-header">
                    <h1 className="auth-title">Create your account</h1>
                    <p className="auth-subtitle">Start tracking your expenses today</p>
                </div>

                <div className="auth-card">
                    {/* Flask has no POST handler for /register, so form submission is not implemented. */}
                    {/* The Jinja2 error block is preserved as a comment since there's no error logic. */}
                    {/* {% if error %}<div class="auth-error">{{ error }}</div>{% endif %} */}

                    {/* No POST handler exists in the Flask app — form is display-only. */}
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Full name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-input"
                                placeholder="Nitish Kumar"
                                required
                                autoFocus
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="nitish@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-input"
                                placeholder="Min. 8 characters"
                                required
                            />
                        </div>
                        <button type="submit" className="btn-submit">Create account</button>
                    </form>
                </div>

                <p className="auth-switch">
                    Already have an account?
                    <Link to="/login">Sign in</Link>
                </p>

            </div>
        </section>
    );
}
