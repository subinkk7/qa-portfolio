function Resume() {
  return (
    <section className="resume-section" id="resume">

      <h2 className="section-title">Resume</h2>

      <p>
        View my latest resume directly in your browser.
      </p>

      <div className="resume-container">

        <iframe
          src="/resume/Subin_KK_Resume.pdf"
          title="Resume"
          width="100%"
          height="700"
        />

      </div>

      <a
        className="resume-view-btn"
        href="/resume/Subin_KK_Resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        View Resume
      </a>

    </section>
  );
}

export default Resume;