import OrderLogo from "../images/order.png";
import "./orderLogo.css";

function OrderPic() {
  return (
    <img
      src={OrderLogo}
      alt="Shop"
      className="h-10 bg-cover"
      id="orderLogo"
    />
  );
}

export default OrderPic;
