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
      <div className="flex flex-row-reverse justify-between ">
        <div className="w-[40vh] mr-16 ">
          <Selection
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
        <div className="w-[40vh] ">
          <Category selectedProduct={selectedProduct} />
        </div>
      </div>
    </div>
  );
}

export default Order;
