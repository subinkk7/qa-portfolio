function SmokeChecklist() {
  const checklist = [
    { item: "Application launches successfully", status: "Pass" },
    { item: "Login functionality works", status: "Pass" },
    { item: "Dashboard loads correctly", status: "Pass" },
    { item: "Navigation menu is accessible", status: "Pass" },
    { item: "Logout works successfully", status: "Pass" },
    { item: "No critical UI issues observed", status: "Pass" }
  ];

  return (
    <div className="document">
      <h2>Smoke Test Checklist</h2>

      <table className="qa-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Checklist Item</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {checklist.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.item}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SmokeChecklist;