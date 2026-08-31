import "./App.css";
import ProjectCard from "./ProjectCard";
import image from "./image.png"

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
        />

        <ProjectCard
          image={image}
          title="DevProfile"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
          tech=" React • Vite • CSS"
        />

        <ProjectCard
          image={image}
          title="DevProfile"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
          tech=" React • Vite • CSS"
        />
      </div>
    </section>
  );
}

export default Projects;
