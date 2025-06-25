import React from 'react';
import './App.css';

function NewComponent() {
  return (
    <div>
      <header className="header">Welcome To My Profile</header>
      <main>
        <section className="section">
          <p><p>
I'm an Information Technology student with a passion for coding
</p>
</p>
        </section>
        <section className="section">
          <img src="/image.jpg" alt="profile" height="180px" />
        </section>
        <section className="section">
          <nav>
            <ul className="nav-list">
              <li><a href="home.html">Home</a></li>
              <li><a href="education.html" target="_blank">Education</a></li>
              <li><a href="experience.html" target="_blank">Experience</a></li>
              <li><a href="project.html" target="_blank">Project</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </section>
        <section className="section">
          <h2>About Me</h2>
         <p>
  Hello! I'm Bablu Joshi, currently pursuing my 4th semester in Information Technology at Government Polytechnic Lohaghat. I have a strong passion for web development, design, and building creative digital solutions. I'm always curious to learn new technologies and improve my skills through hands-on projects. My core strengths include HTML, CSS, C, and C++, and I’m currently exploring React and JavaScript to deepen my development journey. I believe in consistency, creativity, and self-learning. In the future, I aim to become a full-stack developer and contribute to meaningful tech innovations that solve real-world problems.
</p>

        </section>
        <section className="section">
          <h2>Skills</h2>
          <ul>
            <li><strong>Programming:</strong> C, C++</li>
            <li><strong>Development:</strong> HTML, CSS</li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <nav>
          <ul className="nav-list">
            <li><a href="home.html">Home</a></li>
            <li><a href="https://ehindistudy.com/">Visit eHindiStudy</a></li>
            <li><a href="https://www.geeksforgeeks.org/">Visit GeeksforGeeks</a></li>
            <li><a href="https://www.tpointtech.com/">Visit JavaTpoint</a></li>
          </ul>
        </nav>
        <br />
        &copy; 2025 My Profile | Designed by <b>Bablu Joshi</b>
      </footer>
    </div>
  );
}

export default NewComponent;
