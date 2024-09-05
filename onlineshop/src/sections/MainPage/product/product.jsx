import  { useEffect, useState } from "react";
import FakeApi from "../../Global/Api";
import Cart from "../../Global/Cart";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await FakeApi();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <Cart key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Product;
