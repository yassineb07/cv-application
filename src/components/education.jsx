import Input from './input';

const Education = ({ educationList, onChange }) => {
  const educationItems = educationList.map((item) => {
    return (
      <div id={item.id} key={item.id}>
        <form action="" method="get">
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
      </div>
    );
  });

  return (
    <div>
      <h1>Education</h1>
      {educationItems}
    </div>
  );
};

export default Education;
