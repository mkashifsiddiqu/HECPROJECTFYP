/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Box, Link, Typography } from '@mui/material';
import picture from '../../../../../public/userLogo.png'
import Image from 'next/image';
import person from '../../../../../public/prob.png'
import logout from '../../../../../public/logbtn.png'
// import profile from '../../../../../ServerDataBase/Profile/uploads/profileImage.png'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import {removeCookies } from 'cookies-next';
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router =useRouter()
  const list = useSelector((state)=>state.stdLoginReducer.userData)
  const {name,email} = list.data
  //=================Get Profile Picture =====================
  const [ProfileImage,setProfileImage] =useState<string>(``)
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
    const {profile}= response
    setProfileImage(profile?.imageurl)
  }
  }
useEffect(() => {
  getProfile()
}, [])

  return (
    <>
    <div>
      <Button disableRipple onClick={handleClick} sx={{ textTransform: `none`, '&:hover': { backgroundColor: `transparent` } }}>
        <Typography display={`flex`} alignItems={`center`} fontFamily={`montserrat`} 
              fontWeight={600} fontSize={13} 
              color="#636177">
                Greetings, {name}
                <Avatar 
                
                src={`http://localhost:3000/api/Profile/student/${ProfileImage}`}
                sx={{ marginLeft: `0.55rem`,
                //backgroundImage:`url(${picture})`,backgroundSize:`100% 100%`,backgroundRepeat:`no-repeat`
                
                }}>
                </Avatar>
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': `basic-button`,
          style:{paddingTop:`0px`,paddingBottom:`0px`}
        }}
        
      >
        <Box display={`flex`} alignItems={`center`} onClick={handleClose} sx={{ padding: `25px 102px 30px 30px`, backgroundImage: `linear-gradient(45deg, #17a667 10%, #0a8782 90%)`}}>
          <Box 
          border={1} borderColor="#fff" borderRadius={`2px`} margin='1' height={`60px`} 
          width={`60px`} 
          sx={{backgroundImage:`url(http://localhost:3000/api/Profile/student/${ProfileImage})`,
          backgroundSize:`100% 100%`,backgroundRepeat:`no-repeat`}}
          >
            {/* <Image  height={`60px`} width={`60px`}  src={picture} alt="pic"></Image> */}
            </Box>
          <Box padding={`0 0 0 15px`}>
            <Typography fontFamily={`montserrat`} fontSize={15.6} fontWeight={900} color="#fff">{name}</Typography>
            <Typography fontFamily={`montserrat`} fontSize={13} fontWeight={500} color="#fff">{email}</Typography>
          </Box>
        </Box>
        <MenuItem sx={{ padding: `8px 20px`, borderBottom: 1, borderColor: `divider` }} onClick={handleClose}>
          <Box display={`flex`} alignItems={`center`}>
            <Box marginRight={2}><Image src={person} alt="person"></Image></Box>
            <motion.div
              initial={{ x: 1 }}
              whileHover={{ x: 10 }}
              transition={{ type: `tween` }}
            >
              <Box>
                <Link useHref={`#`} onClick={() => router.push(`/Profile`)} sx={{ textDecoration: `none` }} passHref>
                  <Typography fontFamily={`montserrat`} fontSize={13} fontWeight={600} color="#6a6a6a">My Profile</Typography>
                  <Typography marginTop={1} fontFamily={`montserrat`} fontSize={12} fontWeight={500} color="#b1b1b1">Account settings and more</Typography>
                </Link>
              </Box>
            </motion.div>
          </Box>
        </MenuItem>
        <MenuItem sx={{ padding: `20.8px 19.5px` }} onClick={handleClose}>
          <Box display={`flex`} alignItems={`center`}>
            <Box marginRight={2}><Image src={logout} alt="logout"></Image></Box>
            <motion.div
              initial={{ x: 1 }}
              whileHover={{ x: 10 }}
              transition={{ type: `tween` }}
            >
            <Box onClick={() => {
               removeCookies(`nameStudent`)
               removeCookies(`emailStudent`);
               removeCookies(`identityNumberStudent`);
               removeCookies(`identityTypeStudent`);
               removeCookies(`nationalityStudent`);
               router.replace(`/Login`)}}>
                <Typography fontFamily={`montserrat`} fontSize={13} fontWeight={600} color="#ff0000">Logout</Typography>
                <Typography fontFamily={`montserrat`} fontSize={13} fontWeight={500} color="#ff0000">Logout to Home Page</Typography>
              </Box>
            </motion.div>
          </Box>
        </MenuItem>
      </Menu>
    </div>
    </>
  );
}