import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { useState } from "react";

export default function Cart({ product }) {
  const [showDetails, setShowDetails] = useState(false);
  const { rate } = product.rating;

  const handleImageClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="group relative bg-white">
      <Card
        className={`p-4 flex flex-col items-center justify-center w-full h-[450px] m-10 bg-white transition duration-300 ease-in-out transform hover:border-2 hover:ring-4 ring-yellow-400 border-yellow-400 group-hover:z-10 mx-auto ${
          showDetails ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={`flex flex-col ${
            showDetails ? "hidden" : "flex"
          } items-center justify-center w-full h-full`}
        >
          <CardBody
            className="overflow-visible py-2 bg-white transition duration-300 ease-in-out transform hover:scale-1.5"
            onClick={handleImageClick}
          >
            <Image
              alt={product.title}
              className="object-contain rounded-xl h-60 w-full"
              src={product.image}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col justify-center text-center bg-white">
            <p className="text-tiny uppercase font-bold text-black">
              {product.title}
            </p>
            <small className="text-default-500 text-black">
              {rate} <span>⭐</span>
            </small>
            <Button color="danger" className="font-bold text-2xl m-5">
              ${product.price}
            </Button>
          </CardHeader>
        </div>
      </Card>
      {showDetails && (
        <div className="absolute inset-0 flex items-center justify-center bg-white transition duration-300 ease-in-out">
          <p className="text-tiny uppercase font-bold text-black">
            {product.description}
          </p>
        </div>
      )}
    </div>
  );
}
