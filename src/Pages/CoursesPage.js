import './HomePage.css';

const courses = [
  {
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, and React from scratch. Build real-world projects.",
    image: "https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif", // web dev gif
    duration: "8 weeks"
  },
  {
    title: "C Programming Essentials",
    description: "Start coding in C and understand the basics of programming and memory management.",
    image: "https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif", // C language gif
    duration: "5 weeks"
  },
  {
    title: "C++ Masterclass",
    description: "Learn object-oriented programming and advanced concepts with C++.",
    image: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif", // C++ gif
    duration: "7 weeks"
  },
  {
    title: "Data Structures & Algorithms",
    description: "Master DSA for interviews and competitive programming.",
    image: "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif", // DSA gif
    duration: "10 weeks"
  }
];

function CoursesPage() {
  return (
    <div className="home-container">
      <div className="homepage-illustration" aria-hidden="true">
        <img src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" alt="Courses" style={{ height: '3.5rem' }} />
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