import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Certificates.css';

function Certificates({ user }) {
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (user) {
      const userCertificates = JSON.parse(localStorage.getItem(`certificates_${user.email}`) || '[]');
      setCertificates(userCertificates);
    }
  }, [user]);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  const printCertificate = () => {
    window.print();
  };

  if (!user) {
    return (
      <div className="certificates-container">
        <div className="access-denied">
          <h2>Access Denied</h2>
          <p>Please <button onClick={() => navigate('/login')}>login</button> to view your certificates.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="certificates-container">
      <div className="certificates-header">
        <button className="back-btn" onClick={() => navigate(-1)}>&larr; Back</button>
        <h1>My Certificates</h1>
        <p>Your earned certificates from completed courses</p>
      </div>

      {certificates.length === 0 ? (
        <div className="no-certificates">
          <div className="no-certificates-icon">🎓</div>
          <h3>No Certificates Yet</h3>
          <p>Complete courses to earn your certificates!</p>
          <button className="btn btn-primary" onClick={() => navigate('/courses')}>
            Browse Courses
          </button>
        </div>
      ) : (
        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <div 
              key={index} 
              className="certificate-card"
              onClick={() => handleCertificateClick(certificate)}
            >
              <div className="certificate-icon">🎓</div>
              <div className="certificate-info">
                <h3>{certificate.courseName}</h3>
                <p>Completed on {certificate.completionDate}</p>
                <p>Instructor: {certificate.instructor}</p>
                <span className="certificate-id">ID: {certificate.certificateId}</span>
              </div>
              <div className="certificate-actions">
                <button className="btn btn-secondary">View</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedCertificate && (
        <div className="certificate-modal">
          <div className="certificate-content">
            <div className="certificate-header">
              <h2>🎓 Certificate of Completion</h2>
              <button className="close-btn" onClick={closeCertificate}>×</button>
            </div>
            <div className="certificate-body">
              <div className="certificate-info">
                <p><strong>This is to certify that</strong></p>
                <h3>{selectedCertificate.studentName}</h3>
                <p>has successfully completed the course</p>
                <h4>{selectedCertificate.courseName}</h4>
                <p>under the instruction of <strong>{selectedCertificate.instructor}</strong></p>
                <p>on <strong>{selectedCertificate.completionDate}</strong></p>
                <div className="certificate-id">
                  Certificate ID: {selectedCertificate.certificateId}
                </div>
              </div>
              <div className="certificate-actions">
                <button className="btn btn-primary" onClick={printCertificate}>
                  Print Certificate
                </button>
                <button className="btn btn-secondary" onClick={closeCertificate}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates; 