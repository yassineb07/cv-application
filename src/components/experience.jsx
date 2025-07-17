import { useState } from 'react';
import Input from './input';
import ListItem from './listItem';

const Experience = ({ experienceList, onChange, onClick }) => {
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
      >
        <form
          action=""
          method="get"
          onSubmit={(e) => {
            e.preventDefault();
            setActiveIndex(-1);
          }}
        >
          <Input name={'company'} label={'Company Name'} onChange={onChange} />
          <Input name={'position'} label={'Position'} onChange={onChange} />
          <Input
            name={'start'}
            type={'date'}
            label={'Start Date'}
            onChange={onChange}
          />
          <Input
            name={'end'}
            type={'date'}
            label={'End Date'}
            onChange={onChange}
          />
          <Input name={'location'} label={'Location'} onChange={onChange} />
          <button type="submit">save</button>
        </form>
      </ListItem>
    );
  });

  return (
    <div>
      <h1>Work Experience</h1>
      {experienceItems}
      <button
        onClick={() => {
          onClick();
          setActiveIndex(experienceList.length);
        }}
      >
        Add Experience
      </button>
    </div>
  );
};

export default Experience;
