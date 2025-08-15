import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>
          Get In <span className="title-gradient">Touch</span>
        </h1>
        <p className="contact-intro">
          I'd love to hear from you! Whether you have a project in mind or just
          want to connect.
        </p>
        <div className="cont-1">
          <div className="contact-content">
            {/* <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="contact-item">
              <h3>Email</h3>
              <a href='mailto:vedanth.kumar@gmail.com' >vedanth.kumar@gmail.com</a>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/vedanth-r-kumar</p>
            </div>
            <div className="contact-item">
              <h3>GitHub</h3>
              <p>github.com/vedanth-kumar</p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Available for remote opportunities</p>
            </div>
          </div> */}
            {/* <a
              href="https://github.com/Hitesh-IDK"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-12 h-12 flex -center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="GitHub"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                opacity: 1,
                transform: "translate(0px, 0px)",
              }}
            > */}

            <div>
              <a
                href={"https://github.com/vedanth2806/"}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <span>Github</span>
            </div>

            <div>
              <a
                href={"https://www.linkedin.com/in/vedanth-r-kumar/"}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <span>LinkedIn</span>
            </div>

            <div>
              <a
                href={"mailto:vedanth.kumar@gmail.com"}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail h-5 w-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
              <span>Mail Id</span>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
