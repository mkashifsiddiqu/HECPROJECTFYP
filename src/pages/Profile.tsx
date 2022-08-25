/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Box,Grid,Typography,Paper,
  ListItemIcon,ListItemText,MenuItem,
  Avatar,Link,
} from '@mui/material';
import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import Personalinformation from '../Components/Student/Profile/PersonalInformation/Personalinformation';
import ChangeEmail from '@/Components/Student/Profile/Education Details/EducationDetail';
import ChangePassword from '@/Components/Student/Profile/Change Password/ChangePassword';
import ChangePhoneNumber from '@/Components/Student/Profile/Change Phone Number/ChangePhoneNumber';
import pinfo from '@/public/Profile/pinfo.png';
import cemail from '@/public/Profile/cemail.png';
import cpass from '@/public/Profile/cpass.png';
import cinfo from '@/public/Profile/cinfo.png';
import moblie from '@/public/Profile/mobile.png';
import eduinfo from '@/public/Profile/edinfo.png';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import VerifiedIcon from '@mui/icons-material/Verified';
import AddresInformation from '@/Components/Student/Profile/Address information/AddresInformation';
import EducationDetail from '@/Components/Student/Profile/Education Details/EducationStepper';
import { useSelector } from 'react-redux';
const Profile = () => {
  const list = useSelector((state)=>state.stdLoginReducer.userData)
  const {name,email,identityNumber} = list.data
  const [ProfileImage,setProfileImage] =useState<string>(``)
  const [step, setStep] = React.useState(`1`);
  const handleClick = (num: any) => {
     window.scrollTo({
      top:0,
      behavior: `smooth`,
    });
    setStep(num);
  };
  const getProfile =async ()=>{
    const  data={email}
    const res = await fetch(`http://localhost:3000/api/Profile/student/getProfilePicture`, {
    method: `POST`, //BECAUSE WE CHECK WITH EMAIL 
    headers: {
        'Content-Type': `application/json`,
    },
    body: JSON.stringify(data),
    })
    const response = await res.json()
    if(response.success) 
    { 
      const {profile}=response
      setProfileImage(profile?.imageurl)
    }
    }
  useEffect(() => {
    getProfile()
  }, [])
  return (
    <div>
      {/* Main Profile Page */}
      <Grid container spacing={2}>
        {/* Nav */}
        <Grid item xs={12} md={4}>
          <Box sx={{ m: 1, p: 1 }} display="flex" alignItems={`stretch`}>
            <Paper sx={{ p: 2, width: `100%` }}>
              <Typography
                fontSize={15.5}
                fontWeight={700}
                color="#666c7e"
                marginBottom={`10px`}
              >
                PERSONAL INFO
              </Typography>
              <Link
                href="#"
                sx={{
                  textDecoration: `none`,
                  '&:hover': { textDecoration: `underline` },
                }}
              >
                <Box
                  marginBottom={`10px`}
                  display={`flex`}
                  alignItems={`center`}
                >
                  <CloudDownloadIcon
                    sx={{
                      width: `17.5px`,
                      height: `14px`,
                      color: `#006d9a!important`,
                    }}
                  />
                  <Typography
                    color="#006d9a!important"
                    fontSize={12}
                    fontWeight={700}
                  >
                    Download Profile Manual
                  </Typography>
                </Box>
              </Link>
              <Box display={`flex`} alignItems={`center`} flexWrap={`wrap`}>
                <Avatar sx={{ width: 80, height: 80, margin: `0 10px 0 0` }}
                src={`http://localhost:3000/api/Profile/student/${ProfileImage}`}
                >
                </Avatar>
                <Box>
                  <Box display={`flex`} alignItems={`center`} flexWrap={`wrap`}>
                    <Typography
                      fontSize={16}
                      color="#8f93a1!important"
                      fontWeight={700}
                    >
                     {name}
                    </Typography>
                    <VerifiedIcon
                      sx={{ color: `#1ec9b7`, margin: `0 0 0 5px` }}
                    />
                  </Box>
                  <Typography fontSize={13} color="#333333d9" fontWeight={500}>
                   {identityNumber}
                  </Typography>
                </Box>
              </Box>
              <Box margin={`25px 0`} width="100%">
                <Typography fontSize={13} fontWeight={`bolder`} color="#94b1bc">
                  EMAIL:
                </Typography>
                <Typography
                  marginBottom={`10px`}
                  fontSize={13}
                  fontWeight={500}
                  color="#777777"
                >
                  {email}
                </Typography>
                <Typography fontSize={13} fontWeight={`bolder`} color="#94b1bc">
                  PHONE:
                </Typography>
                <Typography
                  marginBottom={`10px`}
                  fontSize={13}
                  fontWeight={500}
                  color="#777777"
                >
                  +923018407613
                </Typography>
                <Typography fontSize={13} fontWeight={`bolder`} color="#94b1bc">
                  LOCATION:
                </Typography>
                <Typography
                  fontSize={13}
                  fontWeight={500}
                  color="#777!important"
                >
                  Pakistan
                </Typography>
              </Box>
              <Box>
                <MenuItem
                  onClick={() => handleClick(`1`)}
                  sx={{
                    display: `flex`,
                    justifyContent: `space-between`,
                    padding: `0.75rem 1.5rem`,
                    margin: `0 0 15px 0`,
                    borderRadius: `0.5rem`,
                    border: `1px solid #eaf0f7`,
                  }}
                >
                  <Box display={`flex`}>
                    <ListItemIcon>
                      <Image src={pinfo} alt="pic"></Image>
                    </ListItemIcon>
                    <ListItemText
                      sx={{ fontsize: `1.1rem`, fontweight: `600` }}
                      color="#50566a"
                    >
                      Personal Information
                    </ListItemText>
                  </Box>
                  {step == `1` && <KeyboardArrowRightIcon />}
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick(`2`)}
                  sx={{
                    display: `flex`,
                    justifyContent: `space-between`,
                    padding: `0.75rem 1.5rem`,
                    margin: `0 0 15px 0`,
                    borderRadius: `0.5rem`,
                    border: `1px solid #eaf0f7`,
                  }}
                >
                  <Box display={`flex`}>
                    <ListItemIcon>
                      <Image src={cinfo} alt="pic"></Image>
                    </ListItemIcon>
                    <ListItemText
                      sx={{ fontsize: `1.1rem`, fontweight: `600` }}
                      color="#50566a"
                    >
                      Address Information
                    </ListItemText>
                  </Box>
                  {step == `2` && <KeyboardArrowRightIcon />}
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick(`3`)}
                  sx={{
                    display: `flex`,
                    justifyContent: `space-between`,
                    padding: `0.75rem 1.5rem`,
                    margin: `0 0 15px 0`,
                    borderRadius: `0.5rem`,
                    border: `1px solid #eaf0f7`,
                  }}
                >
                  <Box display={`flex`}>
                    <ListItemIcon>
                      <Image src={eduinfo} alt="pic"></Image>
                    </ListItemIcon>
                    <ListItemText
                      sx={{ fontsize: `1.1rem`, fontweight: `600` }}
                      color="#50566a"
                    >
                      Education Details
                    </ListItemText>
                  </Box>
                  {step == `3` && <KeyboardArrowRightIcon />}
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick(`4`)}
                  sx={{
                    display: `flex`,
                    justifyContent: `space-between`,
                    padding: `0.75rem 1.5rem`,
                    margin: `0 0 15px 0`,
                    borderRadius: `0.5rem`,
                    border: `1px solid #eaf0f7`,
                  }}
                >
                  <Box display={`flex`}>
                    <ListItemIcon>
                      <Image src={cpass} alt="pic"></Image>
                    </ListItemIcon>
                    <ListItemText
                      sx={{ fontsize: `1.1rem`, fontweight: `600` }}
                      color="#50566a"
                    >
                      Change Password
                    </ListItemText>
                  </Box>
                  {step == `4` && <KeyboardArrowRightIcon />}
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick(`5`)}
                  sx={{
                    display: `flex`,
                    justifyContent: `space-between`,
                    padding: `0.75rem 1.5rem`,
                    margin: `0 0 15px 0`,
                    borderRadius: `0.5rem`,
                    border: `1px solid #eaf0f7`,
                  }}
                >
                  <Box display={`flex`}>
                    <ListItemIcon>
                      <Image src={cemail} alt="pic"></Image>
                    </ListItemIcon>
                    <ListItemText
                      sx={{ fontsize: `1.1rem`, fontweight: `600` }}
                      color="#50566a"
                    >
                      Change Email
                    </ListItemText>
                  </Box>
                  {step == `5` && <KeyboardArrowRightIcon />}
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick(`6`)}
                  sx={{
                    display: `flex`,
                    justifyContent: `space-between`,
                    padding: `0.75rem 1.5rem`,
                    margin: `0 0 15px 0`,
                    borderRadius: `0.5rem`,
                    border: `1px solid #eaf0f7`,
                  }}
                >
                  <Box display={`flex`}>
                    <ListItemIcon>
                      <Image src={moblie} alt="pic"></Image>
                    </ListItemIcon>
                    <ListItemText
                      sx={{ fontsize: `1.1rem`, fontweight: `600` }}
                      color="#50566a"
                    >
                      Change Mobile Number
                    </ListItemText>
                  </Box>
                  {step == `6` && <KeyboardArrowRightIcon />}
                </MenuItem>
              </Box>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          {/* Main Content Render Here*/}
          <Box sx={{ my: 1, py: 1 }}>
            {step == `1` && <Personalinformation />}
            {step == `2` && <AddresInformation />}
            {step == `3` && <EducationDetail />}
            {step == `4` && <ChangePassword />}
            {step == `5` && <ChangeEmail />}
            {step == `6` && <ChangePhoneNumber />}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
Profile.layout = `Student`
export default Profile;
