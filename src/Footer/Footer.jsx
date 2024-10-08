// src/components/Footer.jsx
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTelegram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
    setEmail("");
  };

  return (
    <motion.footer
      className="text-gray-900 mt-20 h-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-4 w-full h-auto bg-stone-100 border-rose-700 border-t-4 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between mt-10 p-14">
          <div className="mb-4 md:mb-0">
            <h2 className="text-rose-800 text-4xl font-bold">ElectroShop</h2>
            <p className="mt-2 text-gray-700">پیش قدم در تکنولوژی</p>
            <p className="mt-2 text-gray-700">
              ما بهترین محصولات الکترونیکی را با قیمت مناسب ارائه می‌دهیم.
            </p>
            <div className="flex items-center mt-4">
              <FaEnvelope className="mr-2" />
              <p>پشتیبانی 24 ساعته</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row ">
            <ul className="flex flex-col md:flex-row max-md:space-x-8">
              <li>
                <Button auto flat color="error" className="hover:bg-red-700">
                  خانه
                </Button>
              </li>
              <li>
                <Button auto flat color="error" className="hover:bg-red-700">
                  درباره ما
                </Button>
              </li>
              <li>
                <Button auto flat color="error" className="hover:bg-red-700">
                  خدمات
                </Button>
              </li>
              <li>
                <Button auto flat color="error" className="hover:bg-red-700">
                  محصولات
                </Button>
              </li>
              <li>
                <Button auto flat color="error" className="hover:bg-red-700">
                  وبلاگ
                </Button>
              </li>
              <li>
                <Button auto flat color="error" className="hover:bg-red-700">
                  پشتیبانی
                </Button>
              </li>
              <li>
                <Button auto flat color="error" className="hover:bg-red-700">
                  تماس با ما
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-row justify-center border-t-1 border-rose-700 
        
        max-sm:flex-col
        "
        >
          <div className="flex flex-col items-center mt-4 p-8 pr-0">
            <h3 className="text-gray-700 font-bold mb-2 text-lg">
              برای دریافت آخرین اخبار ایمیل خود را وارد کنید
            </h3>

            <form onSubmit={handleEmailSubmit} className="flex space-x-2">
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="ایمیل "
                className="w-64 border-1 border-rose-500 rounded-md  max-sm:w-32
                
       
                
                
                "
                color=""
                required
              />
              <Button
                type="submit"
                color="default"
                auto
                className="hover:bg-rose-700"
              >
                تایید
              </Button>
            </form>
          </div>

          <div className="flex flex-row items-center m-10 gap-8 mt-14 max-sm:m-0  max-sm:gap-2">
            <motion.a
              href="https://github.com/Ali-Alinejad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-700 hover:text-red-500 transition duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={30} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ali-alinejad-1b5827202/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-700 hover:text-red-500 transition duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={30} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/alialineejad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-700 hover:text-red-500 transition duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram size={30} />
            </motion.a>
            <motion.a
              href="https://t.me/Alinjad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-700 hover:text-red-500 transition duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTelegram size={30} />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 border-t border-rose-700 pt-4">
          <p className="text-center text-sm mt-4 text-gray-800 pb-2">
            © 2024 created by Ali Alinejad | ElectroShop.
            کلیه حقوق محفوظ است.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
