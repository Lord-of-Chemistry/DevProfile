import "./App.css";
import ProjectCard from "./ProjectCard";
import image from "./image.png";
import cieimg from "./cie-img.png";
import gourmet from "./gourmet.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <p className="section-intro">
        lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="project-grid">
        <ProjectCard
          image={image}
          title="DevProfile"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
          tech=" React • Vite • CSS"
          live="https://devprofile-eight.vercel.app/"
        />

        <ProjectCard
          image={cieimg}
          title="Cie Cie Essence"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
          tech="HTML • JS • CSS"
          live="https://cie-cie-essence.vercel.app/"
        />

        <ProjectCard
          image={gourmet}
          title="DevProfile"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
          tech=" React • Vite • CSS"
          live="https://gourmet-haven-xi.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects;
