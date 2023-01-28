import { Typography } from  "@mui/material";
import React, { ReactElement, FC } from "react";
import LayoutLogin from "../components/layout/layout-login.component";

const TrocarSenha: FC<any> = (): ReactElement => {
  return (
    <LayoutLogin> 
      <Typography variant="h3">Trocar Senha</Typography>
      <Typography variant="subtitle1">Informe o email para receber instruções de troca da senha:</Typography>
    </LayoutLogin>
  );
};

export default TrocarSenha;