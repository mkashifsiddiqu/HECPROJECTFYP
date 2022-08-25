/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
//mui
import {
  FormControl,InputLabel,Select,MenuItem,SelectChangeEvent,
  Typography,Button,Popover,Checkbox,FormControlLabel,
  FormGroup,Divider,Box } from '@mui/material';
import { motion } from 'framer-motion';
//Compoents
import Studentinstruction from '@/Components/Student/E-Course/Instruction/Studentinstruction';
import Facultyinstruction from '@/Components/Student/E-Course/Instruction/Facultyinstruction';
import Alumniinstruction from '@/Components/Student/E-Course/Instruction/Alumniinstruction';
import Students from '@/Components/Student/E-Course/Students';
import { useSelector } from 'react-redux';

const Ecourses = () => {
  const list = useSelector((state) => state.stdLoginReducer.userData)
  const { email } = list.data
 //use for Course Numbering to Render
  const [eCourseNum, seteCourseNum] = React.useState<string>(``);
  //for Selecting Course User
  const handleChange = (event: SelectChangeEvent) => {
    seteCourseNum(event.target.value as string);
  };
  const [open, setOpen] = React.useState(false);
  //To Show main popup Selection
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);
  const handleClose = () => setOpen(false);
  //Application
  const [applicationStatus, setapplicationStatus] = useState<string>(`Submit`)
  //==================Agree Check Box==========
  const [agreeCheck, setagreeCheck] = useState<boolean>(false)
  //State
  //=======================Basic Detail==============================
  const [Name, setName] = useState<string>(``)
  const [FatherName, setFatherName] = useState<string>(``)
  const [DateOfBirth, setDateOfBirth] = useState<Date>(new Date())
  const [Gender, setGender] = useState<string>(``)
  const [CNIC, setCNIC] = useState<string>(``)
  const [Email, setEmail] = useState<string>(``)
  const [City, setCity] = useState<string>(``)
  const [Phone, setPhone] = useState<string>(``)
  //==============================Accdemic ===========================
  const [InsituteName, SetInsituteName] = useState<string >(``)
  const [Program, setProgram] = useState<string>(``)
  const [Campus, setCampus] = useState<string>(``)
  const [Department, setDepartment] = useState<string>(``)
  const [DisablePerson, setDisablePerson] = useState<string>(``)
  const [Semester, setSemester] = useState<string>(``)
  const [AreaofInterest, setAreaofInterest] = useState<string[]>([])
  const [RollNo, setRollNo] = useState<string>(``)
  const [Qualilevel, SetQaliLevel] = React.useState<string>(``)
  const [DateOfAdmission, SetDateOfAdmission] = React.useState<string>(``)
  const [Field, setField] = useState<string>(``)
  //========================Payment Detail ==============================
  const [SourceName, setSourceName] = useState<string>(``)
  const [TransactionID, setTransactionID] = useState<string>(``)
  const [DateofSubmission, setDateofSubmission] = useState<Date |null >(new Date())
  //=========================Upload File URL ==================================
  const [uploadBankFee, setuploadBankFee] = useState<string>(``)
  const [uploadTrancript, setuploadTrancript] = useState<string>(``)
  //=================================Submit Application========================

  const createApplication = async () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const fullDate = Date(date)
   const ApplicationType = `E-Course`
    const data = {
      applicationStatus, ApplicationType,
      date:fullDate,email
    }
    const res = await fetch(`http://localhost:3000/api/Student/Application/createApplication`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(response)
  }
  //Submit Application 
  const handleSubmit =async()=>{
    const data ={
      //Phase I
      First_Name:Name,Father_Name:FatherName, 
      Date_of_Birth:DateOfBirth,
      Gender:Gender,CNIC,Email,Phone,
      City,DisablePerson, 
      //Phase II 
      InsituteName, Program, Campus, Department,
      Semester, AreaofInterest,Roll_NO:RollNo, Qualilevel,
      DateOfAdmission,Field,
      //Phase III
      SourceName,TransactionID,DateofSubmission,
      // Phase IV
      uploadBankFee,uploadTrancript
    }
    const res = await fetch(`http://localhost:3000/api/Student/User/userDetail`, {
        method: `POST`, // or 'PUT'
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(data),
      })
      const response = await res.json()
      if(response)
      {
        createApplication();
      }
     
  }


  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Students 
      eCourseNum={eCourseNum} //Form Name
      // Phase I
      Name={Name}  setName={setName} Phone={Phone} setPhone={setPhone}
      FatherName={FatherName} setFatherName={setFatherName}
      DateOfBirth={DateOfBirth} setDateOfBirth={setDateOfBirth}
      Gender={Gender} setGender={setGender}
      CNIC={CNIC} setCNIC={setCNIC}
      Email={Email} setEmail={setEmail}
      City={City} setCity={setCity}
      DisablePerson={DisablePerson}
      setDisablePerson={setDisablePerson}
      // Phase II
      InsituteName={InsituteName}
      SetInsituteName={SetInsituteName}
      Program={Program}
      setProgram={setProgram}
      Campus={Campus}
      setCampus={setCampus}
      Department={Department}
      setDepartment={setDepartment}
      Semester={Semester}  setSemester={setSemester}
      AreaofInterest={AreaofInterest} setAreaofInterest={setAreaofInterest}
      RollNo={RollNo} setRollNo={setRollNo}
      Qualilevel={Qualilevel} SetQaliLevel={SetQaliLevel}
      DateOfAdmission={DateOfAdmission} SetDateOfAdmission={SetDateOfAdmission}
      Field={Field} setField={setField}
      // Phase III
      SourceName={SourceName}  setSourceName={setSourceName}
      TransactionID={TransactionID} setTransactionID={setTransactionID}
      DateofSubmission={DateofSubmission}  setDateofSubmission={setDateofSubmission}
      //Phase IV
      uploadBankFee={uploadBankFee} setuploadBankFee={setuploadBankFee}
      uploadTrancript={uploadTrancript} setuploadTrancript={setuploadTrancript}
      //hnadle submit BUtton
      handleSubmit={handleSubmit}
      />
      <Popover
        sx={{boxShadow:`2px 2px 2px 1px rgba(0, 0, 0, 0.2);`,top: 0, left: `62px`}}
        open={open}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 200, left: 300 }}
        anchorOrigin={{
          vertical: `center`,
          horizontal: `center`,
        }}
        transformOrigin={{
          vertical: `top`,
          horizontal: `right`,
        }}
        PaperProps={{
          style: { width: `95%` },
        }}
      >
        <Box>
          <Typography
            sx={{
              mb: 2,
              p: 2,
              pl: 3,
              backgroundColor: `#f4f8f7`,
              fontWeight: `500`,
            }}
            fontFamily={`montserrat`}
          >
            Coursea intructions
          </Typography>
          <Box sx={{ minWidth: 6, m: 3 }}>
            {eCourseNum == `Stutdent` && <Studentinstruction />}
            {eCourseNum == `Faculty` && <Facultyinstruction />}
            {eCourseNum == `Alumni` && <Alumniinstruction />}
            <FormControl sx={{ width: `600px`}}>
              <InputLabel id="demo-simple-select-label" color='success' 
              sx={{fontSize:`13px`,fontWeight:700}} 
              size='small'>User Type</InputLabel>
              <Select
                required
                value={eCourseNum}
                label="E-Course"
                onChange={handleChange}
                color='success'
                size='small'
                sx={{fontSize:`13px`,fontWeight:500}}
              >
                <MenuItem value={`Alumni`} sx={{fontSize:`12px`,fontWeight:500}}>Alumni</MenuItem>
                <MenuItem value={`Faculty`} sx={{fontSize:`12px`,fontWeight:500}}>Faculty</MenuItem>
                <MenuItem value={`Stutdent`} sx={{fontSize:`12px`,fontWeight:500}}>Stutdent</MenuItem>
              </Select>
            </FormControl>
            <FormGroup sx={{ mt: 1 }}>
              <FormControlLabel
                  value={agreeCheck}
                control={
                  <Checkbox
                    required
                    color='success'
                    onChange={()=>{
                      switch (agreeCheck) {
                        case true:
                          setagreeCheck(false)
                          break;
                        case false:
                          setagreeCheck(true)
                            break;
                        default:
                          break;
                      }
                    }}
                  />
                }
                label={
                  <Typography
                    fontFamily={`montserrat`}
                    fontSize={`12px`}
                    fontWeight={`600`}
                  >
                    By selecting any category you are agreed our terms and
                    conditions.
                  </Typography>
                }
              />
            </FormGroup>
            <Divider />
            <Box
              sx={{
                mt: 2,
                display: `flex`,
                justifyContent: `flex-end`,
                fontWeight: `600`,
              }}
            >
              <Button
                disabled={!agreeCheck}
                onClick={handleClose}
                sx={{
                  color: `#1bb55e`,
                  border: `1px solid #1bb55e`,
                  backgroundColor: `white`,
                  fontSize: `13px`,
                  '&:hover': {
                    color: `white`,
                    border: `1px solid #1bb55e`,
                    backgroundColor: `#1bb55e`,
                  },
                }}
              >
                PROCEED
              </Button>
            </Box>
          </Box>
        </Box>
      </Popover>
    </motion.div>
  );
};
Ecourses.layout = `Student`
export default Ecourses;
