import Input from './input';

const PersonalInfo = ({ onChange }) => {
  return (
    <div>
      <h1>Personal Details</h1>
      <form action="" method="get">
        <Input name={'fullName'} label={'Full Name'} onChange={onChange} />
        <Input
          name={'email'}
          type={'email'}
          label={'Email'}
          onChange={onChange}
        />
        <Input
          name={'phone'}
          type={'tel'}
          label={'Phone Number'}
          onChange={onChange}
        />
        <Input name={'address'} label={'Address'} onChange={onChange} />

        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default PersonalInfo;
