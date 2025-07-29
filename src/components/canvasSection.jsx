import Icon from '@mdi/react';

const CanvasSection = ({ title, list, icon }) => {
  return !list.length || list.every((e) => e === null) ? null : (
    <section className="canvas-section">
      <h2 className="canvas-section-title">
        <Icon path={icon} size={1.4} /> {title}
      </h2>
      {list}
    </section>
  );
};

export default CanvasSection;
