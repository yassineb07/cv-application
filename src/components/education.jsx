import { useState } from 'react';
import Input from './input';
import ListItem from './listItem';

const Education = ({ educationList, onChange, onClick }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const educationItems = educationList.map((item, index) => {
    return (
      <ListItem
        key={item.id}
        id={item.id}
        name={item.school}
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
          <Input name={'school'} label={'School'} onChange={onChange} />
          <Input name={'degree'} label={'Degree'} onChange={onChange} />
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
    <div className="cv-section">
      <h1>Education</h1>
      {educationItems}
      <button
        onClick={() => {
          onClick();
          setActiveIndex(educationList.length);
        }}
      >
        Add School
      </button>
    </div>
  );
};

export default Education;
