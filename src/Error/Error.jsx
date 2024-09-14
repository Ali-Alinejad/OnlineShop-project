

import { Spinner ,Button  } from "@nextui-org/react";
import { Link } from "react-router-dom";



function Error() {
    return (
      <>
        <div className="flex gap-4"></div>
        <div style={{ textAlign: "center", marginTop: "200px" }}>
          <h1 className="text-3xl font-semibold">
            Oops! Something went wrong.
          </h1>
          <br />
          <br />

          <p className="text-xl ">
            {" "}
            We couldnt find the page you were looking for.
          </p>
          <br />
          <br />

          <Button>
            <Link to="/">
              <span> Go back to Home</span>
            </Link>
            <Spinner color="danger" />
          </Button>
        </div>
      </>
    );
}

export default Error
