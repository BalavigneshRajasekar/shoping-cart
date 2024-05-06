import { useState } from "react";

import "./App.css";
import Product from "./Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Product></Product>
      </div>
    </div>
  );
}

export default App;
