import Image from 'next/image';
import React from 'react';
import banner from '@/public/infobg.png';
import info from '@/public/infobefore.png';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
const Banner = () => {
  const list = useSelector((state)=>state.loginFPReducer.userData)
  const {name,pages,instituteName} = list.data
  console.log(instituteName)
  console.log(pages)
  const user = name;
  return (
    <>
      <Box
        sx={{
          display: `flex`,
          justifyContent: `space-between`,
          backgroundImage: `url(${banner.src})`,
          backgroundSize: `100% 100%`,
          color: `#fff`,
          padding: `0.5em`,
          borderRadius: `0.5rem`,
          width:`198vh`
        }}
      >
        <Box padding={`1em`}>
          <Typography
            fontFamily={`montserrat`}
            fontWeight={500}
            fontSize={`0.9375rem`}
          >
            Welcome back!
          </Typography>
          <Typography
            fontFamily={`montserrat`}
            fontWeight={900}
            fontSize={`1.375rem`}
            textTransform={`capitalize`}
          >
            {user}
          </Typography>
          <Typography
            fontFamily={`montserrat`}
            fontWeight={500}
            fontSize={`0.8125rem`}
          >
            Focal Person of <strong>{instituteName}</strong>
          </Typography>
        </Box>
        <Box>
          <Image src={info} alt="info" />
        </Box>
      </Box>
    </>
  );
};

export default Banner;
