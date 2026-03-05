import PersonalInfoForm from './PersonalInfoForm.jsx'
import '../../styles/CvForm.css'

function CvForm({ cvData, updatePersonal }) {
  return (
    <>
      <PersonalInfoForm cvData={cvData} updatePersonal={updatePersonal} />
    </>
  )
}

export default CvForm