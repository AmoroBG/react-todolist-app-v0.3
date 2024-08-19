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

  const handleCheck = (id) => {
    console.log(id);
  };

  return (
    <div className="App">
      <Header heading="Todo List App" />
      <Main items={items} handleCheck={handleCheck} />
      <Footer items={items} />
    </div>
  );
}

export default App;
