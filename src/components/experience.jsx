import Input from './input';

const Experience = () => {
  return (
    <div>
      <h1>Work Experience</h1>
      <form action="" method="get">
        <Input id={'companyName'} type={'text'} label={'Company Name'} />
        <Input id={'position'} type={'text'} label={'Position'} />
        <Input id={'startDate'} type={'date'} label={'Start Date'} />
        <Input id={'endDate'} type={'date'} label={'End Date'} />
        <Input id={'location'} type={'text'} label={'Location'} />
        <Input id={'description'} type={'text'} label={'Description'} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Experience;
