import { Carousel } from "antd";
import "./slide.css";
import Btn from "../../global/Btn";

const slidesData = [
  { id: "slide1", title: "ساعت مجلسی", content: "Your content for slide 1" },
  { id: "slide2", title: "ساعت مجلسی", content: "Your content for slide 2" },
  { id: "slide3", title: "ساعت مجلسی", content: "Your content for slide 3" },
  { id: "slide4", title: "ساعت مجلسی", content: "Your content for slide 4" },
];

const Slide = () => (
  <Carousel ش className="w-[90%] mx-auto m-5 shadow-sm relative">
    {slidesData.map((slide) => (
      <div
        key={slide.id}
        className="flex flex-col items-center justify-center p-5"
      >
        <div id={slide.id} className="relative w-full">
          {/* Placeholder for slide image or content */}
          <div className="slide-image h-64 w-full bg-gray-200 mb-4 flex items-center justify-center">
            <span className="text-gray-500">{slide.content}</span>
          </div>
          <Btn />
        </div>
        <h1 className="text-4xl font-mono uppercase font-bold text-center mt-4">
          {slide.title}
        </h1>
      </div>
    ))}
  </Carousel>
);

export default Slide;
