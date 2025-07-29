import { useState } from 'react';
import Input from './input';
import ListItem from './listItem';

const Experience = ({ experienceList, onChange, onAdd, onRemove, onHide }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const experienceItems = experienceList.map((item, index) => {
    return (
      <ListItem
        key={item.id}
        id={item.id}
        name={item.company}
        isActive={activeIndex === index}
        onShow={() => {
          setActiveIndex(index);
        }}
        onRemove={onRemove}
        onHide={onHide}
        hidden={item.hidden}
      >
        <form
          action=""
          method="get"
          onSubmit={(e) => {
            e.preventDefault();
            setActiveIndex(-1);
          }}
        >
          <Input
            className="company"
            name={'company'}
            value={item.company}
            label={'Company Name'}
            placeHolder={'Enter company name'}
            onChange={onChange}
          />
          <Input
            className="position"
            name={'position'}
            value={item.position}
            label={'Position'}
            placeHolder={'Enter job title'}
            onChange={onChange}
          />
          <Input
            className="start-date"
            name={'start'}
            value={item.start}
            label={'Start Date'}
            placeHolder={'MM/YYYY'}
            onChange={onChange}
          />
          <Input
            className="end-date"
            name={'end'}
            value={item.end}
            label={'End Date'}
            placeHolder={'MM/YYYY'}
            onChange={onChange}
          />
          <Input
            className="location"
            name={'location'}
            value={item.location}
            label={'Location'}
            placeHolder={'City, Country'}
            onChange={onChange}
          />
          <button type="submit">save</button>
        </form>
      </ListItem>
    );
  });

  return (
    <div className="edit-section">
      <h1>Work Experience</h1>
      {experienceItems}
      <button
        onClick={() => {
          onAdd();
          setActiveIndex(experienceList.length);
        }}
      >
        Add Experience
      </button>
    </div>
  );
};

export default Experience;
