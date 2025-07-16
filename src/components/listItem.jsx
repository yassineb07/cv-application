const ListItem = ({ id, name, isActive, onShow, children }) => {
  console.log({ id, name, isActive, onShow, children });
  return (
    <div id={id} onClick={onShow}>
      {isActive ? children : <h2>{name}</h2>}
    </div>
  );
};

export default ListItem;
