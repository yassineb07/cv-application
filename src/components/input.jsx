const Input = ({ name, type = 'text', label, onChange }) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} name={name} onChange={onChange} />
    </div>
  );
};

export default Input;
