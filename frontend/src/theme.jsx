import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    background:{
      default:"#000"
    },
    primary: {
      main: '#013e87',
    },
    secondary: {
      main: '#2e74c9',
    },
    darkgrey:{
      main:"#5A5A5A"
    },
  },
  typography: {
    h1: {
      fontSize:"3.2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize:"1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize:"1.5rem",
      fontWeight: 600,
    },
  },
})
