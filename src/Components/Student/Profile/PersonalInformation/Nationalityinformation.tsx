import { Box, Divider, Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { createTheme, ThemeProvider } from '@mui/material'
import { motion } from 'framer-motion';
import Nationalitytable from '../../Degree Attestation/Personaldetails/Nationalitytable';

const theme = createTheme({
  typography:{
      fontFamily:"montserrat"
  },
});
const Nationalityinformation = () => {
  return (
    <div>
    <ThemeProvider theme={theme}>
      <Paper sx={{margin:"0 0 20px 0"}}>
        <Box padding={"20px"}>
         <Box marginBottom={"25px"} >
        <Box paddingBottom={"10px"} ><Typography color="#48465b" fontSize={15.6} fontWeight={700}>Nationality Info</Typography></Box>
        <Divider></Divider>
      </Box>
      <Nationalitytable/>
      </Box>
    </Paper>
    </ThemeProvider>
  </div>
  )
}

export default Nationalityinformation