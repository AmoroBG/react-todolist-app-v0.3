import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [items, setItems] = useState([
    { id: 1, check: false, item: "Item 1" },
    { id: 2, check: false, item: "Item 2" },
    { id: 3, check: false, item: "Item 3" },
  ]);
  console.log(items);

  return (
    <div className="App">
      <Header heading="Todo List App" />
      <Main items={items} />
      <Footer items={items} />
    </div>
  );
}

export default App;
