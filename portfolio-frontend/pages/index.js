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

  if (!portfolio) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-4">
        {portfolio.contact.github.split("/").pop()}'s Portfolio
      </h1>

      <section className="mb-4">
        <h2 className="text-success">Skills</h2>
        <ul className="list-group">
          {portfolio.skills.map((s, i) => (
            <li key={i} className="list-group-item">{s}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-info">Qualifications</h2>
        <ul className="list-group">
          {portfolio.qualifications.map((q, i) => (
            <li key={i} className="list-group-item">{q}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-warning">Projects</h2>
        <ul className="list-group">
          {portfolio.projects.map((p, i) => (
            <li key={i} className="list-group-item">
              <strong>{p.name}</strong>: {p.desc}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-danger">Contact</h2>
        <p>Email: {portfolio.contact.email}</p>
        <p>Alt Email: {portfolio.contact.email2}</p>
        <p>GitHub: <a href={portfolio.contact.github} target="_blank" rel="noreferrer">{portfolio.contact.github}</a></p>
      </section>
    </div>
  );
}
