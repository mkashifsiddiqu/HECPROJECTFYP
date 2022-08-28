/* eslint-disable jsx-a11y/anchor-is-valid */
import { Divider, LinearProgress, Paper, Typography,Box,styled } from '@mui/material';
import React,{useState,useEffect} from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CancelIcon from '@mui/icons-material/Cancel';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { useSelector } from 'react-redux';
const Domain = process.env.Domain
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 3,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === `light` ? 300 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === `light` ? `#20cab8` : `#39cfc0`,
  },
}));
const Profile = () => {
  const list = useSelector((state)=>state.stdLoginReducer.userData)
  const {email} = list.data
  const [ProfileImage,setProfileImage] =useState<string>(``)
  const getProfile =async ()=>{
  const  data={email}
  const res = await fetch(`${Domain}/api/Profile/student/getProfilePicture`, {
  method: `POST`, //BECAUSE WE CHECK WITH EMAIL 
  headers: {
      'Content-Type': `application/json`,
  },
  body: JSON.stringify(data),
  })
  const response = await res.json()
  if(response) 
  { const {imageurl}=response.profile
  setProfileImage(imageurl)
}
  }
useEffect(() => {
  getProfile()
}, [])
  return (
    <div>
      <Box>
        <Paper sx={{ margin: `1em`, padding: `1em 1em 0em 1em` }}>
          <Typography
            fontFamily={`montserrat`}
            fontSize={`1rem`}
            color={`#797D86`}
            fontWeight={700}
          >
            PROFILE COMPLETENESS
          </Typography>
          <Box>
            <Box display={`flex`} justifyContent={`center`}>
              <Box
               sx={{ backgroundImage:`url(${Domain}/api/Profile/student/${ProfileImage})`,
               backgroundSize:`100% 100%`,backgroundRepeat:`no-repeat`
               , borderRadius: `50%`, border:`3px solid #82c4de` }}
                width={120}
                height={120}
              ></Box>
            </Box>
            <Box sx={{ display: `flex`, justifyContent: `flex-end` }}>
              <Typography
                fontFamily={`montserrat`}
                color={`#797D86`}
                fontSize={`0.875rem`}
                fontWeight={700}
              >
                80% Complete
              </Typography>
            </Box>
            <BorderLinearProgress variant="determinate" value={100} />
          </Box>
          <Box
            sx={{
              display: `flex`,
              justifyContent: `space-between`,
              padding: `0.5em`,
            }}
          >
            <Typography
              fontFamily={`montserrat`}
              color={`#424b5f`}
              fontSize={14}
              fontWeight={500}
            >
              Profile Picture
            </Typography>
            <CheckCircleIcon sx={{ color: `#018651` }}></CheckCircleIcon>
          </Box>
          <Divider></Divider>
          <Box
            sx={{
              display: `flex`,
              justifyContent: `space-between`,
              padding: `0.5em`,
            }}
          >
            <Typography
              fontFamily={`montserrat`}
              color={`#424b5f`}
              fontSize={14}
              fontWeight={500}
            >
              Personal Details
            </Typography>
            <CheckCircleIcon sx={{ color: `#018651` }}></CheckCircleIcon>
          </Box>
          <Divider></Divider>
          <Box
            sx={{
              display: `flex`,
              justifyContent: `space-between`,
              padding: `0.5em`,
            }}
          >
            <Typography
              fontFamily={`montserrat`}
              color={`#424b5f`}
              fontSize={14}
              fontWeight={500}
            >
              Contact Details
            </Typography>
            <CheckCircleIcon sx={{ color: `#018651` }}></CheckCircleIcon>
          </Box>
          <Divider></Divider>
          <Box
            sx={{
              display: `flex`,
              justifyContent: `space-between`,
              padding: `0.5em`,
            }}
          >
            <Typography
              fontFamily={`montserrat`}
              color={`#424b5f`}
              fontSize={14}
              fontWeight={500}
            >
              Address Details
            </Typography>
            <CheckCircleIcon sx={{ color: `#018651` }}></CheckCircleIcon>
          </Box>
          <Divider></Divider>
          <Box
            sx={{
              display: `flex`,
              justifyContent: `space-between`,
              padding: `0.5em`,
            }}
          >
            <Typography
              fontFamily={`montserrat`}
              color={`#424b5f`}
              fontSize={14}
              fontWeight={500}
            >
              Education Details
            </Typography>
            <CancelIcon sx={{ color: `#f44437` }}></CancelIcon>
          </Box>
          <Divider></Divider>
          <Box
            sx={{
              display: `flex`,
              justifyContent: `flex-end`,
              fontFamily: `montserrat`,
              padding: `0.5em`,
              color: `#018651`,
              fontWeight: `bold`,
              fontSize:`small`,
              alignItems:`center`
            }}
          >
            <Link href={`#`}>Update Profile </Link>
            <ArrowRightIcon></ArrowRightIcon>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Profile;
