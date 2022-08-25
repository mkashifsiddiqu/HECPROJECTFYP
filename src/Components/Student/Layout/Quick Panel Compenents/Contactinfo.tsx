import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import islamabad from '../../../../../public/QucikPanel/Contact/islamabad.jpg';
import karachi from '../../../../../public/QucikPanel/Contact/karachi.jpg';
import lahore from '../../../../../public/QucikPanel/Contact/lahore.jpg';
import peshawar from '../../../../../public/QucikPanel/Contact/peshawar.jpg';
import MapIcon from '@mui/icons-material/Map';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: `montserrat`,
  }
});

const Contactinfo = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box width={`675px`} padding={`0px`}>
          <Box
            width={`675px`}
            height={`350px`}
            sx={{
              backgroundImage: `url(${islamabad.src})`,
              backgroundSize: `100% 100%`,
            }}
            margin={`16px 0 128px 0`}
          >
            <Button
              disableElevation
              sx={{
                textTransform: `none`,
                bgcolor: `#0d81af`,
                borderRadius: `0%`,
              }}
              variant={`contained`}
              startIcon={<MapIcon />}
            >
              View Larger Map
            </Button>
            <Paper
              elevation={3}
              sx={{
                padding: `20px`,
                width: `493.75px`,
                position: `relative`,
                top: `53%`,
                left: `13%`,
              }}
            >
              <Box display={`flex`} justifyContent={`center`}>
                <Typography
                  marginBottom={`15px`}
                  fontSize={`21px`}
                  fontWeight={700}
                  color={`rgba(51,51,51,.85)!important`}
                >
                  Head Office Islamabad
                </Typography>
              </Box>
              <Typography fontSize={`13px`} fontWeight={300}>
                Address
              </Typography>
              <Typography
                fontSize={`15px`}
                fontWeight={600}
                color={`rgba(51,51,51,.85)!important`}
              >
                Head Office, Sector H-9, East Service Road, Islamabad
              </Typography>
              <Grid
                container
                margin={`15px 0 0 0`}
                sx={{ display: `flex`, justifyContent: `space-between` }}
              >
                <Grid item>
                  <Typography fontSize={`13px`} fontWeight={300}>
                    Phone Number
                  </Typography>
                  <Typography
                    fontSize={`15px`}
                    fontWeight={600}
                    color={`rgba(51,51,51,.85)!important`}
                  >
                    (051) 9040 0000
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography fontSize={`13px`} fontWeight={300}>
                    For Complaints and Queries
                  </Typography>
                  <Typography
                    fontSize={`15px`}
                    fontWeight={600}
                    color={`rgba(51,51,51,.85)!important`}
                  >
                    HEC - Online Help
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
          <Box
            width={`675px`}
            height={`350px`}
            sx={{
              backgroundImage: `url(${karachi.src})`,
              backgroundSize: `100% 100%`,
            }}
            margin={`16px 0 128px 0`}
          >
            <Button
              disableElevation
              sx={{
                textTransform: `none`,
                bgcolor: `#0d81af`,
                borderRadius: `0%`,
              }}
              variant={`contained`}
              startIcon={<MapIcon />}
            >
              View Larger Map
            </Button>
            <Paper
              elevation={3}
              sx={{
                padding: `20px`,
                width: `493.75px`,
                position: `relative`,
                top: `53%`,
                left: `13%`,
              }}
            >
              <Box display={`flex`} justifyContent={`center`}>
                <Typography
                  marginBottom={`15px`}
                  fontSize={`21px`}
                  fontWeight={700}
                  color={`rgba(51,51,51,.85)!important`}
                >
                  Regional Center Karachi
                </Typography>
              </Box>
              <Typography fontSize={`13px`} fontWeight={300}>
                Address
              </Typography>
              <Typography
                fontSize={`15px`}
                fontWeight={600}
                color={`rgba(51,51,51,.85)!important`}
              >
                Shahzad Khalil Avenue، National Stadium Rd, Maqboolabad CHS,
                Karachi, Karachi City, Sindh, Pakistan
              </Typography>
              <Grid
                container
                margin={`15px 0 0 0`}
                sx={{ display: `flex`, justifyContent: `space-between` }}
              >
                <Grid item>
                  <Typography fontSize={`13px`} fontWeight={300}>
                    Phone Number
                  </Typography>
                  <Typography
                    fontSize={`15px`}
                    fontWeight={600}
                    color={`rgba(51,51,51,.85)!important`}
                  >
                    92-21-99231076-79
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography fontSize={`13px`} fontWeight={300}>
                    For Complaints and Queries
                  </Typography>
                  <Typography
                    fontSize={`15px`}
                    fontWeight={600}
                    color={`rgba(51,51,51,.85)!important`}
                  >
                    HEC - Online Help
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
          <Box
            width={`675px`}
            height={`350px`}
            sx={{
              backgroundImage: `url(${lahore.src})`,
              backgroundSize: `100% 100%`,
            }}
            margin={`16px 0 128px 0`}
          >
            <Button
              disableElevation
              sx={{
                textTransform: `none`,
                bgcolor: `#0d81af`,
                borderRadius: `0%`,
              }}
              variant={`contained`}
              startIcon={<MapIcon />}
            >
              View Larger Map
            </Button>
            <Paper
              elevation={3}
              sx={{
                padding: `20px`,
                width: `493.75px`,
                position: `relative`,
                top: `53%`,
                left: `13%`,
              }}
            >
              <Box display={`flex`} justifyContent={`center`}>
                <Typography
                  marginBottom={`15px`}
                  fontSize={`21px`}
                  fontWeight={700}
                  color={`rgba(51,51,51,.85)!important`}
                >
                  Regional Center Lahore
                </Typography>
              </Box>
              <Typography fontSize={`13px`} fontWeight={300}>
                Address
              </Typography>
              <Typography
                fontSize={`15px`}
                fontWeight={600}
                color={`rgba(51,51,51,.85)!important`}
              >
                55 B Street 2, Block B2 Block B 2 Gulberg III, Lahore, Punjab
                54000, Pakistan
              </Typography>
              <Grid
                container
                margin={`15px 0 0 0`}
                sx={{ display: `flex`, justifyContent: `space-between` }}
              >
                <Grid item>
                  <Typography fontSize={`13px`} fontWeight={300}>
                    Phone Number
                  </Typography>
                  <Typography
                    fontSize={`15px`}
                    fontWeight={600}
                    color={`rgba(51,51,51,.85)!important`}
                  >
                    +92-42-99263092, 94-96
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography fontSize={`13px`} fontWeight={300}>
                    For Complaints and Queries
                  </Typography>
                  <Typography
                    fontSize={`15px`}
                    fontWeight={600}
                    color={`rgba(51,51,51,.85)!important`}
                  >
                    HEC - Online Help
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
          <Box
            width={`675px`}
            height={`350px`}
            sx={{
              backgroundImage: `url(${islamabad.src})`,
              backgroundSize: `100% 100%`,
            }}
            margin={`16px 0 128px 0`}
          >
            <Button
              disableElevation
              sx={{
                textTransform: `none`,
                bgcolor: `#0d81af`,
                borderRadius: `0%`,
              }}
              variant={`contained`}
              startIcon={<MapIcon />}
            >
              View Larger Map
            </Button>
            <Paper
              elevation={3}
              sx={{
                padding: `20px`,
                width: `493.75px`,
                position: `relative`,
                top: `53%`,
                left: `13%`,
              }}
            >
              <Box display={`flex`} justifyContent={`center`}>
                <Typography
                  marginBottom={`15px`}
                  fontSize={`21px`}
                  fontWeight={700}
                  color={`rgba(51,51,51,.85)!important`}
                >
                  Regional Center Quetta
                </Typography>
              </Box>
              <Typography fontSize={`13px`} fontWeight={300}>
                Address
              </Typography>
              <Typography
                fontSize={`15px`}
                fontWeight={600}
                color={`rgba(51,51,51,.85)!important`}
              >
                House No 61-A Chaman Housing Scheme Airport Road Quetta,Quetta,
                Balochistan, Pakistan
              </Typography>
              <Grid
                container
                margin={`15px 0 0 0`}
                sx={{ display: `flex`, justifyContent: `space-between` }}
              >
                <Grid item>
                  <Typography fontSize={`13px`} fontWeight={300}>
                    Phone Number
                  </Typography>
                  <Typography
                    fontSize={`15px`}
                    fontWeight={600}
                    color={`rgba(51,51,51,.85)!important`}
                  >
                    +92-81-9201791
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography fontSize={`13px`} fontWeight={300}>
                    For Complaints and Queries
                  </Typography>
                  <Typography
                    fontSize={`15px`}
                    fontWeight={600}
                    color={`rgba(51,51,51,.85)!important`}
                  >
                    HEC - Online Help
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
          <Box
            width={`675px`}
            height={`350px`}
            sx={{
              backgroundImage: `url(${peshawar.src})`,
              backgroundSize: `100% 100%`,
            }}
            margin={`16px 0 128px 0`}
          >
            <Button
              disableElevation
              sx={{
                textTransform: `none`,
                bgcolor: `#0d81af`,
                borderRadius: `0%`,
              }}
              variant={`contained`}
              startIcon={<MapIcon />}
            >
              View Larger Map
            </Button>
            <Paper
              elevation={3}
              sx={{
                padding: `20px`,
                width: `493.75px`,
                position: `relative`,
                top: `53%`,
                left: `13%`,
              }}
            >
              <Box display={`flex`} justifyContent={`center`}>
                <Typography
                  marginBottom={`15px`}
                  fontSize={`21px`}
                  fontWeight={700}
                  color={`rgba(51,51,51,.85)!important`}
                >
                  Regional Centre Peshawar
                </Typography>
              </Box>
              <Typography fontSize={`13px`} fontWeight={300}>
                Address
              </Typography>
              <Typography
                fontSize={`15px`}
                fontWeight={600}
                color={`rgba(51,51,51,.85)!important`}
              >
                Phase-V, Hayatabad, Peshawar
              </Typography>
              <Grid
                container
                margin={`15px 0 0 0`}
                sx={{ display: `flex`, justifyContent: `space-between` }}
              >
                <Grid item>
                  <Typography fontSize={`13px`} fontWeight={300}>
                    Phone Number
                  </Typography>
                  <Typography
                    fontSize={`15px`}
                    fontWeight={600}
                    color={`rgba(51,51,51,.85)!important`}
                  >
                    +92-91-9217643, +92-91-9219571-5
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography fontSize={`13px`} fontWeight={300}>
                    For Complaints and Queries
                  </Typography>
                  <Typography
                    fontSize={`15px`}
                    fontWeight={600}
                    color={`rgba(51,51,51,.85)!important`}
                  >
                    HEC - Online Help
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Contactinfo;
