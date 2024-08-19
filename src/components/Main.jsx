import React, { useState } from "react";
import ListItem from "./ListItem";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

const Main = ({
  items,
  setItems,
  handleCheck,
  handleDelete,
  search,
  setSearch,
}) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    const id = items.length ? Number(items[items.length - 1].id) + 1 : 1;
    const myNewItem = { id, checked: false, item: newItem };
    setNewItem("");
    setItems([...items, myNewItem]);
    console.log(myNewItem);
  };

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
