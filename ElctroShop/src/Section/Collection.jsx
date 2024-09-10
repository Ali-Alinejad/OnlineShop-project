import axios from "axios";
import Cart from "../cart/cart";
import { useState, useEffect } from "react";

function Collection() {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        const products = response.data;
        const filteredProducts = products.filter((product) => product.id <= 4);
        setFiltered(filteredProducts);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  return (
    <div>
      <div className="bg-slate-800 w-full h-[80vh] ">
        <Cart items={filtered} />
      </div>
    </div>
  );
}

export default Collection;
