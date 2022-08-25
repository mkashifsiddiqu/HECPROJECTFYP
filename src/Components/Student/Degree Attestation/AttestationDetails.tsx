/* eslint-disable prettier/prettier */
import React, { useState,useEffect, FC } from 'react';
import { Autocomplete, Divider, FormControl, Grid, 
  FormLabel,RadioGroup,FormControlLabel,Radio,
  InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector } from 'react-redux';

import stateTable from './../../../../Utli/countryDetail/tbl_state.json'
const useStyles = makeStyles({
  main: {
    margin: `7em 2em 0 6em`,
  },
  paper: {
    padding: `1.5em`,
  },
  referencetext: {
    fontFamily: `montserrat`,
    fontSize: `0.8125rem`,
    color: `#138e5d`,
    fontWeight: `600`,
  },
  chip: {
    backgroundColor: `#84dcff`,
    fontFamily: `montserrat`,
    padding: `0.5em 0.2em`,
    fontWeight: `500`,
    color: `#0491ca`,
    cursor: `pointer`,
    '&:hover': {
      backgroundcolor: `#41a7fa`,
      color: `#fff`,
    },
    fontSize: `0.65rem`,
  },
  personalinfo: {
    fontFamily: `montserrat`,
    fontSize: `0.975rem`,
    color: `#48465b`,
    fontWeight: `bold`,
  },
  box: {
    margin: `1.5em 0 `,
  },
  ltext: {
    fontFamily: `monstserrat`,
  },
  t: {
    fontFamily: `montserrat`,
    fontSize: `0.8rem`,
    fontWeight: `500`,
  },
  tarea: {
    width: `1900px`,
  },
});
interface AttestationDetailsProps{
  Disability:string,
  setDisability:React.Dispatch<React.SetStateAction<string>>,
  mode:string,
  setmode:React.Dispatch<React.SetStateAction<string>>,
  whereCheck:string,
  setwhereCheck:React.Dispatch<React.SetStateAction<string>>,
  cityDistrict:string,
  setCityDistrict:React.Dispatch<React.SetStateAction<string>>
}
function createData(
  year: number,
  applicantName: string,
  qualificationLevel: string,
  universityName: string,
) {
  return {
    applicantName,
    year,
    qualificationLevel,
    universityName,
  };
}
const rows = [
  createData(`Kashif`,2022, `Software Engineering`, `University of Gujrat`),
];

