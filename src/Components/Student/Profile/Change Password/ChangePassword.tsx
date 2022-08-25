import { Alert, Box, Button, Divider, Grid, Hidden, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import ReportIcon from '@mui/icons-material/Report';
const theme = createTheme({
  typography:{
      fontFamily:"montserrat",
      fontSize:12
  },
});

const ChangePassword = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper sx={{margin:"0 0 20px 0"}}>
          <Box padding={"20px"}>
           <Box marginBottom={"25px"} >
          <Box paddingBottom={"10px"} display={"flex"} alignItems={"flex-end"}>
              <Typography color="#48465b" fontSize={15.6} fontWeight={700} marginRight="10px">Change Password</Typography>
              <Typography  color="#48465b" fontSize={13} fontWeight={400}>change or reset your account password</Typography>
              </Box>
          <Divider></Divider>
        </Box>
        <Grid container spacing={2}>
        <Grid item xs={12} >
              <Alert icon={<ReportIcon/>} severity="warning" ><Typography color="#dc8e19" fontSize={13} fontWeight={600}>Once your password is updated, you will be logged out of EServices Portal! You will need to Sign In back with the updated password.</Typography></Alert>
          </Grid>
          <Grid item md={6} xs={12} >
              <TextField 
              sx={{mb:'25px'}}
              color='success'
              required
              label="Current Password"
              helperText="Please enter current password"
              fullWidth
              size='small'
              />
          </Grid>
          <Hidden mdDown>
              <Grid item md={6} xs={12}></Grid>
          </Hidden>
          <Grid item md={6} xs={12} >
              <TextField 
              sx={{mb:'25px'}}
              color='success'
              required
              label="New Password"
              helperText="Please enter password should be atleast 8 characters long,alphanumeric and contain atleast one capital letter"
              fullWidth
              size='small'
              />
          </Grid>
          <Hidden mdDown>
              <Grid item md={6} xs={12}></Grid>
          </Hidden>
          <Grid item md={6} xs={12}>
              <TextField 
              sx={{mb:'25px'}}
              color='success'
              required
              label="Confirm Password"
              helperText="Please enter password for confirmation"
              fullWidth
              size='small'
              />
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
              <Box>
                  <Button sx={{margin:"0 15px 0 0"}} variant='outlined' color='success'>Change Password</Button>
                  <Button variant='outlined'>cancel</Button>
              </Box>
          </Grid> 
          </Box>
      </Paper>
      </ThemeProvider>
    </div>
  )
}

export default ChangePassword