

import Cart from "../cart/cart";
import NavbarHeader from "../Navbar/NavbarHeader";
import Slides from "../Slides/slides";

function Home() {
    return (
      <div>
        <NavbarHeader />
        <Slides/>
        <Cart/>
      </div>
    );
}

export default Home