let grandTotal
function Row(props: { row: ReturnType<typeof createData>,Disability }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [value1, setvalue1] = React.useState<number>(1);
  const [value2, setvalue2] = React.useState<number>(1);
  const [value3, setvalue3] = useState<number>(0)
  const DegreeList = useSelector((state)=>state.selectedDegree.userData) 
  //Destrc...
  const {id,NameOnDegree,InstituteName,ProgramTitle,year} =DegreeList.data
  //For Update Value 3
  useEffect(() => {
    // console.log(`Data in Step 3`,InstituteName)
    const result = value1 * value2*700
    setvalue3(result);
    grandTotal=result
     
  }, [value1,value2])
 const classes = useStyles();
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: `unset`}, borderBottom:`1px dashed #ddd`  }}>
        <TableCell component="th" scope="row" sx={{fontSize:`12px`, fontWeight:`600`, color:`#404b61`}}>
          {year}
        </TableCell>
        <TableCell align="left" sx={{fontSize:`12px`, fontWeight:`600`, color:`#404b61`}}>{NameOnDegree}</TableCell>
        <TableCell align="left" sx={{fontSize:`12px`, fontWeight:`600`, color:`#404b61`}}>{ProgramTitle}</TableCell>
        <TableCell align="left" sx={{fontSize:`12px`, fontWeight:`600`, color:`#404b61`}}>
          {InstituteName}
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow  sx={{ backgroundColor: `#f4f4f4`}}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit sx={{borderTop:`3px dotted white`}}>
            <Box sx={{ margin: 1}}>
              <Box>
              <Typography className={classes.personalinfo}>
                PLEASE SELECT NUMBER OF PAGE OF DOCUMENTS TO BE ATTESTED
              </Typography>
              </Box>
              <Box bgcolor={`#efeded`} padding={`20px 15px`} display={`flex`} justifyContent={`space-between`}>
                <Typography fontSize={`13px`} color={`#313131`} fontWeight={600}>Fee for attestation of each original document is Rs. 1000</Typography>
                <Typography fontSize={`13px`} color={`#313131`} fontWeight={600}>Fee for attestation of each photocopy document is Rs. 700</Typography>
              </Box>
              <Table size="small" aria-label="purchases">
              <TableHead>
                  <TableRow>
                    <TableCell sx={{fontSize:`11px`, fontWeight:`600`, color:`#757575`}}>DOCUMENT TYPE</TableCell>
                    <TableCell sx={{fontSize:`11px`, fontWeight:`600`, color:`#757575`}}>PAGES OF ORIGINAL DOCUMENTS</TableCell>
                    <TableCell sx={{fontSize:`11px`, fontWeight:`600`, color:`#757575`}}>PAGES OF PHOTOCOPY DOCUMENTS</TableCell>
                    <TableCell sx={{fontSize:`11px`, fontWeight:`600`, color:`#757575`}} align="right">AMOUNT</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{fontSize:`12px`, fontWeight:`500`}} component="th" scope="row">
                      Transcript
                    </TableCell>
                    <TableCell>
                      <TextField
                        InputProps={{style:{fontSize:`12px`, fontWeight:`500`}}}
                        sx={{"& .MuiInputBase-root":{height:`30px`}}}
                        id="demo-helper-text-aligned-no-helper"
                        type='number'
                        size="small"
                        value={value1}
                        onChange={(e)=>{
                          const {value} = e.target
                          console.log(value)
                          setvalue1(value)    
                        }}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <TextField
                        InputProps={{style:{fontSize:`12px`, fontWeight:`500`}}}
                        sx={{"& .MuiInputBase-root":{height:`30px`}}}
                        id="demo-helper-text-aligned-no-helper"
                        type="number"
                        size="small"
                        value={value2}
                        onChange={(e)=>{
                          setvalue2(e.target.value)
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Typography sx={{fontSize:`12px`, fontWeight:`500`}}>{value3}</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const AttestationDetails:FC<AttestationDetailsProps> = ({
  Disability,setDisability,
  mode,setmode,
  whereCheck,setwhereCheck,
  cityDistrict,setCityDistrict
}) => {
  const classes = useStyles();
  const handleWhereCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setwhereCheck((event.target as HTMLInputElement).value);
  };
  const handleDisability = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisability((event.target as HTMLInputElement).value);
  };
  return (
    <div>
      {/* Attestation Detail */}
      <Box>
        <Box className={classes.box}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
             <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={mode}
                onChange={(e,newValue)=>{setmode(newValue)}}
                options={[
                `Attestation Through Courier`,
                `Walk-in (Urgent Attestation)`]}
                fullWidth
                size='medium'
                renderInput={(params) => <TextField {...params} 
                color='success'
                label="Mode of Attestation"
                helperText="The applicant will have to pay Rs. 5000/- as Urgent Attestation Fee in addition to RS. 1000/- for attestation of each original document and Rs. 700 for each photocopy. The case will be processed on priority basis keeping in view only 50 urgent slots per day."
                />}
              />
            </Grid>
            {mode ===`Walk-in (Urgent Attestation)` && 
            <Grid item md={6} xs={12}>
            <Autocomplete
                disablePortal
                value={cityDistrict}
                onChange={(e,newValue)=>{
                  setCityDistrict(newValue)
                }}
                id="combo-box-demo"
                options={[`Islamabad`,`Peshawar`,`Lahore`,`Karachi`,`Quetta`]}
                fullWidth
                size='medium'
                renderInput={(params) => <TextField {...params} 
                color="success"
                label={`Where You Want To Get Attestation`}
                helperText="Please select Where You Want To Get Attestation"
              />}
              />
            </Grid>}
            {mode ===`Attestation Through Courier` && 
            <>
            <Grid item md={6} xs={12}>
            <FormControl >
              <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:`#525252`,fontSize:`18px`,fontWeight:500}}>From where are you sending your documents?</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{color:`black`}}
                value={whereCheck}
                onChange={handleWhereCheck}
              >
                <FormControlLabel value="Inside Pakistan" control={<Radio color='success'/>}   label="Inside Pakistan"/>
                <FormControlLabel value="Outside Pakistan" control={<Radio color='success'/>}  label="Outside Pakistan" />
              </RadioGroup>
            </FormControl>
            </Grid>
            {whereCheck==`Inside Pakistan` &&
            <Grid item md={6} xs={12}>
            <Autocomplete
                    value={cityDistrict}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setCity(newValue?.state_name);
                      } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setCityDistrict(newValue.inputValue?.state_name);
                      } else {
                        setCityDistrict(newValue?.state_name);
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="Cities"
                    options={stateTable}
                    getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                      if (typeof option === `string`) {
                        return option;
                      }
                      // Add "xxx" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      // Regular option
                      return option.state_name;
                    }}
                    renderOption={(props, option) => <li {...props}>{option.state_name}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params}  
                      color="success"
                      label={`District`}
                      required
                      helperText="Please select district"
                      size="medium"
                      fullWidth
                      />
                    )}
                  />
            </Grid>}
            {whereCheck==`Outside Pakistan` &&
            <Grid item md={6} xs={12}>
              <Autocomplete
                disabled={true}
                fullWidth
                options={[`Islamabad`]}
               renderInput={(params) => (
                      <TextField {...params}  
              label='Reginal Center'
              helperText='Please Select regional center'
              size='medium'
              value={`Islamabad`}
              />)}
              />
            </Grid>}
            <Grid item md={6} xs={12}>
            <FormControl >
              <FormLabel id="demo-row-radio-buttons-group-label" sx={{color:`#525252`,fontSize:`18px`,fontWeight:500}}>Do you have any Disability?</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{color:`black`}}
                value={Disability}
                onChange={handleDisability}
              >
                <FormControlLabel value="Yes" control={<Radio color='success'/>}   label="Yes"/>
                <FormControlLabel value="No" control={<Radio color='success'/>}  label="No" />
              </RadioGroup>
            </FormControl>
            </Grid>
            </>
            }
          </Grid>
        </Box>
        <Typography className={classes.personalinfo}>
          SELECTED DEGREES FOR ATTESTATION
        </Typography>
        <Divider sx={{ mt: 4 }}></Divider>
        <TableContainer>
          <Table aria-label="collapsible table" size="small">
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ fontSize: `11px` }}>
                  YEAR OF PASSING
                </TableCell>
                <TableCell align="left" sx={{ fontSize: `11px` }}>
                  APPLICANT NAME ON DEGREE
                </TableCell>
                <TableCell align="left" sx={{ fontSize: `11px` }}>
                  QUALIFICATION LEVEL
                </TableCell>
                <TableCell align="left" sx={{ fontSize: `11px` }}>
                  UNIVERSITY
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.applicantName} row={row} Disability={Disability}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box></Box>
      <Box display='flex' justifyContent='flex-end'>
      <Box
        sx={{
          mt: 2,
          backgroundColor: `#e6f7ed`,
          width: `150px`,
          height: `100%`,
        }}
      >
        <Typography sx={{ fontSize: `14px`, textAlign: `center`, p: 1 }}>
          Total Amount : {grandTotal?grandTotal:700}
        </Typography>
      </Box>
      </Box>
      
    </div>
  );
};

export default AttestationDetails;
