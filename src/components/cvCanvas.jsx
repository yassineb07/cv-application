const CvCanvas = ({ personalInfo, education, experience }) => {
  const educationItems = education.map((item) => {
    return item.hidden ? null : (
      <div className="item" key={item.id}>
        <div className="flex-col">
          <p>
            {item.start} - {item.end}{' '}
          </p>
          <p>{item.location}</p>
        </div>
        <div className="flex-col">
          <p>{item.school}</p>
          <p>{item.degree}</p>
        </div>
      </div>
    );
  });

  const experienceItems = experience.map((item) => {
    return (
      <div className="item" key={item.id}>
        <div className="flex-col">
          <p>
            {item.start} - {item.end}{' '}
          </p>
          <p>{item.location}</p>
        </div>
        <div className="flex-col">
          <p>{item.company}</p>
          <p>{item.position}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="cv-canvas">
      <section className="personal-info">
        <h1 className="name">{personalInfo.fullName}</h1>
        <p>{personalInfo.position}</p>
        <div className="info">
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
          <p>{personalInfo.address}</p>
        </div>
      </section>
      <section className="education">
        <h2 className="title">Education</h2>
        {educationItems}
      </section>
      <section className="experience">
        <h2 className="title">Work Experience</h2>
        {experienceItems}
      </section>
    </div>
  );
};

export default CvCanvas;
