import PersonalInfo from './personalInfo';
import Education from './education';
import Experience from './experience';

function CvCustom() {
  return (
    <div className="userInput">
      <PersonalInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default CvCustom;
