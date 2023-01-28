import React, { FC, ReactElement, useState } from "react";
import { Box, Card, Grid, Typography, FormGroup, Checkbox, FormControlLabel } from  "@mui/material";
import LayoutLogin from "../layout/layout-login.component";
import { tiposCadastro } from "../../data/forms.json";
import { selectForm } from "../../types/auth";
import logo from '../../assets/logo.svg';

export const SelectForm: FC = (): ReactElement => {

   const [cadastro, setCadastro] = useState(tiposCadastro);
   let cadastros:selectForm[] = [ ...cadastro ];

  const showForm = (formulario:selectForm) => {
    cadastros.map(item => {
      if (item.id === formulario.id) {
        item.visible = !item.visible;
      } else {
        item.visible = false;
      }     
      return item;
    });
    setCadastro(cadastros);
  }

  return (
    <LayoutLogin>
          <Card  variant="outlined" 
            sx={{     
              padding: "2.5rem",
              borderRadius: "10px",
              width: '100%',
              maxWidth: 'lg'
            }}
          >
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
        <img src={logo} alt="Secretárias" className="menu-img" />
        <Box sx={{ m: 4 }}>
        <Typography variant="subtitle1" style={{whiteSpace: 'pre-line'}}>
          Olá, ficamos muito felizes com seu interesse em transformar a saúde do Brasil.<br/>
          Nos conte mais sobre você selecionando a opção abaixo:
          </Typography>
        </Box>
         
          <FormGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {cadastro.map((item) => (
                <FormControlLabel key={item.id} control={<Checkbox />} label={item.name} onChange={() => showForm(item)}/>
          ))}    
          </FormGroup>
        </Grid>   
        <Grid item xs={12}>
          {cadastro.map(item => item.visible ? <item.component setCadastro={setCadastro} /> : null )}   
        </Grid>      
      </Grid>
      
      </Card>
    </LayoutLogin>
  );
};

export default SelectForm;
