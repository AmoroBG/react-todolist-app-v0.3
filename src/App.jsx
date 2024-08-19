import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("Daily Todos")) || []
  );
  const [search, setSearch] = useState("");
  const [newItem, setNewItem] = useState("");

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("Daily Todos", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("Daily Todos", JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    const id = items.length ? Number(items[items.length - 1].id) + 1 : 1;
    const myNewItem = { id, checked: false, item: newItem };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    setNewItem("");
    localStorage.setItem("Daily Todos", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header heading="Todo List App" />
      <Main
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        search={search}
        setSearch={setSearch}
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Footer heading="Todo List App" />
    </div>
  );
}

export default App;
