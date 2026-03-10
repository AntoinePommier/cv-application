import { useState } from 'react';
import { FaChevronDown, FaCaretDown, FaCircle, FaCircleXmark, FaBriefcase, FaPlus } from 'react-icons/fa6';


function ExperienceForm({ experienceData, updateExperience, deleteExperience, addExperience, open, onToggle }) {
  const [openExperience, setOpenExperience] = useState();

  return (
    <div className="form-container">
      <button onClick={onToggle}>
        <span className="button-title"><FaBriefcase />Experience</span>
        <span className={`chevron ${open ? "open" : ""}`}><FaChevronDown size={15} /></span>
      </button>
      <div className={`form-wrapper ${open ? "open" : ""}`}>
        <div className="form-list">
          {experienceData.length > 0 && (
            experienceData.map((experienceItem) => (
              <div className="experience-item-container" key={experienceItem.id}>
                <div className="buttons-container">
                  <button className="main-button" onClick={() => openExperience === experienceItem.id ? setOpenExperience(null) : setOpenExperience(experienceItem.id)}>
                    <span className="button-title"><FaCircle size={7} /> {experienceItem.company}</span>
                    <span className={`chevron ${openExperience === experienceItem.id ? "open" : ""}`}><FaCaretDown size={15} /></span>
                  </button>
                  <button className="delete-button" onClick={() => deleteExperience(experienceItem.id)}><FaCircleXmark className="delete-icon" size={25} /></button>
                </div>
                <div className={`form-wrapper ${openExperience === experienceItem.id ? "open" : ""}`}>
                  <form className="experience-form">
                    <div className="input-div">
                      <label htmlFor={`company-${experienceItem.id}`}>Company</label>
                      <input type="text" id={`company-${experienceItem.id}`} placeholder="Company Name" value={experienceItem.company} onChange={(e) => updateExperience(experienceItem.id, "company", e.target.value)} />
                    </div>
                    <div className="input-div">
                      <label htmlFor={`degree-${experienceItem.id}`}>Role</label>
                      <input type="text" id={`degree-${experienceItem.id}`} placeholder="Role" value={experienceItem.role} onChange={(e) => updateExperience(experienceItem.id, "role", e.target.value)} />
                    </div>
                    <div className="date-container">
                      <div className="input-div">
                        <label htmlFor={`start-date-${experienceItem.id}`}>Start Date</label>
                        <input type="text" id={`start-date-${experienceItem.id}`} placeholder='MM/YYYY' value={experienceItem.startDate} onChange={(e) => updateExperience(experienceItem.id, "startDate", e.target.value)} />
                      </div>
                      <div className="input-div">
                        <label htmlFor={`end-date-${experienceItem.id}`}>End Date</label>
                        <input type="text" id={`end-date-${experienceItem.id}`} placeholder='MM/YYYY' value={experienceItem.endDate} onChange={(e) => updateExperience(experienceItem.id, "endDate", e.target.value)} />
                      </div>
                    </div>
                    <div className="input-div">
                      <label htmlFor={`company-location-${experienceItem.id}`}>Location</label>
                      <input type="text" id={`company-location-${experienceItem.id}`} placeholder="Company Location" value={experienceItem.location} onChange={(e) => updateExperience(experienceItem.id, "location", e.target.value)} />
                    </div>
                    <div className="input-div">
                      <label htmlFor={`role-description-${experienceItem.id}`}>Role Description</label>
                      <textarea id={`role-description-${experienceItem.id}`} className='role-description-textarea' placeholder="Description" value={experienceItem.description} maxLength={250} onChange={(e) => updateExperience(experienceItem.id, "description", e.target.value)} />
                      <p className="char-count">
                        {experienceItem.description.length} / 250
                      </p>
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
              addExperience(id);
              setOpenExperience(id);
            }}>
            <FaPlus size={14} />
            Experience
          </button>
        </div>
      </div>
    </div >
  )
}

export default ExperienceForm