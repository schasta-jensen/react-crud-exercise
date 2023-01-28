import React, { FC } from "react";
import { Box, CssBaseline } from  "@mui/material";
//import { LayoutProps } from "../interfaces/layout";
//import '../styles/main.css';
//import { textAlign } from "@mui/system";


const LayoutLogin: FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
        <div className="layout-home">
        <Box
            sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}
            >
            {children}
        </Box>
            
        </div>      
    </>
  );
};

export default LayoutLogin;