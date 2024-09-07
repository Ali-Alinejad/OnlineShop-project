import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function Cart({ image_url, id, title }) {
  // Destructure props here
  return (
    <div className="flex flex-row">
      <Card
        isFooterBlurred
        radius="lg"
        className="flex-row row-span-4 grid-rows-2"
        key={id}
      >
        <Image
          alt={title} // Provide a meaningful alt text
          className=""
          height={200}
          src={image_url}
          width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <h2>{title}</h2>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            {title}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
