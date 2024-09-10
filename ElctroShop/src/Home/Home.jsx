


import Footer from "../Footer/Footer";
import NavbarHeader from "../Navbar/NavbarHeader";
import TextIntro from "../Section/TextIntro";
import Collection from "../Section/Collection";

 
import Intro from "../Slides/Intro";





function Home() {
  return (
    <div className="bg-stone-50">
      <NavbarHeader/>
      <Intro />
      <TextIntro /> 
      <Collection />
      <Footer />
    </div>
  );
}

export default Home;
