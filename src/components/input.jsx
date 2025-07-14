const Input = ({ id, type, label }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </div>
  );
};

export default Input;
