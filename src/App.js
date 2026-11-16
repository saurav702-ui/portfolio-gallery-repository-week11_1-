import { useState } from "react";
import ProjectList from "./components/ProjectList";
import FilterBar from "./components/FilterBar";
import "./App.css";

function App() {

    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <div className="app">

            {/* Navigation Bar */}
            <header className="header">

                <h2>
                    Saurav<span>.</span>
                </h2>

                <nav>
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>

            </header>


            <main>

                {/* Hero Section */}
                <section className="hero" id="home">

                    <p className="eyebrow">
                        COMPUTER ENGINEERING STUDENT
                    </p>

                    <h1>
                        My Creative <span>Portfolio</span>
                    </h1>

                    <p>
                        Hello, I'm Saurav, a Computer Engineering
                        student at Gachon University.
                    </p>

                    <p>
                        Welcome to my project gallery.
                        Explore my work and programming journey.
                    </p>

                    <a
                        className="hero-button"
                        href="https://github.com/saurav702-ui"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Explore My GitHub
                    </a>

                </section>


                {/* Projects Section */}
                <section
                    className="projects-section"
                    id="projects"
                >

                    <div className="section-heading">

                        <h2>My Projects</h2>

                        <p>
                            Explore my work and filter projects
                            by technology.
                        </p>

                    </div>


                    {/* Technology Filter */}
                    <FilterBar
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    />


                    {/* Project Cards */}
                    <ProjectList
                        activeFilter={activeFilter}
                    />

                </section>


                {/* Contact Section */}
                <section
                    className="contact-section"
                    id="contact"
                >

                    <h2>Let's Connect</h2>

                    <p>
                        Interested in my work?
                        Visit my GitHub profile.
                    </p>

                    <a
                        href="https://github.com/saurav702-ui"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub Profile ↗
                    </a>

                </section>

            </main>


            {/* Footer */}
            <footer>

                <p>
                    © 2026 Saurav | Gachon University
                </p>

                <p>
                    Web Programming Coursework
                </p>

            </footer>

        </div>
    );
}

export default App;