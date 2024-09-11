import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Sorting from "./Sorting";
import { useEffect, useState } from "react";

function Selection() {
  const [keySelect, setKeySelect] = useState(0);

  useEffect(() => {
    // اینجا پیام را در کنسول چاپ می‌کنیم
    if (keySelect > 0) {
      handleRowSelection(keySelect);
    }
  }, [keySelect]);

  // تابع برای مدیریت انتخاب ردیف
  const handleRowSelection = (selectedKey) => {
    switch (selectedKey) {
      case 1:
        console.log("لب تاپ انتخاب شد");
        break;
      case 2:
        console.log("پاور بانک انتخاب شد");
        break;
      case 3:
        console.log("موبایل انتخاب شد");
        break;
      case 4:
        console.log("پرینتر انتخاب شد");
        break;
      case 5:
        console.log("دوربین انتخاب شد");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col gap-3">
          <Sorting />
          <Table color={"warning"} selectionMode="single" aria-label="Filter">
            <TableHeader>
              <TableColumn>جنس</TableColumn>
              <TableColumn>رنگ بندی</TableColumn>
              <TableColumn>وضعیت</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow
                key="1"
                className="h-24 cursor-pointer"
                onClick={() => setKeySelect(1)} // تغییر به onClick
              >
                <TableCell>لب تاپ</TableCell>
                <TableCell>🟡⚪⚫</TableCell>
                <TableCell className="rounded-2xl text-center ring-8 ring-green-300">
                  موجود
                </TableCell>
              </TableRow>
              <TableRow
                key="2"
                className="h-24 cursor-pointer"
                onClick={() => setKeySelect(2)} // تغییر به onClick
              >
                <TableCell>پاور بانک</TableCell>
                <TableCell>⚪⚫</TableCell>
                <TableCell className="rounded-2xl text-center ring-8 ring-green-300">
                  موجود
                </TableCell>
              </TableRow>
              <TableRow
                key="3"
                className="h-24 cursor-pointer"
                onClick={() => setKeySelect(3)} // تغییر به onClick
              >
                <TableCell>موبایل</TableCell>
                <TableCell>⚪⚫</TableCell>
                <TableCell className="rounded-2xl text-center ring-8 ring-green-300">
                  موجود
                </TableCell>
              </TableRow>
              <TableRow
                key="4"
                className="h-24 cursor-pointer"
                onClick={() => setKeySelect(4)} // تغییر به onClick
              >
                <TableCell>پرینتر</TableCell>
                <TableCell>⚪⚫</TableCell>
                <TableCell className="rounded-2xl text-center ring-8 ring-green-300">
                  موجود
                </TableCell>
              </TableRow>
              <TableRow
                key="5"
                className="h-24 cursor-pointer"
                onClick={() => setKeySelect(5)} // تغییر به onClick
              >
                <TableCell>دوربین</TableCell>
                <TableCell>🚫</TableCell>
                <TableCell className="rounded-2xl text-center ring-8 ring-red-300">
                  ناموجود
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Selection;
