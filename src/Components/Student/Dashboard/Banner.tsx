/* eslint-disable prettier/prettier */
import Image from 'next/image';
import React from 'react';
import banner from '@/public/infobg.png';
import info from '@/public/infobefore.png';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
const Banner = () => {
  const list = useSelector((state)=>state.stdLoginReducer.userData)
  const {name} = list.data
  const user = name;
  const city = `Gujrat`;
  const country = `Pakistan`;
  const date = `Thursday, August 22, 2022`;
  return (
    <div>
      <Box
        sx={{
          display: `flex`,
          justifyContent: `space-between`,
          backgroundImage: `url(${banner.src})`,
          backgroundSize: `100% 100%`,
          margin: `1em`,
          color: `#fff`,
          padding: `0.5em`,
          borderRadius: `0.5rem`,
        }}
      >
        <Box padding={`1em`}>
          <Typography
            fontFamily={`montserrat`}
            fontWeight={600}
            fontSize={`0.938rem`}
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
            pt={1}
            fontFamily={`montserrat`}
            fontWeight={500}
            fontSize={`0.8125rem`}
          >
            Last Login From : {city},{country}, at {date}{` `}
          </Typography>
        </Box>
        <Box>
          <Image src={info} alt="info" />
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
