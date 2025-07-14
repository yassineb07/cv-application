import '/src/styles/cvCanvas.css';

const CvCanvas = ({ userData }) => {
  const personalInfo = userData.personalInfo;
  const education = userData.education;
  const experience = userData.experience;

  const educationItems = education.map((item) => {
    return (
      <div>
        <div className="flexcol">
          <p>
            {item.start} - {item.end}{' '}
          </p>
          <p>{item.location}</p>
        </div>
        <div className="flexcol">
          <p>{item.univName}</p>
          <p>{item.degree}</p>
        </div>
      </div>
    );
  });

  const experienceItems = experience.map((item) => {
    return (
      <div>
        <div className="flexcol">
          <p>
            {item.start} - {item.end}{' '}
          </p>
          <p>{item.location}</p>
        </div>
        <div className="flexcol">
          <p>{item.companyName}</p>
          <p>{item.position}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="canvas">
      <section className="personalInfo">
        <h1 className="name">{personalInfo.name}</h1>
        <p>{personalInfo.job}</p>
        <div className="info">
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
          <p>{personalInfo.address}</p>
        </div>
      </section>
      <section className="education">
        <h2>Education</h2>
        {educationItems}
      </section>
      <section className="experience">
        <h2>Work Experience</h2>
        {experienceItems}
      </section>
    </div>
  );
};

export default CvCanvas;
