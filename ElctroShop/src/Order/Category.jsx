/* eslint-disable react/prop-types */
// src/Category.jsx
import { useEffect, useState } from "react";
import Cart from "../cart/cart";
import useApi from "../cart/Api";
import { Spinner } from "@nextui-org/react";
import { motion } from "framer-motion";

function Category({ selectedProduct }) {
  const [filteredData, setFilteredData] = useState([]);
  const { cartData, loading, error } = useApi();

  useEffect(() => {
    if (cartData && cartData.length > 0) {
      let filtered = cartData;
      if (selectedProduct) {
        filtered = cartData.filter(
          (item) => item.features.type["fa"] === selectedProduct
        );
      }
      setFilteredData(filtered);
    }
  }, [cartData, selectedProduct]);

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
    <div className="flex flex-row-reverse gap-1 w-[140vh] h-full">
      <div
        id="main"
        className="border-r-2  w-full border-rose-700 xl:w-[100%] max-sm:opacity-0 md:w-[50%] h-[89vh] p-10"
      >
        {/* Selection component is already included in Order */}
      </div>
      <div className="w-[80%]">
        <div className="sm:w-[55%] xl:w-[73%] max-sm:w-[100%] h-[88%] overflow-y-scroll fixed">
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
