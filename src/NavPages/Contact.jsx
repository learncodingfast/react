import React from "react";

function Contact() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <h5>Get in Touch</h5>
          <p>
            Have questions, feedback, or partnership ideas? We’d love to hear
            from you. Our team is committed to providing timely and thoughtful
            responses.
          </p>
          <ul className="list-unstyled">
            <li>📩 Email: support@taskmaster.com</li>
            <li>📞 Phone: +1 (800) 123-4567</li>
            <li>🏢 Address: 123 Productivity Lane, Innovation City, USA</li>
          </ul>
          <p>
            Follow us on social media for updates and community engagement:
            Twitter, LinkedIn, Instagram.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-sm p-4">
            <h5 className="card-title mb-3">Send Us a Message</h5>
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
