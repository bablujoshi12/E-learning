import './HomePage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const featuredCourses = [
  {
    id: 1,
    title: "C++ Programming",
    subtitle: "Master object-oriented programming and advanced concepts in C++.",
    instructor: "Prof. Michael Chen",
    rating: 4.9,
    students: "18,920",
    price: "₹39.99",
    originalPrice: "₹69.99",
    image: "⚙️",
    badge: "Popular",
    hours: "12",
    lectures: "125",
    level: "Intermediate"
  },
  {
    id: 2,
    title: "Python Programming",
    subtitle: "Learn Python from basics to advanced concepts with real-world projects.",
    instructor: "Dr. Emily Brown",
    rating: 4.8,
    students: "21,500",
    price: "₹34.99",
    originalPrice: "₹59.99",
    image: "🐍",
    badge: "Bestseller",
    hours: "14",
    lectures: "156",
    level: "Beginner"
  },
  {
    id: 3,
    title: "React.js",
    subtitle: "Build modern web applications with React.js and component-based architecture.",
    instructor: "Mark Johnson",
    rating: 4.9,
    students: "18,200",
    price: "₹49.99",
    originalPrice: "₹89.99",
    image: "⚛️",
    badge: "Updated",
    hours: "16",
    lectures: "178",
    level: "Intermediate"
  },
  {
    id: 4,
    title: "Data Structures",
    subtitle: "Understand core data structures for efficient coding and interviews.",
    instructor: "Dr. Robert Smith",
    rating: 4.9,
    students: "9,870",
    price: "₹44.99",
    originalPrice: "₹79.99",
    image: "📊",
    badge: "Advanced",
    hours: "15",
    lectures: "145",
    level: "Advanced"
  },
  {
    id: 5,
    title: "Machine Learning",
    subtitle: "Introduction to machine learning algorithms and data science concepts.",
    instructor: "Dr. James Miller",
    rating: 4.8,
    students: "8,900",
    price: "₹59.99",
    originalPrice: "₹99.99",
    image: "🤖",
    badge: "Premium",
    hours: "20",
    lectures: "234",
    level: "Advanced"
  },
  {
    id: 6,
    title: "Node.js",
    subtitle: "Learn server-side JavaScript development with Node.js and Express.",
    instructor: "Sarah Wilson",
    rating: 4.7,
    students: "15,600",
    price: "₹39.99",
    originalPrice: "₹69.99",
    image: "🟢",
    badge: "Popular",
    hours: "12",
    lectures: "112",
    level: "Intermediate"
  }
];

const freeCourses = [
  {
    id: 1,
    title: "C Programming",
    instructor: "Dr. Sarah Johnson",
    students: "12,450",
    image: "⚡",
    hours: "8",
    lectures: "45"
  },
  {
    id: 2,
    title: "JavaScript",
    instructor: "Alex Rodriguez",
    students: "25,680",
    image: "🟡",
    hours: "10",
    lectures: "78"
  },
  {
    id: 3,
    title: "HTML",
    instructor: "David Kim",
    students: "32,450",
    image: "🌐",
    hours: "4",
    lectures: "52"
  }
];

const testimonials = [
  {
    photo: '👩‍🎓',
    name: 'Anjali Verma',
    role: 'Software Engineer at Google',
    feedback: 'The Full Stack Development course completely transformed my career. I went from knowing nothing to landing a job at a top tech company!'
  },
  {
    photo: '👨‍💻',
    name: 'Rohit Sharma',
    role: 'Full Stack Developer at Amazon',
    feedback: 'The hands-on projects and real-world examples made all the difference. I learned more in 6 months than I did in 2 years of college.'
  },
  {
    photo: '👩‍💼',
    name: 'Priya Singh',
    role: 'Frontend Developer at Microsoft',
    feedback: 'The course structure is perfect for beginners. The instructors explain complex concepts in simple terms. Highly recommended!'
  }
];

function HomePage() {
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const navigate = useNavigate();

  const handleNewsletter = e => {
    e.preventDefault();
    setNewsletterSuccess(true);
    setTimeout(() => setNewsletterSuccess(false), 2500);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Ready to reimagine your career as a <span className="gradient-text">Full Stack Developer</span>?
            </h1>
            <p className="hero-description">
              Master the most in-demand programming skills and build real-world projects. 
              Join 500K+ developers who have transformed their careers with our expert-led courses.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">500K+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Courses</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate('/courses')}>
                Explore Courses
              </button>
              <button className="btn-secondary" onClick={() => navigate('/free-courses')}>
                Start Learning Free
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <div className="floating-card card-1">
                <span className="card-icon">⚛️</span>
                <span className="card-text">React.js</span>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon">🐍</span>
                <span className="card-text">Python</span>
              </div>
              <div className="floating-card card-3">
                <span className="card-icon">⚡</span>
                <span className="card-text">C++</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses">
        <div className="container">
          <div className="section-header">
            <h2>Featured Courses</h2>
            <p>Most popular courses chosen by our students</p>
          </div>
          <div className="courses-grid">
            {featuredCourses.map((course) => (
              <div key={course.id} className="course-card" onClick={() => navigate('/paid-courses')}>
                <div className="course-header">
                  <div className="course-icon">{course.image}</div>
                  <div className="course-badge">{course.badge}</div>
                </div>
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-subtitle">{course.subtitle}</p>
                  <div className="course-instructor">by {course.instructor}</div>
                  <div className="course-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating">{course.rating}</span>
                    <span className="students">({course.students})</span>
                  </div>
                  <div className="course-meta">
                    <span>{course.hours}h</span>
                    <span>{course.lectures} lectures</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="course-price">
                    <span className="price">{course.price}</span>
                    <span className="original-price">{course.originalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Courses */}
      <section className="free-courses">
        <div className="container">
          <div className="section-header">
            <h2>Free Courses to Get Started</h2>
            <p>Start your learning journey with these free courses</p>
          </div>
          <div className="courses-grid">
            {freeCourses.map((course) => (
              <div key={course.id} className="course-card free" onClick={() => navigate('/free-courses')}>
                <div className="course-header">
                  <div className="course-icon">{course.image}</div>
                  <div className="course-badge free">FREE</div>
                </div>
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-instructor">by {course.instructor}</div>
                  <div className="course-meta">
                    <span>{course.hours}h</span>
                    <span>{course.lectures} lectures</span>
                  </div>
                  <div className="course-students">{course.students} students enrolled</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">500K+</div>
              <div className="stat-label">Students Enrolled</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👨‍🏫</div>
              <div className="stat-number">200+</div>
              <div className="stat-label">Expert Instructors</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-number">1000+</div>
              <div className="stat-label">Courses Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Platform?</h2>
            <p>Everything you need to succeed in your programming journey</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Expert-Led Courses</h3>
              <p>Learn from industry professionals with hands-on projects and real-world examples.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Track Progress</h3>
              <p>Monitor your learning, earn certificates, and achieve your goals step by step.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Active Community</h3>
              <p>Join discussions, ask questions, and connect with fellow learners worldwide.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Free & Paid Options</h3>
              <p>Choose from free and premium courses to suit your learning needs and budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Learners Say</h2>
            <p>Success stories from our community</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.feedback}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.photo}</div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>Get updates on new courses!</h3>
            <form className="newsletter-form" onSubmit={handleNewsletter}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
            {newsletterSuccess && <div className="success-message">Thank you for subscribing!</div>}
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

export default HomePage;