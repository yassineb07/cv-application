const Input = ({
  className = '',
  name,
  value,
  type = 'text',
  label,
  placeHolder,
  onChange,
}) => {
  let classAtr = `input ${className}`;
  return (
    <div className={classAtr}>
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
