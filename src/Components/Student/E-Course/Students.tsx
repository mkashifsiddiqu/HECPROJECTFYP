/* eslint-disable prettier/prettier */
import React, { FC, useState } from 'react';
import Image from 'next/image';
import {
  Autocomplete,
  Button, Checkbox, Divider, FormControlLabel, FormGroup,
  Grid, Paper, StepLabel, Stepper, Table, TableBody,
  TableCell, TableRow, TextField, Typography,Box,Step,
  createTheme, ThemeProvider, IconButton, Hidden
} from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { motion } from 'framer-motion';

import profile from '@/public/profiel.png';
import headphone from '@/public/ohelp.svg';
import download from '@/public/downloadm.svg';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import UploadIcon from '@mui/icons-material/Upload';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import uni from '../../../../Utli/insistute.json'

import UiFileInputButton from '@/Components/UiFileInputButton'
import axios from 'axios';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
interface formProps {
  eCourseNum:string,
  Name: string,
  setName: React.Dispatch<React.SetStateAction<string >>,
  FatherName: string,
  setFatherName: React.Dispatch<React.SetStateAction<string >>,
  DateOfBirth: Date,
  setDateOfBirth: React.Dispatch<React.SetStateAction<Date >>,
  Phone:string,
  setPhone:React.Dispatch<React.SetStateAction<string >>
  Gender: string,
  setGender: React.Dispatch<React.SetStateAction<string >>,
  CNIC: string,
  setCNIC: React.Dispatch<React.SetStateAction<string >>,
  Email: string,
  setEmail: React.Dispatch<React.SetStateAction<string >>,
  City: string,
  setCity: React.Dispatch<React.SetStateAction<string >>,
  InsituteName: string,
  SetInsituteName: React.Dispatch<React.SetStateAction<string >>,
  Program: string,
  setProgram: React.Dispatch<React.SetStateAction<string >>,
  InsistuteNameOnDegree: string,
  Campus: React.Dispatch<React.SetStateAction<string>>,
  setCampus: React.Dispatch<React.SetStateAction<string >>,
  Semester:string,
  setSemester:React.Dispatch<React.SetStateAction<string >>,
  Department: string,
  setDepartment: React.Dispatch<React.SetStateAction<string >>,
  AreaofInterest: string[],
  setAreaofInterest: React.Dispatch<React.SetStateAction<string[] >>,
  RollNo: string,
  setRollNo: React.Dispatch<React.SetStateAction<string >>,
  Qualilevel: string,
  SetQaliLevel: React.Dispatch<React.SetStateAction<string >>,
  DateOfAdmission: Date,
  SetDateOfAdmission: React.Dispatch<React.SetStateAction<Date >>,
  Country: string,
  setCountry: React.Dispatch<React.SetStateAction<string >>,
  SourceName: string,
  setSourceName: React.Dispatch<React.SetStateAction<string >>,
  TransactionID: string,
  setTransactionID: React.Dispatch<React.SetStateAction<string >>,
  DateofSubmission: string,
  setDateofSubmission: React.Dispatch<React.SetStateAction<string >>,
  DisablePerson:string,
  setDisablePerson:React.Dispatch<React.SetStateAction<string >>,
  Field:string,
  setField:React.Dispatch<React.SetStateAction<string >>,
  uploadBankFee:string,
  setuploadBankFee:React.Dispatch<React.SetStateAction<string >>,
  uploadTrancript:string,
  setuploadTrancript:React.Dispatch<React.SetStateAction<string >>,
  handleSubmit:()=>void
}
const theme = createTheme({
  typography: {
    fontFamily: `montserrat`,
  },
  palette:{
    success:{
      main:`#1bb55e`,
      contrastText:`#fff`
    },
    error:{
      main:`#ff2447`,
      contrastText:`#fff`
    }
  }
});
const genderList = [`Male`, `Female`, `Other`]
const Students: FC<formProps> = ({
  eCourseNum,
  // Phase I
  Name, setName,
  FatherName, setFatherName,
  DateOfBirth, setDateOfBirth,
  Gender, setGender,
  CNIC, setCNIC,
  Email, setEmail,
  City, setCity,
  Phone,setPhone,
  DisablePerson,setDisablePerson,
  // Phase III
  InsituteName, SetInsituteName,
  Program, setProgram,
  Semester,setSemester,
  Campus, setCampus,
  Department, setDepartment,
  AreaofInterest, setAreaofInterest,
  RollNo, setRollNo,
  Qualilevel, SetQaliLevel,
  DateOfAdmission, SetDateOfAdmission,
  Country, setCountry,
  Field,setField,
  //Phase III
  SourceName, setSourceName,
  TransactionID, setTransactionID,
  DateofSubmission, setDateofSubmission,
  //Phase IV
  uploadTrancript,setuploadTrancript,
  uploadBankFee,setuploadBankFee,
  //handel Submit Button
  handleSubmit
}) => {
  //Main Functional Components Start From Here 
  const handleChange = (newValue: Date ) => {
    setDateOfBirth(newValue);
  };
  const handleDateOfAdmission = (newValue: Date ) => {
    SetDateOfAdmission(newValue);
  };
  //============================Upload file Icon============//
  const [uploadFile1, setuploadFile1] = useState<boolean>(false)
  const [uploadFile2, setuploadFile2] = useState<boolean>(false)
  //===========================Check Box ==================//
  const [AgreeCheckBox, setAgreeCheckBox] = useState<boolean>(false)
  //Upload document
  const onUploadFile = async (formData) => {
    const config = {
      headers: { 'content-type': `multipart/form-data` },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };
    
    const response = await axios.post(`/api/Image/upload`, formData, config);
    console.log(`response`, response.data);
  };
  return (
    <div>
      <Box margin={`2em`}>
        <Divider></Divider>
        <Box>
          <Stepper sx={{ display: `flex`, justifyContent: `center` }}>
            <Step
              style={{
                width: `100%`,
                display: `flex`,
                justifyContent: `center`,
                fontFamily: `montserrat`,
                borderBottom: `solid`,
                borderBottomColor: `#0b6a90`,
                padding: `1.5em`,
              }}
            >
              <Image src={profile} alt="profile"></Image>
              <StepLabel icon={true}>
                <Typography
                  fontFamily={`montserrat`}
                  fontSize={`0.8rem`}
                  fontWeight={`700`}
                  margin={`0 0 0 1em`}
                  color={`#565759`}
                >
                  {eCourseNum} Form
                </Typography>
              </StepLabel>
            </Step>
          </Stepper>
        </Box>
        <Box
          sx={{ display: `flex`, justifyContent: `flex-end`, margin: `1em 0`, height: `10px` }}
        >
          <motion.div whileHover={{ marginTop: -5 }}>
            <Button
              sx={{
                margin: `0 0 0 1em`,
                fontFamily: `Montserrat`,
                fontSize: `0.6875rem`,
                fontWeight: `bold`,
                color: `#1bb55e`,
              }}
              color="success"
              variant="outlined"
            >
              <Box margin={`0 0.5em 0 0`} height={`1.2em`} width={`1.2em`}>
                <Image src={headphone} alt="headphone"></Image>
              </Box>
              <Typography
                fontFamily={`montserrat`}
                fontSize={`0.6875rem`}
                fontWeight={700}
              >
                Online help
              </Typography>
            </Button>
          </motion.div>
          <motion.div whileHover={{ marginTop: -5 }}>
            <Button
              sx={{
                margin: `0 0 0 1em`,
                fontFamily: `Montserrat`,
                fontSize: `0.6875rem`,
                fontWeight: `bold`,
                color: `#1bb55e`,
              }}
              color="success"
              variant="outlined"
            >
              <Box margin={`0 0.5em 0 0`} height={`1.5em`} width={`1.2em`}>
                <Image src={download} alt="download"></Image>
              </Box>
              <Typography
                fontFamily={`montserrat`}
                fontSize={`0.6875rem`}
                fontWeight={700}
              >
                Download Manual
              </Typography>
            </Button>
          </motion.div>
        </Box>
      </Box>
      <ThemeProvider theme={theme}>
        <Paper sx={{ margin: `2em`, padding: `2em` }} elevation={0}>
          <Typography
            sx={{ color: `#48465b`, fontWeight: `bold`, marginBottom: `1em` }}
          >
            Perosnal Info
          </Typography>
          <Divider></Divider>
          <ThemeProvider theme={theme}>
            <Box margin={`1.5em 0`}>
              <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                  <TextField
                    required
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    color="success"
                    label={`Full Name`}
                    helperText="Please Enter Full Name"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    color="success"
                    value={FatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    helperText="Please Enter Father Name"
                    label={`Father Name`}
                    size="small"
                    fullWidth
                  />
                </Grid>
                
                {eCourseNum != `Alumni` &&
                <>
                <Grid item md={4} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      inputFormat="MM/dd/yyyy"
                      value={DateOfBirth}
                      onChange={handleChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="success"
                          label="Date of Birth"
                          helperText="Please Select Your Date of Birth e.g 01/01/1980"
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Autocomplete
                    value={Gender}
                    onChange={(e, newValue) => { setGender(newValue) }}
                    options={genderList}
                    renderInput={(params) => <TextField
                      {...params}
                      color="success"
                      label="Gender"
                      size="small"
                      fullWidth
                    />}


                  />

                </Grid>
                </>
                }
                <Grid item md={4} xs={12}>
                  <TextField
                    value={CNIC}
                    onChange={(e) => { setCNIC(e.target.value) }}
                    color="success"
                    label="CNIC"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    value={Email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    color="success"
                    label="Email"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                     value={Phone}
                     onChange={(e)=>setPhone(e.target.value)}
                     color="success"
                     label="Contact No."
                    size="small"
                    fullWidth
                  />
                </Grid>
                {eCourseNum == `Stutdent`&&
                <Grid item md={4} xs={12}>
                  <Autocomplete
                    value={City}
                    onChange={(e, newValue) => setCity(newValue)}
                    options={ListOfCity}
                    renderInput={(params) => <TextField
                      {...params}
                      color="success"
                      label="City of residence"
                      size="small"
                      fullWidth />}
                  />
                </Grid>
                }
              </Grid>
            </Box>
            <Typography
              sx={{ color: `#48465b`, fontWeight: `bold`, marginBottom: `1em` }}
            >
              Academic Details
            </Typography>
            <Divider></Divider>
            <Box margin={`1.5em 0`}>
              <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                  <Autocomplete
                    value={InsituteName}
                    onChange={(e, newValue) => SetInsituteName(newValue?.label)}
                    options={uni.Insistutes}
                    renderInput={(params) => <TextField
                      {...params}
                      color="success"
                      label="University Name"
                      helperText="Please select university name"
                      size="small"
                      fullWidth
                    />}
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    required
                    color="success"
                    label="University Registration/Roll Number"
                    helperText="Please Enter registration/roll number"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                      value={Program}
                      onChange={(e)=>setProgram(e.target.value)}
                      color="success"
                      label="Program Currently Enrolled"
                      helperText="Please Enter Program Currently Enrolled"
                      size="small"
                      fullWidth
                    />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Autocomplete
                    value={Field}
                    onChange={(e, newValue) => setField(newValue)}
                    options={ListOfDiscipline}
                    renderInput={(params) => <TextField
                      {...params} color="success"
                      label={`Discipline/Field of Study`}
                      helperText="Please Select Discipline/Field of Study"
                      size="small"
                      fullWidth
                    />}
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <Autocomplete
                    value={Qualilevel}
                    onChange={(e, newValue) => SetQaliLevel(newValue)}
                    options={
                    [`Bachelor/Master(16-17 years`,
                    `MS/MPhil`,
                    `PhD`]
                  }
                    renderInput={(params) => <TextField
                      {...params}
                      color="success"
                      label={`Degree/Qualification Level`}
                      helperText="Please Select Degree/Qualification Level"
                      size="small"
                      fullWidth
                    />}
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                      value={Department}
                      onChange={(e) => setDepartment(e.target.value)}
                      color="success"
                      label={`Department`}
                      helperText="Please Select First Department"
                      size="small"
                      fullWidth
                    />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    value={Campus}
                    onChange={(e) => setCampus(e.target.value)}
                      color="success"
                      label={`Campus`}
                      helperText="Please Enter Campus Name"
                      size="small"
                      fullWidth
                    />
                </Grid>
                {eCourseNum == `Stutdent`&&
                <>
                <Grid item md={4} xs={12}>
                  <Autocomplete
                    value={Semester}
                    onChange={(e, newValue) => setSemester(newValue)}
                    options={ListOfSemester}
                    renderInput={(params) => <TextField
                      {...params}
                      color="success"
                      label={`Semester`}
                      helperText="Please Select Semester"
                      size="small"
                      fullWidth
                    />}
                  />
                </Grid>
                
                <Grid item md={4} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      inputFormat="dd/MM/yyyy"
                      value={DateOfAdmission}
                      onChange={handleDateOfAdmission}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="success"
                          label={`Date of Admission`}
                          helperText="Please Select Your Date of Admission e.g 01/01/1980"
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                </>
                }
                {eCourseNum == `Faculty`&&
                <Grid item md={4} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      inputFormat="dd/MM/yyyy"
                      value={DateOfAdmission}
                      onChange={handleDateOfAdmission}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="success"
                          label={`Date of Joining`}
                          helperText="Please Select Your  Date of Joining e.g 01/01/2018"
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                }
                {eCourseNum == `Stutdent`&&
                <Grid item md={4} xs={12}>
                  <Autocomplete
                    value={DisablePerson}
                    onChange={(e, newValue) => setDisablePerson(newValue)}
                    options={[`Yes`,`No`]}
                    renderInput={(params) => <TextField
                      {...params}
                      color="success"
                      label={`Are you a student with Disability`}
                      size="small"
                      fullWidth
                    />}
                  />
                </Grid>
                }
              </Grid>
            </Box>
            <Typography
              sx={{ color: `#48465b`, fontWeight: `bold`, marginBottom: `1em` }}
            >
              Area of Interest
            </Typography>
            <Divider></Divider>
            <Box margin={`1.5em 0`}>
              <Grid container spacing={2}>
                <Grid item md={9} xs={12}>
                <Autocomplete
                value={AreaofInterest}
                onChange={(e,newValue) => setAreaofInterest(newValue)}
                limitTags={3}
                multiple
                options={ListOFAreaInterest}
                disableCloseOnSelect
                getOptionLabel={(option) => option}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option}
                  </li>
                )}
                style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params}
                    
                    color="success"
                    label="Area of Interest"
                    helperText="Please Select Area of Interest"
                    size="small"
                    fullWidth
                  />
                  )}
                  />
               </Grid>
              </Grid>
            </Box>

            <Typography
              sx={{ color: `#48465b`, fontWeight: `bold`, marginBottom: `1em` }}
            >
              Payment Details
            </Typography>
            <Divider></Divider>
            <Box margin={`1.5em 0`}>
              <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                  <Autocomplete
                    value={SourceName}
                    onChange={(e, newValue) => setSourceName(newValue)}
                    options={PaymentSourceName}
                    renderInput={(params) => <TextField
                      {...params}
                      color="success"
                      label="Payment Source Name"
                      helperText="Please Enter First Name"
                      size="small"
                      fullWidth
                    />}
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    value={TransactionID}
                    onChange={(e)=>setTransactionID(e.target.value)}
                    color="success"
                    label="Receipt No. or Transaction ID"
                    helperText="Please Enter Your Transaction ID e.g 12340123412"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      inputFormat="dd/MM/yyyy"
                      value={DateOfAdmission}
                      onChange={handleDateOfAdmission}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                    value={DateofSubmission}
                    onChange={(e)=>setDateofSubmission(e.target.value)}
                    color="success"
                    label="Date of Fee Submission"
                    helperText="Please Select Date of Fee Submission e.g 01/01/1980"
                    size="small"
                    fullWidth
                    />
                    )}
                  />
                </LocalizationProvider>
                </Grid>
              </Grid>
            </Box>
          </ThemeProvider>
          <Box margin={`1em`}>
            <Typography
              fontFamily={`montserrat`}
              fontSize={`1.2rem`}
              color={`#48465b`}
              fontWeight={`700`}
              marginBottom={`1em`}
            >
              Documents
            </Typography>
            <Divider></Divider>
            <Box>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                    {!uploadFile1 &&
                      <DoDisturbIcon color="error" fontSize='small'/>}
                      {uploadFile1 &&
                      <TaskAltIcon color="success" fontSize='small'/>}
                    </TableCell>
                    <TableCell>
                      <Box display={`flex`}>
                        <Typography
                          fontSize={`13px`}
                          fontWeight={500}
                          color={`#212529`}
                        >
                          Bank Fee Receipt
                        </Typography>
                        <Typography color={`red`} marginLeft={`2px`}>
                          *
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                       {/* <UiFileInputButton
                          label="Upload Single File"
                          uploadFileName="theFiles"
                          id='upload-bank-file'
                          onChange={onUploadFile}
                        /> */}
                      {!uploadFile1 &&
                      <IconButton size='small' sx={{borderRadius:`10%`}} onClick={()=>setuploadFile1(true)}>
                        <UploadIcon fontSize='small'/>
                      </IconButton>
                     }
                      {uploadFile1 &&
                      <>                      
                        <IconButton size='small' sx={{borderRadius:`10%`}}>
                          <FileDownloadIcon fontSize='small'/>
                        </IconButton>
                        <IconButton size='small' sx={{borderRadius:`10%`}} onClick={()=>setuploadFile1(false)}>
                          <HighlightOffIcon fontSize='small'/>
                        </IconButton>
                      </>
                      }
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ bgcolor: `#f4f9fc` }}>
                    <TableCell>
                      {!uploadFile2 &&
                      <DoDisturbIcon color="error" fontSize='small' />}
                      {uploadFile2 &&
                      <TaskAltIcon color="success" fontSize='small'/>}
                    </TableCell>
                    <TableCell>
                      <Box display={`flex`}>
                        <Typography
                          fontSize={`13px`}
                          fontWeight={500}
                          color={`#212529`}
                        >
                          Transcript/Detailed Marksheet
                        </Typography>
                        <Typography color={`red`} marginLeft={`2px`}>
                          *
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                    {!uploadFile2 &&
                      <IconButton size='small' sx={{borderRadius:`10%`}} onClick={()=>setuploadFile2(true)}>
                        <UploadIcon fontSize='small'/>
                      </IconButton>
                      }
                      {uploadFile2 &&
                      <>                      
                      <IconButton size='small' sx={{borderRadius:`10%`}}>
                        <FileDownloadIcon fontSize='small'/>
                      </IconButton>
                      <IconButton size='small' sx={{borderRadius:`10%`}} onClick={()=>setuploadFile2(false)}>
                        <HighlightOffIcon fontSize='small'/>
                      </IconButton>
                    </>
                      }
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Box>
          {/* Bank Detail  BOX*/}
          {SourceName &&
          <Box>
          <Typography color='error'>  
          <strong>Students of Public sector universities will pay (PKR 8000/-)(Non-reimbursable) in the following account:</strong> 
          <br/><br/>Account: 17427901401951
          <br/><br/>IBAN: PK82HABB
          <br/><br/>Title: Higher Education Commission
          <br/><br/>Bank: Habib Bank Limited<br/><br/>
          I understand and accept all terms and conditions for the registration of online courses. If I don’t enroll myself within the first 14 days of receiving a license invitation, then HEC may cancel the license and offer this opportunity to other eligible students, as this is a first come first served opportunity.
          If I fail to complete at least one course within the first 3 months of receiving the Coursera license from HEC then the HEC may cancel my registration at any time and I am liable to forfeit my registration fee. I am liable to lose my Coursera license if:
          <ul>
          <li>I do not enroll in at least 1 course within 14 days after receiving the Coursera license via invitation email</li>
          <li>I enroll in multiple courses but I am inactive for 90 days and have not performed any activity at all in any of my enrolled courses</li>
          </ul>
          <strong>If any information is found to be incorrect or fraudulent payment will be forfeited.</strong>
          </Typography>
          </Box>
          }
          <FormGroup sx={{ margin: `1em 0` }}>
            <FormControlLabel
              control={<Checkbox color="success" 
              value={AgreeCheckBox} 
              onChange={()=>{
                switch (AgreeCheckBox) {
                  case true:
                    setAgreeCheckBox(false)
                    break;
                    case false:
                      setAgreeCheckBox(true)
                      break;
                  default:
                    break;
                }
              }}
              />}
              label="I agree to these terms and conditions"
            ></FormControlLabel>
          </FormGroup>

          <Box sx={{ display: `flex`, justifyContent: `space-between` }}>
          <motion.div whileHover={{ marginTop: -5 }}>
            <Button
              sx={{
                backgroundColor: `white`,
                color: `#8A8A8A`,
                fontFamily: `montserrat`,
                padding: `0.6250em 1.875em`,
                '&:hover': {
                  backgroundColor: `#8A8A8A`,
                  color: `#fff`,
                },
              }}
              variant="contained"
            >
              GO BACK
            </Button>
            </motion.div>
            <motion.div whileHover={{ marginTop: -5 }}>
            <Button
              onClick={handleSubmit}
              disabled={!AgreeCheckBox}
              sx={{
                backgroundColor: `#1bb55e`,
                fontFamily: `montserrat`,
                padding: `0.6250em 1.875em`,
              }}
              variant="contained"
              color="success"
            >
              SUBMIT FORM
            </Button>
            </motion.div>
          </Box>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default Students;
