// Footer — extracted from base.html
// Replaces: <footer class="footer"> ... </footer>

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <span className="brand-icon">&#x25C8;</span>
                <span className="footer-name">Spendly</span>
                <p className="footer-copy">Track every rupee. Own your finances.</p>
            </div>
        </footer>
    );
}
