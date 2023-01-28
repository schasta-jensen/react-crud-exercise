import React, { ReactElement, FC } from "react";
import { Box, Typography } from  "@mui/material";
import Layout from "../components/layout/layout.component";

const MedicoPage: FC<any> = (): ReactElement => {
  return (
    <Layout>      
      <Typography variant="h3">Médicos</Typography>
    </Layout>
  );
};

export default MedicoPage;