const PaymentSourceName = [
  `Bank Transfer`,
  `Wire Transfer`,
  `PayOrder/Demand Draft`,
  `EasyPaisa`,
  `JazzCash`,
  `Upaisa`,
  `Payoneer`,
  `GoLootLO`,
  `PayPak`,
  `MoneyGram`,
  `Western Union`,
  `Ria Money Transfer`,
  `HBL-Konnect`,
  `Keenu Wallet`,
  `FonePay`,
  `Virtual Card`]
const ListOFAreaInterest =[
  `Arts and Humanities`,
  `Business `,
  `Computer Science`,
  `Data Science `,
  `Information Technology`,
  `Language Learning`,
  `Life Sciences `,
  `Math and Logic`,
  `Personal Development`,
  `Physical Science and Engineering`,
  `Social Sciences`
]
const ListOfCity =[ `Islamabad`, `Ahmed Nager`, `Ahmadpur East`, `Ali Khan`, `Alipur`, `Arifwala`, `Attock`, `Bhera`, `Bhalwal`, `Bahawalnagar`, `Bahawalpur`, `Bhakkar`, `Burewala`, `Chillianwala`, `Chakwal`, `Chichawatni`, `Chiniot`, `Chishtian`, `Daska`, `Darya Khan`, `Dera Ghazi`, `Dhaular`, `Dina`, `Dinga`, `Dipalpur`, `Faisalabad`, `Fateh Jhang`, `Ghakhar Mandi`, `Gojra`, `Gujranwala`, `Gujrat`, `Gujar Khan`, `Hafizabad`, `Haroonabad`, `Hasilpur`, `Haveli`, `Lakha`, `Jalalpur`, `Jattan`, `Jampur`, `Jaranwala`, `Jhang`, `Jhelum`, `Kalabagh`, `Karor Lal`, `Kasur`, `Kamalia`, `Kamoke`, `Khanewal`, `Khanpur`, `Kharian`, `Khushab`, `Kot Adu`, `Jauharabad`, `Lahore`, `Lalamusa`, `Layyah`, `Liaquat Pur`, `Lodhran`, `Malakwal`, `Mamoori`, `Mailsi`, `Mandi Bahauddin`, `mian Channu`, `Mianwali`, `Multan`, `Murree`, `Muridke`, `Mianwali Bangla`, `Muzaffargarh`, `Narowal`, `Okara`, `Renala Khurd`, `Pakpattan`, `Pattoki`, `Pir Mahal`, `Qaimpur`, `Qila Didar`, `Rabwah`, `Raiwind`, `Rajanpur`, `Rahim Yar`, `Rawalpindi`, `Sadiqabad`, `Safdarabad`, `Sahiwal`, `Sangla Hill`, `Sarai Alamgir`, `Sargodha`, `Shakargarh`, `Sheikhupura`, `Sialkot`, `Sohawa`, `Soianwala`, `Siranwali`, `Talagang`, `Taxila`, `Toba Tek`, `Vehari`, `Wah Cantonment`, `Wazirabad`, `Badin`, `Bhirkan`, `Rajo Khanani`, `Chak`, `Dadu`, `Digri`, `Diplo`, `Dokri`, `Ghotki`, `Haala`, `Hyderabad`, `Islamkot`, `Jacobabad`, `Jamshoro`, `Jungshahi`, `Kandhkot`, `Kandiaro`, `Karachi`, `Kashmore`, `Keti Bandar`, `Khairpur`, `Kotri`, `Larkana`, `Matiari`, `Mehar`, `Mirpur Khas`, `Mithani`, `Mithi`, `Mehrabpur`, `Moro`, `Nagarparkar`, `Naudero`, `Naushahro Feroze`, `Naushara`, `Nawabshah`, `Nazimabad`, `Qambar`, `Qasimabad`, `Ranipur`, `Ratodero`, `Rohri`, `Sakrand`, `Sanghar`, `Shahbandar`, `Shahdadkot`, `Shahdadpur`, `Shahpur Chakar`, `Shikarpaur`, `Sukkur`, `Tangwani`, `Tando Adam`, `Tando Allahyar`, `Tando Muhammad`, `Thatta`, `Umerkot`, `Warah`, `Abbottabad`, `Adezai`, `Alpuri`, `Akora Khattak`, `Ayubia`, `Banda Daud`, `Bannu`, `Batkhela`, `Battagram`, `Birote`, `Chakdara`, `Charsadda`, `Chitral`, `Daggar`, `Dargai`, `Darya Khan`, `dera Ismail`, `Doaba`, `Dir`, `Drosh`, `Hangu`, `Haripur`, `Karak`, `Kohat`, `Kulachi`, `Lakki Marwat`, `Latamber`, `Madyan`, `Mansehra`, `Mardan`, `Mastuj`, `Mingora`, `Nowshera`, `Paharpur`, `Pabbi`, `Peshawar`, `Saidu Sharif`, `Shorkot`, `Shewa Adda`, `Swabi`, `Swat`, `Tangi`, `Tank`, `Thall`, `Timergara`, `Tordher`, `Awaran`, `Barkhan`, `Chagai`, `Dera Bugti`, `Gwadar`, `Harnai`, `Jafarabad`, `Jhal Magsi`, `Kacchi`, `Kalat`, `Kech`, `Kharan`, `Khuzdar`, `Killa Abdullah`, `Killa Saifullah`, `Kohlu`, `Lasbela`, `Lehri`, `Loralai`, `Mastung`, `Musakhel`, `Nasirabad`, `Nushki`, `Panjgur`, `Pishin valley`, `Quetta`, `Sherani`, `Sibi`, `Sohbatpur`, `Washuk`, `Zhob`, `Ziarat` ]
const ListOfDiscipline =[`Agriculture`,`Arts & Humanities`,`Biological Sciences`,`Engineering & Technology`,`Management Sciences & Business Education`,`Medical Sciences`,`Physical Sciences`,`Social Sciences`,`Veterinary Sciences`]
const ListOfSemester =[`1st`,`2nd`,`3rd`,`4th`,`5th`,`6th`,`7th`,`8th`]