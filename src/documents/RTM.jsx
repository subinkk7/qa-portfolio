function RTM() {
  const requirements = [
    {
      req: "REQ-001",
      description: "User Login",
      testCase: "TC-001, TC-002",
      status: "Covered"
    },
    {
      req: "REQ-002",
      description: "Password Validation",
      testCase: "TC-003, TC-004",
      status: "Covered"
    },
    {
      req: "REQ-003",
      description: "Locked Account",
      testCase: "TC-005",
      status: "Covered"
    },
    {
      req: "REQ-004",
      description: "Forgot Password",
      testCase: "TC-006",
      status: "Covered"
    }
  ];

  return (
    <div className="document">
      <h2>Requirement Traceability Matrix</h2>

      <table className="qa-table">
        <thead>
          <tr>
            <th>Requirement ID</th>
            <th>Requirement</th>
            <th>Mapped Test Cases</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {requirements.map((item) => (
            <tr key={item.req}>
              <td>{item.req}</td>
              <td>{item.description}</td>
              <td>{item.testCase}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RTM;