import "./Btn.css";

function Btn() {
  return (
    <div>
      <button
        className=" flex justify-between   gap-5 items-center  shadow-xl text-lg text-white bg-stone-900 lg:font-semibold border-gray-50 
        absolute
        left-[110%]
        top-[200%]
          
          
          
          
          max-sm:w-[150px]
          max-md:w-[200px]
          max-2xl:w-[300px]
          xl:w-[300px]
          sm:w-[150px]
          justify-start

          
          before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-yellow-600 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-2 overflow-hidden border-2 rounded-full group active:scale-105
          active:ring-2 ring-offset-yellow-300
          
        
                "
      >
        خرید
        <svg
          viewBox="0 0 16 19"
          className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2
            
                    rotate-45"
        >
          <path
            className="fill-yellow-400 group-hover:fill-yellow-800 animate-pulse"
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default Btn;
