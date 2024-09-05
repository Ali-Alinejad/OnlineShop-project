import { Button, Flex } from "antd";

const boxStyle = {
  width: "100%",
  height: 100,
  borderRadius: 6,
};

const Header = () => {
  return (
    <>
      <Flex
        style={boxStyle}
        justify={"space-around"}
        align={"center"}
        className="border-none"
      >
        <Button type="default">Primary</Button>
        <Button type="default">Primary</Button>
        <button
          type=""
          className="
                  border-none
                  p-5
                  max-lg:text-9xl
                  max-md:text-7xl
                  max-md:transition
                  duration-300
                  max-sm:text-3xl
                    sm:text-3xl
                  md:text-7xl
                lg:text-9xl
                  uppercase
                  text-blue-700
                  font-semibold
hover:text-blue-500
                  transition-colors
                  duration:300
             
             
                  "
        >
          USHOP
        </button>
        <Button type="default">Primary</Button>
        <Button type="default">Primary</Button>
      </Flex>
    </>
  );
};
export default Header;
