import React, { ReactElement, FC, useState, useEffect } from "react";
import Layout from "../components/layout/layout.component";
import { useAppSelector } from "../app/hooks";
import Organization from "../model/Organization";
import OrganizationList from "../components/organization/organization-list";
import NewOrganization from "../components/organization/organization-add";
import DialogBox from "../components/DialogBox";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Button, Typography, Grid, TextField } from "@mui/material";
import { OrganizationDialog } from "../components/organization/organization-dialog";

const InstituicaoPage: FC<any> = (): ReactElement => {

  let [open, setOpen] = useState(false);
  const getOrganizationList = useAppSelector((state) => state.organization.organizationList);

  const [searchTerm, setSearchTerm] = useState("");
  const [organizationListData, setOrganizationListData] = useState<Organization[]>();

  useEffect(() => {
    setOrganizationListData(getOrganizationList);
    const filteredData = getOrganizationList.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setOrganizationListData(filteredData);
  }, [getOrganizationList, searchTerm]);

  const DialogHandle = () => {
    setOpen((current) => !current);
    //setOrganizationListData(getOrganizationList);
  };

  return (
    <Layout> 
       
      <Grid container>
      <Grid item md={4}  >
      <Typography variant="h3">Instituições</Typography>
      </Grid>   
      <Grid item md={8}   sx={{ textAlign: "right" }}>      
      <Button  variant="contained" size="medium"  onClick={DialogHandle} > <AddCircleOutlineIcon />Adicionar</Button>     
      </Grid>   
      </Grid>        
      <TextField id="outlined-search" label="Buscar instituição ..." type="search"  size="small" 
      onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} sx={{ marginBottom: "15px" }}  />       
     <OrganizationList organizations={organizationListData} />
      {open && (
        <OrganizationDialog open={open} OnDialogHandle={DialogHandle}>
          <NewOrganization id={""} OnDialogHandle={DialogHandle} />
        </OrganizationDialog>
      )}
    </Layout>
  );
};

export default InstituicaoPage;