import { useState } from "react"
import PersonalInfoForm from "./PersonalInfoForm.jsx"
import '../../styles/CvForm.css'

function CvForm({ cvData, updatePersonal }) {
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
    </div>
  )
}

export default CvForm