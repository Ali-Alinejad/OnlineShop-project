// src/Order.jsx
import { useState } from "react";
import NavbarHeader from "../Navbar/NavbarHeader";
import Category from "./Category";
import Selection from "./Selection";

function Order() {
  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <div>
      <NavbarHeader />
      <div className="flex flex-row-reverse justify-between gap-0 max-sm:flex-col  max-sm:  ">
        <div className="w-[40vh] mr-16  row-start-1 max-sm:scale-75 max-sm:w-54  max-sm:h-0" >
          <Selection
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
        <div className="w-[40vh] gap-0 max-sm:scale-75   max-sm:mt-72 ">
          <Category selectedProduct={selectedProduct} />
        </div>
      </div>
    </div>
  );
}

export default Order;
