import  { useEffect, useState } from "react";
import FakeApi from "../../Global/Api";
import Cart from "../../Global/cart";


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
    <div className="bg-white min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mx-20">
        {products.map((product) => (
          <Cart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Product;
