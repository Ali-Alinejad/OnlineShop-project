import OrderPic from "../../Global/orderPic.jsx";
import { Button } from "@nextui-org/react";
import "./Header.css";
("use client");

function Header() {
  return (
    <>
      <div
        className="bg-slate-800 w-full max-sm:h-[30vh] max-md:h-[50vh] 
        max-lg:h-[70hv]  "
        id="MainPic"
      >
        <ul
          className="flex flex-row-reverse  p-5  z-10
         max-lg:scale-100

        "
        >
          <li className="m-2">
            <Button
              className=" max-sm:scale-50  max-md:scale-75 max-lg:scale-100 m-0 rounded-md  border-2 hover:bg-warning-500 "
              color="warning"
            >
              <OrderPic />
            </Button>
          </li>
          <li className="m-2">
            <Button
              className=" max-sm:scale-50  max-md:scale-75 max-lg:scale-100  m-0 rounded-md    border-2 hover:bg-success-500 bg-blend-multiply bg-gray-200"
              color="primary"
            >
              <OrderPic />
            </Button>
          </li>
        </ul>
        <p className="mx-2 p-2 justify-end text-center max-lg:mt-32  max-md:mt-10  max-sm:text-5xl    transition duration-300 max-sm:translate-y-[-20px]">
          بهترین تجربه خرید{" "}
          <span className="font-light text-yellow-500"> انلاین</span>
        </p>
      </div>
    </>
  );
}

export default Header;
