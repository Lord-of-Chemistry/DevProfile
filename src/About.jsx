import "./App.css";
import avatar from "./avatar.png";

function About() {
  return (
    <section className="about" id="about">
      <h1>About Me</h1>

      <div className="about-content">
        <div className="about-left">
          <img src={avatar} alt="WittySage" />
        </div>

        <div className="about-right">
          <p>
            A bit about <span>WittySage</span>...
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus et
            quibusdam inventore, sunt eligendi sed possimus ratione qui iure
            optio at praesentium enim nemo vero provident.
          </p>

          <p>Currently exploring...</p>

          <div className="about-button">
            <button className="btn">ReactJS</button>
            <button className="btn">UI/UX Design</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
