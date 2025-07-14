import Input from './input';

const Education = () => {
  return (
    <div>
      <h1>Education</h1>
      <form action="" method="get">
        <Input id={'school'} type={'text'} label={'School'} />
        <Input id={'degree'} type={'text'} label={'Degree'} />
        <Input id={'startDate'} type={'date'} label={'Start Date'} />
        <Input id={'endDate'} type={'date'} label={'End Date'} />
        <Input id={'location'} type={'text'} label={'Location'} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Education;
