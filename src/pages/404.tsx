/* eslint-disable prettier/prettier */
import React from 'react';
import bg from '@/public/BackgroundImage/bg.jpg';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '@/public/logo-white.png';

const page = () => {
  return (
    <Box
      height={`100vh`}
      sx={{ backgroundImage: `url(${bg.src})`, backgroundSize: `cover` }}
    >
      <Box
        height={`100vh`}
        display={`flex`}
        justifyContent={`space-around`}
        alignItems={`center`}
        flexWrap={`wrap`}
      >
        <Box>
          <Image src={logo} alt="logo" />
          <Typography fontSize={`30px`} color={`#fff`} fontWeight={700}>
            Higher Education Commission
          </Typography>
        </Box>
        <Box>
          <Typography fontSize={`60px`} color={`#fff`} fontWeight={700}>
            404
          </Typography>
          <Typography fontSize={`30px`} color={`#fff`} fontWeight={700}>
            Page cannot be found!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
page.layout = `none`;
export default page;
