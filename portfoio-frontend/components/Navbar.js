// components/Navbar.js
export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#1a1a1a",
      color: "#fff"
    }}>
      <h2>Ernest Manyama</h2>
      <div>
        <a href="#about" style={{ margin: "0 10px", color: "#fff" }}>About</a>
        <a href="#projects" style={{ margin: "0 10px", color: "#fff" }}>Projects</a>
        <a href="#contact" style={{ margin: "0 10px", color: "#fff" }}>Contact</a>
      </div>
    </nav>
  );
}
