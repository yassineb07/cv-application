const Input = ({
  name,
  value,
  type = 'text',
  label,
  placeHolder,
  onChange,
}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
