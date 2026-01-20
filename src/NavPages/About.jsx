import React from "react";

function About() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4">
          <h2 className="mb-3">About Us</h2>
          <p>
            At <strong>TaskMaster – Your Smart To-Do List</strong>, we’re more
            than just a productivity app. Our mission is to help people take
            control of their time, reduce stress, and achieve their goals with
            clarity and confidence.
          </p>
          <p>
            TaskMaster was born out of frustration with traditional to-do lists.
            We wanted something elegant, intuitive, and adaptable. Today,
            TaskMaster is trusted by students, professionals, and teams
            worldwide.
          </p>
          <p>
            Our vision is to build a complete productivity ecosystem—integrating
            calendars, emails, and AI-powered suggestions—while staying true to
            our values of simplicity, trust, innovation, and community.
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <div className="card shadow-sm p-4">
            <h5 className="card-title">Our Values</h5>
            <ul className="list-unstyled">
              <li>🌱 Simplicity – Reduce complexity, focus on clarity.</li>
              <li>🔒 Trust – Your data is secure and private.</li>
              <li>🚀 Innovation – Constantly evolving with new features.</li>
              <li>👥 Community – Growing together with our users.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
