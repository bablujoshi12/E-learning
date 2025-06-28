import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const freeCourses = [
  {
    title: "C Programming",
    description: "Learn the basics of C programming language, syntax, and problem-solving.",
    image: "⚡",
    duration: "8 hours",
    instructor: "Dr. Sarah Johnson",
    rating: 4.8,
    students: 12450,
    level: "Beginner",
    category: "Programming"
  },
  {
    title: "JavaScript",
    description: "Start your programming journey with JavaScript fundamentals and simple projects.",
    image: "🟡",
    duration: "10 hours",
    instructor: "Alex Rodriguez",
    rating: 4.7,
    students: 25680,
    level: "Beginner",
    category: "Web Development"
  },
  {
    title: "HTML",
    description: "Build the structure of web pages with HTML, the foundation of the web.",
    image: "🌐",
    duration: "4 hours",
    instructor: "David Kim",
    rating: 4.5,
    students: 32450,
    level: "Beginner",
    category: "Web Development"
  },
  {
    title: "RDBMS",
    description: "Learn the basics of Relational Database Management Systems and SQL.",
    image: "🗄️",
    duration: "9 hours",
    instructor: "Lisa Thompson",
    rating: 4.7,
    students: 15680,
    level: "Intermediate",
    category: "Database"
  },
  {
    title: "Git & GitHub",
    description: "Master version control with Git and collaborate using GitHub.",
    image: "📝",
    duration: "5 hours",
    instructor: "Tom Anderson",
    rating: 4.6,
    students: 28700,
    level: "Beginner",
    category: "Development Tools"
  }
];

const paidCourses = [
  {
    title: "C++ Programming",
    description: "Master object-oriented programming and advanced concepts in C++.",
    image: "⚙️",
    duration: "12 hours",
    instructor: "Prof. Michael Chen",
    rating: 4.9,
    students: 18920,
    level: "Intermediate",
    category: "Programming",
    price: "₹39.99",
    originalPrice: "₹69.99"
  },
  {
    title: "CSS",
    description: "Style your web pages beautifully using modern CSS techniques.",
    image: "🎨",
    duration: "6 hours",
    instructor: "Emma Wilson",
    rating: 4.6,
    students: 18750,
    level: "Beginner",
    category: "Web Development",
    price: "₹19.99",
    originalPrice: "₹34.99"
  },
  {
    title: "Data Structures",
    description: "Understand core data structures for efficient coding and interviews.",
    image: "📊",
    duration: "15 hours",
    instructor: "Dr. Robert Smith",
    rating: 4.9,
    students: 9870,
    level: "Advanced",
    category: "Computer Science",
    price: "₹44.99",
    originalPrice: "₹79.99"
  },
  {
    title: "Python Programming",
    description: "Learn Python from basics to advanced concepts with real-world projects.",
    image: "🐍",
    duration: "14 hours",
    instructor: "Dr. Emily Brown",
    rating: 4.8,
    students: 21500,
    level: "Beginner",
    category: "Programming",
    price: "₹34.99",
    originalPrice: "₹59.99"
  },
  {
    title: "React.js",
    description: "Build modern web applications with React.js and component-based architecture.",
    image: "⚛️",
    duration: "16 hours",
    instructor: "Mark Johnson",
    rating: 4.9,
    students: 18200,
    level: "Intermediate",
    category: "Web Development",
    price: "₹49.99",
    originalPrice: "₹89.99"
  },
  {
    title: "Node.js",
    description: "Learn server-side JavaScript development with Node.js and Express.",
    image: "🟢",
    duration: "12 hours",
    instructor: "Sarah Wilson",
    rating: 4.7,
    students: 15600,
    level: "Intermediate",
    category: "Web Development",
    price: "₹39.99",
    originalPrice: "₹69.99"
  },
  {
    title: "Machine Learning",
    description: "Introduction to machine learning algorithms and data science concepts.",
    image: "🤖",
    duration: "20 hours",
    instructor: "Dr. James Miller",
    rating: 4.8,
    students: 8900,
    level: "Advanced",
    category: "Data Science",
    price: "₹59.99",
    originalPrice: "₹99.99"
  }
];

