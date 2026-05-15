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
    <div className={`${darkMode ? "bg-dark text-white" : "bg-light"} min-vh-100 d-flex flex-column`}>
      
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} shadow-sm`}>
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand fw-bold" href="#">Ezrael Portfolio</a>
          <button 
            className="btn btn-outline-secondary"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header 
        className="text-center py-5 mb-4 text-white" 
        style={{
          background: "linear-gradient(270deg, #0d6efd, #6610f2, #20c997)",
          backgroundSize: "600% 600%",
          animation: "gradientMove 15s ease infinite"
        }}
      >
        <div className="container-fluid">
          <h1 className="hero-title fw-bold">
            {portfolio.contact.github.split("/").pop()}
          </h1>
          <p className="hero-tagline">Crafting code & ideas into reality</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1 d-flex justify-content-center">
        <div className="container-fluid text-center px-3">
          
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
            <div className="d-flex flex-wrap justify-content-center">
              {portfolio.qualifications.map((q, i) => (
                <span 
                  key={i} 
                  className="badge me-2 mb-2 fs-6 shadow-sm"
                  style={{
                    backgroundColor: "black",
                    color: "gold",
                    fontWeight: "bold",
                    padding: "0.6rem 1rem",
                    borderRadius: "0.5rem",
                    whiteSpace: "normal",
                    textAlign: "center"
                  }}
                >
                  <i className="bi bi-mortarboard-fill me-2"></i>{q}
                </span>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-5">
            <h2 className="text-warning mb-3">Projects</h2>
            <div className="row justify-content-center">
              {portfolio.projects.map((p, i) => (
                <div className="col-12 col-md-4 mb-3" key={i}>
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
            <p><i className="bi bi-envelope-fill me-2 text-primary"></i>
              <a href={`mailto:${portfolio.contact.email}`} className="text-primary text-decoration-none">
                {portfolio.contact.email}
              </a>
            </p>
            <p><i className="bi bi-envelope me-2 text-primary"></i>
              <a href={`mailto:${portfolio.contact.email2}`} className="text-primary text-decoration-none">
                {portfolio.contact.email2}
              </a>
            </p>
            <p><i className="bi bi-telephone-fill me-2 text-primary"></i>
              <a href={`tel:${portfolio.contact.phone}`} className="text-primary text-decoration-none">
                {portfolio.contact.phone}
              </a>
            </p>
            <p><i className="bi bi-telephone me-2 text-primary"></i>
              <a href={`tel:${portfolio.contact.phone2}`} className="text-primary text-decoration-none">
                {portfolio.contact.phone2}
              </a>
            </p>
            <p><i className="bi bi-github me-2 text-primary"></i>
              <a href={portfolio.contact.github} target="_blank" rel="noreferrer" className="text-primary text-decoration-none">
                {portfolio.contact.github}
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className={`text-center py-3 mt-5 ${darkMode ? "bg-secondary text-white" : "bg-dark text-white"}`}>
        <small>© {new Date().getFullYear()} Ezrael Portfolio | Built with Next.js & Flask</small>
      </footer>

      {/* Gradient Animation + Responsive Fonts */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-title {
          font-size: 3rem;
        }
        .hero-tagline {
          font-size: 1.25rem;
        }
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2rem;
          }
          .hero-tagline {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
