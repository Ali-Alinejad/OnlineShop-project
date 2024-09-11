import axios from "axios";
import Cart from "../cart/cart";
import { useState, useEffect } from "react";
import { Button, Link } from "@nextui-org/react";
import { ImArrowRight2 } from "react-icons/im";
import { motion } from "framer-motion";

function Collection() {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        const products = response.data;
        const filteredProducts = products.filter((product) => product.id <= 3);
        setFiltered(filteredProducts);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  // Corrected: Pass the function reference instead of invoking it

 

  return (
    <div className="flex flex-row mb-[700px]">
      <div className="w-[80%] h-[80vh] scale-100 max-sm:mt-[150px] max-sm:scale-75">
          <motion.div
          initial={{ opacity: 0 ,  }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <Cart items={filtered} />
          </motion.div>
      </div>
      <div className="w-[20%]">
        <motion.div
          initial={{ opacity: 0, y: 160, x: 0 }}
          whileInView={{ opacity: 1, y: 160, x: -100 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Link className="cursor-pointer" href="/order">
            <Button
              endContent={<ImArrowRight2 className="animate-bounce" />}
              className="w-56 h-40 text-xl bg-stone-200 shadow-inner text-rose-700 hover:bg-slate-100 hover:animate-appearance-in 
            max-sm:scale-50
            max-sm:w-48
            max-sm:p-0
            max-sm:ml-1
            max-sm:mt-[150px]"
            >
              محصولات بیشتر
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Collection;
