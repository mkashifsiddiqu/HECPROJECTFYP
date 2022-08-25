import { Box, Checkbox, Divider, FormControlLabel, Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { createTheme, ThemeProvider } from '@mui/material'
import { motion } from 'framer-motion';

const theme = createTheme({
  typography:{
      fontFamily:"montserrat"
  },
});

const MailAddress = () => {
  return (
    <div>
        <ThemeProvider theme={theme}>
        <Paper>
          <Box padding={"20px"} sx={{margin:"0 0 20px 0"}}>
           <Box marginBottom={"25px"} >
          <Box paddingBottom={"10px"} display={"flex"} justifyContent={"space-between"}><Typography color="#48465b" fontSize={15.6} fontWeight={700}>Mailing Address</Typography><Tooltip title={'Edit Details'}><motion.div whileHover={{scale:1.1, color:"green"}}><EditIcon sx={{width:"18px", height:"18px"}} /></motion.div></Tooltip></Box>
          <Divider></Divider>
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <Box paddingX={"5px"} marginBottom={"25px"}>
              <Typography fontSize={12.5} fontWeight={600} color="#000000de">Address:</Typography>
              <Typography fontSize={12.5} fontWeight={500} color="#000000de">Abubakar Street, Shadman Colony Punjab</Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box paddingX={"5px"} marginBottom={"25px"}>
              <Typography fontSize={12.5} fontWeight={600} color="#000000de">District:</Typography>
              <Typography fontSize={12.5} fontWeight={500} color="#000000de">Gujrat</Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box paddingX={"5px"} marginBottom={"25px"}>
              <Typography fontSize={12.5} fontWeight={600} color="#000000de">City:</Typography>
              <Typography fontSize={12.5} fontWeight={500} color="#000000de">Gujrat</Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box paddingX={"5px"} marginBottom={"25px"}>
              <Typography fontSize={12.5} fontWeight={600} color="#000000de">Postal Code:</Typography>
              <Typography fontSize={12.5} fontWeight={500} color="#000000de">50700</Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box paddingX={"5px"} marginBottom={"25px"}>
              <Typography fontSize={12.5} fontWeight={600} color="#000000de">Country:</Typography>
              <Typography fontSize={12.5} fontWeight={500} color="#000000de">Pakistan</Typography>
            </Box>
          </Grid>
        </Grid> 
          </Box>
      </Paper>
      </ThemeProvider>
    </div>
  )
}

export default MailAddress