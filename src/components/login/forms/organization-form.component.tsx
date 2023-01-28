import React, { FC, ReactElement, useState } from "react";
import { Box, Button, Grid, TextField, Typography, Container, Card } from  "@mui/material";
import { useNavigate } from "react-router-dom";
import { tiposCadastro } from "../../../data/forms.json";
import { organizationI } from "../../../interfaces/organization";
import { useAppSelector } from "../../../app/hooks";

type Props = {
  setCadastro: any,
};

export const OrganizationForm: FC<Props> = ({setCadastro}): ReactElement => {

  const organization: organizationI = useAppSelector((state: any) => state.organization)
  const navigate = useNavigate();    
  // const [organization, setOrganization] = useState({
  //   responsavelLegal: null,
  //   nomeFantasia: null,
  //   cnpj: null,
  //   especialidade: null,
  //   celular: null,
  //   telefone: null,
  //   cep: null,
  //   email: null,
  //   senha: null,
  //   confirmarSenha: null
  // });
  const consultaCep = (e:any) => {
      
  }  
  const loadAddress = (e:any) => {
      
  }    
  const handleSubmit = (e:any) => {   
    setCadastro(tiposCadastro.map(item => item.visible = false));
    navigate('/', {replace: true});
    //navigate.push('/');
  }

  return (
    <Box maxWidth="xl" sx={{ marginTop:"32px" }}>  
    <Typography variant="subtitle1" style={{whiteSpace: 'pre-line'}}>
          Legal! Agora precisamos de algumas informações:
          </Typography>
        <form
            onSubmit={(e: any) => {
                e.preventDefault();
                handleSubmit(e);
            }}
            >
              <Container maxWidth="lg" className="margin-top">
              <Grid container direction="row" alignItems="center" justifyContent="center">
              <Grid item xs={12} md={2}></Grid>
                  <Grid item xs={12} md={4} className="align-right">
                    <TextField 
                          key="responsavelLegal" 
                          label="Responsável Legal" 
                          variant="outlined"
                          value={organization.responsavelLegal}                        
                          error={organization.responsavelLegal === ''}
                          helperText={organization.responsavelLegal === "" ? "Campo obrigatório." : " "}
                      />
                  </Grid>
                  <Grid item xs={12} md={4} >
                    <TextField 
                          key="nomeFantasia" 
                          label="Nome Fantasia" 
                          variant="outlined"
                          value={organization.nomeFantasia}                        
                          error={organization.nomeFantasia === ''}
                          helperText={organization.nomeFantasia === "" ? "Campo obrigatório." : " "}
                      />
                  </Grid>
                  <Grid item xs={12} md={2}></Grid>
                  <Grid item xs={12} md={2}></Grid>
                  <Grid item xs={12} md={4} className="align-right">
                    <TextField 
                          key="cnpj" 
                          label="CNPJ" 
                          variant="outlined"
                          value={organization.cnpj}                        
                          error={organization.cnpj === ''}
                          helperText={organization.cnpj === "" ? "Campo obrigatório." : " "}
                      />
                  </Grid>
                  <Grid item xs={12} md={4} className="align-left">
                    <TextField 
                          key="especialidade" 
                          label="Especialidade" 
                          variant="outlined"
                          value={organization.especialidade}                        
                          error={organization.especialidade === ''}
                          helperText={organization.especialidade === "" ? "Campo obrigatório." : " "}
                      />
                  </Grid>        
                  <Grid item xs={12} md={2}></Grid>
                  <Grid item xs={12} md={4} className="align-right">
                    <TextField 
                          key="celular" 
                          label="Telefone" 
                          variant="outlined"
                          value={organization.celular}                        
                          error={organization.celular === ''}
                          helperText={organization.celular === "" ? "Campo obrigatório." : " "}
                      />
                  </Grid>
                  <Grid item xs={12} md={4} className="align-left">
                    <TextField 
                          key="telefone" 
                          label="Telefone Fixo" 
                          variant="outlined"
                          value={organization.telefone}                        
                          error={organization.telefone === ''}
                          helperText={organization.telefone === "" ? "Campo obrigatório." : " "}
                      />
                  </Grid>
                  <Grid item xs={12} className="align-center">
                    <TextField 
                          key="cep" 
                          label="CEP" 
                          variant="outlined"
                          value={organization.address.cep}                        
                          error={organization.address.cep === ''}
                          helperText={organization.address.cep === "" ? "Campo obrigatório." : " "}
                          onChange={(event: any) => loadAddress(event.target.value)}
                      />
                  </Grid>
                  <Grid item xs={12} md={2}></Grid>
                  <Grid item xs={8} >
                    <Button onClick={consultaCep} variant="text" size="medium">Clique aqui para saber seu CEP</Button>
                  </Grid>  
                  <Grid item xs={12} md={2}></Grid>
                  <Grid item xs={8} >
                    <Card variant="outlined" className="form-maps" >Mapa</Card>
                  </Grid>  
                  <Grid item xs={8} >
                    <TextField 
                          id="email" 
                          label="E-mail" 
                          variant="outlined"
                          value={organization.email}                        
                          error={organization.email === ''}
                          helperText={organization.email === "" ? "Campo obrigatório." : " "}
                      />
                  </Grid>    
                  <Grid item xs={12}  >
                    <Button  variant="contained" size="medium"  type='submit'>Criar conta</Button>
                </Grid>
              </Grid>
              </Container>
        </form>         
    </Box>
  );
};

export default OrganizationForm;
