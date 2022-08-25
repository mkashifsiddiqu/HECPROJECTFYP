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

const BiographicalInformation = ({dateofbirth,
  district,
  city,
  country}) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper sx={{margin:`0 0 20px 0`}}>
          <Box padding={`20px`}>
           <Box marginBottom={`25px`} >
          <Box paddingBottom={`10px`} ><Typography color="#48465b" fontSize={15.6} fontWeight={700}>Biographical Information</Typography></Box>
          <Divider></Divider>
        </Box>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Box paddingX={`5px`} marginBottom={`25px`}>
              <Typography fontSize={12.5} fontWeight={600} color="#000000de">Date Of Birth:</Typography>
              <Typography fontSize={12.5} fontWeight={500} color="#000000de">{new Date(dateofbirth).toDateString() }</Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box paddingX={`5px`} marginBottom={`25px`}>
              <Typography fontSize={12.5} fontWeight={600} color="#000000de">Domicile province:</Typography>
              <Typography fontSize={12.5} fontWeight={500} color="#000000de">{city}</Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box paddingX={`5px`} marginBottom={`25px`}>
              <Typography fontSize={12.5} fontWeight={600} color="#000000de">Domicile City:</Typography>
              <Typography fontSize={12.5} fontWeight={500} color="#000000de">{district}</Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box paddingX={`5px`} marginBottom={`25px`}>
              <Typography fontSize={12.5} fontWeight={600} color="#000000de">Domicile District:</Typography>
              <Typography fontSize={12.5} fontWeight={500} color="#000000de">{district}</Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box paddingX={`5px`} marginBottom={`25px`}>
              <Typography fontSize={12.5} fontWeight={600} color="#000000de">Country Of birth:</Typography>
              <Typography fontSize={12.5} fontWeight={500} color="#000000de">{country?country:`Pakistan`}</Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box paddingX={`5px`} marginBottom={`25px`}>
              <Typography fontSize={12.5} fontWeight={600} color="#000000de">Age:</Typography>
              <Typography fontSize={12.5} fontWeight={500} color="#000000de">22 Year(s) 10 Month(s) and 26 Day(s)</Typography>
            </Box>
          </Grid>
        </Grid> 
          </Box>
      </Paper>
      </ThemeProvider>
    </div>
  )
}

export default BiographicalInformation