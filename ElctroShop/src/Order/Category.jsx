import Api from "../cart/Api";

function Category() {
  const data = Api();

  
  return (
    <>
      <div className="flex flex-row-reverse gap-1 w-full h-full ">
        <div className=" border-l-2 border-rose-700 w-[20%] h-[89vh] flex-col flex ">
          sdsad
          <br />
          sd
          <br />
          sd sd <br />
          sd sd
        </div>
        <div className=" w-[80%]  ">
          <div className="w-[80%] h-[88%] overflow-y-scroll fixed">{data}</div>
        </div>
      </div>
    </>
  );
}

export default Category;
