const Item = ({ title, onRemove }) => {
  return (
    <>
      <h2>{title}</h2>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove(e);
        }}
      >
        X
      </button>
    </>
  );
};

const ListItem = ({ id, name, isActive, children, onShow, onRemove }) => {
  return (
    <div className="item" id={id} onClick={onShow}>
      {isActive ? children : <Item title={name} onRemove={onRemove} />}
    </div>
  );
};

export default ListItem;
