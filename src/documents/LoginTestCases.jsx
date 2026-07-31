function LoginTestCases() {
  const testCases = [
    {
      id: "TC-001",
      scenario: "Login with valid username and password",
      steps: "Enter valid credentials and click Login",
      expected: "User is redirected to Dashboard",
      priority: "High",
      status: "Pass"
    },
    {
      id: "TC-002",
      scenario: "Login with invalid password",
      steps: "Enter incorrect password",
      expected: "Display 'Invalid Credentials'",
      priority: "High",
      status: "Pass"
    },
    {
      id: "TC-003",
      scenario: "Username left blank",
      steps: "Leave username empty and click Login",
      expected: "Username validation message",
      priority: "Medium",
      status: "Pass"
    },
    {
      id: "TC-004",
      scenario: "Password left blank",
      steps: "Leave password empty",
      expected: "Password validation message",
      priority: "Medium",
      status: "Pass"
    },
    {
      id: "TC-005",
      scenario: "Locked account",
      steps: "Login with locked user",
      expected: "Account Locked message",
      priority: "High",
      status: "Pass"
    }
  ];

  return (
    <div className="document">

      <h2>Login Test Cases</h2>

      <table className="qa-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Scenario</th>
            <th>Steps</th>
            <th>Expected Result</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {testCases.map((tc) => (

            <tr key={tc.id}>

              <td>{tc.id}</td>

              <td>{tc.scenario}</td>

              <td>{tc.steps}</td>

              <td>{tc.expected}</td>

              <td>{tc.priority}</td>

              <td>{tc.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default LoginTestCases;