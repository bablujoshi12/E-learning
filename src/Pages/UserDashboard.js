import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';

function UserDashboard({ user, purchasedCourses, logout }) {
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  // Get user certificates
  const userCertificates = JSON.parse(localStorage.getItem(`certificates_${user.email}`) || '[]');

  return (
    <div className="container user-dashboard">
      <div className="dashboard-header">
        <div className="user-profile">
          <div className="user-avatar">
            {user.email ? user.email.charAt(0).toUpperCase() : 'U'}
          </div>
          <div className="user-info">
            <h2>Welcome back, {user.email ? user.email.split('@')[0] : 'User'}!</h2>
            <p className="user-email">{user.email}</p>
            <div className="user-stats">
              <span className="stat">
                <strong>{purchasedCourses.length}</strong> Courses Purchased
              </span>
              <span className="stat">
                <strong>{userCertificates.length}</strong> Certificates Earned
              </span>
              <span className="stat">
                <strong>{purchasedCourses.length * 10}</strong> Hours of Content
              </span>
            </div>
          </div>
        </div>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>

      <div className="dashboard-content">
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <button className="action-btn primary" onClick={() => navigate('/paid-courses')}>
              Browse Courses
            </button>
            <button className="action-btn secondary" onClick={() => navigate('/my-courses')}>
              My Learning
            </button>
            <button className="action-btn secondary" onClick={() => navigate('/certificates')}>
              My Certificates
            </button>
            <button className="action-btn secondary" onClick={() => navigate('/free-courses')}>
              Free Courses
            </button>
          </div>
        </div>

        <div className="recent-courses">
          <h3>Continue Learning</h3>
          {purchasedCourses.length > 0 ? (
            <div className="course-grid">
              {purchasedCourses.slice(0, 3).map((course, index) => (
                <div key={course.id} className="course-card">
                  <div className="course-thumbnail">
                    <span className="course-icon">{course.icon}</span>
                  </div>
                  <div className="course-info">
                    <h4>{course.title}</h4>
                    <p>{course.desc}</p>
                    <div className="course-progress">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${Math.min(100, (index + 1) * 30)}%` }}></div>
                      </div>
                      <span className="progress-text">{Math.min(100, (index + 1) * 30)}% Complete</span>
                    </div>
                    <button 
                      className="continue-btn"
                      onClick={() => navigate(`/course/${course.id}`)}
                    >
                      Continue Learning
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📚</div>
              <h4>No courses purchased yet</h4>
              <p>Start your learning journey by exploring our courses</p>
              <button className="browse-btn" onClick={() => navigate('/paid-courses')}>
                Browse Courses
              </button>
            </div>
          )}
        </div>

        {userCertificates.length > 0 && (
          <div className="recent-certificates">
            <h3>Recent Certificates</h3>
            <div className="certificates-grid">
              {userCertificates.slice(0, 3).map((certificate, index) => (
                <div key={index} className="certificate-card" onClick={() => navigate('/certificates')}>
                  <div className="certificate-icon">🎓</div>
                  <div className="certificate-info">
                    <h4>{certificate.courseName}</h4>
                    <p>Completed on {certificate.completionDate}</p>
                    <span className="certificate-id">ID: {certificate.certificateId}</span>
                  </div>
                </div>
              ))}
            </div>
            {userCertificates.length > 3 && (
              <button className="view-all-btn" onClick={() => navigate('/certificates')}>
                View All Certificates ({userCertificates.length})
              </button>
            )}
          </div>
        )}

        <div className="course-options">
          <h3>Course Categories</h3>
          <div className="category-cards">
            <div className="category-card paid">
              <div className="category-icon">💎</div>
              <h4>Premium Courses</h4>
              <p>Access premium content, expert instructors, and earn certificates upon completion.</p>
              <button className="category-btn buy" onClick={() => navigate('/paid-courses')}>
                Explore Premium
              </button>
            </div>
            <div className="category-card free">
              <div className="category-icon">🎁</div>
              <h4>Free Courses</h4>
              <p>Learn from a variety of free courses and boost your skills.</p>
              <button className="category-btn" onClick={() => navigate('/free-courses')}>
                Explore Free
              </button>
            </div>
            <div className="category-card certificates">
              <div className="category-icon">🏆</div>
              <h4>Certificates</h4>
              <p>Track your progress and earn certificates for completed courses.</p>
              <button className="category-btn" onClick={() => navigate('/certificates')}>
                View Certificates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;