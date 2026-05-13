import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://ezrael-portfolio.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Error fetching portfolio:", err));
  }, []);

  if (!portfolio) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Ezrael Portfolio</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5 mb-4">
        <div className="container">
          <h1 className="display-4">
            {portfolio.contact.github.split("/").pop()}
          </h1>
          <p className="lead">Welcome to my professional portfolio</p>
        </div>
      </header>

      <main className="container">
        {/* Skills */}
        <section className="mb-5">
          <h2 className="text-success mb-3">Skills</h2>
          {portfolio.skills.map((s, i) => (
            <span key={i} className="badge bg-success me-2 mb-2">{s}</span>
          ))}
        </section>

        {/* Qualifications */}
        <section className="mb-5">
          <h2 className="text-info mb-3">Qualifications</h2>
          <ul className="list-group">
            {portfolio.qualifications.map((q, i) => (
              <li key={i} className="list-group-item">
                <i className="bi bi-mortarboard-fill me-2"></i>{q}
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-5">
          <h2 className="text-warning mb-3">Projects</h2>
          <div className="row">
            {portfolio.projects.map((p, i) => (
              <div className="col-md-4 mb-3" key={i}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-5">
          <h2 className="text-danger mb-3">Contact</h2>
          <p><i className="bi bi-envelope-fill me-2"></i>{portfolio.contact.email}</p>
          <p><i className="bi bi-envelope me-2"></i>{portfolio.contact.email2}</p>
          <p>
            <i className="bi bi-github me-2"></i>
            <a href={portfolio.contact.github} target="_blank" rel="noreferrer">
              {portfolio.contact.github}
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <small>© {new Date().getFullYear()} Ezrael Portfolio</small>
      </footer>
    </>
  );
}
