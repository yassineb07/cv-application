import Icon from '@mdi/react';
import {
  mdiEmailOutline,
  mdiPhoneOutline,
  mdiMapMarkerOutline,
  mdiSchoolOutline,
  mdiBriefcaseOutline,
} from '@mdi/js';
import CvSection from './cvSection';

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
    return item.hidden ? null : (
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
        <p className="job-title">{personalInfo.position}</p>
        <div className="info">
          <p>
            <Icon path={mdiEmailOutline} size={1} /> {personalInfo.email}
          </p>
          <p>
            <Icon path={mdiPhoneOutline} size={1} /> {personalInfo.phone}
          </p>
          <p>
            <Icon path={mdiMapMarkerOutline} size={1} /> {personalInfo.address}
          </p>
        </div>
      </section>
      <CvSection
        className="education"
        title={'Education'}
        list={educationItems}
        icon={mdiSchoolOutline}
      />
      <CvSection
        className="experience"
        title={'Work Experience'}
        list={experienceItems}
        icon={mdiBriefcaseOutline}
      />
    </div>
  );
};

export default CvCanvas;
