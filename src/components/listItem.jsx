import Icon from '@mdi/react';
import {
  mdiDeleteOutline,
  mdiEyeOutline,
  mdiEyeOffOutline,
  mdiDragVariant,
} from '@mdi/js';

const Item = ({ title, onRemove, onHide, hidden }) => {
  return (
    <div className="item-closed">
      <h2>
        <Icon path={mdiDragVariant} size={1} /> {title}
      </h2>
      <div className="item-closed-buttons">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onHide(e);
          }}
        >
          {hidden ? (
            <Icon
              path={mdiEyeOffOutline}
              size={1}
              style={{ pointerEvents: 'none' }}
            />
          ) : (
            <Icon
              path={mdiEyeOutline}
              size={1}
              style={{ pointerEvents: 'none' }}
            />
          )}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(e);
          }}
        >
          <Icon
            path={mdiDeleteOutline}
            size={1}
            style={{ pointerEvents: 'none' }}
          />
        </button>
      </div>
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
  hidden,
}) => {
  return (
    <div className="item" id={id} onClick={onShow}>
      {isActive ? (
        children
      ) : (
        <Item
          title={name}
          onRemove={onRemove}
          onHide={onHide}
          hidden={hidden}
        />
      )}
    </div>
  );
};

export default ListItem;
