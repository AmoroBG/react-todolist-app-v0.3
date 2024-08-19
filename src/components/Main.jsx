import React, { useState } from "react";
import ListItem from "./ListItem";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

const Main = ({
  items,
  handleCheck,
  handleDelete,
  search,
  setSearch,
  newItem,
  setNewItem,
  handleSubmit,
}) => {
  return (
    <main>
      <AddItem
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <SearchItem search={search} setSearch={setSearch} />
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
