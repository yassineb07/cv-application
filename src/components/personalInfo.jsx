import Input from './input';

const PersonalInfo = ({ values, onChange }) => {
  return (
    <div className="cv-section">
      <h1>Personal Details</h1>
      <form action="" method="get">
        <Input
          name={'fullName'}
          value={values.fullName}
          label={'Full Name'}
          onChange={onChange}
        />
        <Input
          name={'position'}
          value={values.position}
          label={'Position'}
          onChange={onChange}
        />
        <Input
          name={'email'}
          value={values.email}
          type={'email'}
          label={'Email'}
          onChange={onChange}
        />
        <Input
          name={'phone'}
          value={values.phone}
          type={'tel'}
          label={'Phone Number'}
          onChange={onChange}
        />
        <Input
          name={'address'}
          value={values.address}
          label={'Address'}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
