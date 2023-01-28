import React, { ReactElement, FC } from "react";
import { Box, Typography } from  "@mui/material";
import Layout from "../components/layout/layout.component";

const PagamentoPage: FC<any> = (): ReactElement => {
  return (
    <Layout>      
      <Typography variant="h3">Formas de Pagamento</Typography>
    </Layout>
  );
};

export default PagamentoPage;