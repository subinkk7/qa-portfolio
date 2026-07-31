function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">

        <h2 className="section-title">About Me</h2>

        <p>
          I am a Lead Quality Analyst with more than 6 years of experience
          in delivering high-quality software solutions across Web,
          Mobile and ServiceNow platforms.
        </p>

        <p>
          Throughout my career, I have supported over 50 successful
          software releases while collaborating with developers,
          business analysts and product owners in Agile Scrum teams.
        </p>

        <p>
          My focus is not only finding defects but preventing them by
          improving testing strategies, ensuring quality at every stage
          of the software development lifecycle.
        </p>

      </div>

      <div className="about-right">

        <div className="info-card">
          <h3>Experience</h3>
          <p>6+ Years</p>
        </div>

        <div className="info-card">
          <h3>Projects</h3>
          <p>50+ Releases</p>
        </div>

        <div className="info-card">
          <h3>Leadership</h3>
          <p>Mentored 4 QA Engineers</p>
        </div>

        <div className="info-card">
          <h3>Methodology</h3>
          <p>Agile Scrum</p>
        </div>

      </div>

    </section>
  );
}

export default About;