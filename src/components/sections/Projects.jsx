function Projects() {
  const projects = [
    {
      title: "ServiceNow ITSM Platform",
      company: "UST",
      duration: "2021 - 2024",
      role: "ServiceNow Quality Analyst",
      overview:
        "Worked on enterprise ServiceNow applications supporting IT Service Management processes.",
      responsibilities: [
        "Designed and executed functional and regression test cases.",
        "Validated Incident, Change Management and Service Catalog modules.",
        "Performed end-to-end workflow validation.",
        "Executed testing during upgrades and patch releases.",
        "Automated repetitive scenarios using ServiceNow ATF."
      ],
      tools: [
        "ServiceNow",
        "ATF",
        "Agile",
        "Regression",
        "Functional Testing"
      ]
    },
    {
      title: "Web & Mobile Business Platform",
      company: "Bitzmatic",
      duration: "2024 - Present",
      role: "Lead Quality Analyst",
      overview:
        "Leading QA activities for multiple web and mobile applications across frequent product releases.",
      responsibilities: [
        "Prepared test strategy and test plans.",
        "Performed end-to-end testing.",
        "Led release validation activities.",
        "Mentored four QA engineers.",
        "Worked closely with developers and product managers."
      ],
      tools: [
        "Manual Testing",
        "Web",
        "Mobile",
        "Agile",
        "Release Testing"
      ]
    },
    {
      title: "Enterprise Web Applications",
      company: "Proxima Tech Labs",
      duration: "2020 - 2021",
      role: "Quality Analyst",
      overview:
        "Performed manual testing for web and mobile applications across multiple business domains.",
      responsibilities: [
        "Created and executed test cases.",
        "Performed GUI and functional testing.",
        "Executed smoke and regression testing.",
        "Reported and tracked defects.",
        "Retested resolved defects."
      ],
      tools: [
        "Manual Testing",
        "Regression",
        "Smoke",
        "GUI",
        "Web Testing"
      ]
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <span className="company">{project.company}</span>

            <h3>{project.title}</h3>

            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Duration:</strong> {project.duration}</p>

            <p>{project.overview}</p>

            <h4>Responsibilities</h4>

            <ul>
              {project.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="tech-stack">
              {project.tools.map((tool, i) => (
                <span className="tag" key={i}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;