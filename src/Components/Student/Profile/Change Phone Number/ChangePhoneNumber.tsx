/* eslint-disable prettier/prettier */
import {
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Pakistan from '../../../../../public/pakistan.png';
import Image from 'next/image';
const theme = createTheme({
  typography: {
    fontFamily: `montserrat`,
    fontSize: 12,
  },
});

const ChangePhoneNumber = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper sx={{ margin: `0 0 20px 0` }}>
          <Box padding={`20px`}>
            <Box marginBottom={`25px`}>
              <Box
                paddingBottom={`10px`}
                display={`flex`}
                alignItems={`flex-end`}
              >
                <Typography
                  color="#48465b"
                  fontSize={15.6}
                  fontWeight={700}
                  marginRight="10px"
                >
                  Change Mobile Number
                </Typography>
                <Typography color="#48465b" fontSize={13} fontWeight={400}>
                  change your account Phone Number
                </Typography>
              </Box>
              <Divider></Divider>
            </Box>
            <Grid container spacing={2}>
              <Grid item md={8} xs={12}>
                <Typography color={`#333333d9`} fontSize={13} fontWeight={600}>
                  Primary Cell Phone Number
                </Typography>
                <TextField
                  size="small"
                  fullWidth
                  helperText={
                    <Typography
                      color="#000000bf"
                      fontSize={12}
                      fontWeight={600}
                    >
                      Please enter phone number in correct format e.g: +92
                      3472748202
                    </Typography>
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TextField
                          select
                          sx={{
                            width: `93px`,
                            fontSize: `12px`,
                            backgroundColor: `#0000000d`,
                          }}
                          size="small"
                          variant="standard"
                          InputProps={{ disableUnderline: true }}
                        >
                          <MenuItem value="+92" sx={{ fontSize: `12px` }}>
                            <Image
                              width={`20px`}
                              height={`14px`}
                              src={Pakistan}
                              alt="pakistan"
                            />
                            +92
                          </MenuItem>
                          <MenuItem value="+1" sx={{ fontSize: `12px` }}>
                            +1
                          </MenuItem>
                          <MenuItem value="+97" sx={{ fontSize: `12px` }}>
                            +97
                          </MenuItem>
                        </TextField>
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </Grid>
              {/* <Hidden mdDown>
              <Grid item md={6} xs={12}></Grid>
          </Hidden> */}
              <Grid item md={6} xs={12}>
                <Box height={`50px`} display={`flex`} alignItems={`flex-end`}>
                  <Button
                    sx={{ margin: `0 15px 0 0` }}
                    variant="outlined"
                    color="success"
                  >
                    Change Mobile Number
                  </Button>
                  <Button variant="outlined">cancel</Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default ChangePhoneNumber;
