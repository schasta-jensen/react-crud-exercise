import React, { ReactElement, FC } from "react";
import { Box, Typography } from  "@mui/material";
import Layout from "../components/layout/layout.component";

const SecretariaPage: FC<any> = (): ReactElement => {
  return (
    <Layout>      
      <Typography variant="h3">Secretárias</Typography>
    </Layout>
  );
};

export default SecretariaPage;