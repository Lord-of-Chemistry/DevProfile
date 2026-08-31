import "./App.css"

function ProjectCard({ image, title, description, tech, live, github }) {
    return (
        <article className="ProjectCard">
            <div className="project-image">
                <img src={image} alt={`${title} preview`} />
            </div>
            <div className="project-info">
                <h2>{title}</h2>
                <p>{description}</p>


                <span className="project-tech">{tech}</span>
            </div>

            <div className="project-links">
                <a href={live} target="_blank" rel="noreferrer">
                    Live Demo
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                    GitHub
                </a>
            </div>
        </article>
    )
}

export default ProjectCard;