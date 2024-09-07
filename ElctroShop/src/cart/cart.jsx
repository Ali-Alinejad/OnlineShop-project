import { Button, Card, CardBody, CardFooter, Divider, Image, Spinner } from "@nextui-org/react";

import  { useEffect, useState } from "react";
import { ImCircleRight } from "react-icons/im";

function Digikala() {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCartData() {
      try {
        const res = await fetch("http://localhost:8000/product");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setCartData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCartData();
  }, []);

  if (loading) {
    return <p><Spinner/></p>;
  }

  if (error) {
    return <p> :(  {error} </p>;
  }

  return (
    <div className="flex flex-row flex-wrap  row-span-4 justify-center text-center  gap-8 m-2 p-2 ">
      {cartData.map((item) => (
        <>
          <div className="w-[300px] h-[300px] m-12 flex-col gap  ">
            {cartData.map}
            <Card isFooterBlurred radius="lg" key={item.id}>
              <CardBody className="overflow-hidden m-2  cursor-pointer ">
                <Image
                  height={200}
                  alt="Card background"
                  className="z-0 "
                              src={item.image_url}
                              onClick={"onClick"}
                              
                />
              </CardBody>
              <CardFooter className="text-small justify-between animate-jump animate-infinite" key={item.id}>
                <div className="max-w-md">
                  <div className="space-y-1">
                    <h4 className="text-medium font-medium">
                      {item.title}
                    </h4>
                    <p className="text-small text-default-400">
                      Beautiful, fast and modern React UI library.
                    </p>
                  </div>
                  <Divider className="my-4" />
                  <div className="flex h-5 items-center space-x-4 text-small">
                    <div>Blog</div>
                    <Divider orientation="vertical" />
                    <div>Docs</div>
                    <Divider orientation="vertical" />
                    <div>Source</div>
                  </div>
                </div>
                <Button
                  className="m-1 h-16 mt-14"
                  variant="faded"
                  color="secondary"
                  endContent={
                    <ImCircleRight className="scale-125 hover:scale-125 hover:animate-spinner-ease-spin" />
                  }
                >
                  Buy
                </Button>
              </CardFooter>
            </Card>
          </div>
        </>
      ))}
    </div>
  );
}

export default Digikala;


   
    
       