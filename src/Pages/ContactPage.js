import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="contact-hero-description">
              Have questions, feedback, or need support? We're here to help! 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="contact-stats">
              <div className="contact-stat">
                <span className="contact-stat-number">24/7</span>
                <span className="contact-stat-label">Support Available</span>
              </div>
              <div className="contact-stat">
                <span className="contact-stat-number">2hr</span>
                <span className="contact-stat-label">Average Response</span>
              </div>
              <div className="contact-stat">
                <span className="contact-stat-number">98%</span>
                <span className="contact-stat-label">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods">
        <div className="container">
          <div className="section-header">
            <h2>Multiple Ways to Reach Us</h2>
            <p>Choose the method that works best for you</p>
          </div>
          <div className="contact-methods-grid">
            <div className="contact-method-card">
              <div className="method-icon">📧</div>
              <h3>Email Support</h3>
              <p>Send us an email and we'll respond within 2 hours</p>
              <a href="mailto:bjbablu@gmail.com" className="method-link">
                bjbablu@gmail.com
              </a>
            </div>
            <div className="contact-method-card">
              <div className="method-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Chat with our support team in real-time</p>
              <button className="method-link">Start Chat</button>
            </div>
            <div className="contact-method-card">
              <div className="method-icon">📞</div>
              <h3>Phone Support</h3>
              <p>Call us for immediate assistance</p>
              <a href="tel:+1234567890" className="method-link">
                +1 (234) 567-890
              </a>
            </div>
            <div className="contact-method-card">
              <div className="method-icon">📋</div>
              <h3>Help Center</h3>
              <p>Browse our comprehensive knowledge base</p>
              <a href="/help" className="method-link">Visit Help Center</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-content">
            <div className="form-info">
              <h2>Send Us a Message</h2>
              <p>
                Fill out the form below and we'll get back to you as soon as possible. 
                We typically respond within 2 hours during business hours.
              </p>
              <div className="form-features">
                <div className="form-feature">
                  <span className="feature-icon">⚡</span>
                  <span>Quick Response</span>
                </div>
                <div className="form-feature">
                  <span className="feature-icon">🔒</span>
                  <span>Secure & Private</span>
                </div>
                <div className="form-feature">
                  <span className="feature-icon">📱</span>
                  <span>Mobile Friendly</span>
                </div>
              </div>
            </div>
            <div className="form-container">
              <form className="contact-form" onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payment</option>
                    <option value="course">Course Related</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message"
                    placeholder="Tell us how we can help you..." 
                    rows={6} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    I agree to the <a href="/privacy" className="link">Privacy Policy</a> and <a href="/terms" className="link">Terms of Service</a>
                  </label>
                </div>
                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <span className="btn-icon">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I reset my password?</h3>
              <p>Click on the "Forgot Password" link on the login page and follow the instructions sent to your email.</p>
            </div>
            <div className="faq-item">
              <h3>Can I get a refund for a course?</h3>
              <p>Yes, we offer a 30-day money-back guarantee for all paid courses. Contact our support team for assistance.</p>
            </div>
            <div className="faq-item">
              <h3>How long do I have access to courses?</h3>
              <p>You have lifetime access to all courses you purchase, including future updates and new content.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer certificates?</h3>
              <p>Yes, you'll receive a certificate of completion for each course you finish with a passing grade.</p>
            </div>
            <div className="faq-item">
              <h3>Can I download course materials?</h3>
              <p>Yes, most course materials including videos, PDFs, and code files are available for download.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a mobile app available?</h3>
              <p>Our platform is fully responsive and works great on mobile devices. A native app is coming soon!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="office-hours">
        <div className="container">
          <div className="office-hours-content">
            <div className="hours-info">
              <h2>Office Hours</h2>
              <p>Our support team is available to help you during these hours:</p>
              <div className="hours-grid">
                <div className="hours-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>
              <p className="emergency-note">
                <strong>Emergency Support:</strong> For urgent technical issues, email us anytime and we'll respond as soon as possible.
              </p>
            </div>
            <div className="hours-visual">
              <div className="hours-card">
                <div className="hours-icon">🕒</div>
                <h3>Quick Response</h3>
                <p>We typically respond within 2 hours during business hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/courses">Courses</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.png" alt="LinkedIn" /> LinkedIn
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <img src="/github.png" alt="GitHub" /> GitHub
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <img src="/twitter.png" alt="Twitter" /> Twitter
              </a>
            </div>
            <div className="footer-bottom">
              <a href="#top" className="back-to-top">Back to Top ↑</a>
              <div className="copyright">
                &copy; {new Date().getFullYear()} E-Learning Platform
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;