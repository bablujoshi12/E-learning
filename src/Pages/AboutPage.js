import './HomePage.css';

function AboutPage() {
  return (
    <div className="home-container">
      <div className="homepage-illustration" aria-hidden="true">
        <img src="/community.gif" alt="About Us" style={{ height: '3.5rem' }} />
      </div>
      <h1>
        About <span className="highlight">E-Learning Platform</span>
      </h1>
      <p>
        <span className="highlight">E-Learning Platform</span> is dedicated to making quality education accessible to everyone.<br />
        Our mission is to empower learners with interactive courses, real-world projects, and a supportive community.<br />
        Whether you are a student, professional, or lifelong learner, our platform is designed to help you achieve your goals.
      </p>

      <div className="features-section">
        <div className="feature-card">
          <span className="feature-icon">
            <img src="/courses.gif" alt="Courses" style={{ height: '2.2rem' }} />
          </span>
          <h3>Wide Range of Courses</h3>
          <p>From technology to business, explore courses curated by industry experts.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">
            <img src="/progress.gif" alt="Progress" style={{ height: '2.2rem' }} />
          </span>
          <h3>Personalized Learning</h3>
          <p>Track your progress, earn certificates, and learn at your own pace.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">
            <img src="/community.gif" alt="Community" style={{ height: '2.2rem' }} />
          </span>
          <h3>Supportive Community</h3>
          <p>Connect with fellow learners, ask questions, and grow together.</p>
        </div>
      </div>

      <div className="newsletter-section">
        <h4>Stay Connected!</h4>
        <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
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

export default AboutPage;