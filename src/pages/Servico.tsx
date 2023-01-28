import React, { ReactElement, FC } from "react";
import { Box, Typography } from  "@mui/material";
import Layout from "../components/layout/layout.component";

const ServicoPage: FC<any> = (): ReactElement => {
  return (
    <Layout>      
      <Typography variant="h3">Serviço</Typography>
    </Layout>
  );
};

export default ServicoPage;