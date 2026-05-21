// portfoio-frontend/pages/index.js
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    // Replace with your Render backend URL
    fetch("https://ernestmanyama.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Error fetching portfolio:", err));
  }, []);

  if (!portfolio) return <Layout><p>Loading...</p></Layout>;

  return (
    <Layout>
      <section id="about">
        <h1>{portfolio.name}</h1>
        <p>{portfolio.about}</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          {portfolio.skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {portfolio.projects.map(project => (
          <div key={project.title} style={{ marginBottom: "20px" }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a></p>
        <p><a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
        <p><a href={portfolio.contact.github} target="_blank" rel="noreferrer">GitHub</a></p>
      </section>
    </Layout>
  );
}

