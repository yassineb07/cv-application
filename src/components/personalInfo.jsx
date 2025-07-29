import Input from './input';

const PersonalInfo = ({ values, onChange }) => {
  return (
    <div className="edit-section">
      <h1>Personal Details</h1>
      <form action="" method="get">
        <Input
          name={'fullName'}
          value={values.fullName}
          label={'Full Name'}
          placeHolder={'Enter Full Name'}
          onChange={onChange}
        />
        <Input
          name={'position'}
          value={values.position}
          label={'Position'}
          placeHolder={'Enter Target position or Current Role'}
          onChange={onChange}
        />
        <Input
          name={'email'}
          value={values.email}
          type={'email'}
          label={'Email'}
          placeHolder={'Enter email'}
          onChange={onChange}
        />
        <Input
          name={'phone'}
          value={values.phone}
          type={'tel'}
          label={'Phone Number'}
          placeHolder={'Enter phone Number'}
          onChange={onChange}
        />
        <Input
          name={'address'}
          value={values.address}
          label={'Address'}
          placeHolder={'City, Country'}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default PersonalInfo;
