import '../styles/CvDisplay.css'
import { FaEnvelope, FaPhone, FaLocationDot, FaLinkedin, FaGlobe } from 'react-icons/fa6';

function CvDisplay({ cvData }) {
  return (
    <div className="cv-display">
      <div className="header">
        <h1>{cvData.personal.fullName}</h1>
        <div className="contact-info">
          <div className="contact contact-top">
            {cvData.personal.email && <p className="contact-email">
              <FaEnvelope />
              {cvData.personal.email}
            </p>}
            {cvData.personal.phone && <p className="contact-phone">
              <FaPhone />
              {cvData.personal.phone}
            </p>}
            {cvData.personal.location && <p className="contact-location">
              <FaLocationDot />
              {cvData.personal.location}
            </p>}
          </div>
          <div className="contact contact-bottom">
            {cvData.personal.linkedin && <p className="contact-linkedin">
              <FaLinkedin />
              {cvData.personal.linkedin}
            </p>}
            {cvData.personal.website && <p className="contact-website">
              <FaGlobe />
              {cvData.personal.website}
            </p>}
          </div>
        </div>
        {cvData.summary && <p className="summary">{cvData.summary}</p>}
      </div>
      <div className="cv-body">
        {cvData.education.length > 0 && (
          <section className="body-section education">
            <h2>Education</h2>
            {cvData.education.map((educationItem) => (
              <div className="education-container" key={educationItem.id}>
                <p className="education-date">{educationItem.startDate} - {educationItem.endDate}</p>
                <p className="education-location">{educationItem.location}</p>
                <p className="education-institution">{educationItem.institution}</p>
                <p className="education-degree">{educationItem.degree}</p>
              </div>
            ))}
          </section>
        )}
        {cvData.experiences.length > 0 && (
          <section className="body-section experiences">
            <h2>Professional Experience</h2>
            {cvData.experiences.map((experiencesItem) => (
              <div className="experiences-container" key={experiencesItem.id}>
                <p className="experiences-date">{experiencesItem.startDate} - {experiencesItem.endDate}</p>
                <p className="experiences-location">{experiencesItem.location}</p>
                <p className="experiences-company">{experiencesItem.company}</p>
                <p className="experiences-role">{experiencesItem.role}</p>
                <p className="experiences-description">{experiencesItem.description}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  )
}

export default CvDisplay