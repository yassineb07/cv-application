import Input from './input';

const Experience = ({ experienceList, onChange }) => {
  const experienceItems = experienceList.map((item) => {
    return (
      <div id={item.id} key={item.id}>
        <form action="" method="get">
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
      </div>
    );
  });

  return (
    <div>
      <h1>Work Experience</h1>
      {experienceItems}
    </div>
  );
};

export default Experience;
