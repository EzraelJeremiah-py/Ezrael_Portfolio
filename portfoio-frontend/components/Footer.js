// components/Footer.js
export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#1a1a1a",
      color: "#fff",
      marginTop: "40px"
    }}>
      <p>© {new Date().getFullYear()} Ernest Manyama. All rights reserved.</p>
      <p>
        <a href="mailto:ernest@example.com" style={{ color: "#fff" }}>Email</a> | 
        <a href="https://linkedin.com/in/ernestmanyama" style={{ color: "#fff", marginLeft: "10px" }}>LinkedIn</a> | 
        <a href="https://github.com/ErnestManyama" style={{ color: "#fff", marginLeft: "10px" }}>GitHub</a>
      </p>
    </footer>
  );
}
