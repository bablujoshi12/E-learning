import './HomePage.css';

function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              About <span className="gradient-text">E-Learning Platform</span>
            </h1>
            <p className="about-hero-description">
              We're on a mission to democratize education and make quality programming courses 
              accessible to everyone, everywhere. Join our community of learners and transform your career.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-number">500K+</span>
                <span className="about-stat-label">Students Worldwide</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">50+</span>
                <span className="about-stat-label">Expert Instructors</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">95%</span>
                <span className="about-stat-label">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At E-Learning Platform, we believe that education should be accessible, engaging, and effective. 
                Our mission is to empower individuals with the skills they need to succeed in the rapidly evolving 
                world of technology.
              </p>
              <p>
                We provide high-quality programming courses designed by industry experts, featuring hands-on projects, 
                real-world applications, and a supportive community of learners and mentors.
              </p>
            </div>
            <div className="mission-visual">
              <div className="mission-card">
                <div className="mission-icon">🎯</div>
                <h3>Quality Education</h3>
                <p>Expert-led courses with practical, real-world applications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>We constantly innovate our teaching methods and course content to stay ahead of industry trends.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>We foster a supportive learning community where students can connect, collaborate, and grow together.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Excellence</h3>
              <p>We maintain the highest standards of quality in our courses, instructors, and learning experience.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Accessibility</h3>
              <p>We make quality education accessible to everyone, regardless of their background or location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us?</h2>
            <p>Discover what makes our platform unique</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Wide Range of Courses</h3>
              <p>From beginner to advanced, explore courses in programming, web development, data science, and more.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Personalized Learning</h3>
              <p>Track your progress, earn certificates, and learn at your own pace with our adaptive learning system.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Supportive Community</h3>
              <p>Connect with fellow learners, ask questions, and grow together in our vibrant community.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals with years of experience in their respective fields.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Hands-on Projects</h3>
              <p>Apply your knowledge with real-world projects that build your portfolio and skills.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Career Support</h3>
              <p>Get guidance on career paths, job preparation, and industry insights from our experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The passionate people behind our platform</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>John Smith</h3>
              <p className="member-role">Founder & CEO</p>
              <p className="member-bio">Former Google engineer with 10+ years of experience in software development and education.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h3>Sarah Johnson</h3>
              <p className="member-role">Head of Content</p>
              <p className="member-bio">Curriculum expert with a passion for making complex topics accessible to learners.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🎓</div>
              <h3>Mike Chen</h3>
              <p className="member-role">Lead Instructor</p>
              <p className="member-bio">Full-stack developer and educator with expertise in modern web technologies.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🔬</div>
              <h3>Emily Brown</h3>
              <p className="member-role">Data Science Lead</p>
              <p className="member-bio">Machine learning expert with a PhD in Computer Science from Stanford.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                E-Learning Platform was born from a simple idea: everyone deserves access to quality programming education. 
                What started as a small collection of courses has grown into a comprehensive learning platform serving 
                hundreds of thousands of students worldwide.
              </p>
              <p>
                We've helped students land jobs at top tech companies, start their own businesses, and pursue their 
                passion for technology. Our success is measured by the success of our students.
              </p>
            </div>
            <div className="story-visual">
              <div className="story-card">
                <div className="story-icon">📈</div>
                <h3>Growth</h3>
                <p>From 100 to 500K+ students in just 3 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="about-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>Stay Connected!</h3>
            <p>Get updates on new courses, features, and learning tips</p>
            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
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

export default AboutPage;