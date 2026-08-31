import "./App.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1>Let's Connect</h1>
      <p className="section-intro">
        Have a project, idea, or opportunity? I'd love to hear from you.
      </p>

      <div className="contact-content">
        <div className="contact-text">
          <p>
            I'm always open to interesting projects, collaborations, and
            opportunities to learn and build something meaningful.
          </p>
          <a className="contact-email" href="mailto:your@email.com">
            my@email.com
          </a>
        </div>

        <div className="contact-links">
          <a href="#" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Twitter ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
