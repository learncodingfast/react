import React from "react";

function Services() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Task Management</h5>
              <p className="card-text">
                Create, categorize, and prioritize tasks effortlessly. Keep all
                your notes and deadlines in one place.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Smart Reminders</h5>
              <p className="card-text">
                Set due dates, recurring alerts, and get notified across devices
                so you never miss a deadline.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Collaboration</h5>
              <p className="card-text">
                Share lists, assign roles, and track progress together. Perfect
                for teams and group projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Analytics</h5>
              <p className="card-text">
                Visual charts and weekly reports help you understand your
                productivity patterns and improve efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Cloud Sync</h5>
              <p className="card-text">
                Access your tasks anywhere, anytime. Secure cloud storage keeps
                your data safe and updated.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Customization</h5>
              <p className="card-text">
                Personalize your dashboard with themes, filters, and tags to
                match your workflow style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
