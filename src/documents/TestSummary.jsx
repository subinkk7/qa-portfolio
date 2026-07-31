function TestSummary() {
  return (
    <div className="document">

      <h2>Test Summary Report</h2>

      <table className="qa-table">
        <tbody>

          <tr>
            <th>Project</th>
            <td>Online Banking Portal</td>
          </tr>

          <tr>
            <th>Build Version</th>
            <td>v2.3.1</td>
          </tr>

          <tr>
            <th>Total Test Cases</th>
            <td>120</td>
          </tr>

          <tr>
            <th>Executed</th>
            <td>120</td>
          </tr>

          <tr>
            <th>Passed</th>
            <td>116</td>
          </tr>

          <tr>
            <th>Failed</th>
            <td>4</td>
          </tr>

          <tr>
            <th>Blocked</th>
            <td>0</td>
          </tr>

          <tr>
            <th>Recommendation</th>
            <td>
              Application is stable and recommended for production deployment after resolving the remaining defects.
            </td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}

export default TestSummary;