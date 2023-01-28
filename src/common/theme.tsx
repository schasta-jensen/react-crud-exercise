import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    breakpoints: {
      values: {
        //xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1600 // large screens
      }
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: "white",
            color: "#111",
            boxShadow: "none",
            height: 70          
          },          
        },       
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: 'Montserrat',
          },
        },
      },      
    },
    //MuiTreeView: {},
    typography: {
        fontFamily: [
          'Roboto',
          'Raleway',
          'Open Sans',
          'Montserrat'
        ].join(','),
        h1: {
          fontSize: '24px'
        },
        h2: {
          fontSize: '20px'
        },
        h3: {
          fontSize: '16px'
        },
      },
      palette: {    
        background: {
          default: "#EDEDED"
        },
        text: {
          primary: "#555555"
        }
      },
  });
theme = responsiveFontSizes(theme); 
  
export default theme;