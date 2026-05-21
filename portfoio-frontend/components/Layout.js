// components/Layout.js
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
