import { Alert, Paper } from '@mui/material';
import React from 'react';
import aloud from '@/public/aloud.png';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const Alerts = () => {
  
  return (
    <div>
      <Alert
        severity="success"
        // className={classes.alrt}
        sx={{ bgcolor: `#dcede7`, margin: `1em` }}
        icon={false}
        >
        <Box display={`flex`} alignItems={`center`} flexWrap={`wrap`} >
        <Paper
        elevation={0}
        sx={{
          display: `flex`,
          justifyContent: `space-evenly`,
          alignItems: `center`,
          background: `linear-gradient(45deg, #17a667 10%, #0a8782 90%)`,
          padding: `0.625rem 0`,
          color: `#fff`,
          width:`200px`,
          borderRadius:`5px`,
          height:`auto`
          }}>
          <Image src={aloud} alt="aloud" />
          <Typography
            fontFamily={`montserrat`}
            fontWeight={700}
            fontSize={`0.8125rem`}
          >
            Announcements
          </Typography>
          <Box>
            <Typography
              fontFamily={`montserrat`}
              fontWeight={700}
              fontSize={`0.5625rem`}
            >
              1/0
            </Typography>
          </Box>
        </Paper>
        {/* <> icons Here */}
        <Typography ml={1} fontSize={`10px`} lineHeight={`2.188rem`} fontWeight={600}>HEC has revamped the Foreign Degree Equivalence portal and shifted the services to this portal. User are requested to apply on this portal for Foreign Equivalence Services.</Typography>
        <CodeIcon />
        </Box>
      </Alert>
    </div>
  );
};

export default Alerts;
