const Input = ({ name, type = 'text', label, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} onChange={onChange} />
    </div>
  );
};

export default Input;
