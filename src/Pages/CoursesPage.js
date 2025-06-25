import './HomePage.css';

const courses = [
  {
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, and React from scratch. Build real-world projects.",
    image: "/courses.gif",
    duration: "8 weeks"
  },
  {
    title: "Python for Beginners",
    description: "Start coding in Python and explore data science basics.",
    image: "/progress.gif",
    duration: "6 weeks"
  },
  {
    title: "Data Structures & Algorithms",
    description: "Master DSA for interviews and competitive programming.",
    image: "/community.gif",
    duration: "10 weeks"
  }
];

function CoursesPage() {
  return (
    <div className="home-container">
      <div className="homepage-illustration" aria-hidden="true">
        <img src="/courses.gif" alt="Courses" style={{ height: '3.5rem' }} />
      </div>
      <h1>
        Our <span className="highlight">Courses</span>
      </h1>
      <div className="features-section">
        {courses.map((course, idx) => (
          <div className="feature-card" key={idx}>
            <span className="feature-icon">
              <img src={course.image} alt={course.title} style={{ height: '2.2rem' }} />
            </span>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div style={{ color: "#00b894", fontWeight: 500, marginTop: 8 }}>
              Duration: {course.duration}
            </div>
            <button className="cta-btn" style={{ marginTop: 12, fontSize: "1rem", padding: "0.5rem 1.2rem" }}>
              Enroll Now
            </button>
          </div>
        ))}
      </div>
      <footer className="homepage-footer">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/courses">Courses</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default CoursesPage;