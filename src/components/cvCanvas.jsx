import '/src/styles/cvCanvas.css';

const CvCanvas = ({ personalInfo, education, experience }) => {
  const educationItems = education.map((item) => {
    return (
      <div key={item.id}>
        <div className="flexcol">
          <p>
            {item.start} - {item.end}{' '}
          </p>
          <p>{item.location}</p>
        </div>
        <div className="flexcol">
          <p>{item.school}</p>
          <p>{item.degree}</p>
        </div>
      </div>
    );
  });

  const experienceItems = experience.map((item) => {
    return (
      <div key={item.id}>
        <div className="flexcol">
          <p>
            {item.start} - {item.end}{' '}
          </p>
          <p>{item.location}</p>
        </div>
        <div className="flexcol">
          <p>{item.company}</p>
          <p>{item.position}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="canvas">
      <section className="personalInfo">
        <h1 className="name">{personalInfo.fullName}</h1>
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
