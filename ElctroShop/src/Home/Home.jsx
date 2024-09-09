

import Api from "../cart/Api";
import Footer from "../Footer/Footer";
import NavbarHeader from "../Navbar/NavbarHeader";
/* import Section from "../Section/Section"; */
import Intro from "../Slides/Intro";





function Home() {
  return (
    <div className="bg-stone-50">
      <NavbarHeader/>
      <Intro />
      {/* <Section/> */}
    <Api/>
      <Footer />
    </div>
  );
}

export default Home;
