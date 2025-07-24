const CvSection = ({ title, list }) => {
  return !list.length || list.every((e) => e === null) ? null : (
    <section className="education">
      <h2 className="title">{title}</h2>
      {list}
    </section>
  );
};

export default CvSection;
