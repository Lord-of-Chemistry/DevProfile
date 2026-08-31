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
          theme="#22d3ee"
        />

        <ProjectCard
          image={cieimg}
          title="Cie Cie Essence"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
          tech="HTML • JS • CSS"
          live="https://cie-cie-essence.vercel.app/"
          theme="#ec4899"
        />

        <ProjectCard
          image={gourmet}
          title="DevProfile"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
          tech=" React • Vite • CSS"
          live="https://gourmet-haven-xi.vercel.app/"
          theme="rgba(254, 137, 54, 0.76)"
        />
      </div>
    </section>
  );
}

export default Projects;
