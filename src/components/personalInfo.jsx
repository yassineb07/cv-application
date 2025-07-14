import Input from './input';

const PersonalInfo = () => {
  return (
    <div>
      <h1>Personal Details</h1>
      <form action="" method="get">
        <Input id={'fullName'} type={'text'} label={'Full Name'} />
        <Input id={'email'} type={'email'} label={'Email'} />
        <Input id={'phone'} type={'tel'} label={'Phone Number'} />
        <Input id={'address'} type={'text'} label={'Address'} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default PersonalInfo;
