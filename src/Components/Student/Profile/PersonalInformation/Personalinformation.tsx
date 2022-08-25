/* eslint-disable prettier/prettier */
import { Box,Paper,Button, Divider, Tooltip, Typography,Grid } from '@mui/material';
import React,{useState,useEffect} from 'react';
import BiographicalInformation from './BiographicalInformation';
import FatherInformation from './FatherInformation';
import TellUsAboutYourself from './TellUsAboutYourself';
import Nationalityinformation from './Nationalityinformation';
import Personaldetails from '../../Degree Attestation/Personaldetails';
import { motion } from 'framer-motion';
import EditIcon from '@mui/icons-material/Edit';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
const Personalnformation = () => {
  const list = useSelector((state) => state.stdLoginReducer.userData)
  const { email } = list.data

  const [EditMode, setEditMode] = useState<boolean>(false)
  // ===================================Personal Detail Step====================================//
  //Name State 
  const [firstName, setfirstName] = useState<string>(``)
  const [middleName, setMiddle] = useState<string>(``)
  const [lastName, setlastName] = useState<string>(``)

  //Martial Status
  const [martialStatus, setmartialStatus] = useState<string>(``)
  //Gender
  const [gender, setGender] = useState<string>(``)
  //Date of Birth
  const [dateofbirth, setDateofbirth] = useState<Date >(
    new Date());
  const handleBOD = (newValue: Date ) => {
    setDateofbirth(newValue);
  };
  //Father
  const [FatherName, setFatherName] = useState<string>(` `)
  const [address, setAddress] = useState<string>(``)
  //City 
  const [city, setCity] = useState<string>(``)
  const [postalcode, setpostalcode] = useState<string>(``)
  //
  //
  const [country,setCountry] = useState<string>(``)
  const [district,seDistrict]= useState<string>(``)
  //For Posting Data intoData base
  const handlePersonalDetail = async () => {
    const data = {
      firstName, middleName, lastName, martialStatus,
      gender, dateofbirth, FatherName, Domicile_Province:city, postalcode, email,
      Country:country
      ,Domicile_City:district,
      //Phase II
      address,
    }
    // if (email != `Studen@demo.com`) {
    const res = await fetch(`http://localhost:3000/api/Student/User/userDetail`, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(`User Detail table:`, response)
    // }
  }
  //Get All Detail 
  const getUserDetail = async()=>{
    const data ={email}
    const res = await fetch(`http://localhost:3000/api/Student/User/getUserDetailwithApplication`, {
      method: `POST`, //BECAUSE WE CHECK WITH EMAIL 
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    if(response){
      const {user} = response
      // const {First_Name,Middle_Name,Last_Name,
      //   Martial_Status,Gender,Date_of_Birth,
      //   Father_Name,Address}=user
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
useEffect(() => {
  getUserDetail()
}, [])

  //===================================End of Personal Detail Step =============================//
  return (
    <>
       {!EditMode && 
      <Box>
        <Paper>
          <Box padding={`20px`} sx={{ margin: `0 0 20px 0` }}>
            <Box marginBottom={`25px`}>
              <Box
                paddingBottom={`10px`}
                display={`flex`}
                justifyContent={`space-between`}
              >
                <Typography color="#48465b" fontSize={15.6} fontWeight={700}>
                  Tell Us About Yourself
                </Typography>
                <Tooltip title={`Edit Details`}>
                  <motion.div whileHover={{ scale: 1.1, color: `green` }} onClick={()=>setEditMode(true)}>
                    <EditIcon sx={{ width: `18px`, height: `18px` }} />
                  </motion.div>
                </Tooltip>
              </Box>
              <Divider></Divider>
              <Grid container>
              <Grid item md={4} xs={12}>
                <Box paddingX={`5px`} marginBottom={`25px`}>
                  <Typography
                    fontSize={12.5}
                    fontWeight={600}
                    color="#000000de"
                  >
                    Title:
                  </Typography>
                  <Typography
                    fontSize={12.5}
                    fontWeight={500}
                    color="#000000de"
                  >
                    Mr.
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box paddingX={`5px`} marginBottom={`25px`}>
                  <Typography
                    fontSize={12.5}
                    fontWeight={600}
                    color="#000000de"
                  >
                    First Name:
                  </Typography>
                  <Typography
                    fontSize={12.5}
                    fontWeight={500}
                    color="#000000de"
                  >
                   {firstName}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box paddingX={`5px`} marginBottom={`25px`}>
                  <Typography
                    fontSize={12.5}
                    fontWeight={600}
                    color="#000000de"
                  >
                    Last Name:
                  </Typography>
                  <Typography
                    fontSize={12.5}
                    fontWeight={500}
                    color="#000000de"
                  >
                   {lastName}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box paddingX={`5px`} marginBottom={`25px`}>
                  <Typography
                    fontSize={12.5}
                    fontWeight={600}
                    color="#000000de"
                  >
                    Cell Phone:
                  </Typography>
                  <Typography
                    fontSize={12.5}
                    fontWeight={500}
                    color="#000000de"
                  >
                    03052648206
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box paddingX={`5px`} marginBottom={`25px`}>
                  <Typography
                    fontSize={12.5}
                    fontWeight={600}
                    color="#000000de"
                  >
                    Gender:
                  </Typography>
                  <Typography
                    fontSize={12.5}
                    fontWeight={500}
                    color="#000000de"
                  >
                    {gender}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box paddingX={`5px`} marginBottom={`25px`}>
                  <Typography
                    fontSize={12.5}
                    fontWeight={600}
                    color="#000000de"
                  >
                    Religion:
                  </Typography>
                  <Typography
                    fontSize={12.5}
                    fontWeight={500}
                    color="#000000de"
                  >
                    Islam
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box paddingX={`5px`} marginBottom={`25px`}>
                  <Typography
                    fontSize={12.5}
                    fontWeight={600}
                    color="#000000de"
                  >
                    Marital Status:
                  </Typography>
                  <Typography
                    fontSize={12.5}
                    fontWeight={500}
                    color="#000000de"
                  >
                   {martialStatus}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
              </Box>
              </Box>
        </Paper>
        <BiographicalInformation 
                  dateofbirth={dateofbirth}
                  district={district}
                  city={city}
                  country={country}
        />
        <FatherInformation 
         FatherName={FatherName}
        />
        <Nationalityinformation />
      </Box>
      }
      {EditMode  && 
      <Paper sx={{p:2}}>
      <Personaldetails
            firstName={firstName} setfirstName={setfirstName}
            middleName={middleName} setMiddle={setMiddle}
            lastName={lastName} setlastName={setlastName}
            martialStatus={martialStatus} setmartialStatus={setmartialStatus}
            gender={gender} setGender={setGender}
            dateofbirth={dateofbirth} setDateofbirth={setDateofbirth} handleBOD={handleBOD}
            FatherName={FatherName} setFatherName={setFatherName}
            address={address} setAddress={setAddress}
            city={city} setCity={setCity}
            postalcode={postalcode} setpostalcode={setpostalcode}
      />
      <Box sx={{display:`flex`,justifyContent:`flex-end`,width:`100%`}}>
        <Box sx={{display:`flex`,justifyContent:`space-between`,width:`200px`}}>
        <Button variant='contained' color='success' onClick={()=>setEditMode(false)}>Cancel</Button>
        <Button variant='contained' color='success' onClick={handlePersonalDetail}>Save</Button>
        </Box>
      </Box>
      </Paper>
      }
    </>
  );
};

export default Personalnformation;
