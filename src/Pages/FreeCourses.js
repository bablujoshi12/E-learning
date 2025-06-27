import React from 'react';
import './FreeCourses.css';

function FreeCourses() {
  return (
    <div className="free-courses-container">
      <h2 className="free-courses-title">Free Courses</h2>
      <ul className="free-courses-list">
        <li className="free-course-item">
          <strong>Introduction to HTML & CSS</strong>
          <div className="free-course-desc">
            Learn the basics of web design and structure using HTML and CSS. Perfect for beginners!
          </div>
        </li>
        <li className="free-course-item">
          <strong>JavaScript Basics</strong>
          <div className="free-course-desc">
            Start your programming journey with JavaScript fundamentals and simple projects.
          </div>
        </li>
        <li className="free-course-item">
          <strong>Git & GitHub Essentials</strong>
          <div className="free-course-desc">
            Understand version control, repositories, and collaboration using Git and GitHub.
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FreeCourses;