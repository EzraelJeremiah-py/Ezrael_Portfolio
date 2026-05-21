// portfolio-frontend/pages/index.js
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://ernestmanyama.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Error fetching portfolio:", err));
  }, []);

  if (!portfolio) return <Layout><p>Loading...</p></Layout>;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center py-5 bg-dark text-white">
        <h1 className="display-4">{portfolio.name}</h1>
        <p className="lead">{portfolio.about}</p>
      </section>

      {/* Skills */}
      <section className="container my-5">
        <h2 className="mb-4 text-primary">Skills</h2>
        <div className="row">
          {portfolio.skills.map(skill => (
            <div key={skill} className="col-6 col-md-3 mb-3">
              <div className="card shadow-sm h-100 text-center">
                <div className="card-body">
                  <h5 className="card-title">{skill}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="container my-5">
        <h2 className="mb-4 text-success">Projects</h2>
        <div className="row">
          {portfolio.projects.map(project => (
            <div key={project.title} className="col-md-6 mb-4">
              <div className="card shadow-lg h-100">
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-outline-success">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="container my-5">
        <h2 className="mb-4 text-danger">Contact</h2>
        <div className="d-flex flex-wrap gap-3">
          <a href={`mailto:${portfolio.contact.email}`} className="btn btn-outline-dark">
            📧 Email
          </a>
          <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline-primary">
            🔗 LinkedIn
          </a>
          <a href={portfolio.contact.github} target="_blank" rel="noreferrer" className="btn btn-outline-secondary">
            💻 GitHub
          </a>
        </div>
      </section>
    </Layout>
  );
}
