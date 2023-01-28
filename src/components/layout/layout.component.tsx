import React, { FC } from "react";
import { Card, CssBaseline, Grid } from  "@mui/material";
import Header from "../layout/header.component";
import Consultas from "../layout/sidebar-scheduler.component";
import Container from '@mui/material/Container';
import MenuListIcon from "../layout/sidebar-menu.component";

//<LayoutProps>
const Layout: FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
        <Container maxWidth="xl">
        
        <Grid container spacing={2} marginTop={0.1} >
          <Grid item md={12}  >
            <Header />
          </Grid>
          <Grid item md={3} lg={2} sx={{ display: { xs: 'none', sm: 'block' } }} >
            <MenuListIcon />
          </Grid>
          <Grid item xs={12} md={6} lg={8} > 
          <Card variant="outlined" sx={{
            width: "100%",
            borderRadius: "8px",
            padding: "1rem",
            minHeight: "87vh"   
          }}>
            {children} 
            </Card>            
          </Grid>
          <Grid item xs={12} md={3} lg={2}>          
            <Consultas />
          </Grid>     
          <Grid item md={12}  >
          {/* <Footer /> */}
          </Grid>     
        </Grid>               
        </Container>
    </>
  );
};

export default Layout;