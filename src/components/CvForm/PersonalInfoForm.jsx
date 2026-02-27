function PersonalInfoForm({ cvData, updatePersonal }) {
  console.log(cvData)

  return (
    <form className="personal-info-form">
      <div className="input-div">
        <label htmlFor="full-name">Full Name</label>
        <input type="text" id="full-name" placeholder="First and last name" value={cvData.personal.fullName} onChange={(e) => updatePersonal("fullName", e.target.value)} />
      </div>
      <div className="input-div">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" value={cvData.personal.email} onChange={(e) => updatePersonal("email", e.target.value)} />
      </div>
    </form>
  )
}

export default PersonalInfoForm