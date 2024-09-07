import { Button, Card, CardBody, CardFooter, Image, Spinner ,Textarea } from "@nextui-org/react";
import  { useEffect, useState } from "react";

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
    <div className="flex flex-row flex-wrap  row-span-4 justify-center text-center items-center bg-cover  ">
      {cartData.map((item) => (
        <>
          <div className="w-[300px] h-[300px] m-12 flex-col gap">
            {cartData.map}
            <Card isFooterBlurred radius="lg" key={item.id}>
              <CardBody className="overflow-hidden m-2 ">
                <Image
                  height={200}
                  alt="Card background"
                  className="z-0 "
                  src={item.image_url}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                          <Textarea
                            
                  isReadOnly
                  label={item.title}
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder=""
                  defaultValue={item.title}
                  className="max-w-xs"
                          />
                          <br />
                <Button
                  className="m-1 h-20 mt-7"
                  variant="bordered"
                  color="warning"
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


   
    
       