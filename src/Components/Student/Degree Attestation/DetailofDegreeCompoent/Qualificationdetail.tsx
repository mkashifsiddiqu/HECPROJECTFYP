import {
  Accordion,AccordionDetails,AccordionSummary,Autocomplete,
  Box,Button,Checkbox,Divider,FormControlLabel,
  Grid,TextField,Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { FC, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import QualLevel from '../.././../../../Utli/Qualificationlevel.json'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const useStyles = makeStyles({
  t: {
    fontFamily: `montserrat`,
    fontSize: `0.8rem`,
    fontWeight: `500`,
  },
  box: {
    margin: `1.5em 0`,
  },
  Accordian: {
    margin: `1em 0`,
    backgroundColor: `#f6f9fc`,
  },
});
interface NextACProps{
  Mode:string,
  nextAccord:string ,
  setnextAccord:React.Dispatch<React.SetStateAction<string>>
  Qualilevel:string ,
  SetQaliLevel:React.Dispatch<React.SetStateAction<string>>
  degStatus:string, 
  setDegStatus:React.Dispatch<React.SetStateAction<string>>,
  degstart:Date  ,
  handleStart:(newValue: Date ) => void,
  endDeg:Date ,
  handleEnd:(newValue: Date ) => void,
  NameDeg:string ,
  setNameDeg:React.Dispatch<React.SetStateAction<string>>
}
interface QualiProps{
  name:string,
}
export default function Qualificationdetail({
  Mode,
  nextAccord,setnextAccord,
  Qualilevel,SetQaliLevel,
  degStatus,setDegStatus,
  degstart,handleStart,
  endDeg,handleEnd,
  NameDeg,setNameDeg,
}:NextACProps) {
  if(!nextAccord){
    setnextAccord(`open`)
  }
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      
    };
  const handleCancel = 
  (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
    setnextAccord(`close`)
    window.scroll(0,480)
  };
  //**********CheckBox Education Status********** *****/
  const [checkBox, setcheckBox] = useState<number>(0)
 const handleCheckEdu = (value:string)=>{
  switch (value) {
    case `Complete Education`:
      setDegStatus(value)
      setcheckBox(2)
      break;
    case `Complete Education`:
      setDegStatus(value)
        setcheckBox(1)
    default:
       setcheckBox(0)
      break;
  }
 
 }
 const classes = useStyles();
 return (
    <div>
      <Box sx={{ m: 4 }}>
        <Accordion elevation={0}
          sx={{backgroundColor:`#fff`}}
          expanded={nextAccord===`open` && expanded === `panel1`}
          onChange={handleChange(`panel1`)}
        >
          <AccordionSummary>
          <Box width={`100%`}>
            <Box sx={{ display: `flex`, justifyContent: `space-between`,width:`100%` }}>
              <Typography fontSize={`14.43px`} color={`#48465b`} fontWeight={700}>Qualification Details</Typography>
              <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </Box>
            <Divider sx={{margin:`10px 0 0 0`}}/>
            </Box>
          </AccordionSummary>
          <AccordionDetails className={classes.box}>
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item md={6} xs={12}>
              <Autocomplete
                    disabled={Mode===`View`}
                    value={Qualilevel}
                    onChange={(event, newValue:QualiProps) => {
                      if (typeof newValue === `string`) {
                        SetQaliLevel(newValue);
                      } else {
                        SetQaliLevel(newValue?.name);
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="Qualification Level"
                    options={QualLevel}
                    getOptionLabel={(option:any) => {

                      // Value selected with enter, right from the input
                      if (typeof option === `string`) {
                        return option;
                      }
                      // Add "anything" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      // Regular option
                      return option.name;
                    }}
                    renderOption={(props, option:any) => <li {...props}>{option.name}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} color="success"
                      label={
                        <Typography className={classes.t}>
                          Qualification Level
                        </Typography>
                      }
                      helperText={
                        <Typography>Please select qualification level</Typography>
                      }
                      size="small"
                      fullWidth />
                    )}
                  />
              </Grid>
              <Grid item md={3} xs={12}>
                <FormControlLabel
                //code for  degStatus
                  disabled={checkBox===1}
                  value={`Complete Education`}
                  onChange={()=>handleCheckEdu(`Complete Education`)}
                  control={<Checkbox color="success"></Checkbox>}
                  label={<Typography>Complete Education</Typography>}
                ></FormControlLabel>
              </Grid>
              <Grid item md={3} xs={12}>
                <FormControlLabel
                  disabled={checkBox===2}
                  value={`Currently Enrolled`}
                  control={<Checkbox  color="success"></Checkbox>}
                  label={<Typography>Currently Enrolled</Typography>}
                ></FormControlLabel>
              </Grid>
              <Grid item md={6} xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                     disabled={Mode===`View`}
                      inputFormat="MM/dd/yyyy"
                      value={degstart}
                      onChange={handleStart}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="success"
                          label="Start Date"
                          InputLabelProps={{
                            style: {
                              fontWeight: 700,
                              fontSize: `14px`,
                              fontFamily: `montserrat`,
                            },
                          }}
                          helperText="Please Select Your Start Date e.g 01/01/2018"
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                  </LocalizationProvider>
              </Grid>
              <Grid item md={6} xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      disabled={Mode===`View`}
                      inputFormat="MM/dd/yyyy"
                      value={endDeg}
                      onChange={handleEnd}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="success"
                          label="End Date"
                          InputLabelProps={{
                            style: {
                              fontWeight: 700,
                              fontSize: `14px`,
                              fontFamily: `montserrat`,
                            },
                          }}
                          helperText="Please Select Your End Date e.g 01/01/2022"
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                  </LocalizationProvider>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  disabled={Mode===`View`}
                  value={NameDeg}
                  onChange={(e)=>setNameDeg(e.target.value)}
                  color="success"
                  label={
                    <Typography className={classes.t}>
                      Name on Degree
                    </Typography>
                  }
                  helperText={
                    <Typography>
                      Please enter your exact name as written on degree
                    </Typography>
                  }
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </AccordionDetails>
          <Divider />
          <Box sx={{ display: `flex`, justifyContent: `flex-end` }}>
            <Button
              sx={{
                m: 1,
                backgroundColor: `transparent`,
                color: `#048753`,
                boxShadow: `1px 1px 3px gray`,
              }}
              onClick={()=>handleCancel(`panel1`)}
            >
              Cancel
            </Button>
            <Button
              sx={{
                m: 1,
                backgroundColor: `transparent`,
                color: `#048753`,
                boxShadow: `1px 1px 3px gray`,
              }}
              
              endIcon={<ArrowRightIcon/>}
              onClick={()=>setnextAccord(`close`)}
            >
              Next
            </Button>
          </Box>
        </Accordion>
      </Box>
    </div>
  );
}
