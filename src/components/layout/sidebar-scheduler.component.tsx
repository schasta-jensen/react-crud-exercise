import React, { FC, ReactElement } from "react";
import { Card,  Typography } from  "@mui/material";
import { agenda } from "../../data/mock.json";

const Consultas: FC = (): ReactElement => {
  return (
    <Card variant="outlined" sx={{
      width: "100%",
      borderRadius: "8px",
      padding: "1rem",
      minHeight: "87vh"   
    }}>
        
         <Typography
            variant="body1"
            noWrap
            component="div"
            className="title"   
            fontWeight={600}   
            color="primary.main"     
            sx={{  marginBottom:'1rem'}}
          >
            Próximas Agendas
          </Typography>  
          {agenda.map((page:any) => (
            <Card key={page.id} sx={{ backgroundColor: 'primary.light', color: 'white', padding:'1rem', marginBottom:'1rem'}} >             
              <Typography fontWeight={600} style={{whiteSpace: 'pre-line', fontSize: "12px"}}> 
              {page.type}            
              </Typography>  
              <Typography fontWeight={500} style={{whiteSpace: 'pre-line', fontSize: "12px"}}>               
              { page.procedure ? 'Exame: ' + page.procedure : 'Médico: ' + page.doctor}<br/>
              Paciente: {page.patient}<br/>
              </Typography> 
             
              </Card>
          ))}
    </Card>
  );
};

export default Consultas;
