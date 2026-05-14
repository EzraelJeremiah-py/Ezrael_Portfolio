import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://ezrael-portfolio.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Error fetching portfolio:", err));
  }, []);

  if (!portfolio) {
    return (
      <div className={`d-flex justify-content-center align-items-center vh-100 ${darkMode ? "bg-dark text-white" : "bg-light"}`}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? "bg-dark text-white min-vh-100" : "bg-light min-vh-100"}>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} shadow-sm`}>
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand fw-bold" href="#">Ezrael Portfolio</a>
          <button 
            className="btn btn-outline-secondary"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </nav>

      {/* Hero Section with Growing Gradient */}
      <header 
        className="text-center py-5 mb-4 text-white" 
        style={{
          background: "linear-gradient(270deg, #0d6efd, #6610f2, #20c997)",
          backgroundSize: "600% 600%",
          animation: "gradientMove 15s ease infinite"
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">
            {portfolio.contact.github.split("/").pop()}
          </h1>
          <p className="lead">Crafting code & ideas into reality</p>
        </div>
      </header>

      <main className="container">
        {/* Skills */}
        <section className="mb-5">
          <h2 className="text-success mb-3">Skills</h2>
          {portfolio.skills.map((s, i) => (
            <span key={i} className="badge bg-success me-2 mb-2 fs-6">{s}</span>
          ))}
        </section>

        {/* Qualifications */}
        <section className="mb-5">
          <h2 className="text-info mb-3">Qualifications</h2>
          <ul className="list-group list-group-flush shadow-sm">
            {portfolio.qualifications.map((q, i) => (
              <li key={i} className={`list-group-item ${darkMode ? "bg-dark text-white" : ""}`}>
                <i className="bi bi-mortarboard-fill me-2 text-info"></i>{q}
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
                <div className={`card shadow-lg h-100 border-0 ${darkMode ? "bg-dark text-white" : ""}`}>
                  <div className="card-body">
                    <h5 className="card-title text-primary">{p.name}</h5>
                    {p.desc.startsWith("http") ? (
                      <a href={p.desc} target="_blank" rel="noreferrer" className="btn btn-outline-primary mt-2">
                        🔗 View Project
                      </a>
                    ) : (
                      <p className="card-text">{p.desc}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-5">
          <h2 className="text-danger mb-3">Contact</h2>
          <p><i className="bi bi-envelope-fill me-2 text-danger"></i>{portfolio.contact.email}</p>
          <p><i className="bi bi-envelope me-2 text-secondary"></i>{portfolio.contact.email2}</p>
          <p><i className="bi bi-telephone-fill me-2 text-success"></i>{portfolio.contact.phone}</p>
          <p><i className="bi bi-telephone me-2 text-warning"></i>{portfolio.contact.phone2}</p>
          <p>
            <i className="bi bi-github me-2 text-dark"></i>
            <a href={portfolio.contact.github} target="_blank" rel="noreferrer" className={darkMode ? "text-white" : "text-dark"}>
              {portfolio.contact.github}
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className={`text-center py-3 mt-5 ${darkMode ? "bg-secondary text-white" : "bg-dark text-white"}`}>
        <small>© {new Date().getFullYear()} Ezrael Portfolio | Built with Next.js & Flask</small>
      </footer>

      {/* Gradient Animation CSS */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
