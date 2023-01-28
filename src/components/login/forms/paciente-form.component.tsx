import React, { FC, ReactElement, useState } from "react";
import { Box, Button, Grid, TextField, Typography, Link } from  "@mui/material";

export const PacienteForm: FC = (): ReactElement => {

    const [name, setName] = useState();
    const handleSubmit = (e:any) => {
        
    }   

  return (
    <Box maxWidth="xl">  
        <form
            onSubmit={(e: any) => {
                e.preventDefault();
                handleSubmit(e);
            }}
            >
              <TextField 
                    id="name" 
                    label="Nome" 
                    variant="outlined"
                    value={name}
                    onChange={(event: any) => setName(event.target.value)}
                    error={name === ''}
                    helperText={name === "" ? "Campo obrigatório." : " "}
                />
        </form>         
    </Box>
  );
};

export default PacienteForm;
