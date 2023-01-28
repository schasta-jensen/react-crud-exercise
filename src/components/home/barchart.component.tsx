import React from "react";
import { Card, List  } from  "@mui/material";
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    BarSeries,
  } from '@devexpress/dx-react-chart-material-ui';

export default function BarChart() {

    // Sample data
const data = [
    { argument: 'Segunda', value: 30 },
    { argument: 'Terça', value: 20 },
    { argument: 'Quarta', value: 10 },
    { argument: 'Quita', value: 50 },
    { argument: 'Sexta', value: 60 },
    { argument: 'Sábado', value: 40 },
    { argument: 'Domingo', value: 10 },
  ];

  
  return (

  <Card variant="outlined" sx={{
      width: "100%",
      borderRadius: "8px",
      padding: "0.1rem",
      marginTop:"1rem" 
    }}>
  <Chart
      data={data}
    >
      <ArgumentAxis />
      <ValueAxis />
  
      <BarSeries valueField="value" argumentField="argument" />
    </Chart>
  </Card>

  );
};