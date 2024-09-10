
import { motion } from "framer-motion";


function TextIntro() {
    
    return (
      <div>
        <div
          className="h-[50vh] mx-auto text-center text-5xl font-mono
            mt-40
            font-extrabold
            
            
            "
        >
          <motion.TextIntro
            className="text-gray-900 "
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: +250 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <h1 className="text">تجربه خریدی آسان و مطمعن </h1>
            <br />
          </motion.TextIntro>
          <motion.TextIntro
            className="text-gray-900 "
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: -40 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <h2>با اخرین تکنولوژی های ارائه شده</h2>
          </motion.TextIntro>
          <motion.TextIntro
            className="text-gray-900 "
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: -90 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <br />
            <h3>در</h3>
          </motion.TextIntro>
          <motion.TextIntro
            className="text-gray-900 "
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: -250 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <br />
           
          <h1>🌐جهان </h1>
          </motion.TextIntro>
        </div>
        <div className="w-full bg-rose-800 h-80">
          <p
            className="text-white text-4xl font-mono
                font-semibold
                underline
                text-center
                pt-28
                "
          >
            {" "}
            پر طرفدار ترین ها
          </p>
        </div>
      </div>
    );
}

export default TextIntro
