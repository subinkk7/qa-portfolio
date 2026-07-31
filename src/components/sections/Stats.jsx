function Stats() {
  const stats = [
    {
      value: "6+",
      label: "Years Experience"
    },
    {
      value: "50+",
      label: "Releases Supported"
    },
    {
      value: "4",
      label: "QA Engineers Mentored"
    },
    {
      value: "1000+",
      label: "Test Cases Executed"
    }
  ];

  return (
    <section className="stats">

      <div className="stats-container">

        {stats.map((item, index) => (
          <div className="stat-card" key={index}>

            <h2>{item.value}</h2>

            <p>{item.label}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;