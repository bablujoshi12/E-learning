import './UserDashboard.css';
function UserDashboard() {
  return (
    <div className="container user-dashboard">
      <h2>Welcome, User!</h2>
      <p>Select a course type to start learning:</p>
      <div className="course-options">
        <div className="course-card paid">
          <h3>Paid Courses</h3>
          <p>Access premium content, expert instructors, and certificates.</p>
          <button className="course-btn">Explore Paid Courses</button>
        </div>
        <div className="course-card free">
          <h3>Free Courses</h3>
          <p>Learn from a variety of free courses and boost your skills.</p>
          <button className="course-btn">Explore Free Courses</button>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;