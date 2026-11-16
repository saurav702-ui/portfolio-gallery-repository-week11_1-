import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: 1,
        title: "Book Search App",
        description:
            "A web application that allows users to search for books and discover information about authors and publications.",
        tech: ["React", "CSS"],
        category: "Web Application",
        github: "https://github.com/saurav702-ui/webpro-book-search",
        demo: "https://saurav702-ui.github.io/webpro-book-search/"
    },
    {
        id: 2,
        title: "Personal Portfolio",
        description:
            "A personal website showcasing my background, interests, programming skills and projects.",
        tech: ["HTML", "CSS"],
        category: "Personal Website",
        github: "https://github.com/saurav702-ui/Protfolio",
        demo: "https://saurav702-ui.github.io/Protfolio/"
    },
    {
        id: 3,
        title: "BiHE Matrimonial Website",
        description:
            "A modern matrimonial website featuring profiles, compatibility features and interactive elements.",
        tech: ["HTML", "CSS", "JavaScript"],
        category: "Web Design",
        github: "https://github.com/saurav702-ui/Web-programming",
        demo: "https://saurav702-ui.github.io/Web-programming/Project/BiHE_index.html"
    }
];

function ProjectList({ activeFilter }) {

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter(project =>
                project.tech.includes(activeFilter)
            );

    return (
        <div className="project-grid">

            {filteredProjects.length > 0 ? (

                filteredProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))

            ) : (

                <p className="no-projects">
                    No projects found for this technology.
                </p>

            )}

        </div>
    );
}

export default ProjectList;