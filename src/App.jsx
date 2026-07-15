import "./App.css";

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <h2 className="logo">TechBrand</h2>

          <nav>
            <ul className="nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Build Modern Websites with React</h1>
          <p>
            We create fast, responsive and user-friendly web applications.
          </p>

          <button>Get Started</button>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="container">
          <h2>About Us</h2>

          <p>
            We are a creative team that develops websites, dashboards and
            mobile applications using modern technologies.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>

          <div className="cards">
            <div className="card">
              <h3>Web Development</h3>
              <p>Responsive and modern websites.</p>
            </div>

            <div className="card">
              <h3>Mobile Apps</h3>
              <p>React Native applications.</p>
            </div>

            <div className="card">
              <h3>UI/UX Design</h3>
              <p>Beautiful user experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats">
        <div className="container stats-box">
          <div>
            <h2>150+</h2>
            <p>Projects</p>
          </div>

          <div>
            <h2>100+</h2>
            <p>Clients</p>
          </div>

          <div>
            <h2>5+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2>24/7</h2>
            <p>Support</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <div className="container">
          <h2>Let's Build Something Amazing</h2>

          <p>
            Contact us today and let's discuss your next project.
          </p>

          <button>Contact Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 TechBrand. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;