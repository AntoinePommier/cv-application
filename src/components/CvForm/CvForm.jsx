import PersonalInfoForm from "./PersonalInfoForm.jsx"

function CvForm({ cvData, updatePersonal }) {
  return (
    <>
      <PersonalInfoForm cvData={cvData} updatePersonal={updatePersonal} />
    </>
  )
}

export default CvForm