function BugReport() {
  return (
    <div className="document">

      <h2>Bug Report</h2>

      <table className="qa-table">
        <tbody>

          <tr>
            <th>Bug ID</th>
            <td>BUG-001</td>
          </tr>

          <tr>
            <th>Title</th>
            <td>Login button remains disabled after entering valid credentials</td>
          </tr>

          <tr>
            <th>Module</th>
            <td>Authentication</td>
          </tr>

          <tr>
            <th>Severity</th>
            <td>High</td>
          </tr>

          <tr>
            <th>Priority</th>
            <td>High</td>
          </tr>

          <tr>
            <th>Environment</th>
            <td>Chrome 138 | Windows 11</td>
          </tr>

          <tr>
            <th>Precondition</th>
            <td>User is on the Login page.</td>
          </tr>

          <tr>
            <th>Steps to Reproduce</th>
            <td>
              1. Open Login page.<br />
              2. Enter valid username.<br />
              3. Enter valid password.<br />
              4. Observe the Login button.
            </td>
          </tr>

          <tr>
            <th>Expected Result</th>
            <td>Login button should become enabled.</td>
          </tr>

          <tr>
            <th>Actual Result</th>
            <td>Login button stays disabled.</td>
          </tr>

          <tr>
            <th>Status</th>
            <td>Open</td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}

export default BugReport;