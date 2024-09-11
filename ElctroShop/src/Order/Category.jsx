import { useEffect, useState } from "react";
import Cart from "../cart/cart";
import useApi from "../cart/Api";
import { Spinner } from "react-bootstrap";
import Selection from "./Selection";
import { motion } from "framer-motion";

function Category() {
  const [filteredData, setFilteredData] = useState([]);
  const { cartData, loading, error } = useApi();

  useEffect(() => {
    // Filter the data when the data changes
    if (cartData && cartData.length > 0) {
      const filtered = cartData.filter((item) => item.Price === "999$"); // استفاده از filter به جای slice
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
      <div
        id="main"
        className="border-l-2 border-rose-700 xl:w-[30%] max-sm:opacity-0 md:w-[50%] h-[89vh] p-10"
      >
        <Selection />
      </div>
      <div className="w-[80%]">
        <div className="sm:w-[55%] xl:w-[71%] max-sm:w-[100%] h-[88%] overflow-y-scroll fixed">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
          >
            <Cart items={filteredData} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Category;
