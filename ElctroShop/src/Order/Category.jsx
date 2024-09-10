import { useEffect, useState } from "react";
import Cart from "../cart/cart";
import useApi from "../cart/Api";
import { Spinner } from "react-bootstrap";
import Selection from "./Selection";

function Category() {
  const [filteredData, setFilteredData] = useState([]);

  const { cartData, loading, error } = useApi();


  useEffect(() => {
    // Filter the data when the data changes
    if (cartData && cartData.length > 0) {
      const filtered = cartData.filter(
        (item) => item.Price === "12345 $"
      );
      setFilteredData(filtered);
    }
  }, [cartData]);


  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  // Error state
  if (error) {
    console.log(filteredData);
    return (
      <div className="text-xl border-2 divide-dashed text-center mt-2 p-10 flex flex-col mx-auto">
        <h1>{error}</h1>
        <a href="/" className="text-blue-500 underline">
          Refresh
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-row-reverse gap-1 w-full h-full">
    <Selection />
      <div className="w-[80%]">
        <div className="w-[80%] h-[88%] overflow-y-scroll fixed">
          <Cart items={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default Category;
