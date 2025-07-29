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
            name={'company'}
            value={item.company}
            label={'Company Name'}
            onChange={onChange}
          />
          <Input
            name={'position'}
            value={item.position}
            label={'Position'}
            onChange={onChange}
          />
          <Input
            name={'start'}
            value={item.start}
            label={'Start Date'}
            onChange={onChange}
          />
          <Input
            name={'end'}
            value={item.end}
            label={'End Date'}
            onChange={onChange}
          />
          <Input
            name={'location'}
            value={item.location}
            label={'Location'}
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
