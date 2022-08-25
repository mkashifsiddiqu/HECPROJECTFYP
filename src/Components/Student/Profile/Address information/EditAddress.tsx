import { Box, Button, Divider, Grid, IconButton, Paper, TextareaAutosize, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { createTheme, ThemeProvider } from '@mui/material'
import { motion } from 'framer-motion';

const theme = createTheme({
  typography:{
      fontFamily:"montserrat"
  },
});

const PermanentAddress = () => {
  return (
    <div>
        <ThemeProvider theme={theme}>
        <Paper>
          <Box padding={"20px"} sx={{margin:"0 0 20px 0"}}>
           <Box marginBottom={"25px"} >
          <Box paddingBottom={"10px"} display={"flex"} justifyContent={"space-between"}><Typography color="#48465b" fontSize={15.6} fontWeight={700}>Permanent Address Details</Typography><Tooltip title={'Edit Details'}><motion.div whileHover={{scale:1.1, color:"green"}}><EditIcon sx={{width:"18px", height:"18px"}} /></motion.div></Tooltip></Box>
          <Divider></Divider>
        </Box>
        <Grid container spacing={2} marginBottom={"25px"}>
          <Grid item xs={12}>
          <TextField 
                    required
                    color='success'
                    label="Address"
                    helperText="Please enter address"
                    multiline
                    minRows={2}
                    size="small"
                    fullWidth />
          </Grid>
          <Grid item md={6} xs={12}>
                    <TextField 
                    select
                    required
                    color='success'
                    label="Country"
                    helperText="Please select country"
                    size="small"
                    fullWidth />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField 
                    select
                    required
                    color='success'
                    label="City"
                    helperText="Please select city"
                    size="small"
                    fullWidth />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField 
                    select
                    required
                    color='success'
                    label="District"
                    helperText="Please select district"
                    size="small"
                    fullWidth />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField 
                    select
                    required
                    color='success'
                    label="Postal Code"
                    helperText="Please select postal code"
                    size="small"
                    fullWidth />
                </Grid>
        </Grid> 
        <Box>
              <Button sx={{margin:"0 15px 0 0"}} color='success' variant='outlined'>Save & Close</Button>
              <Button variant='outlined'>Close</Button>
          </Box>
          </Box>
      </Paper>
      </ThemeProvider>
    </div>
  )
}

export default PermanentAddress