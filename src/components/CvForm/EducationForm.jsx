import { useState } from 'react';
import { FaChevronDown, FaCaretDown, FaCircle, FaCircleXmark, FaGraduationCap, FaPlus } from 'react-icons/fa6';


function EducationForm({ educationData, updateEducation, deleteEducation, addEducation, open, onToggle }) {
  const [openEducation, setOpenEducation] = useState();

  return (
    <div className="form-container">
      <button onClick={onToggle}>
        <span className="button-title"><FaGraduationCap />Education</span>
        <span className={`chevron ${open ? "open" : ""}`}><FaChevronDown size={15} /></span>
      </button>
      <div className={`form-wrapper ${open ? "open" : ""}`}>
        <div className="form-list">
          {educationData.length > 0 && (
            educationData.map((educationItem) => (
              <div className="education-item-container" key={educationItem.id}>
                <div className="buttons-container">
                  <button className="main-button" onClick={() => openEducation === educationItem.id ? setOpenEducation(null) : setOpenEducation(educationItem.id)}>
                    <span className="button-title"><FaCircle size={7} /> {educationItem.institution}</span>
                    <span className={`chevron ${openEducation === educationItem.id ? "open" : ""}`}><FaCaretDown size={15} /></span>
                  </button>
                  <button className="delete-button" onClick={() => deleteEducation(educationItem.id)}><FaCircleXmark className="delete-icon" size={25} /></button>
                </div>
                <div className={`form-wrapper ${openEducation === educationItem.id ? "open" : ""}`}>
                  <form className="education-form">
                    <div className="input-div">
                      <label htmlFor={`institution-${educationItem.id}`}>School</label>
                      <input type="text" id={`institution-${educationItem.id}`} placeholder="School Name" value={educationItem.institution} onChange={(e) => updateEducation(educationItem.id, "institution", e.target.value)} />
                    </div>
                    <div className="input-div">
                      <label htmlFor={`degree-${educationItem.id}`}>Degree</label>
                      <input type="text" id={`degree-${educationItem.id}`} placeholder="Degree" value={educationItem.degree} onChange={(e) => updateEducation(educationItem.id, "degree", e.target.value)} />
                    </div>
                    <div className="date-container">
                      <div className="input-div">
                        <label htmlFor={`start-date-${educationItem.id}`}>Start Date</label>
                        <input type="text" id={`start-date-${educationItem.id}`} placeholder='MM/YYYY' value={educationItem.startDate} onChange={(e) => updateEducation(educationItem.id, "startDate", e.target.value)} />
                      </div>
                      <div className="input-div">
                        <label htmlFor={`end-date-${educationItem.id}`}>End Date</label>
                        <input type="text" id={`end-date-${educationItem.id}`} placeholder='MM/YYYY' value={educationItem.endDate} onChange={(e) => updateEducation(educationItem.id, "endDate", e.target.value)} />
                      </div>
                    </div>
                    <div className="input-div">
                      <label htmlFor={`school-location-${educationItem.id}`}>Location</label>
                      <input type="text" id={`school-location-${educationItem.id}`} placeholder="School Location" value={educationItem.location} onChange={(e) => updateEducation(educationItem.id, "location", e.target.value)} />
                    </div>
                  </form>
                </div>
              </div>
            ))
          )}
          <button
            className="add-button"
            onClick={() => {
              const id = crypto.randomUUID();
              addEducation(id);
              setOpenEducation(id);
            }}>
            <FaPlus size={14} />
            Education
          </button>
        </div>
      </div>
    </div >
  )
}

export default EducationForm