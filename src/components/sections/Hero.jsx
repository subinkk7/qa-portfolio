function Hero() {
  return (
    <section className="hero" id="home">

      <img
        src="/images/profile.jpg"
        alt="Subin K K"
        className="profile"
      />

      <h1>Subin K K</h1>

      <h2>Lead Quality Analyst</h2>

      <p>
        Building confidence in every software release through structured
        testing, leadership, and continuous quality improvement.
      </p>

      <div className="button-group">

        <a
          href="https://github.com/subinkk7"
          target="_blank"
          className="btn"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/subin-pilanhi/"
          target="_blank"
          className="btn"
        >
          LinkedIn
        </a>

      </div>

      <div className="stats">

        <div className="card">
          <h3>6+</h3>
          <span>Years Experience</span>
        </div>

        <div className="card">
          <h3>50+</h3>
          <span>Software Releases</span>
        </div>

        <div className="card">
          <h3>4</h3>
          <span>QA Engineers Mentored</span>
        </div>

        <div className="card">
          <h3>Agile</h3>
          <span>Scrum</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;