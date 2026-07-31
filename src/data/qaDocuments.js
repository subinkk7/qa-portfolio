const qaDocuments = {
  loginTestCases: {
    title: "Login Test Cases",
    content: `
# Login Test Cases

TC001 - Verify login with valid username and password.

Expected Result:
User should be redirected to Dashboard.

-----------------------------------------

TC002 - Verify login with invalid password.

Expected Result:
Error message should be displayed.

-----------------------------------------

TC003 - Empty Username

Expected Result:
Username is required.

-----------------------------------------

TC004 - Empty Password

Expected Result:
Password is required.

-----------------------------------------

TC005 - Locked User

Expected Result:
Display account locked message.
`
  },

  bugReport: {
    title: "Bug Report",
    content: `
Bug ID : BUG-001

Module :
Login

Severity :
High

Priority :
Critical

Description :
Application allows login without validating password.

Steps:

1. Open Login Page

2. Enter valid username

3. Leave password empty

4. Click Login

Expected:
Validation message.

Actual:
User logged in.
`
  },

  rtm: {
    title: "Requirement Traceability Matrix",
    content: `
REQ001 -> TC001 TC002

REQ002 -> TC003

REQ003 -> TC004

REQ004 -> TC005
`
  },

  testPlan: {
    title: "Test Plan",
    content: `
Project:
QA Portfolio Demo

Scope

Functional Testing

Regression Testing

Smoke Testing

Entry Criteria

Exit Criteria

Deliverables
`
  },

  smoke: {
    title: "Smoke Checklist",
    content: `
Application Loads

Login

Logout

Dashboard

Navigation

Search

Database Connectivity
`
  },

  summary: {
    title: "Test Summary Report",
    content: `
Total Test Cases : 150

Passed : 145

Failed : 5

Blocked : 0

Recommendation

Ready for Release
`
  }
};

export default qaDocuments;