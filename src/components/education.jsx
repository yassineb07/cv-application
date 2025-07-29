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
            className="school"
            name={'school'}
            value={item.school}
            label={'School'}
            placeHolder={'Enter School / University'}
            onChange={onChange}
          />
          <Input
            className="degree"
            name={'degree'}
            value={item.degree}
            label={'Degree'}
            placeHolder={'Enter Degree'}
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
