import { useEffect, useState } from 'react';
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/projects')
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="projects">
      <h2>Projects</h2>

      {projects.map((project) => (
        <div key={project._id} className="project-card">
          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <a href={project.githubLink}>GitHub</a>
          <a href={project.liveLink}>Live Demo</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;