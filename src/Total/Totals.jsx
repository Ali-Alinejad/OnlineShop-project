import { Button, Input } from "@nextui-org/react";
import NavbarHeader from "../Navbar/NavbarHeader";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Totals() {
  const location = useLocation();
  const { selectedItems } = location.state || { selectedItems: [] }; // دریافت selectedItems
  const [discountCode, setDiscountCode] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);

  // محاسبه قیمت نهایی
  useEffect(() => {
    const totalPrice = selectedItems.reduce((total, item) => total + item.Price, 0);
    setFinalPrice(totalPrice);
  }, [selectedItems]);

  // استفاده از useEffect برای نظارت بر تغییرات selectedItems
  useEffect(() => {
    console.log("Selected Items in Totals:", selectedItems);
  }, [selectedItems]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavbarHeader />
      <div className="flex gap-4"></div>
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          مجموع انتخاب شده‌ها: {selectedItems.length} محصول
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {selectedItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 bg-white shadow-md"
            >
              <h3 className="text-lg font-bold">{item.title["fa"]}</h3>
              <p className="text-gray-600">قیمت: {item.Price} تومان</p>
              <img
              
                src={item.image_url}
                alt={item.title["fa"]}
                className="w-32 h-32 object-cover mx-auto mt-2  w-fit"
              />
              {console.log(item.image)}
            </div>
          ))}
        </div>

        <div className="mb-4">
          <Input
            label="کد تخفیف"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="w-full max-w-xs mx-auto"
          />
          <Button className="mt-2" onClick={() => alert("کد تخفیف معتبر نیست ❌")}>
            اعمال کد تخفیف
          </Button>
        </div>

        <h3 className="text-xl font-semibold mt-4">
          قیمت نهایی: {finalPrice} تومان
        </h3>
        <br />
        <Button
          color="danger"
          className="w-40 mt-10 h-12"
        >
          <Link to="/">
            <span> پرداخت </span>
          </Link>
         
        </Button>
      </div>
    </div>
  );
}

export default Totals;