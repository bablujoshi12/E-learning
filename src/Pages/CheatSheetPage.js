import React from 'react';
import { useParams } from 'react-router-dom';
import './FreeCourses.css';

const cheatSheetsData = {
  c: Array.from({ length: 50 }, (_, i) => ({
    title: `C Cheat Sheet #${i + 1}`,
    code: `// C Example ${i + 1}\n#include <stdio.h>\nint main() {\n  // Your code here\n  return 0;\n}`
  })),
  cpp: Array.from({ length: 50 }, (_, i) => ({
    title: `C++ Cheat Sheet #${i + 1}`,
    code: `// C++ Example ${i + 1}\n#include <iostream>\nint main() {\n  // Your code here\n  return 0;\n}`
  })),
  javascript: Array.from({ length: 50 }, (_, i) => ({
    title: `JavaScript Cheat Sheet #${i + 1}`,
    code: `// JavaScript Example ${i + 1}\nconsole.log('Hello, World!');`
  })),
  css: Array.from({ length: 50 }, (_, i) => ({
    title: `CSS Cheat Sheet #${i + 1}`,
    code: `/* CSS Example ${i + 1} */\n.selector {\n  /* Your styles here */\n}`
  })),
  html: Array.from({ length: 50 }, (_, i) => ({
    title: `HTML Cheat Sheet #${i + 1}`,
    code: `<!-- HTML Example ${i + 1} -->\n<div>Hello, World!</div>`
  })),
  ds: Array.from({ length: 50 }, (_, i) => ({
    title: `Data Structures Cheat Sheet #${i + 1}`,
    code: `// DS Example ${i + 1}\n// Your DS code here`
  })),
  rdbms: Array.from({ length: 50 }, (_, i) => ({
    title: `RDBMS Cheat Sheet #${i + 1}`,
    code: `-- RDBMS Example ${i + 1}\nSELECT * FROM tablename;`
  })),
};

const courseNames = {
  c: 'C Programming',
  cpp: 'C++ Programming',
  javascript: 'JavaScript',
  css: 'CSS',
  html: 'HTML',
  ds: 'Data Structures',
  rdbms: 'RDBMS',
};

function CheatSheetPage() {
  const { courseId } = useParams();
  const cheats = cheatSheetsData[courseId] || [];
  const courseName = courseNames[courseId] || 'Course';

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="free-courses-container">
      <h2 className="free-courses-title">{courseName} Cheat Sheets</h2>
      <ul className="free-courses-list">
        {cheats.map((item, idx) => (
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

export default CheatSheetPage; 