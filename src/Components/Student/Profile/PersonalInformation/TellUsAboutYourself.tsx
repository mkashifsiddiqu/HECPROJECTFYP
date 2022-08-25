/* eslint-disable prettier/prettier */
import {
  Box,
  Divider,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { createTheme, ThemeProvider } from '@mui/material';
import { motion } from 'framer-motion';
import Personalinformation from './Personalinformation';
const theme = createTheme({
  typography: {
    fontFamily: `montserrat`,
  },
});

const TellUsAboutYourself = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper>
          <Box padding={`20px`} sx={{ margin: `0 0 20px 0` }}>
            <Box marginBottom={`25px`}>
              <Box
                paddingBottom={`10px`}
                display={`flex`}
                justifyContent={`space-between`}
              >
                <Typography color="#48465b" fontSize={15.6} fontWeight={700}>
                  Tell Us About Yourself
                </Typography>
                <Tooltip title={`Edit Details`}>
                  <motion.div whileHover={{ scale: 1.1, color: `green` }}>
                    <EditIcon sx={{ width: `18px`, height: `18px` }} />
                  </motion.div>
                </Tooltip>
              </Box>
              <Divider></Divider>
            </Box>
            <Grid container>
              <Grid item md={4} xs={12}>
                <Box paddingX={`5px`} marginBottom={`25px`}>
                  <Typography
                    fontSize={12.5}
                    fontWeight={600}
                    color="#000000de"
                  >
                    Title:
                  </Typography>
                  <Typography
                    fontSize={12.5}
                    fontWeight={500}
                    color="#000000de"
                  >
                    Mr.
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box paddingX={`5px`} marginBottom={`25px`}>
                  <Typography
                    fontSize={12.5}
                    fontWeight={600}
                    color="#000000de"
                  >
                    First Name:
                  </Typography>
                  <Typography
                    fontSize={12.5}
                    fontWeight={500}
                    color="#000000de"
                  >
                   {/* {firstName} */}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box paddingX={`5px`} marginBottom={`25px`}>
                  <Typography
                    fontSize={12.5}
                    fontWeight={600}
                    color="#000000de"
                  >
                    Last Name:
                  </Typography>
                  <Typography
                    fontSize={12.5}
                    fontWeight={500}
                    color="#000000de"
                  >
                   {/* {lastName} */}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box paddingX={`5px`} marginBottom={`25px`}>
                  <Typography
                    fontSize={12.5}
                    fontWeight={600}
                    color="#000000de"
                  >
                    Cell Phone:
                  </Typography>
                  <Typography
                    fontSize={12.5}
                    fontWeight={500}
                    color="#000000de"
                  >
                    3018407613
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box paddingX={`5px`} marginBottom={`25px`}>
                  <Typography
                    fontSize={12.5}
                    fontWeight={600}
                    color="#000000de"
                  >
                    Gender:
                  </Typography>
                  <Typography
                    fontSize={12.5}
                    fontWeight={500}
                    color="#000000de"
                  >
                    {/* {gender} */}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box paddingX={`5px`} marginBottom={`25px`}>
                  <Typography
                    fontSize={12.5}
                    fontWeight={600}
                    color="#000000de"
                  >
                    Religion:
                  </Typography>
                  <Typography
                    fontSize={12.5}
                    fontWeight={500}
                    color="#000000de"
                  >
                    Islam
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box paddingX={`5px`} marginBottom={`25px`}>
                  <Typography
                    fontSize={12.5}
                    fontWeight={600}
                    color="#000000de"
                  >
                    Marital Status:
                  </Typography>
                  <Typography
                    fontSize={12.5}
                    fontWeight={500}
                    color="#000000de"
                  >
                   {/* {martialStatus} */}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default TellUsAboutYourself;
