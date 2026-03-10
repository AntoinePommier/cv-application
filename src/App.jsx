import { useState } from 'react'
import './styles/App.css'
import CvForm from './components/CvForm/CvForm.jsx'
import CvDisplay from './components/CvDisplay.jsx';

function App() {
  const exampleCv = () => ({
    personal: {
      fullName: "Daniel Carter",
      email: "daniel.carter@email.com",
      phone: "+1 (415) 555-2741",
      location: "San Francisco, CA, USA",
      linkedin: "linkedin.com/in/danielcarter",
      website: "danielcarter.dev"
    },

    summary:
      "Frontend Engineer with 6+ years of experience building scalable web applications. Specialized in React, performance optimization, and accessible UI systems. Passionate about clean architecture and developer experience.",

    experiences: [
      {
        id: crypto.randomUUID(),
        startDate: "06/2021",
        endDate: "Present",
        location: "San Francisco, CA",
        company: "Helix Digital",
        role: "Senior Frontend Engineer",
        description:
          "Led the development of a scalable component library used across 5 internal products. Improved application performance by 35% through code-splitting and bundle optimization. Mentored 3 junior developers and conducted technical interviews."
      },

      {
        id: crypto.randomUUID(),
        startDate: "03/2019",
        endDate: "05/2021",
        location: "Seattle, WA",
        company: "Northwave Technologies",
        role: "Frontend Developer",
        description:
          "Developed and maintained React-based dashboards for enterprise clients. Collaborated with UX designers to implement responsive and accessible interfaces. Reduced bug reports by 20% by improving test coverage with Jest and React Testing Library."
      },

      {
        id: crypto.randomUUID(),
        startDate: "08/2017",
        endDate: "02/2019",
        location: "Austin, TX",
        company: "BrightLabs Studio",
        role: "Junior Web Developer",
        description:
          "Built responsive marketing websites and internal tools using JavaScript and modern CSS. Assisted in migrating legacy jQuery codebases to React. Contributed to performance audits and accessibility improvements."
      }
    ],

    education: [
      {
        id: crypto.randomUUID(),
        startDate: "09/2013",
        endDate: "05/2017",
        location: "Austin, TX, USA",
        institution: "University of Texas at Austin",
        degree: "Bachelor of Science in Computer Science"
      },
      {
        id: crypto.randomUUID(),
        startDate: "09/2013",
        endDate: "05/2017",
        location: "Austin, TX, USA",
        institution: "University of Sophia",
        degree: "Bachelor of Science in Computer Science"
      }
    ]
  });

  const [cvData, setCvData] = useState(exampleCv);

  function updatePersonal(field, value) {
    setCvData(prev => ({
      ...prev, personal: { ...prev.personal, [field]: value }
    }));
  }

  function updateSummary(value) {
    setCvData(prev => ({
      ...prev, summary: value
    }));
  }

  function updateEducation(id, field, value) {
    setCvData(prev => ({
      ...prev, education: prev.education.map((item) =>
        item.id === id ? { ...item, [field]: value } : item)
    }));
  }

  function deleteEducation(id) {
    setCvData(prev => ({
      ...prev, education: prev.education.filter((item) => item.id !== id)
    }));
  }

  function addEducation(id) {
    setCvData(prev => ({
      ...prev, education: [...prev.education, {
        id,
        startDate: "",
        endDate: "",
        location: "",
        institution: "New School",
        degree: ""
      }]
    }));
  }

  function updateExperience(id, field, value) {
    setCvData(prev => ({
      ...prev, experiences: prev.experiences.map((item) =>
        item.id === id ? { ...item, [field]: value } : item)
    }));
  }

  function deleteExperience(id) {
    setCvData(prev => ({
      ...prev, experiences: prev.experiences.filter((item) => item.id !== id)
    }));
  }

  function addExperience(id) {
    setCvData(prev => ({
      ...prev, experiences: [...prev.experiences, {
        id,
        startDate: "",
        endDate: "",
        location: "",
        company: "",
        role: "",
        description: ""
      }]
    }));
  }

  return (
    <>
      <CvForm
        cvData={cvData}
        updatePersonal={updatePersonal}
        updateSummary={updateSummary}
        updateEducation={updateEducation}
        deleteEducation={deleteEducation}
        addEducation={addEducation}
        updateExperience={updateExperience}
        deleteExperience={deleteExperience}
        addExperience={addExperience}
      />

      <CvDisplay
        cvData={cvData}
      />
    </>
  )
}

export default App
