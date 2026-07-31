function TestPlan() {
  return (
    <div className="document">

      <h2>Test Plan</h2>

      <table className="qa-table">
        <tbody>

          <tr>
            <th>Project</th>
            <td>Online Banking Portal</td>
          </tr>

          <tr>
            <th>Objective</th>
            <td>
              Verify that the login functionality works correctly across supported browsers and devices.
            </td>
          </tr>

          <tr>
            <th>Scope</th>
            <td>
              Login, Logout, Forgot Password, Session Management.
            </td>
          </tr>

          <tr>
            <th>Testing Types</th>
            <td>
              Functional, Regression, Smoke, Sanity, UI Testing
            </td>
          </tr>

          <tr>
            <th>Test Environment</th>
            <td>
              Windows 11, Chrome, Edge, Firefox
            </td>
          </tr>

          <tr>
            <th>Entry Criteria</th>
            <td>
              Requirements approved and build deployed to QA environment.
            </td>
          </tr>

          <tr>
            <th>Exit Criteria</th>
            <td>
              All critical and high severity defects resolved. Regression completed successfully.
            </td>
          </tr>

          <tr>
            <th>Deliverables</th>
            <td>
              Test Plan, Test Cases, Bug Report, Test Summary Report.
            </td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}

export default TestPlan;