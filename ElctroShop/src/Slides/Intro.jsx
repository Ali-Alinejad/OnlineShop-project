import { Image } from "@nextui-org/react";
import intro from "../../public/images/macBook1.png";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";


function Intro() {
  return (
    <>
      <div>
       
       
          <Table
            isStriped
            aria-label=""
            className="absolute w-[30%] left-28 top-60 max-lg:opacity-0
          max-xl:opacity-0
          2xl:opacity-100"
          >
            <TableHeader>
              <TableColumn>نام</TableColumn>
              <TableColumn>مشخصات</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>برند</TableCell>
                <TableCell>اپل</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>رنگ بندی</TableCell>
                <TableCell>⬜⬛🟨</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>سایز صفحه</TableCell>
                <TableCell>14.5 اینچ</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>گارانتی</TableCell>
                <TableCell> دو سال</TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>ساخت</TableCell>
                <TableCell>امریکا </TableCell>
              </TableRow>
              <TableRow key="6">
                <TableCell>قطر</TableCell>
                <TableCell>3 سانت</TableCell>
              </TableRow>
            </TableBody>
          </Table>
    
      </div>
      <div
        className="relative mt-8 mx-auto rounded-2xl flex justify-end flex-row h-[70vh] w-[90%]  shadow-xl z-0
      
      max-sm:h-[40vh]
      
      
      "
      >
        <h1
          className="absolute max-lg:top-[85%]  max-lg:text-7xl 
        
        max-sm:text-5xl
        max-sm:top-[74%]


        lg:top-[80%]
        lg:text-7xl
        lg:left-[50%]
        
        opacity-50 font-thin left-4 top-12"
        >
          MAC BOOK PRO
        </h1>
          <motion.div
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1}}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
        <Button
          color="danger"
          size="lg"
          className=" absolute text-2xl  w-[560px] 
        
        max-sm:w-full
        max-sm:p-4
        max-sm:top-48
        max-sm:left-0
        max-sm:text-medium
        max-lg:top-96
      max-lg:left-20
        lg:top-[80%]
        2xl:left-5
        2xl:top-[63%]
        
       z-10 font-bold left-10 top-90 shadow-lg bg-gradient-to-b 
        from-rose-500 to-rose-800"
        >
          خرید اخرین مدل های لب تاپ
          </Button>
          </motion.div>
        <motion.Image
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image src={intro} className="z-0"></Image>
        </motion.Image>
      </div>
    </>
  );
}

export default Intro;
