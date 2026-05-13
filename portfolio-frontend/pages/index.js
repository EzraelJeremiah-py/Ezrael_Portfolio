import { useEffect, useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://your-render-app.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data));
  }, []);

  if (!portfolio) return <p>Loading...</p>;

  return (
    <div>
      <h1>{portfolio.contact.github.split("/").pop()}'s Portfolio</h1>

      <h2>Skills</h2>
      <ul>{portfolio.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>

      <h2>Qualifications</h2>
      <ul>{portfolio.qualifications.map((q, i) => <li key={i}>{q}</li>)}</ul>

      <h2>Projects</h2>
      <ul>{portfolio.projects.map((p, i) => (
        <li key={i}><strong>{p.name}</strong>: {p.desc}</li>
      ))}</ul>

      <h2>Contact</h2>
      <p>Email: {portfolio.contact.email}</p>
      <p>Alt Email: {portfolio.contact.email2}</p>
      <p>GitHub: {portfolio.contact.github}</p>
    </div>
  );
}

