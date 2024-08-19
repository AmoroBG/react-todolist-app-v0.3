import React from "react";

const ListItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li >
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        htmlFor="item"
        style={
          item.checked ? { textDecoration: "line-through", color: "red" } : null
        }
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <button onClick={() => handleDelete(item.id)}>Delete Item</button>
    </li>
  );
};

export default ListItem;
