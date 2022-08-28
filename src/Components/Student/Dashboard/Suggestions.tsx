import { Divider, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Suggestions = () => {
  return (
    <div>
      <Box>
        <Paper sx={{ margin: `1em`, padding: `1em 1em 0em 1em` }}>
          <Typography
            fontFamily={`montserrat`}
            fontSize={`1rem`}
            fontWeight={`700`}
            color={`#797D86`}
          >
            SUGGESTED TO YOU
          </Typography>
          <Box
            sx={{
              display: `flex`,
              justifyContent: `space-between`,
              alignItems:`center`,
              padding: `1em`,
              color: `#3e3c76`,
              fontFamily: `montserrat`,
              fontSize: `13px`,
              fontWeight: `600`,
            }}
          >
            <Link href={`../pages/Trackapplication.tsx`}>
              Apply For Degree Attestation Service
            </Link>
            <NavigateNextIcon></NavigateNextIcon>
          </Box>
          <Divider></Divider>
          <Box
            sx={{
              display: `flex`,
              justifyContent: `space-between`,
              alignItems:`center`,
              padding: `1em`,
              color: `#3e3c76`,
              fontFamily: `montserrat`,
              fontSize: `13px`,
              fontWeight: `600`,
            }}
          >
            <Link href={`../pages/Trackapplication.tsx`}>
              Apply For Ecourses
            </Link>
            <NavigateNextIcon></NavigateNextIcon>
          </Box>
          <Divider></Divider>
          <Box
            sx={{
              display: `flex`,
              justifyContent: `space-between`,
              alignItems:`center`,
              padding: `1em`,
              color: `#3e3c76`,
              fontFamily: `montserrat`,
              fontSize: `13px`,
              fontWeight: `600`,
            }}
          >
            <Link href={`../pages/Trackapplication.tsx`}>
              Apply For Local Degree Equivalence Service
            </Link>
            <NavigateNextIcon></NavigateNextIcon>
          </Box>
          <Divider></Divider>
          <Box
            sx={{
              display: `flex`,
              justifyContent: `space-between`,
              alignItems:`center`,
              padding: `1em`,
              color: `#3e3c76`,
              fontFamily: `montserrat`,
              fontSize: `13px`,
              fontWeight: `600`,
            }}
          >
            <Link href={`../pages/Trackapplication.tsx`}>
            Apply For Foreign Degree Recognition/Equivalence Service
            </Link>
            <NavigateNextIcon></NavigateNextIcon>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Suggestions;
