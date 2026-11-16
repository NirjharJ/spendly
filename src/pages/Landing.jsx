// Landing page — transcribed from templates/landing.html
// Flask route: @app.route("/") → render_template("landing.html")
// This is the ONLY route that maps to a real Flask endpoint.

import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <>
            {/* Hero section */}
            <section className="hero">
                <div className="hero-inner">
                    <span className="hero-badge">Personal Finance Tracker</span>
                    <h1 className="hero-title">
                        Know where your<br />
                        <em>money goes</em>
                    </h1>
                    <p className="hero-subtitle">
                        Log expenses, understand your spending patterns,
                        and take control of your financial life —
                        one transaction at a time.
                    </p>
                    <div className="hero-actions">
                        <Link to="/register" className="btn-primary">Start tracking free</Link>
                        <Link to="/login" className="btn-ghost">Sign in</Link>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="mock-card">
                        <div className="mock-card-header">
                            <span className="mock-label">March 2026</span>
                            <span className="mock-total">&#8377;12,450</span>
                        </div>
                        <div className="mock-bars">
                            <div className="mock-bar-row">
                                <span className="mock-cat">Bills</span>
                                <div className="mock-bar-track">
                                    <div className="mock-bar" style={{ width: '72%' }} />
                                </div>
                                <span className="mock-amt">&#8377;4,500</span>
                            </div>
                            <div className="mock-bar-row">
                                <span className="mock-cat">Food</span>
                                <div className="mock-bar-track">
                                    <div className="mock-bar mock-bar-2" style={{ width: '52%' }} />
                                </div>
                                <span className="mock-amt">&#8377;3,200</span>
                            </div>
                            <div className="mock-bar-row">
                                <span className="mock-cat">Health</span>
                                <div className="mock-bar-track">
                                    <div className="mock-bar mock-bar-3" style={{ width: '33%' }} />
                                </div>
                                <span className="mock-amt">&#8377;2,050</span>
                            </div>
                            <div className="mock-bar-row">
                                <span className="mock-cat">Transport</span>
                                <div className="mock-bar-track">
                                    <div className="mock-bar mock-bar-4" style={{ width: '28%' }} />
                                </div>
                                <span className="mock-amt">&#8377;1,800</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features section */}
            <section className="features">
                <div className="features-inner">
                    <div className="feature-card">
                        <span className="feature-icon">&#8377;</span>
                        <h3 className="feature-title">Log expenses instantly</h3>
                        <p className="feature-body">Add any expense in seconds. Category, amount, date, description — all in one simple form.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">&#x25CE;</span>
                        <h3 className="feature-title">Understand your patterns</h3>
                        <p className="feature-body">See exactly where your money goes with category breakdowns and monthly summaries.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">&#x25F7;</span>
                        <h3 className="feature-title">Filter by time period</h3>
                        <p className="feature-body">View your spending for any date range — last week, last month, or a custom period.</p>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="cta-section">
                <div className="cta-inner">
                    <h2 className="cta-title">Ready to take control?</h2>
                    <p className="cta-body">Join thousands of people who track their expenses with Spendly.</p>
                    <Link to="/register" className="btn-primary">Create free account</Link>
                </div>
            </section>
        </>
    );
}
