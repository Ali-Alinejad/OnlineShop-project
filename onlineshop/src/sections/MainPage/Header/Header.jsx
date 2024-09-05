import OrderPic from "../../Global/orderPic.jsx";
import { Button } from "@nextui-org/react";
// app/components/ThemeSwitcher.tsx
"use client";


function Header() {
 
  return (
    <>
      <div className="bg-slate-800 w-full h-[30vh] p-0 mt-0 ">
        <ul className="flex flex-row-reverse p-10">
          <li className="">
            <Button
              className="  h-auto  m-0 rounded-full rounded-l-none border-2 hover:bg-warning-500 "
              color="warning"
            >
              <OrderPic />
            </Button>
          </li>
          <li className="">
            <Button
              className="  h-auto   m-0 rounded-full rounded-r-none  border-2 hover:bg-success-500 "
              color="success"
            >
              <OrderPic />
            </Button>
          </li>
       
        </ul>
      </div>
    </>
  );
}

export default Header;
