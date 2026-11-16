// App.jsx — React Router replaces Flask URL routing
// Maps only the routes that are actually implemented in the Python Flask app.
//
// Flask routes that ARE real:
//   @app.route("/")            → Landing page (render_template("landing.html"))
//   @app.route("/register")    → Register page (render_template("register.html"))
//   @app.route("/login")       → Login page (render_template("login.html"))
//
// Flask routes that are STUBS (return placeholder text, NOT implemented):
//   @app.route("/logout")                      → "Logout — coming in Step 3"
//   @app.route("/profile")                     → "Profile page — coming in Step 4"
//   @app.route("/expenses/add")                → "Add expense — coming in Step 7"
//   @app.route("/expenses/<int:id>/edit")      → "Edit expense — coming in Step 8"
//   @app.route("/expenses/<int:id>/delete")    → "Delete expense — coming in Step 9"
//
// Stub routes are NOT mapped below — they remain unimplemented.

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {/* Routes implemented in the Flask app */}
                    <Route path="/" element={<Landing />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />

                    {/* Stub routes from Flask (return placeholder text) — NOT mapped: */}
                    {/* @app.route("/logout")                      → "Logout — coming in Step 3" */}
                    {/* @app.route("/profile")                     → "Profile page — coming in Step 4" */}
                    {/* @app.route("/expenses/add")                → "Add expense — coming in Step 7" */}
                    {/* @app.route("/expenses/<int:id>/edit")      → "Edit expense — coming in Step 8" */}
                    {/* @app.route("/expenses/<int:id>/delete")    → "Delete expense — coming in Step 9" */}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
