import { Alert, Box, Button, Divider, Grid, Hidden, IconButton, Paper, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { createTheme, ThemeProvider } from '@mui/material'
import { motion } from 'framer-motion';
import ReportIcon from '@mui/icons-material/Report';

const theme = createTheme({
  typography:{
      fontFamily:"montserrat",
      fontSize:12
  },
});

const ChangeEmail = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper sx={{margin:"0 0 20px 0"}}>
          <Box padding={"20px"}>
           <Box marginBottom={"25px"} >
          <Box paddingBottom={"10px"} display={"flex"} alignItems={"flex-end"}>
              <Typography color="#48465b" fontSize={15.6} fontWeight={700} marginRight="10px">Change Email</Typography>
              <Typography  color="#48465b" fontSize={13} fontWeight={400}>change your account email</Typography>
              </Box>
          <Divider></Divider>
        </Box>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} >
              <TextField 
              marginBottom={"25px"}
              color='success'
              required
              label="Primary Email"
              helperText="Please enter email in correct format e.g: username@provider.com"
              fullWidth
              size='small'
              />
          </Grid>
          <Hidden mdDown>
              <Grid item md={6} xs={12}></Grid>
          </Hidden>
          <Grid item md={6} xs={12}>
              <Box height={"50px"} display={"flex"} alignItems={"flex-end"}>
                  <Button sx={{margin:"0 15px 0 0"}} variant='outlined' color='success'>Change Email</Button>
                  <Button variant='outlined'>cancel</Button>
              </Box>
          </Grid>
        </Grid> 
          </Box>
      </Paper>
      </ThemeProvider>
    </div>
  )
}

export default ChangeEmail