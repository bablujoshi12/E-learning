import './ContactPage.css';

function ContactPage() {
  return (
    <div className="home-container">
      <div className="homepage-illustration" aria-hidden="true">
        <img src="/community.gif" alt="Contact Us" style={{ height: '3.5rem' }} />
      </div>
      <h1>
        Contact <span className="highlight">E-Learning Platform</span>
      </h1>
      <p>
        Have questions, feedback, or need support?<br />
        Fill out the form below or reach us directly at{" "}
        <a href="mailto:bjbablu@gmail.com" style={{ color: "#1e90ff" }}>bjbablu@gmail.com</a>
      </p>

      <div className="contact-form-section">
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={4} required />
          <button type="submit">Send Message</button>
        </form>
      </div>

      <footer className="homepage-footer">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/courses">Courses</a>
          <a href="/contact">Contact</a>
        </div>
        <div>Connect with me:</div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" style={{ height: '1.3rem', verticalAlign: 'middle' }} /> LinkedIn
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" style={{ height: '1.3rem', verticalAlign: 'middle' }} /> GitHub
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.png" alt="Twitter" style={{ height: '1.3rem', verticalAlign: 'middle' }} /> Twitter
          </a>
        </div>
        <div style={{ fontSize: '0.95rem', marginTop: 8, color: '#888' }}>
          &copy; {new Date().getFullYear()} E-Learning Platform
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;