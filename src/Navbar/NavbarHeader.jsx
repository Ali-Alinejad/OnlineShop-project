import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Spinner,
} from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import Logo from "../../public/images/logo.png";
import './navar.css'

export default function NavbarHeader() {
  const location = useLocation();

  return (
    <>
      <div id="Shadow"></div>
      <Navbar
        isBordered
        isBlurred
        height={"100px"}
        className="z-10 max-sm:gap-0  max-sm:overflow-hidden"
        id="bar"
      >
        <NavbarContent className="justify-around z-10 max-sm:gap-0 ">
          <Link
            className="cursor-pointer uppercase"
            color={location.pathname === "/" ? "danger" : "foreground"}
            href="/"
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            <NavbarBrand className="">
              <img
                src={Logo}
                alt="Logo"
                className="cursor-pointer overflow-hidden  lg:mr-16 max-md:mr-0  transition duration-300 hover:animate-appearance-in "
              />
            </NavbarBrand>
          </Link>
          <NavbarContent className="sm:flex gap-20 ">
            <NavbarItem className="cursor-pointer">
              {" "}
              {location.pathname === "/" ? "خدمات" : ""}
            </NavbarItem>
            <NavbarItem className="cursor-pointer">
              {" "}
              {location.pathname === "/" ? "ارتباط با ما" : ""}
            </NavbarItem>

            <NavbarItem>
         
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] lg:max-w-[20rem] hover:w-[22rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search"
            size="sm"
            type="search"
          />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isFocusable={true}
                as="button"
                className="transition-transform"
                color="danger"
                name=""
                size="sm"
                src=""
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <li className="inline-flex gap-4">
                  <ul>
                    <Link href="/Login" to="/Login">
                      ساخت اکانت
                    </Link>
                  </ul>
                  <ul>
                    <Spinner size="sm" />
                  </ul>
                </li>
              </DropdownItem>

              <DropdownItem key="help_and_feedback">
                سوالات پیش فرض
              </DropdownItem>

              <DropdownItem key="logout" color="primary">
                ورود
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </>
  );
}
