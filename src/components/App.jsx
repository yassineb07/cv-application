import '/src/styles/App.css';
import CvCanvas from './cvCanvas';
import PersonalInfo from './personalInfo';
import Education from './education';
import Experience from './experience';
import { useState } from 'react';

const userDataExample = {
  personalInfo: {
    fullName: 'john doe',
    job: 'software engineer',
    email: 'john@doe',
    phone: '555 555 555',
    address: 'address',
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: 'london uni',
      location: 'london',
      degree: 'cs',
      start: '2/9/2018',
      end: '25/7/2021',
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: 'google',
      location: 'california',
      position: 'engineer',
      start: '2020',
      end: 'present',
    },
  ],
};

function App() {
  const [personalInfo, setPersonalInfo] = useState(
    userDataExample.personalInfo
  );
  const [education, setEducation] = useState(userDataExample.education);
  const [experience, setExperience] = useState(userDataExample.experience);

  const handlePersonalChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleEducationChange = (e) => {
    const newEducation = education.map((item) => {
      if (e.target.parentElement.parentElement.parentElement.id === item.id) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    setEducation(newEducation);
  };

  const handleExperienceChange = (e) => {
    const newExperience = experience.map((item) => {
      if (e.target.parentElement.parentElement.parentElement.id === item.id) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    setExperience(newExperience);
  };

  return (
    <div className="app">
      <div className="userInput">
        <PersonalInfo onChange={handlePersonalChange} />
        <Education educationList={education} onChange={handleEducationChange} />
        <Experience
          experienceList={experience}
          onChange={handleExperienceChange}
        />
      </div>
      <CvCanvas
        personalInfo={personalInfo}
        education={education}
        experience={experience}
      />
    </div>
  );
}

export default App;
