import React, { Fragment } from "react";
import {
  BsFillPenFill,
  BsFillTrashFill
} from "react-icons/bs";
import Organization from "../../model/Organization";
import { useAppDispatch } from "../../app/hooks";
import { removeOrganization } from "../../app/slices/organizationtSlice";
import { Box, Card, Grid, Button} from  "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

interface OrganizationProps {
  organization: Organization;
  onOrganizationUpdate: (id: string) => void;
}

const OrganizationInfo: React.FC<OrganizationProps> = (props) => {
  const dispatch = useAppDispatch();
  const organization = props.organization;

  const setUpdatePage = (id: string) => {
    props.onOrganizationUpdate(id);
  };

  const telefone = organization.telecom.find((item: any) => item.system ==='phone');
  const celular = organization.telecom.find((item: any) => item.system ==='mobile');
  const email = organization.telecom.find((item: any) => item.system ==='email');
  let telecom = '';

  return (
    <Card
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: "8px",
        padding: "8px",
        marginBottom: "15px",
        fontSize: "14px"
      }}
    >
      <Grid container  >
      <Grid item md={4}  sx={{paddingTop: "4px"}} >
        {organization.name} {telecom}     
        {/* { telefone ?  <Fragment>  <PhoneIcon fontSize="small" /> {telefone.value}</Fragment> : null}
        { celular ?  <Fragment>  <WhatsAppIcon fontSize="small" /> {celular.value}</Fragment> : null} */}
       
      </Grid>   
      <Grid item md={4}  sx={{paddingTop: "4px"}} >
      { email ?  <Fragment >  <MailIcon fontSize="small" sx={{ marginBottom: "-4px"}} /> {email.value}</Fragment> : null}  
      </Grid>
      <Grid item md={4}   sx={{ textAlign: "right" }}>
        <Button  variant="outlined" size="small"  onClick={() => setUpdatePage(organization.organization_Id)} > <BsFillPenFill /> &nbsp; Editar</Button>
        <Button  variant="outlined" color="error" size="small"  
        onClick={() =>dispatch(removeOrganization({ id: organization.organization_Id }))} sx={{ marginLeft: "10px" }} > <BsFillTrashFill /> &nbsp; Remover</Button>     
      </Grid>   
      </Grid>
    </Card>
  );
};

export default OrganizationInfo;
