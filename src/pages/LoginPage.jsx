import React from "react";

import Helmet from "../components/Helmet";
import Login  from "../components/Login"; 
const LoginPage = () => {
  return (
    <Helmet title="Login">
      <Login/>
    </Helmet>
  );
};

export default LoginPage;
