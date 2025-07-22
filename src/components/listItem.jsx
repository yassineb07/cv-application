const Item = ({ title, onRemove, onHide }) => {
  return (
    <div className="item-closed">
      <h2>{title}</h2>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onHide(e);
        }}
      >
        H
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove(e);
        }}
      >
        X
      </button>
    </div>
  );
};

const ListItem = ({
  id,
  name,
  isActive,
  children,
  onShow,
  onRemove,
  onHide,
}) => {
  return (
    <div className="item" id={id} onClick={onShow}>
      {isActive ? (
        children
      ) : (
        <Item title={name} onRemove={onRemove} onHide={onHide} />
      )}
    </div>
  );
};

export default ListItem;
