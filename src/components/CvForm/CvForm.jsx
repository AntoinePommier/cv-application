import { useState } from "react"
import PersonalInfoForm from "./PersonalInfoForm.jsx"
import SummaryForm from "./SummaryForm.jsx";
import EducationForm from "./EducationForm.jsx";
import ExperienceForm from "./ExperienceForm.jsx"
import '../../styles/CvForm.css'

function CvForm({ cvData, updatePersonal, updateSummary, updateEducation, deleteEducation, addEducation, updateExperience, deleteExperience, addExperience }) {
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
      <EducationForm
        educationData={cvData.education}
        updateEducation={updateEducation}
        deleteEducation={deleteEducation}
        addEducation={addEducation}
        open={openSection === "education"}
        onToggle={() => toggleSection("education")}
      />
      <ExperienceForm
        experienceData={cvData.experiences}
        updateExperience={updateExperience}
        deleteExperience={deleteExperience}
        addExperience={addExperience}
        open={openSection === "experience"}
        onToggle={() => toggleSection("experience")}
      />
    </div>
  )
}

export default CvForm