/* eslint-disable prettier/prettier */
import { Box, Divider, Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { createTheme, ThemeProvider } from '@mui/material'
import { motion } from 'framer-motion';

const theme = createTheme({
  typography:{
      fontFamily:`montserrat`
  },
});
const FatherInformation = ({
  FatherName
}) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper sx={{margin:`0 0 20px 0`}}>
          <Box padding={`20px`}>
           <Box marginBottom={`25px`} >
          <Box paddingBottom={`10px`} ><Typography color="#48465b" fontSize={15.6} fontWeight={700}>Father's Information</Typography></Box>
          <Divider></Divider>
        </Box>
        <Grid container>
          <Grid item md={4} xs={12}>
            <Box paddingX={`5px`} marginBottom={`25px`}>
              <Typography fontSize={12.5} fontWeight={600} color="#000000de">Father Name:</Typography>
              <Typography fontSize={12.5} fontWeight={500} color="#000000de">{FatherName?FatherName:`Siddique`}</Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box paddingX={`5px`} marginBottom={`25px`}>
              <Typography fontSize={12.5} fontWeight={600} color="#000000de">Father Status:</Typography>
              <Typography fontSize={12.5} fontWeight={500} color="#000000de">Alive</Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box paddingX={`5px`} marginBottom={`25px`}>
              <Typography fontSize={12.5} fontWeight={600} color="#000000de">Father Currently Employed:</Typography>
              <Typography fontSize={12.5} fontWeight={500} color="#000000de">No</Typography>
            </Box>
          </Grid> 
        </Grid>
        </Box>
      </Paper>
      </ThemeProvider>
    </div>
  )
}

export default FatherInformation