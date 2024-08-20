import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import api from "./todos/api";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [newItem, setNewItem] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get("/items");
        setItems(response.data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, []);

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/items/${id}`);
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem) return;
    const id = items.length ? Number(items[items.length - 1].id) + 1 : 1;
    const myNewItem = { id, checked: false, item: newItem };
    try {
      const response = await api.post("/items", myNewItem);
      const listItems = [...items, response.data];
      setItems(listItems);
      setNewItem("");
    } catch (err) {
      setFetchError(err.message);
    }
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
        fetchError={fetchError}
        isLoading={isLoading}
      />
      <Footer heading="Todo List App" />
    </div>
  );
}

export default App;
