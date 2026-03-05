import { useState } from "react"
import PersonalInfoForm from "./PersonalInfoForm.jsx"
import SummaryForm from "./SummaryForm.jsx";
import '../../styles/CvForm.css'

function CvForm({ cvData, updatePersonal, updateSummary }) {
  const [openSection, setOpenSection] = useState("personal");

  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  }
  return (
    <div className="all-forms-container">
      <PersonalInfoForm
        cvData={cvData}
        updatePersonal={updatePersonal}
        open={openSection === "personal"}
        onToggle={() => toggleSection("personal")}
      />
      <SummaryForm
        cvData={cvData}
        updateSummary={updateSummary}
        open={openSection === "summary"}
        onToggle={() => toggleSection("summary")}
      />
    </div>
  )
}

export default CvForm