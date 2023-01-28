import React, { ReactElement, FC } from "react";
import { Typography, Alert } from  "@mui/material";
import Layout from "../components/layout/layout.component";
import BarChart from "../components/home/barchart.component";

const HomePage: FC<any> = (): ReactElement => {
  return (
    <Layout>      
      <Typography variant="h2">Olá, Hospital Marieta!</Typography>
      <Alert variant="outlined" severity="warning" sx={{ marginTop:"1rem"  }}>
        Registre o horário de atendimento da sua instituição.
      </Alert>
      <BarChart/>
    </Layout>
  );
};

export default HomePage;