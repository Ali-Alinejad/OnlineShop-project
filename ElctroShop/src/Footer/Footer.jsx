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
      className="text-white mt-20 h-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-4 w-full h-auto bg-rose-900 ">
        <div className="flex flex-col md:flex-row justify-between mt-10 p-14">
          <div className="mb-4 md:mb-0">
            <h2 className="text-rose-200 text-4xl font-bold">ElectroShop</h2>
            <p className="mt-2 text-gray-400">پیش قدم در تکنولوژی</p>
            <p className="mt-2 text-gray-400">
              ما بهترین محصولات الکترونیکی را با قیمت مناسب ارائه می‌دهیم.
            </p>
            <div className="flex items-center mt-4">
              <FaEnvelope className="mr-2" />
              <p>پشتیبانی 24 ساعته</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <ul className="flex flex-col md:flex-row md:space-x-8">
              <li>
                <Button auto flat color="error" className="hover:bg-red-100">
                  خانه
                </Button>
              </li>
              <li>
                <Button auto flat color="error" className="hover:bg-red-100">
                  درباره ما
                </Button>
              </li>
              <li>
                <Button auto flat color="error" className="hover:bg-red-100">
                  خدمات
                </Button>
              </li>
              <li>
                <Button auto flat color="error" className="hover:bg-red-100">
                  محصولات
                </Button>
              </li>
              <li>
                <Button auto flat color="error" className="hover:bg-red-100">
                  وبلاگ
                </Button>
              </li>
              <li>
                <Button auto flat color="error" className="hover:bg-red-100">
                  پشتیبانی
                </Button>
              </li>
              <li>
                <Button auto flat color="error" className="hover:bg-red-100">
                  تماس با ما
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row justify-center border-t-1 ">
          <div className="flex flex-col items-center mt-4 p-8 pr-0">
            <h3 className="text-rose-50 font-bold mb-2 text-lg">
              برای دریافت آخرین اخبار ایمیل خود را وارد کنید
            </h3>

            <form onSubmit={handleEmailSubmit} className="flex space-x-2">
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="ایمیل خود را وارد کنید"
                className="w-64"
                color=""
                required
              />
              <Button
                type="submit"
                color="default"
                auto
                className="hover:bg-red-400"
              >
                تایید
              </Button>
            </form>
          </div>

          <div className="flex flex-row items-center m-10 gap-8 mt-14">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-100 hover:text-red-200 transition duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={30} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-100 hover:text-red-200 transition duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={30} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-100 hover:text-red-200 transition duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram size={30} />
            </motion.a>
            <motion.a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-100 hover:text-red-200 transition duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTelegram size={30} />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4">
          <p className="text-center text-sm mt-4 text-gray-200 pb-2">
            © {new Date().getFullYear()} ElectroShop. کلیه حقوق محفوظ است.
          </p>
        </div>
      </div>
      <style>{`
        @keyframes borderAnimation {
          0% {
            border-color: black;
          }
          50% {
            border-color: red;
          }
          100% {
            border-color: black;
          }
        }
        .border-anim {
          animation: borderAnimation 3s infinite;
        }
      `}</style>
    </motion.footer>
  );
};

export default Footer;
