/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import { AppBar, Box,Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/logo.png'
import Personalprofile from './Personalprofile';
import Bellnotification from './Bellnotification';
const Header = () => {
  return (
    <div>
        <AppBar color="inherit" sx={{height:`5em`,boxShadow: `0 0 12px 0 rgb(82 63 105 / 10%)`}}>
            <Box display={`flex`} justifyContent={`space-between`} paddingY={0.75}>
                <Box display={`flex`} alignItems={`center`}>
                    <Box paddingX="25px"><Image height={63} width={55} src={logo} alt="logo"></Image></Box>
                    <Typography fontFamily={`montserrat`} fontSize={`1.138rem`} fontWeight={700} color={`#434349`}>Higher Education Commission, Pakistan</Typography>
                </Box>
                <Box display={`flex`} alignItems={`center`} paddingRight={`25px`}>
                   {/* <Bellnotification/> */}
                    <Personalprofile/>
                </Box>
            </Box>
        </AppBar>
    </div>
  )
}

export default Header