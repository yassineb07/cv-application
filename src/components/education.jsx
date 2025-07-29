import { useState } from 'react';
import Input from './input';
import ListItem from './listItem';

const Education = ({ educationList, onChange, onAdd, onRemove, onHide }) => {
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
            name={'school'}
            value={item.school}
            label={'School'}
            placeHolder={'Enter School / University'}
            onChange={onChange}
          />
          <Input
            name={'degree'}
            value={item.degree}
            label={'Degree'}
            placeHolder={'Enter Degree'}
            onChange={onChange}
          />
          <div className="date-inputs">
            <Input
              name={'start'}
              value={item.start}
              label={'Start Date'}
              placeHolder={'MM/YYYY'}
              onChange={onChange}
            />
            <Input
              name={'end'}
              value={item.end}
              label={'End Date'}
              placeHolder={'MM/YYYY'}
              onChange={onChange}
            />
          </div>
          <Input
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
      <h1>Education</h1>
      {educationItems}
      <button
        onClick={() => {
          onAdd();
          setActiveIndex(educationList.length);
        }}
      >
        Add School
      </button>
    </div>
  );
};

export default Education;
