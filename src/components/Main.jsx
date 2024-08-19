import React from "react";
import ListItem from "./ListItem";

const Main = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      ) : (
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1.3rem",
            color: "royalblue",
            textAlign: "center",
            margin: "2rem 0",
          }}
        >
          You have no Todos today... Create Todos or enjoy the day with fun!
        </p>
      )}
    </main>
  );
};

export default Main;