function CoursesPage() {
  const navigate = useNavigate();

  return (
    <div className="courses-page">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="container">
          <div className="courses-hero-content">
            <h1 className="courses-hero-title">
              Explore Our <span className="gradient-text">Course Library</span>
            </h1>
            <p className="courses-hero-description">
              Choose from our comprehensive collection of programming courses. 
              Start with free courses or dive into premium content to accelerate your career.
            </p>
            <div className="courses-stats">
              <div className="course-stat">
                <span className="course-stat-number">{freeCourses.length + paidCourses.length}</span>
                <span className="course-stat-label">Total Courses</span>
              </div>
              <div className="course-stat">
                <span className="course-stat-number">{freeCourses.length}</span>
                <span className="course-stat-label">Free Courses</span>
              </div>
              <div className="course-stat">
                <span className="course-stat-number">{paidCourses.length}</span>
                <span className="course-stat-label">Premium Courses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Courses Section */}
      <section className="free-courses-section">
        <div className="container">
          <div className="section-header">
            <h2>🎓 Free Courses</h2>
            <p>Start your learning journey with these free courses</p>
          </div>
          <div className="courses-grid">
            {freeCourses.map((course, idx) => (
              <div className="course-card free" key={idx} onClick={() => navigate('/free-courses')}>
                <div className="course-header">
                  <div className="course-icon">{course.image}</div>
                  <div className="course-badge free">FREE</div>
                </div>
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-subtitle">{course.description}</p>
                  <div className="course-instructor">by {course.instructor}</div>
                  <div className="course-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating">{course.rating}</span>
                    <span className="students">({course.students.toLocaleString()})</span>
                  </div>
                  <div className="course-meta">
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                    <span>{course.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Courses Section */}
      <section className="premium-courses-section">
        <div className="container">
          <div className="section-header">
            <h2>⭐ Premium Courses</h2>
            <p>Advanced courses with comprehensive content and expert guidance</p>
          </div>
          <div className="courses-grid">
            {paidCourses.map((course, idx) => (
              <div className="course-card premium" key={idx} onClick={() => navigate('/paid-courses')}>
                <div className="course-header">
                  <div className="course-icon">{course.image}</div>
                  <div className="course-badge premium">PREMIUM</div>
                </div>
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-subtitle">{course.description}</p>
                  <div className="course-instructor">by {course.instructor}</div>
                  <div className="course-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating">{course.rating}</span>
                    <span className="students">({course.students.toLocaleString()})</span>
                  </div>
                  <div className="course-meta">
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                    <span>{course.category}</span>
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

      {/* Course Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Browse by Category</h2>
            <p>Find courses that match your interests and career goals</p>
          </div>
          <div className="categories-grid">
            <div className="category-card" onClick={() => navigate('/courses')}>
              <div className="category-icon">💻</div>
              <h3>Programming</h3>
              <p>Learn programming languages and concepts</p>
              <span className="category-count">4 courses</span>
            </div>
            <div className="category-card" onClick={() => navigate('/courses')}>
              <div className="category-icon">🌐</div>
              <h3>Web Development</h3>
              <p>Build modern web applications</p>
              <span className="category-count">5 courses</span>
            </div>
            <div className="category-card" onClick={() => navigate('/courses')}>
              <div className="category-icon">📊</div>
              <h3>Computer Science</h3>
              <p>Master algorithms and data structures</p>
              <span className="category-count">2 courses</span>
            </div>
            <div className="category-card" onClick={() => navigate('/courses')}>
              <div className="category-icon">🤖</div>
              <h3>Data Science</h3>
              <p>Explore AI and machine learning</p>
              <span className="category-count">1 course</span>
            </div>
            <div className="category-card" onClick={() => navigate('/courses')}>
              <div className="category-icon">🗄️</div>
              <h3>Database</h3>
              <p>Learn database management systems</p>
              <span className="category-count">1 course</span>
            </div>
            <div className="category-card" onClick={() => navigate('/courses')}>
              <div className="category-icon">🛠️</div>
              <h3>Development Tools</h3>
              <p>Master essential development tools</p>
              <span className="category-count">1 course</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="courses-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Learning?</h2>
            <p>Choose your path and begin your programming journey today</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => navigate('/free-courses')}>
                Start with Free Courses
              </button>
              <button className="btn-secondary" onClick={() => navigate('/paid-courses')}>
                Explore Premium Courses
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoursesPage;