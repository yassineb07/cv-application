import Icon from '@mdi/react';

const CvSection = ({ title, list, icon }) => {
  return !list.length || list.every((e) => e === null) ? null : (
    <section className="education">
      <h2 className="title">
        <Icon path={icon} size={1.4} /> {title}
      </h2>
      {list}
    </section>
  );
};

export default CvSection;
