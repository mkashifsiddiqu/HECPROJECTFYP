/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import { AppBar, Box, Typography, Link,Hidden  } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from '../../../../public/logo.png';
import Personalprofile from './HeaderComponents/Personalprofile';
import Bellnotification from './HeaderComponents/Bellnotification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import ResponsiveHeader from './HeaderComponents/ResponsiveHeader';
import ResponsiveSideBar from './HeaderComponents/ResponsiveSideBar';
const Header = () => {
  return (
    <div>
          <div>
      <AppBar
        color="inherit"
        sx={{boxShadow: `0 0 12px 0 rgb(82 63 105 / 10%)` }}
      >
        <Box display={`flex`} justifyContent={`space-between`} paddingY={0.75}>
          <Box display={`flex`} alignItems={`center`}>
            <Box paddingX="25px">
              <Image height={63} width={55} src={logo} alt="logo"></Image>
            </Box>
            <Hidden lgDown>
            <Typography
              fontFamily={`montserrat`}
              fontSize={`1.138rem`}
              fontWeight={700}
              color={`#434349`}
            >
              Higher Education Commission, Pakistan
            </Typography>
            </Hidden>
          </Box>
          <Box display={`flex`} alignItems={`center`} paddingRight={`25px`}>
          <Hidden lgDown>
            <Link
              href="#"
              sx={{
                textDecoration: `none`,
                '&:hover': { textDecoration: `underline` },
              }}
            >
              <Typography
                display={`flex`}
                alignItems={`center`}
                sx={{ color: `#006d9a!important` }}
                fontFamily={`montserraimport { ResponsiveSideBarbutton } from '@/pages/ResponsiveSideBar';
t`}
                fontSize={13}
                fontWeight={600}
              >
                <FontAwesomeIcon
                  className="fa-lg"
                  icon={faCloudDownloadAlt}
                  style={{ width: `20px`, height: `16px`, margin: `0 2px 0 0` }}
                />
                Download Manual
              </Typography>
            </Link>
            <Bellnotification />
            <Personalprofile />
            </Hidden>
            <Hidden lgUp>
              <ResponsiveSideBar></ResponsiveSideBar>
              <ResponsiveHeader></ResponsiveHeader>
            </Hidden>
          </Box>
        </Box>
      </AppBar>
    </div>
      {/* <AppBar
        color="inherit"
        sx={{ height: `5em`, boxShadow: `0 0 12px 0 rgb(82 63 105 / 10%)` }}
      >
        <Box display={`flex`} justifyContent={`space-between`} paddingY={0.75}>
          <Box display={`flex`} alignItems={`center`}>
            <Box paddingX="25px">
              <Image height={63} width={55} src={logo} alt="logo"></Image>
            </Box>
            <Typography
              fontFamily={`montserrat`}
              fontSize={`1.138rem`}
              fontWeight={700}
              color={`#434349`}
            >
              Higher Education Commission, Pakistan
            </Typography>
          </Box>
          <Box display={`flex`} alignItems={`center`} paddingRight={`25px`}>
            <Link
              href={`#`}
              sx={{
                textDecoration: `none`,
                '&:hover': { textDecoration: `underline` },
              }}
            >
              <Typography
                display={`flex`}
                alignItems={`center`}
                sx={{ color: `#006d9a!important` }}
                fontFamily={`montserrat`}
                fontSize={13}
                fontWeight={600}
              >
                <FontAwesomeIcon
                  className="fa-lg"
                  icon={faCloudDownloadAlt}
                  style={{ width: `20px`, height: `16px`, margin: `0 2px 0 0` }}
                />
                Download Manual
              </Typography>
            </Link>
            <Bellnotification />
            <Personalprofile />
          </Box>
        </Box>
      </AppBar> */}
    </div>
  );
};

export default Header;
