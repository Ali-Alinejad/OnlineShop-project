

import Cart from "../cart/cart";
import Footer from "../Footer/Footer";
import NavbarHeader from "../Navbar/NavbarHeader";
import Intro from "../Slides/Intro";





function Home() {
  return (
    <div>
      <NavbarHeader/>
      <Intro />
      <Cart />
      <Footer />
    </div>
  );
}

export default Home;
