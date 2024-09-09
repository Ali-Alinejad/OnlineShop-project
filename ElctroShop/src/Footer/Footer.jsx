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
    // Here you can add your email submission logic
    alert(`Email submitted: ${email}`);
    setEmail("");
  };

  return (
    <motion.footer
      className="bg-white text-black mt-20 h-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-4 w-full h-auto bg-white  border-t-2 border-anim">
        <div className="flex flex-col md:flex-row justify-between mt-10 p-14 bg-white">
          <div className="mb-4 md:mb-0">
            <h2 className="text-rose-600 text-3xl font-bold">ElectroShop</h2>
            <p className="mt-2 text-gray-600">پیش قدم در تکنولوژی</p>
            <p className="mt-2 text-gray-600">
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
                  تماس با ما
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Email Subscription Section */}
        <div className="flex flex-col items-center mt-8">
          <h3 className="text-rose-600 font-bold mb-2">
            برای دریافت آخرین اخبار ایمیل خود را وارد کنید:
          </h3>
          <form
            onSubmit={handleEmailSubmit}
            className="flex items-center space-x-2"
          >
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="ایمیل خود را وارد کنید"
              className="w-64"
              required
            />
            <Button
              type="submit"
              color="danger"
              auto
              className="hover:bg-red-400"
            >
              تایید
            </Button>
          </form>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 hover:text-red-400 transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 hover:text-red-400 transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 hover:text-red-400 transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram size={30} />
          </motion.a>
          <motion.a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 hover:text-red-400 transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTelegram size={30} />
          </motion.a>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-rose-600 font-bold mb-2">
                اتاق خبر دیجی‌کالا
              </h3>
              <p className="text-gray-600">آخرین اخبار و مقالات</p>
            </div>
            <div>
              <h3 className="text-rose-600 font-bold mb-2">فروش در دیجی‌کالا</h3>
              <p className="text-gray-600">فرصت‌های شغلی</p>
              <p className="text-gray-600">گزارش تخلف در دیجی‌کالا</p>
            </div>
            <div>
              <h3 className="text-rose-600 font-bold mb-2">تماس با دیجی‌کالا</h3>
              <p className="text-gray-600">درباره دیجی‌کالا</p>
              <p className="text-gray-600">خدمات مشتریان</p>
            </div>
          </div>
          <p className="text-center text-sm mt-4 text-gray-600">
            © {new Date().getFullYear()} ElectroShop. کلیه حقوق محفوظ است.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
