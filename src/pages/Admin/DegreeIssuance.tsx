/* eslint-disable prettier/prettier */
import {
  Chip,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import React,{useEffect,useState} from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Visibility } from '@mui/icons-material';
import Previewapplication from '@/Components/Admin/previewapplication'
const DegreeVerification = () => {
  //==============================View Applicient Detail ====================
  
  //==============================Application ===============================
  const [ApplicationId, setApplicationId] = useState(``) 
  const [ApplicationStatus, setApplicationStatus] = useState(``) 
  const [AppList, setAppList] = useState([])
  //========================User Detail ==============
  const [email, setEmail] = useState(``)
  const [VerifyAppList, setVerifyAppList] = useState([])
  //=================================User Detail ====================
  //Name State 
  const [firstName, setfirstName] = useState<string>(``)
  const [middleName, setMiddle] = useState<string>(``)
  const [lastName, setlastName] = useState<string>(``)

  //Martial Status
  const [martialStatus, setmartialStatus] = useState<string>(``)
  //Gender
  const [gender, setGender] = useState<string>(``)
  //Date of Birth
  const [dateofbirth, setDateofbirth] = useState<Date | null>(
    new Date());
  const handleBOD = (newValue: Date | null) => {
    setDateofbirth(newValue);
  };
  //Father
  const [FatherName, setFatherName] = useState<string>(` `)
  const [address, setAddress] = useState<string>(``)
  //City 
  const [city, setCity] = useState()
  const [postalcode, setpostalcode] = useState<string>(``)
  const [country,setCountry] = useState<string>(``)
  const [district,seDistrict]= useState<string>(``)
 //=========================================Uuniverities Detaill ============
 const [InsituteName, SetInsituteName] = useState<string | null | undefined>(``)
  const [Program, setProgram] = useState<string | null | undefined>(``)
  const [InsistuteNameOnDegree, setInsistuteNameOnDegree] = useState<string | null | undefined>(``)
  const [Campus, setCampus] = useState<string | null | undefined>(``)
  const [Department, setDepartment] = useState<string | null | undefined>(``)
  const [DegreeType, setDegreeType] = useState<string | null | undefined>(``)
  const [Session, setSession] = useState<string | null | undefined>(``)
  const [AreaofSearch, setAreaofSearch] = useState<string | null | undefined>(``)
  const [RollNo, setRollNo] = useState<string | null | undefined>(``)
  //Phase IV 
  const [Disability, setDisability] = useState<string>(``)
  const [mode, setmode] = React.useState(`Walk-in (Urgent Attestation)`);
  const [whereCheck, setwhereCheck] = useState(``)
  const [cityDistrict,setCityDistrict]= useState(``)
  //Phase V
  const [uploadFrontLink, setuploadFrontLink] = useState<string>(``)
  const [uploadBackLink, setuploadBackLink] = useState<string>(``)
  const [uploadDegreeLink, setuploadDegreeLink] = useState<string>(``)
  const getAllApplication = async () => {
   const res = await fetch(`http://localhost:3000/api/admin/Application/getAllApplication`, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      
    })
    const response = await res.json()
    if(response){
      const {app} =response
      setAppList(app)
      const {ModeOfAttestation} = app
      setDisability(ModeOfAttestation?.Disability)
      setmode(ModeOfAttestation?.Mode)
      setwhereCheck(ModeOfAttestation?.WhereCheck)
      setCityDistrict(ModeOfAttestation?.City)
    }
  }
  const ListofVerifiedApp =async()=>{
    const res = await fetch(`http://localhost:3000/api/admin/Application/getAllverifyApplicayion`, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      
    })
    const response = await res.json()
    if(response){
      const {app} =response
      setVerifyAppList(app)
    }
  }
  const verifyApplication =async () =>{
    console.log(`file in Client before vp`,uploadDegreeLink)
    const data ={ApplicationId,applicationStatus:ApplicationStatus,uploadDegreeLink}
    console.log(data)
    const res = await fetch(`http://localhost:3000/api/Student/Application/submitApplication`, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    if(response){
      getAllApplication()
      ListofVerifiedApp()
      getAllApplication()
    }
    console.log(response)
   
    }
  //  const getNationality =()=>{
  //   const data = { email }
  //     const URL = `http://localhost:3000/api/Student/Application/upload/getAllDocument`
  //     const res = await fetch(URL, {
  //       method: `POST`, // or 'PUT'
  //       headers: {
  //         'Content-Type': `application/json`,
  //       },
  //       body: JSON.stringify(data),
  //     })
  //     const response = await res.json(
  //  }
    //Get All Document =========
    const getDocment =async () => {
      const data = { email }
      const URL = `http://localhost:3000/api/Student/Application/upload/getAllDocument`
      const res = await fetch(URL, {
        method: `POST`, // or 'PUT'
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(data),
      })
      const response = await res.json()
      if(response.success){
        const {Doc} =response
        console.log(Doc)
       setuploadFrontLink(Doc?.frontSide)
       setuploadBackLink(Doc?.backSide)
       setuploadDegreeLink(Doc?.degree)
      }
    }
    //Get All Education 
  const getAllEducation = async () =>{
   const data ={email}
    console.log(data)
    const res = await fetch(`http://localhost:3000/api/admin/Application/getEducation`, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(response)
    if(response)
     {
    const {edu} = response
    SetInsituteName(edu?.InstituteName)
    setProgram(edu?.ProgramTitle)
    setInsistuteNameOnDegree(edu?.UniversityNameOnDegree)
    setCampus(edu?.CampusTitle)
    setDepartment(edu?.DepartmentTitle)
    setDegreeType(edu?.DegreeType)
    setSession(edu?.SessionType)
    setAreaofSearch(edu?.AreaOfResearch)
    setRollNo(edu?.RollNumber)
   }
  }
  const getAllUserData =async () =>{
    const data ={email}
    getAllEducation()
    getDocment()
    console.log(data)
    const res = await fetch(`http://localhost:3000/api/admin/Application/getApplicientData`, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(response)
    if(response)
    {const {user} = response
      setfirstName(user?.First_Name)
      setMiddle(user?.Middle_Name)
      setlastName(user?.Last_Name)
      setmartialStatus(user?.Martial_Status)
      setGender(user?.Gender)
      setDateofbirth(user?.Date_of_Birth)
      setFatherName(user?.Father_Name)
      setAddress(user?.Address)
      setpostalcode(user?.Postal_Code)
      setCountry(user?.Country)
      seDistrict(user?.Domicile_Province) 
      setCity(user?.Domicile_City)
    }
}
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setuploadFrontLink(``)
    setuploadBackLink(``)
    //setuploadDegreeLink(``)
    SetInsituteName(``)
    setProgram(``)
    setInsistuteNameOnDegree(``)
    setCampus(``)
    setDepartment(``)
    setDegreeType(``)
    setSession(``)
    setAreaofSearch(``)
    setRollNo(``)
    setfirstName(``)
      setMiddle(``)
      setlastName(``)
      setmartialStatus(``)
      setGender(``)
      setDateofbirth(``)
      setFatherName(``)
      setAddress(``)
      setpostalcode(``)
      setCountry(``)
      seDistrict(``) 
    setCity(``)
  };
useEffect(() => {
  //List of Application
  getAllApplication()
  ListofVerifiedApp()
}, [])


  return (
    <div>
      <Paper sx={{ padding: `1em`, marginBottom: `1em` }}>
        <Typography mb={1}>Verification Requests</Typography>
        <Divider />
       <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Application ID</TableCell>
                <TableCell>Application Type</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            { AppList.map((row)=>(
                <TableRow key={row._id}>
                <TableCell>{row._id}</TableCell>
                <TableCell>{row.Application_Type}</TableCell>
                <TableCell>{new Date(row.Date).toISOString().slice(0,10)}</TableCell>
                <TableCell>
                  <Chip label="Pending" color="warning" />
                </TableCell>
                <TableCell>
                  <Tooltip title="View">
                    <IconButton color="primary" onClick={()=>{
                      setEmail(row.email)
                      if(email)
                     {handleOpen()
                      getAllUserData()}
                     }}>
                      <Visibility />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Verify">
                    <IconButton color="success"  onClick={()=>{
                      setApplicationId(row._id)
                      setApplicationStatus(`Verify`)
                      if(ApplicationId)
                     { verifyApplication()}
                    }}>
                      <CheckIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Reject">
                    <IconButton onClick={()=>{
                      setApplicationId(row._id)
                      setApplicationStatus(`Reject`)
                      if(ApplicationId){
                      verifyApplication()}
                    }}>
                      <CloseIcon color="error" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            )) }
              
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paper sx={{ padding: `1em` }}>
        <Typography mb={1}>Verified Applications</Typography>
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Application ID</TableCell>
                <TableCell>Application Type</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             { VerifyAppList.map((row)=>(
                <TableRow key={row._id}>
                <TableCell>{row._id}</TableCell>
                <TableCell>{row.Application_Type}</TableCell>
                <TableCell>{new Date(row.Date).toISOString().slice(0,10)}</TableCell>
                <TableCell>
                  <Chip label="Verified" color="success" />
                </TableCell>
                <TableCell>
                  <Tooltip title="View">
                    <IconButton color="primary"  onClick={()=>{
                      setEmail(row.email)
                      if(email)
                     {handleOpen()
                      getAllUserData()}
                     }}>
                      <Visibility />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {/* ============================View User Detail ================= */}
      <Previewapplication 
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          firstName={firstName} setfirstName={setfirstName}
          middleName={middleName} setMiddle={setMiddle}
          lastName={lastName} setlastName={setlastName}
          martialStatus={martialStatus} setmartialStatus={setmartialStatus}
          gender={gender} setGender={setGender}
          dateofbirth={dateofbirth} setDateofbirth={setDateofbirth} 
          FatherName={FatherName} setFatherName={setFatherName}
          address={address} setAddress={setAddress}
          city={city} setCity={setCity}
          postalcode={postalcode} setpostalcode={setpostalcode}
          country={country} setCountry={setCountry}
          district={district} seDistrict ={seDistrict}
          //Phase II
          InsituteName={InsituteName} SetInsituteName={SetInsituteName}
          Program={Program} setProgram={setProgram}
          InsistuteNameOnDegree={InsistuteNameOnDegree} setInsistuteNameOnDegree={setInsistuteNameOnDegree}
          Campus={Campus} setCampus={setCampus}
          Department={Department} setDepartment={setDepartment}
          DegreeType={DegreeType} setDegreeType={setDegreeType}
          Session={Session} setSession={setSession}
          AreaofSearch={AreaofSearch} setAreaofSearch={setAreaofSearch}
          RollNo={RollNo} setRollNo={setRollNo}
         //Phase III
          Disability={Disability} setDisability={setDisability}
          mode={mode} setmode={setmode}
          whereCheck={whereCheck} setwhereCheck={setwhereCheck}
          cityDistrict={cityDistrict} setCityDistrict={setCityDistrict}
              //phase Iv
          uploadFrontLink={uploadFrontLink}
          uploadBackLink={uploadBackLink}
          uploadDegreeLink={uploadDegreeLink}
      />
    </div>
  );
};

DegreeVerification.layout = `Admin`;

export default DegreeVerification;
