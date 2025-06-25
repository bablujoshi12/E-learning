import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="homepage-illustration" aria-hidden="true">
        <img src="/courses.gif" alt="Learning" style={{ height: '3.5rem' }} />
      </div>
      <h1>
        Welcome to <span className="highlight">E-Learning Platform</span>
      </h1>
      <p>
        <span className="highlight">Unlock your potential</span> with our interactive platform!<br />
        Access a <span className="highlight">wide range of courses</span>, track your progress, and enhance your skills from anywhere, anytime.<br />
        <span className="highlight">Sign up</span> or <span className="highlight">log in</span> to get started on your learning journey.
      </p>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-card">
          <span className="stat-number">5,000+</span>
          <span className="stat-label">Learners</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">120+</span>
          <span className="stat-label">Courses</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">1,800+</span>
          <span className="stat-label">Certificates Issued</span>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <span className="feature-icon">
            <img src="/courses.gif" alt="Courses" style={{ height: '2.2rem' }} />
          </span>
          <h3>Expert-Led Courses</h3>
          <p>Learn from industry professionals with hands-on projects and real-world examples.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">
            <img src="/progress.gif" alt="Progress" style={{ height: '2.2rem' }} />
          </span>
          <h3>Track Progress</h3>
          <p>Monitor your learning, earn certificates, and achieve your goals step by step.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">
            <img src="/community.gif" alt="Community" style={{ height: '2.2rem' }} />
          </span>
          <h3>Active Community</h3>
          <p>Join discussions, ask questions, and connect with fellow learners worldwide.</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h3 className="testimonials-title">What Our Learners Say</h3>
        <div className="testimonials-cards">
          <div className="testimonial-card">
            <p>"This platform made learning so easy and fun! Highly recommended."</p>
            <span className="testimonial-user">- Priya S.</span>
          </div>
          <div className="testimonial-card">
            <p>"Great instructors and a very supportive community."</p>
            <span className="testimonial-user">- Rahul K.</span>
          </div>
          <div className="testimonial-card">
            <p>"I loved tracking my progress and earning certificates!"</p>
            <span className="testimonial-user">- Ayesha M.</span>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="newsletter-section">
        <h4>Get updates on new courses!</h4>
        <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* CTA */}
      <a href="/login" className="cta-btn">Get Started</a>
      
      {/* Footer with social media details and quick links */}
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

export default HomePage;