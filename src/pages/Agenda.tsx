import React, { ReactElement, FC } from "react";
import { Typography } from  "@mui/material";
import Layout from "../components/layout/layout.component";

const Agenda: FC<any> = (): ReactElement => {
  return (
    <Layout>      
      <Typography variant="h3">Agenda</Typography>
    </Layout>
  );
};

export default Agenda;