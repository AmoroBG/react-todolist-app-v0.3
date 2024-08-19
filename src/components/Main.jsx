import React from "react";

const Main = ({ items, handleCheck }) => {
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
             
            />
            <label htmlFor="item">{item.item}</label>
            <button>Delete Item</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
