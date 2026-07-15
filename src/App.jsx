import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h2 className="logo">MyWebsite</h2>

          <nav>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Website</h1>
          <p>
            Build modern websites with React. Fast, responsive and beautiful.
          </p>
          <button>Get Started</button>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 MyWebsite. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;