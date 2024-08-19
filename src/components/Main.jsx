import React from "react";

const Main = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label
              htmlFor="item"
              style={
                item.checked
                  ? { textDecoration: "line-through", color: "red" }
                  : null
              }
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.item}
            </label>
            <button onClick={() => handleDelete(item.id)}>Delete Item</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
