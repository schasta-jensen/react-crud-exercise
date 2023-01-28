import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import theme from "./common/theme";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import Agenda from "./pages/Agenda";
import TrocarSenha from "./pages/TrocarSenha";
import SelectForm from "./components/login/select-form.component";
import InstituicaoPage from "./pages/Instituicao";
import SecretariaPage from "./pages/Secretaria";
import MedicoPage from "./pages/Medico";
import ServicoPage from "./pages/Servico";
import PagamentoPage from "./pages/Pagamento";

function App() {
  return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>     
        <Routes>         
          <Route key="login-route" path="/login"  element={<LoginPage />}></Route>
          <Route key="trocar-senha-route" path="/trocar-senha"  element={<TrocarSenha />}></Route>
          <Route key="cadastros-route" path="/cadastros"  element={<SelectForm />}></Route>    
          <Route  key="home-route" index element={<HomePage />} />
          <Route  key="agenda-route" path={"/agenda"} element={<Agenda />} />       
          <Route  key="instituicao-route" path={"/instituicao"} element={<InstituicaoPage />} />        
          <Route  key="secretaria-route" path={"/secretaria"} element={<SecretariaPage />} />        
          <Route  key="medico-route" path={"/medico"} element={<MedicoPage />} />    
          <Route  key="servico-route" path={"/servico"} element={<ServicoPage />} />          
          <Route  key="pagamento-route" path={"/pagamento"} element={<PagamentoPage />} />          
        </Routes> 
      </Router>
      {/* <Router>     
        <Switch>         
          <Route key="login-route" path="/login"><LoginPage /></Route>
          <Route key="trocar-senha-route" path="/trocar-senha"  ><TrocarSenha /></Route>
          <Route key="cadastros-route" path="/cadastros"><SelectForm /></Route>    
          <Route  key="home-route" ><HomePage /></Route> 
          <Route  key="agenda-route" path={"/agenda"} ><Agenda /></Route> 
          <Route  key="instituicao-route" path={"/instituicao"} > <InstituicaoPage />  </Route>      
          <Route  key="secretaria-route" path={"/secretaria"} ><SecretariaPage /> </Route>        
          <Route  key="medico-route" path={"/medico"}  ><MedicoPage /> </Route>    
          <Route  key="servico-route" path={"/servico"}  ><ServicoPage /> </Route>          
          <Route  key="pagamento-route" path={"/pagamento"}  > <PagamentoPage /> </Route>         
        </Switch> 
      </Router> */}
    </ThemeProvider>     
    );
}

export default App;
