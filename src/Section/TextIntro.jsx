import { motion } from "framer-motion";
import Transparent from "../../public/images/macbook.png"
import { Image } from "@nextui-org/react";
function TextIntro() {
  return (
    <div>
      <div
        className="h-[230vh] mx-auto text-center text-5xl 
            mt-40 
            font-extrabold max-sm:scale-50 max-sm:0 max-sm:h-[100vh] mb-96 "
      >
        <motion.p
          initial={{ opacity: 0, y: +300 }}
          whileInView={{ opacity: 1, y: 50 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="font-extralight scale-y-[8] text-rose-700 leading-tight ">
            |
          </div>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 400 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className=" text-rose-700 mt-52  text-8xl">خریدی مطمئن</div>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: +600 }}
          whileInView={{ opacity: 1, y: 280 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="font-extralight scale-y-[10] text-rose-700"> |</div>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 600 }}
          whileInView={{ opacity: 1, y: 300 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className=" text-rose-700 mt-52  text-8xl"> با خیالی راحت</div>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 900 }}
          whileInView={{ opacity: 1, y: 710 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="font-extralight scale-y-[15] text-rose-700 shadow-lg
          
          max-sm:shadow-none
          
          ">
            
            |
          </div>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 800, x: 0 }}
          whileInView={{ opacity: 1, y: 800, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 4 }}
        >
          <div
            className=" mt-36   shadow-inner
          shadow-danger-200 text-8xl max-sm:text-right    right-96  bg-rose-700 w-[100%] text-white max-sm:text-7xl
          max-sm:w-[100%] 
      
          z-5
          "
          >
            فروشگاه الکترو
          </div>
        </motion.p>
        <motion.p
          initial={{ x: -330, y: 280 }}
          whileInView={{ x: -100, y: 280 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <div className=" text-rose-700 ">
            <div className=" scale-50 left-20 ">
              <Image
                src={Transparent}
                className="z-0 max-lg:scale-100  
            lg:scale-75
            md:scale-50
           
            xl:scale-90
            max-md:scale-75
            max-md:z-0
     
           xl:left-0
           xl:p-0

          top-100
          left-100
            "
              />
            </div>
          </div>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50, x: 0 }}
          whileInView={{ opacity: 1, y: 20, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
          }}
        >
          <div
            className="  mt-[620px] text-5xl max-sm:text-right   leading-1 w-[100%] text-white bg-rose-700 
          shadow-lg
          shadow-danger-700
          max-sm:text-3xl
          max-sm:mt-[560px]
          max-sm:w-[100%]

          "
          >
            پر طرفدار ترین محصولات فروشگاه
          </div>
        </motion.p>
      </div>
    </div>
  );
}

export default TextIntro;
