import Icon from '@mdi/react';
import {
  mdiEmailOutline,
  mdiPhoneOutline,
  mdiMapMarkerOutline,
  mdiSchoolOutline,
  mdiBriefcaseOutline,
} from '@mdi/js';
import CanvasSection from './canvasSection';

const CvCanvas = ({ personalInfo, education, experience }) => {
  const educationItems = education.map((item) => {
    return item.hidden ? null : (
      <div className="canvas-section-item" key={item.id}>
        <div>
          <p>
            {item.start} - {item.end}{' '}
          </p>
          <p>{item.location}</p>
        </div>
        <div>
          <p>{item.school}</p>
          <p>{item.degree}</p>
        </div>
      </div>
    );
  });

  const experienceItems = experience.map((item) => {
    return item.hidden ? null : (
      <div className="canvas-section-item" key={item.id}>
        <div>
          <p>
            {item.start} - {item.end}{' '}
          </p>
          <p>{item.location}</p>
        </div>
        <div>
          <p>{item.company}</p>
          <p>{item.position}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="cv-canvas">
      <section className="personal-info">
        <div className="content-container">
          <h1 className="name">{personalInfo.fullName}</h1>
          <h2 className="job-title">{personalInfo.position}</h2>
          <div className="info">
            <p className="email">
              <Icon path={mdiEmailOutline} size={0.8} /> {personalInfo.email}
            </p>
            <p className="phone">
              <Icon path={mdiPhoneOutline} size={0.8} /> {personalInfo.phone}
            </p>
            <p className="address">
              <Icon path={mdiMapMarkerOutline} size={0.8} />{' '}
              {personalInfo.address}
            </p>
          </div>
        </div>
      </section>
      <CanvasSection
        title={'Education'}
        list={educationItems}
        icon={mdiSchoolOutline}
      />
      <CanvasSection
        title={'Work Experience'}
        list={experienceItems}
        icon={mdiBriefcaseOutline}
      />
    </div>
  );
};

export default CvCanvas;
