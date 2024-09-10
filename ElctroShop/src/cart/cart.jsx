/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import { ImCircleRight } from "react-icons/im";
import { useLocation } from "react-router-dom";

function Cart({ items }) {
  const location = useLocation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-6">
      {items.map((item) => (
        <div key={item.id} className="w-[200px] h-[320px] m-12 flex-col">
          <Card isPressable radius="lg" className="hover:scale-105 h-[400px]">
            <CardBody className="overflow-hidden m-2 cursor-pointer">
              <Image
                alt={item.title["fa"]}
                loading="lazy"
                className="z-0 scale-80 hover:scale-100"
                src={item.image_url}
              />
            </CardBody>
            <CardFooter className="text-small justify-between animate-jump animate-infinite">
              <div className="max-w-md">
                <div className="space-y-1">
                  <h4 className="text-medium font-medium">{item.Price}</h4>
                  <p className="text-small text-default-400">
                    {item.title["fa"]}
                  </p>
                </div>
                <Divider className="my-2" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                  <div>{item.features.brand["fa"]}</div>
                  <Divider orientation="vertical" />
                  <div>{item.features.color["fa"]}</div>
                  <Divider orientation="vertical" />
                  <div>{item.features.type["fa"]}</div>
                </div>
              </div>
              <Button
                className="m-1 h-16 mt-14"
                variant="faded"
                color="danger"
                endContent={
                  <ImCircleRight className="scale-125 hover:scale-125 hover:animate-spinner-ease-spin" />
                }
              >
                {location.pathname === "/" ? "بازدید" : "خرید"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Cart;
