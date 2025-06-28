import React from 'react';
import './FreeCourses.css';
import { useNavigate } from 'react-router-dom';

const dsCheats = Array.from({ length: 50 }, (_, i) => ({
  title: `Data Structures Cheat Sheet #${i + 1}`,
  code: `// DS Example ${i + 1}\n// Your DS code here`
}));

function CheatSheetDS() {
  const navigate = useNavigate();
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="free-courses-container">
      <button className="free-courses-back-btn" onClick={() => navigate(-1)}>&larr; Back</button>
      <h2 className="free-courses-title">Data Structures Cheat Sheets</h2>
      <ul className="free-courses-list">
        {dsCheats.map((item, idx) => (
          <li className="free-course-item" key={idx}>
            <strong>{item.title}</strong>
            <pre className="cheat-sheet-text" style={{marginBottom: 8}}>{item.code}</pre>
            <button className="cheat-sheet-copy" onClick={() => handleCopy(item.code)}>Copy</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheatSheetDS; 