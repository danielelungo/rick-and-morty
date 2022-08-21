import React from "react";

import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const NotFound: FunctionComponent = () => {
  return (
    <div>
      <h1>404: Page Non Found</h1>
      <Link to={"/"}>Go Back To Home Page</Link>
    </div>
  );
};

export default NotFound;
