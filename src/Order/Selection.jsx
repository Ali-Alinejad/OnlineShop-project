/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/Selection.jsx
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Sorting from "./Sorting";

function Selection({ selectedProduct, setSelectedProduct }) {
  return (
    <div className="">
      <div className="">
        <Sorting />
        <Table color={"warning"} selectionMode="single" aria-label="Filter">
          <TableHeader>
            <TableColumn>جنس</TableColumn>
            <TableColumn>رنگ بندی</TableColumn>
            <TableColumn>وضعیت</TableColumn>
          </TableHeader>
          <TableBody className="" >
            {[
              { id: "1", name: "لبتاپ", color: "🟡⚪⚫", status: "موجود" },
              { id: "2", name: "پاور بانک", color: "⚪⚫", status: "موجود" },
              { id: "3", name: "موبایل", color: "⚪⚫", status: "موجود" },
              { id: "4", name: "پرینتر", color: "⚪⚫", status: "موجود" },
              { id: "5", name: "دوربین", color: "🚫", status: "ناموجود" },
            ].map((item) => (
              <TableRow
                key={item.id}
                className="h-24 max-sm:h-14  cursor-pointer"
                onClick={() => setSelectedProduct(item.name)} // Set selected product
              >
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.color}</TableCell>
                <TableCell
                  className={`rounded-2xl  text-center ring-8 ${
                    item.status === "موجود" ? "ring-green-300" : "ring-red-300"
                  }`}
                >
                  {item.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Selection;
