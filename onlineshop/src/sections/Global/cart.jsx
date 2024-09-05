
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function Cart({ product }) {
  return (
    <Card className="p-4 flex text-center items-center justify-center w-3/12 h-80 m-3 mt-20">
      <CardBody className="overflow-visible py-2 m-3">
        <Image
          alt={product.title}
          className="object-cover rounded-xl"
          src={product.image}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col justify-center">
        <p className="text-tiny uppercase font-bold">{product.category}</p>
        <small className="text-default-500">{product.description}</small>
        <h4 className="font-bold text-large">${product.price}</h4>
      </CardHeader>
    </Card>
  );
}
