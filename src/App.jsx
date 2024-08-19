import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "Item 1" },
    { id: 2, checked: true, item: "Item 2" },
    { id: 3, checked: false, item: "Item 3" },
  ]);
  const [search, setSearch] = useState("");

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
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
      />
      <Footer heading="Todo List App" />
    </div>
  );
}

export default App;
