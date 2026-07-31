function CoreCompetencies() {
  const skills = [
    "Manual Testing",
    "Functional Testing",
    "Regression Testing",
    "Smoke Testing",
    "Sanity Testing",
    "GUI Testing",
    "Web Application Testing",
    "Mobile Application Testing",
    "ServiceNow Testing",
    "ServiceNow ATF",
    "Test Planning",
    "Test Case Design",
    "Defect Management",
    "Agile Scrum",
    "Release Validation",
    "Production Smoke Testing"
  ];

  return (
    <section className="competencies" id="competencies">
      <h2 className="section-title">Core Competencies</h2>

      <div className="competencies-grid">
        {skills.map((skill, index) => (
          <div className="competency-chip" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreCompetencies;