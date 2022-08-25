/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prettier/prettier */
import { Box, Accordion, AccordionDetails, AccordionSummary, Button, Divider, FormControl, FormControlLabel, FormLabel, Pagination, PaginationItem, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Item } from 'framer-motion/types/components/Reorder/Item'
import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { createTheme, ThemeProvider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const theme = createTheme({
  typography:{
    fontFamily:"montserrat"
  }
})

const Browserhelplibrary = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{width:`675px`}} padding={`19.5px`}>
        <Typography fontSize={"1rem"} fontWeight={700} paddingBottom={"10px"} color={"rgba(51,51,51,.85)!important"}>FAQ's</Typography>
        <Divider/>
        <FormControl>
          <Box display={"flex"} alignItems={"center"}>
            <FormLabel sx={{padding:"0 10px 0 0", fontSize:"14px",fontWeight:"600", color:"rgba(51,51,51,.85)!important"}} id="demo-row-radio-buttons-group-label">Search by</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel sx={{fontSize:"14px",fontWeight:"600", color:"rgba(51,51,51,.85)!important"}} value="Select From Help Library" control={<Radio color='success' />} label="Select From Help Library" />
        <FormControlLabel sx={{fontSize:"14px",fontWeight:"600", color:"rgba(51,51,51,.85)!important"}} value="Select Our Help Library" control={<Radio color='success' />} label="Select Our Help Library" />
      </RadioGroup>
          </Box>

    </FormControl>
    <Box display={"flex"} alignItems={"center "}><Typography marginRight={"10px"} fontSize={"14px"} fontWeight={600} color={"rgba(51,51,51,.85)!important"}>Service Name</Typography><TextField sx={{width:"362px"}} size='small' /><Button sx={{marginLeft:"10px", fontSize:"10px", textTransform:"none", width:"144px", height:"38px",bgcolor:"#0c96cc", borderRadius:"0" }} variant="contained">Search</Button></Box>

    <Typography marginY={"10px"} fontSize={"15.6px"} fontWeight={"700"} color={"rgba(51,51,51,.85)!important"}>Results</Typography>
    <Accordion>
      <AccordionSummary><Box display={"flex"} alignItems={"center"}><Typography fontSize={"14px"} fontWeight={600} color={"#201f42"} textTransform="capitalize" lineHeight={1.75}>Father`S Name Of Applicant On All Educational Document And CNIC Situation:<br></br>
      - Father`S Name On CNIC Muhammad Imran And On Educational Doc M. Imran<br></br>
      - Father`S Name On CNIC Muhammad Imran And On SSC Muhammad Imran HSSC And Onwards Imran<br></br>
      - Father`S Name On CNIC Muhammad Imran And On SSC Muhammad Imran HSSC And Onwards M. Imran<br></br>
      - Father`S Name On CNIC M. Imran And  On Educational Documents  Muhammad Imran</Typography>
      <KeyboardArrowDownIcon  /></Box>
      </AccordionSummary>
      <AccordionDetails><Typography fontSize={"13px"} fontWeight={300} whiteSpace={"pre-wrap"} lineHeight={1.25} color={"#212529"} overflow={"hidden"} marginLeft={"1%"} height={"100%"} width={"90%"}>
      Recommendations:<br></br>
      - Name of applicant`s father on CNIC and educational doc as Muhammad and M/Mohd. and likewise will be accepted<br></br>
      - Name of applicant`s father on CNIC as well as on educational documents with the addition of caste/honorific title will be accepted.<br></br>
      - Third name(Anjum/Danish/ saqib/nayyer etc.) in addition to applicant fathers name will only be accepted on the basis of Degree Supplement Information Form(Copy attached).
      </Typography>
      </AccordionDetails>
    </Accordion>
    <Divider sx={{margin:"10px 0"}}/>
    <Box display={"flex"} justifyContent={"flex-end"}><Pagination variant='outlined' count={9} shape={"rounded"}></Pagination></Box>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default Browserhelplibrary
