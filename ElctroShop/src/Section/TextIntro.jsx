
import { motion } from "framer-motion";


function TextIntro() {
  return (
    <div>
      <div
        className="h-[250vh] mx-auto text-center text-5xl font-mono
            my-40
            font-extrabold
            
            
            "
      >
        <motion.p
          initial={{ opacity: 0, y: +300 }}
          whileInView={{ opacity: 1, y: 50 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="font-extralight scale-y-[8] text-rose-700 leading-tight">
            {" "}
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
          initial={{ opacity: 0, y: +1000 }}
          whileInView={{ opacity: 1, y: 550 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="font-extralight scale-y-[8]  text-rose-700"> |</div>
        </motion.p>
      </div>
    </div>
  );
}

export default TextIntro;
