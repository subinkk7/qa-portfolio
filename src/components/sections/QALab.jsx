import TestSummary from "../../documents/TestSummary";
import SmokeChecklist from "../../documents/SmokeChecklist";
import TestPlan from "../../documents/TestPlan";
import RTM from "../../documents/RTM";
import BugReport from "../../documents/BugReport";
import LoginTestCases from "../../documents/LoginTestCases";
import { useState } from "react";
//import qaDocuments from "../../data/qaDocuments";
import DocumentViewer from "../ui/DocumentViewer";

function QALab() {
  const [selected, setSelected] = useState(null);

  const documents = [
    {
      //key: "loginTestCases",
      component: <LoginTestCases />,
      title: "Login Test Cases",
      type: "Test Cases",
      description: "Sample login test cases."
      
    },
    {
      //key: "bugReport",
      component: <BugReport />,
      title: "Bug Report",
      type: "Defect",
      description: "Professional bug report."
    },
    {
      //key: "rtm",
      component: <RTM />,
      title: "Requirement Traceability Matrix",
      type: "RTM",
      description: "Requirement mapping."
    },
    {
      //key: "testPlan",
      component: <TestPlan />,
      title: "Test Plan",
      type: "Documentation",
      description: "Sample QA Test Plan."
    },
    {
      //key: "smoke",
      component: <SmokeChecklist />,
      title: "Smoke Checklist",
      type: "Checklist",
      description: "Release smoke checklist."
    },
    {
      //key: "summary",
      component: <TestSummary />,
      title: "Test Summary Report",
      type: "Report",
      description: "Execution summary."
    }
  ];

  return (
    <section className="qalab" id="qalab">

      <h2 className="section-title">QA Lab</h2>

      <div className="qa-grid">

        {documents.map((doc) => (

          <div className="qa-card" key={doc.key}>

            <span className="qa-type">
              {doc.type}
            </span>

            <h3>{doc.title}</h3>

            <p>{doc.description}</p>

            <button
              className="qa-button"
              //onClick={() => setSelected(qaDocuments[doc.key])}
              onClick={() => setSelected(doc)}
            >
              View Sample
            </button>

          </div>

        ))}

      </div>

      <DocumentViewer
  open={selected !== null}
  title={selected?.title}
  onClose={() => setSelected(null)}
>
  {selected?.component}
</DocumentViewer>

    </section>
  );
}

export default QALab;