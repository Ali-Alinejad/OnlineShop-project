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

export default function NavbarHeader() {
  const location = useLocation();

  return (
    <Navbar isBordered height={"100px"}>
      <NavbarContent className="justify-around">
        <NavbarBrand className="">
          <p className="sm:block font-semibold font-mono cursor-pointer scale-125  ">
            ELECTROSHOP
          </p>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-20 ">
          <NavbarItem>
            <Link
              className="cursor-pointer uppercase "
              color={location.pathname === "/" ? "secondary" : "foreground"}
              href="/"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>
          </NavbarItem>

          <Link
            className="cursor-pointer "
            href="/order"
            to="/order"
            color={location.pathname === "/order" ? "secondary" : "foreground"}
          >
            Dashboard
          </Link>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] lg:max-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 ",
          }}
          placeholder="Search"
          size="sm"
          startContent={""}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isFocusable={true}
              as="button"
              className="transition-transform"
              color="secondary"
              name=""
              size="sm"
              src=""
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <li className="inline-flex gap-4">
                <ul>
                  <p className="font-semibold">Create Account </p>
                </ul>
                <ul>
                  <Spinner size="sm" />
                </ul>
              </li>
            </DropdownItem>

            <DropdownItem key="settings">Settings</DropdownItem>

            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log in
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
