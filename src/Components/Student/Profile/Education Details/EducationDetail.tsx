import { Alert, Box, Button, Divider, Grid, Hidden, IconButton, Paper, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { createTheme, ThemeProvider } from '@mui/material'
import { motion } from 'framer-motion';
import ReportIcon from '@mui/icons-material/Report';
import EducationStepper from './EducationStepper';
import Qualificationdetail from '../../Degree Attestation/DetailofDegreeCompoent/Qualificationdetail';
import Degree from '../../Degree Attestation/DetailofDegreeCompoent/Degree';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const theme = createTheme({
  typography: {
    fontFamily: "montserrat",
    fontSize: 12
  },
});

const EducationDetail = () => {
  const [showAcco, seShowAcco] = React.useState(false)
  const handleClick = () => {
    seShowAcco(true)
  }
  const closeClick = () => {
    seShowAcco(false)
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper sx={{ margin: "0 0 20px 0" }}>
          <Box padding={"20px"}>
            <Box marginBottom={"25px"} >
              <Box paddingBottom={"10px"} display={"flex"} alignItems={"flex-end"}>
                <Typography color="#48465b" fontSize={15.6} fontWeight={700} marginRight="10px">Education Details</Typography>
              </Box>
              <Divider></Divider>
            </Box>
            {/* Show when click on Button */}
            <Button
              onClick={handleClick}
              variant='contained'
              startIcon={<AddCircleIcon/>}
              sx={{
                ml: 4,
                backgroundColor: "#018651",
                color: "#fff",
                fontFamily: "montserrat",
                padding: "0.6250em 1.875em",
                '&:hover': {
                  backgroundColor: "white",
                  color: "#8A8A8A",

                },
              }}>Add Detail of Degree
            </Button>
            {showAcco && <Qualificationdetail />}
            {showAcco &&
              <Box sx={{ mb: 2 }}>
                <Degree />
                <Divider variant="middle" sx={{ ml: 4, mr: 4 }} /> </Box>}
            <Box sx={{ mt:4,ml:8 }}>
              <EducationStepper />
            </Box>
          </Box>
        </Paper>
        <Box sx={{display:'flex',justifyContent:'flex-end'}}>
        <Button
              onClick={closeClick}
              variant='contained'
              sx={{
                ml: 4,
                backgroundColor: "#018651",
                color: "#fff",
                fontFamily: "montserrat",
                padding: "0.6250em 1.875em",
                '&:hover': {
                  backgroundColor: "white",
                  color: "#8A8A8A",
                },
              }}>Appy for degree attestation
            </Button>
        </Box>
        
      </ThemeProvider>
    </div>
  )
}

export default EducationDetail