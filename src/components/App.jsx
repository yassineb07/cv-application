import '/src/styles/App.css';
import CvCanvas from './cvCanvas';
import PersonalInfo from './personalInfo';
import Education from './education';
import Experience from './experience';
import { useState } from 'react';

const userDataExample = {
  personalInfo: {
    fullName: 'john doe',
    position: 'software engineer',
    email: 'john@doe',
    phone: '555 555 555',
    address: 'address',
  },
  education: [
    {
      id: crypto.randomUUID(),
      hidden: false,
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
      hidden: false,
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

  const handleEducationAdd = () => {
    setEducation([
      ...education,
      {
        id: crypto.randomUUID(),
        hidden: false,
        school: '',
        location: '',
        degree: '',
        start: '',
        end: '',
      },
    ]);
  };

  const handleEducationRemove = (e) => {
    setEducation(
      education.filter(
        (item) =>
          item.id !== e.target.parentElement.parentElement.parentElement.id
      )
    );
  };

  const handleEducationHide = (e) => {
    const newEducation = education.map((item) => {
      if (item.id === e.target.parentElement.parentElement.parentElement.id) {
        return { ...item, hidden: item.hidden ? false : true };
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

  const handleExperienceAdd = () => {
    setExperience([
      ...experience,
      {
        id: crypto.randomUUID(),
        company: '',
        location: '',
        position: '',
        start: '',
        end: '',
      },
    ]);
  };

  const handleExperienceRemove = (e) => {
    setExperience(
      experience.filter(
        (item) =>
          item.id !== e.target.parentElement.parentElement.parentElement.id
      )
    );
  };

  const handleExperienceHide = (e) => {
    const newExperience = experience.map((item) => {
      if (item.id === e.target.parentElement.parentElement.parentElement.id) {
        return { ...item, hidden: item.hidden ? false : true };
      } else {
        return item;
      }
    });
    setExperience(newExperience);
  };

  return (
    <div className="app">
      <div className="cv-edit">
        <PersonalInfo values={personalInfo} onChange={handlePersonalChange} />
        <Education
          educationList={education}
          onChange={handleEducationChange}
          onAdd={handleEducationAdd}
          onRemove={handleEducationRemove}
          onHide={handleEducationHide}
        />
        <Experience
          experienceList={experience}
          onChange={handleExperienceChange}
          onAdd={handleExperienceAdd}
          onRemove={handleExperienceRemove}
          onHide={handleExperienceHide}
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
