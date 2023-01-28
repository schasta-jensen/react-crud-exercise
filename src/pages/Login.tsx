import React, { ReactElement, FC, useState, useCallback, useEffect } from "react";
//import { Box } from  "@mui/material";
import LayoutLogin from "../components/layout/layout-login.component";
import Login from "../components/login/login.component";

const LoginPage: FC<any> = (): ReactElement => {

  return (
    <LayoutLogin>
        <Login />
    </LayoutLogin>    
  );
};

export default LoginPage;