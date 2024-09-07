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
} from "@nextui-org/react";
import { useLocation } from "react-router-dom";

export default function NavbarHeader() {
  const location = useLocation();

  return (
    <Navbar isBordered className="h-[20vh]">
      <NavbarContent className="justify-between">
        <NavbarBrand className="mr-4 bg">
          <p className="sm:block font-bold font-semibold font-mono ">
            ELECTROSHOP
          </p>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-4 ">
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
            base: "max-w-full sm:max-w-[10rem] h-10",
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
              isBordered
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
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">Gmail</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
