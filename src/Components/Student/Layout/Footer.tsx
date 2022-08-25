/* eslint-disable prettier/prettier */
import { Box, IconButton, Paper, Typography } from '@mui/material';
import React,{useState,useEffect} from 'react';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import Tooltip from '@mui/material/Tooltip';
const Footer = () => {
  return (
    <>
      <Paper elevation={5} sx={
        {
          height: `5em`, width: `100%`,
          position: `relative`, bottom: `0`,
          display: `flex`, justifyContent: `space-between`, alignItems: `center`,
          marginTop:`auto`
        }
      }>
        <Box sx={{ left: `4em` }}>
          <Typography
            fontFamily={`montserrat`}
            fontSize={13}
            fontWeight={400}
            sx={{ position: `absolute`, left: `112px`, top: `30px` }}
          >HEC Pakistan© 2022 All Rights Reserved.</Typography>
        </Box>
        <Box sx={{mr:`80px`}}>
          <Tooltip title='Iphone App Comming Soon'>
              <IconButton>
                <AppleIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Andriod App Download from Play Store'>
              <IconButton>
                <AndroidIcon />
              </IconButton>
            </Tooltip>
      </Box>
    </Paper>
    </>
  );
};

export default Footer;
