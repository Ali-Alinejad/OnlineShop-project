import {  Carousel } from "antd";
import './slide.css';
import Btn from "../global/Btn";



const Slide = () => (
  <Carousel className="w-[70%] mx-auto m-5  shadow-sm relative">
    <div>
      <div id="slide1">
        <div id="slide1_item" className=""></div>
        <h1
          className="text-6xl font-mono uppercase
          font-bold  ml-[200px]  "
        >
          ساعت مجلسی
       <Btn/>
        </h1>
      </div>
    </div>
    <div>
      <div id="slide2"></div>
    </div>
    <div>
      <div id="slide3"></div>
    </div>
    <div>
      <div id="slide4"></div>
    </div>
  </Carousel>
);

export default Slide;
