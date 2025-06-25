import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="container admin-dashboard">
      <h2>Welcome, Admin!</h2>
      <p>Manage your platform efficiently using the actions below:</p>
      <div className="admin-actions">
        <div className="admin-card">
          <span className="admin-icon">📚</span>
          <h3>Manage Courses</h3>
          <p>Add, edit, or remove courses.</p>
          <button className="admin-btn">Go to Courses</button>
        </div>
        <div className="admin-card">
          <span className="admin-icon">👥</span>
          <h3>Manage Users</h3>
          <p>View, edit, or remove users.</p>
          <button className="admin-btn">Go to Users</button>
        </div>
        <div className="admin-card">
          <span className="admin-icon">📊</span>
          <h3>View Reports</h3>
          <p>See platform analytics and reports.</p>
          <button className="admin-btn">View Reports</button>
        </div>
        <div className="admin-card">
          <span className="admin-icon">🎓</span>
          <h3>Certificates</h3>
          <p>Manage and issue certificates.</p>
          <button className="admin-btn">Certificates</button>
        </div>
        <div className="admin-card">
          <span className="admin-icon">⚙️</span>
          <h3>Settings</h3>
          <p>Platform configuration and preferences.</p>
          <button className="admin-btn">Settings</button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;