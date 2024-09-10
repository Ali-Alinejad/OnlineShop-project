
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from "@nextui-org/react";
import Sorting from "./Sorting";



export default function Selection() {
  

    return (
      <>
        <div>
          <div className="flex flex-col gap-3">
            <Table color={"warning"} selectionMode="single" aria-label="Filter">
              <TableHeader>
                <TableColumn>جنس</TableColumn>
                <TableColumn>رنگ بندی</TableColumn>
                <TableColumn>وضعیت</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1" className="h-20 cursor-pointer">
                  <TableCell>لب تاپ</TableCell>
                  <TableCell>🟡⚪⚫</TableCell>
                  <TableCell className=" rounded-2xl  text-center  ring-8 ring-green-300  ">
                    موجود
                  </TableCell>
                </TableRow>
                <TableRow key="2" className="h-20 cursor-pointer">
                  <TableCell>پاور بانک</TableCell>
                  <TableCell>⚪⚫</TableCell>
                  <TableCell className=" rounded-2xl  text-center  ring-8 ring-green-300  ">
                    موجود
                  </TableCell>
                </TableRow>
                <TableRow key="3" className="h-20 cursor-pointer">
                  <TableCell>دوربین</TableCell>
                  <TableCell> 🚫</TableCell>
                  <TableCell className=" rounded-2xl  text-center  ring-8 ring-red-300  ">
                    ناموجود
                  </TableCell>
                </TableRow>
                <TableRow key="4" className="h-20 cursor-pointer">
                  <TableCell>موبایل</TableCell>
                  <TableCell>⚪⚫ </TableCell>
                  <TableCell className=" rounded-2xl  text-center  ring-8 ring-green-300  ">
                    موجود
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Sorting />
        </div>
      </>
    );
}
