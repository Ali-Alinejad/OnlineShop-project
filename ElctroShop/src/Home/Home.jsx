

import Cart from "../cart/cart";
import Footer from "../Footer/Footer";
import NavbarHeader from "../Navbar/NavbarHeader";
import Intro from "../Slides/Intro";





function Home() {
  return (
    <div className="bg-stone-50">
      <NavbarHeader/>
      <Intro />
      <Cart />
      <Footer />
    </div>
  );
}

export default Home;
