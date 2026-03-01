function PersonalInfoForm({ cvData, updatePersonal }) {
  console.log(cvData)

  return (
    <form className="personal-info-form">
      <h1>Personal Details</h1>
      <div className="input-div">
        <label htmlFor="full-name">Full Name</label>
        <input type="text" id="full-name" placeholder="First and last name" value={cvData.personal.fullName} onChange={(e) => updatePersonal("fullName", e.target.value)} />
      </div>
      <div className="input-div">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" value={cvData.personal.email} onChange={(e) => updatePersonal("email", e.target.value)} />
      </div>
      <div className="input-div">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" placeholder="Phone" value={cvData.personal.phone} onChange={(e) => updatePersonal("phone", e.target.value)} />
      </div>
      <div className="input-div">
        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="Location" value={cvData.personal.location} onChange={(e) => updatePersonal("location", e.target.value)} />
      </div>
      <div className="input-div">
        <label htmlFor="linkedin">Linkedin</label>
        <input type="text" id="linkedin" placeholder="Linkedin" value={cvData.personal.linkedin} onChange={(e) => updatePersonal("linkedin", e.target.value)} />
      </div>
      <div className="input-div">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" placeholder="Website" value={cvData.personal.website} onChange={(e) => updatePersonal("website", e.target.value)} />
      </div>
    </form>
  )
}

export default PersonalInfoForm