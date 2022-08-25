/* eslint-disable prettier/prettier */
import { Box, Divider, Grid, IconButton, Modal, Paper, Tooltip, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React ,{useEffect,FC}from 'react'
import { Visibility } from '@mui/icons-material';
interface PersonalProps{
    firstName:string,
    setfirstName:React.Dispatch<React.SetStateAction<string>>,
    middleName:string,
    setMiddle:React.Dispatch<React.SetStateAction<string>>,
    lastName:string,
    setlastName:React.Dispatch<React.SetStateAction<string>>,
    martialStatus:string,
    setmartialStatus:React.Dispatch<React.SetStateAction<string>>,
    gender:string,
    setGender:React.Dispatch<React.SetStateAction<string>>,
    dateofbirth:Date,
    handleBOD:(newValue: Date | null) => void,
    FatherName:string,
    setFatherName:React.Dispatch<React.SetStateAction<string>>,
    address:string,
    setAddress:React.Dispatch<React.SetStateAction<string>>,
    city:string,
    setCity:React.Dispatch<React.SetStateAction<string>>
    postalcode:string,
    setpostalcode:React.Dispatch<React.SetStateAction<string>>,
  }
const previewapplication:FC<PersonalProps> = ({
    open,
    handleOpen,
    handleClose,
    //Phase I
    firstName,setfirstName,
    middleName,setMiddle,
    lastName,setlastName,
    martialStatus,setmartialStatus,
    gender,setGender,
    dateofbirth,
    FatherName,setFatherName,
    address,setAddress,
    city,setCity,
    postalcode,setpostalcode,
    country,setCountry,
    district,seDistrict,
    //Phase II
    InsituteName,SetInsituteName,
    Program, setProgram,
    InsistuteNameOnDegree,setInsistuteNameOnDegree,
    Campus, setCampus,
    Department, setDepartment,
    DegreeType, setDegreeType,
    Session, setSession,
    AreaofSearch, setAreaofSearch,
    RollNo, setRollNo,
    //Phase III
    Disability,setDisability,
    mode,setmode,
    whereCheck,setwhereCheck,
    cityDistrict,setCityDistrict,
    //Phase Iv
    uploadFrontLink,
    uploadBackLink,
    uploadDegreeLink,
}) => {
    
  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={{padding:`1em`, overflowX:`hidden`, height:`100%`}}>
            <Box display={`flex`} justifyContent={`flex-end`}><Tooltip title='close'><IconButton color='error' onClick={handleClose}><CloseIcon/></IconButton></Tooltip></Box>
            <Typography fontSize={ `0.975rem`} color={`#48465b`} fontWeight={700}>Personal Details</Typography>
            <Box p={1}>
                <Typography fontSize={ `0.975rem`} color={`#48465b`} fontWeight={600}>Personal Info</Typography>
                <Divider/>
                <Grid container spacing={2}>
                    <Grid item md={4} xs={12}><Typography>Title: Mr</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>First Name: {firstName}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Middle Name: {middleName}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Last Name: {lastName}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Martial Status: {martialStatus}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Gender: {gender}</Typography></Grid>
                    {/* <Grid item md={4} xs={12}><Typography>Date of Birth: {Date(dateofbirth)}</Typography></Grid> */}
                    <Grid item md={4} xs={12}><Typography>Father Name: {FatherName}</Typography></Grid>
                </Grid>
            </Box>
            <Box p={1}>
                <Typography fontSize={ `0.975rem`} color={`#48465b`} fontWeight={600}>Contact Info</Typography>
                <Divider />
                <Grid container spacing={2}>
                    <Grid item xs={12}><Typography>Address: {address}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Country: {country}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>City: {city}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>District: {district}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Postal Code: {postalcode}</Typography></Grid>
                </Grid>
            </Box>
            <Box p={1}>
                <Typography fontSize={ `0.975rem`} color={`#48465b`} fontWeight={600}>Nationality Info</Typography>
                <Divider/>
                <Grid container spacing={2}>
                    <Grid item md={4} xs={12}><Typography>Identification: </Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Type: </Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Country: </Typography></Grid>
                </Grid>
            </Box>
            <Divider sx={{margin:`20px 0`}} />
            <Typography fontSize={ `0.975rem`} color={`#48465b`} fontWeight={700}>Detail of Degree(s)</Typography>
            <Box p={1}>
                <Typography fontSize={ `0.975rem`} color={`#48465b`} fontWeight={600}>Degree / Certificate Awarding Institute Details</Typography>
                <Divider/>
                <Grid container spacing={2}>
                    <Grid item md={4} xs={12}><Typography>Country: </Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Degree Awarding Institute:    {InsituteName}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Program Title:    {Program}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>University Name on Degree:    {InsistuteNameOnDegree}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Campus:   {Campus}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Department:   {Department} </Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Degree Type:  {DegreeType}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Session Type:     {Session}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Area of Research:     {AreaofSearch}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Registration/Roll Number :    {RollNo}</Typography></Grid>
                </Grid>
            </Box>
            <Divider sx={{margin:`20px 0`}} />
            <Typography fontSize={ `0.975rem`} color={`#48465b`} fontWeight={700}>Attestation Details</Typography>
            <Box p={1}>
                <Typography fontSize={ `0.975rem`} color={`#48465b`} fontWeight={600}>Mode of Attestation</Typography>
                <Divider/>
                <Grid container spacing={2}>
                    <Grid item md={4} xs={12}><Typography>Mode of Attestation:  {mode}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Where You want to Get Attestation: {whereCheck}</Typography></Grid>
                    <Grid item md={4} xs={12}><Typography>Disability: {Disability}</Typography></Grid>
                </Grid>
            </Box>
            <Divider sx={{margin:`20px 0`}} />
            <Typography fontSize={ `0.975rem`} color={`#48465b`} fontWeight={700}>Document Upload</Typography>
            <Box p={1}>
                <Typography fontSize={ `0.975rem`} color={`#48465b`} fontWeight={600}>PERSONAL DOCUMENT LIST</Typography>
                <Divider/>
                <Grid container spacing={2}>
                    <Grid item md={4} xs={12}><Typography>CNIC Front: </Typography></Grid>
                    <Grid item xs={12}>
                    <img src={`http://localhost:3000/api/Doc/previewdoc/${uploadFrontLink}`} alt="upload"/>
                    </Grid>
                    <Grid item md={4} xs={12}><Typography>CNIC Back: </Typography></Grid>
                    <Grid item xs={12}>
                    <img src={`http://localhost:3000/api/Doc/previewdoc/${uploadBackLink}`} alt="upload"/>
                    </Grid>
                </Grid>
            </Box>
            <Box p={1}>
                <Typography fontSize={ `0.975rem`} color={`#48465b`} fontWeight={600}>EDUCATION DOCUMENT LIST</Typography>
                <Divider/>
                <Grid container spacing={2}>
                    <Grid item md={4} xs={12}><Typography>Degree: </Typography></Grid>
                    <Grid item xs={12}>
                    <img src={`http://localhost:3000/api/Doc/previewdoc/${uploadDegreeLink}`} alt="upload"/>
                    </Grid>

                </Grid>
            </Box>
            <Box p={1}>
                <Typography fontSize={ `0.975rem`} color={`#48465b`} fontWeight={600}>OTHER DOCUMENTS</Typography>
                <Divider/>
                <Grid container spacing={2}>
                    <Grid item md={4} xs={12}><Typography>Document Name: </Typography></Grid>
                    <Grid item xs={12}><Typography>Image</Typography></Grid>
                </Grid>
            </Box>
        </Paper>
        </Modal>
    </div>
  )
}
export default previewapplication