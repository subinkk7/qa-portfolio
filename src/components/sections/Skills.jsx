function Skills() {
  const skillCategories = [
    {
      title: "Testing",
      skills: [
        "Manual Testing",
        "Functional Testing",
        "Regression Testing",
        "Smoke Testing",
        "Sanity Testing",
        "GUI Testing",
        "Web Testing",
        "Mobile Testing"
      ]
    },
    {
      title: "ServiceNow",
      skills: [
        "Incident Management",
        "Change Management",
        "Service Catalog",
        "ATF"
      ]
    },
    {
      title: "Methodologies",
      skills: [
        "Agile Scrum",
        "SDLC",
        "STLC",
        "Defect Life Cycle"
      ]
    },
    {
      title: "Tools",
      skills: [
        "JIRA",
        "Azure DevOps",
        "ServiceNow",
        "Microsoft Office"
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>

            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;