export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="contact-stage">
        <div className="contact-halo" aria-hidden="true" />
        <div className="contact-console">
          <h2>Contact Information</h2>
          <div className="footer-grid">
            <div className="contact-card primary-card">
              <p className="footer-label">Email:</p>
              <a href="mailto:info@smartupgradeit.com">info@smartupgradeit.com</a>
            </div>
            <div className="contact-card secondary-card">
              <p>New York, NY</p>
              <p>Consultations available by request</p>
            </div>
          </div>
        </div>
        <div className="contact-shadow" aria-hidden="true" />
      </div>
      <p className="copyright">&copy; 2023-2026 Smart Upgrade IT | All Rights Reserved</p>
    </footer>
  );
}
