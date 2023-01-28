import React, { FC, ReactElement, useState, useEffect } from "react";
import { Box, Button, Grid, TextField, Typography, Link } from  "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.svg';

//& LoginMain.defaultProps
export const Login: FC = (): ReactElement => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(null);
    const [errorEmail, setErrorEmail] = useState('');
    const navigate = useNavigate();    

    const handleSubmit = (e:any) => {
        if (password === '' || email === '') {           
            return false;
          } else {
            navigate('/', {replace: true});        
          }
    }

    const validateEmail = (event: any) => {
        const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        if (event.target.value.match(regex)) {
            setErrorEmail('');
            setEmail(event.target.value);
        } else {
            setErrorEmail("Formato inválido");
        }
    }

    const redictToNewAccount = () => {
        navigate('/cadastros', {replace: true});
        //navigate.push('/cadastros');
    }


  return (
    <Box maxWidth="xl">
        <img src={logo} alt="Secretárias" className="login-img" />
        <Box sx={{ m: 5 }}>
        <Typography variant="h2">Olá, bem vindo a plataforma que cuida da sua saúde!</Typography>
        </Box>
        <form
            onSubmit={(e: any) => {
                e.preventDefault();
                handleSubmit(e);
            }}
            >
        <Grid container spacing={2} >
            <Grid item xs={12}  >     
                <TextField 
                    id="email" 
                    label="E-mail" 
                    variant="outlined"
                    value={email}
                    onChange={validateEmail}            
                    error={errorEmail !== ''}
                    helperText={errorEmail}                   
                />
            </Grid>   
            <Grid item xs={12}  >
            <TextField 
                    id="password" 
                    label="Senha" 
                    variant="outlined"
                    value={password}
                    onChange={(event: any) => setPassword(event.target.value)}
                    error={password === ''}
                    helperText={password === "" ? "Campo obrigatório." : " "}                
                />
            </Grid>    
            <Grid item xs={12}  >
                <Button  variant="contained" size="medium"  type='submit'>Entrar</Button>
            </Grid>
            <Grid item xs={12}  >
                
                <Link
                    key="trocar-senha-page"
                    component={NavLink}
                    to='/login/senha'
                    color="blue"
                    underline="none"
                    variant="button"
                    >
                    Esqueci minha senha              
                    </Link>
            </Grid>        
            
        </Grid>           
        </form> 
        <Box className="criar-conta">
            Ainda não tem conta? <Button onClick={redictToNewAccount} variant="contained" size="medium">Criar conta</Button>
        </Box>
    </Box>
  );
};

export default Login;
