import React from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  Image,
  
} from "@nextui-org/react";
import './login.css'
import NavbarHeader from "../Navbar/NavbarHeader";

  function Login() {
  const [selected, setSelected] = React.useState("login");

    return (
      <>
        <NavbarHeader />
        <div
          id="Container"
          className="flex flex-row  p-2 mt-[5%] w-[130vh] mx-auto xl:ml-[455px] sm:ml-[0] shadow-none"
        >
          <div className="flex flex-col w-full justify-start  w-[40%] ">
            <Card className="max-w-full  h-[500px] ">
              <CardBody className="overflow-hidden  ">
                <Tabs
                  fullWidth
                  size="md"
                  aria-label="Tabs form"
                  selectedKey={selected}
                  onSelectionChange={setSelected}
                >
                  <Tab key="login" title="Login">
                    <form className="flex flex-col gap-4 ">
                      <Input
                        isRequired
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                      />
                      <Input
                        isRequired
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                      />
                      <p className="text-center text-small rounded-none">
                        Need to create an account?{" "}
                        <Link
                          color="danger"
                          size="sm"
                          onPress={() => setSelected("sign-up")}
                        >
                          Sign up
                        </Link>
                      </p>
                      <div className="flex gap-2 justify-end">
                        <Link href="/" className="text-white w-full">
                          <Button fullWidth color="danger">
                            Login
                          </Button>
                        </Link>
                      </div>
                    </form>
                  </Tab>
                  <Tab key="sign-up" title="Sign up">
                    <form className="flex flex-col gap-4 h-[300px]">
                      <Input
                        isRequired
                        label="Name"
                        placeholder="Enter your name"
                        type="password"
                      />
                      <Input
                        isRequired
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                      />
                      <Input
                        isRequired
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                      />
                      <p className="text-center text-small">
                        Already have an account?{" "}
                        <Link
                          color="danger"
                          size="sm"
                          onPress={() => setSelected("login")}
                        >
                          Login
                        </Link>
                      </p>
                      <div className="flex gap-2 justify-end">
                        <Button fullWidth color="danger">
                          Sign up
                        </Button>
                      </div>
                    </form>
                  </Tab>
                </Tabs>
              </CardBody>
            </Card>
          </div>
          <div>
            <div className=" h-[100%] w-[760px] rounded-3xl ">
              <Image
                width={1000}
                alt="NextUI hero Image"
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                isZoomed
                
              />
            </div>
          </div>
        </div>
      </>
    );
}
export default Login;