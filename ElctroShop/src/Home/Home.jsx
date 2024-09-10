


import Footer from "../Footer/Footer";
import NavbarHeader from "../Navbar/NavbarHeader";
import TextIntro from "../Section/TextIntro"; 
 
import Intro from "../Slides/Intro";





function Home() {
  return (
    <div className="bg-stone-50">
      <NavbarHeader/>
      <Intro />
      <TextIntro/> 
      <Footer />
    </div>
  );
}

export default Home;
