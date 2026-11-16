function ProjectCard({ project }) {
    return (
        <div className="project-card">

            <div className="project-header">
                <span className="project-category">
                    {project.category}
                </span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
                {project.description}
            </p>

            <div className="tech-stack">
                {project.tech.map((technology, index) => (
                    <span key={index} className="tech-tag">
                        {technology}
                    </span>
                ))}
            </div>

            <div className="project-links">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub ↗
                </a>

                <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live Demo ↗
                </a>
            </div>

        </div>
    );
}

export default ProjectCard;