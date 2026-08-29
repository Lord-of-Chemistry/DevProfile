import Button from "./Button.jsx";
import "./App.css";

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <p className="eyebrow">WEB DEVELOPER & CREATIVE</p>

          <h1>
            Hi, I'm <span className="wittysage">WITTYSAGE</span>
          </h1>

          <p className="intro">
            I build thoughtful, responsive websites and turn ideas into
            experiences that actually work.
          </p>

          <div className="homebuttons">
            <Button name="View Projects" href="#projects" />
            <Button name="Contact Me" href="#contact" />
          </div>
        </div>

        <div className="hero-decoration">
          <span>&lt;/&gt;</span>
        </div>
      </section>
    </>
  );
}

export default Home;
