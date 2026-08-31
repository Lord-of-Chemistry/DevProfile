import "./App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          WITTY<span>SAGE</span>
        </div>

        <p>Built with love.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} WittySage. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
