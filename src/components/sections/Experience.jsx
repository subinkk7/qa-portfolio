function Experience() {
  const experience = [
    {
      period: "2024 - Present",
      role: "Lead Quality Analyst",
      company: "Bitzmatic",
      description: [
        "Lead QA activities for web and mobile applications across multiple releases.",
        "Design comprehensive test strategies, test plans and test cases.",
        "Perform Functional, Regression, Usability and End-to-End testing.",
        "Collaborate with developers, product managers and business stakeholders.",
        "Manage defect lifecycle and ensure timely issue resolution.",
        "Mentor junior QA engineers and improve QA standards.",
        "Conduct release validation and production smoke testing."
      ]
    },

    {
      period: "2021 - 2024",
      role: "ServiceNow Quality Analyst",
      company: "UST",
      description: [
        "Developed test plans, test cases and test scenarios for ServiceNow applications.",
        "Tested Incident Management, Change Management and Service Catalog modules.",
        "Performed Functional, Regression and Performance testing.",
        "Validated ServiceNow workflows, customizations and integrations.",
        "Tracked defects and collaborated with developers to resolve issues.",
        "Executed testing during ServiceNow upgrades and patch releases.",
        "Automated repetitive scenarios using ServiceNow ATF."
      ]
    },

    {
      period: "2020 - 2021",
      role: "Quality Analyst",
      company: "Proxima Tech Labs",
      description: [
        "Performed Manual Testing for Web and Mobile applications.",
        "Designed and executed detailed test cases.",
        "Conducted Functional, GUI, Smoke, Sanity and Regression testing.",
        "Reported, tracked and documented software defects.",
        "Worked with developers to verify fixes and perform regression testing.",
        "Maintained testing documentation and QA artifacts."
      ]
    }
  ];

  return (
    <section className="experience" id="experience">

      <h2 className="section-title">Professional Experience</h2>

      {experience.map((job, index) => (
        <div className="experience-card" key={index}>

          <span className="period">{job.period}</span>

          <h3>{job.role}</h3>

          <h4>{job.company}</h4>

          <ul>
            {job.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

        </div>
      ))}

    </section>
  );
}

export default Experience;