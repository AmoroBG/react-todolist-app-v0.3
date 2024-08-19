import React from "react";

const Main = ({ items }) => {
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">{item.item}</label>
            <button>Delete Item</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
