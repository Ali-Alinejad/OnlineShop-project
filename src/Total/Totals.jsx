import { Button, Spinner } from "@nextui-org/react";
import NavbarHeader from "../Navbar/NavbarHeader";
import { Link } from "react-router-dom";

function Totals() {
  return (
    <div>
      <NavbarHeader />
      <>
        <div className="flex gap-4"></div>
        <div style={{ textAlign: "center", marginTop: "200px" }}>
          <h1 className="text-3xl font-semibold">
            <br />
            این قسمت برای تمرین انواع حالت های
            <br />
            <br />
            استفاده می شود state management
          </h1>
          <br />

          <br />
          <br />

          <Button>
            <Link to="/">
              <span> صفحه اصلی</span>
            </Link>
            <Spinner color="white" />
          </Button>
        </div>
      </>
    </div>
  );
}

export default Totals;
