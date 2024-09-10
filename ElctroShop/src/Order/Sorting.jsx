import { Select, SelectItem } from "@nextui-org/react";



export default function Sorting() {
  return (
    <div className="mx-auto mb-8  w-[100%]  max-sm:opacity-0 ">
      <Select className="max-w-xs " label="مرتب سازی" color="default">
        <SelectItem key="ArBeGeR" className="border-b-2">
         ⬇️ مرتب سازی بر اساس قیمت کم به زیاد
        </SelectItem>
        <SelectItem key="GerBeAr" className="border-b-2">
         ⬆️ مرتب سازی بر اساس قیمت زیاد به کم
        </SelectItem>
        <SelectItem key="ArBeGeR" >
        🆕مرتب سازی بر اساس تازه ترین ها
        </SelectItem>
      </Select>
    </div>
  );
}
