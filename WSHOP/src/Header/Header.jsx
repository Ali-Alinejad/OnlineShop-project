import { Button, Flex } from "antd";
import Slide from "../slide/slide";
import { UserOutlined ,NotificationOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';

import './Header.css'


const Header = () => {
  return (
    <>
      <div id="flex">
        <Flex
          className="border-none
        w-full
        justify-around
        items-center
        max-lg:h-40
        max-sm:h-20
        p-10
     border-b-8
     border-cyan-800
     bg-slide2
        "
        >
          {/* Button Group */}
          <Button type="default">Primary</Button>
          <Button type="default">Primary</Button>

          {/* Custom Button */}

          <button
            className="
          border-none
          p-5
          max-lg:text-9xl
          max-md:text-7xl
          max-sm:text-3xl
          sm:text-3xl
          md:text-7xl
          lg:text-9xl
          uppercase
          text-blue-700
          font-semibold
        "
          >
            WSHOP
          </button>
          <div className="">
            <Button className="border-none w-12 h-12 ring-2 ring-blue-200 m-5">
              <Space size={64} className="">
                <Avatar
                  shape="square"
                  size={50}
                  icon={<NotificationOutlined />}
                />
              </Space>
            </Button>
            <Button className="border-none w-12 h-12 ring-2 ring-blue-200 ">
              <Space size={64} className="">
                <Badge count={1} className="border-none ">
                  <Avatar shape="square" size={50} icon={<UserOutlined />} />
                </Badge>
              </Space>
            </Button>
          </div>
        </Flex>
      </div>
        <Slide />
    </>
  );
};

export default Header;
