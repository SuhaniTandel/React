import React from "react";
import Person from "./components/Person";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Person name="Suhani" age={19} />
      <Person name="Vinit" age={20} />
      
      <Product name="Phone" price="$549" />
      <Product name="Laptop" price="$1550" />
    </div>
  );
}

export default App;