import React, { useState, useEffect } from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import {
  Alert,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  createTheme,
  ThemeProvider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Divider,
  TableContainer,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
const theme = createTheme({
  typography: {
    fontFamily: `montserrat`,
    fontSize: 13,
  },
});
const useStyles = makeStyles({
  main: {
    margin: `7em 2em 0 6em`,
  },
  paper: {
    padding: `1.5em`,
  },
  referencetext: {
    fontFamily: `montserrat`,
    fontSize: `0.8125rem`,
    color: `#138e5d`,
    fontWeight: `600`,
  },
  chip: {
    backgroundColor: `#84dcff`,
    fontFamily: `montserrat`,
    padding: `0.5em 0.2em`,
    fontWeight: `500`,
    color: `#0491ca`,
    cursor: `pointer`,
    '&:hover': {
      backgroundcolor: `#41a7fa`,
      color: `#fff`,
    },
    fontSize: `0.65rem`,
  },
  personalinfo: {
    fontFamily: `montserrat`,
    fontSize: `0.975rem`,
    color: `#48465b`,
    fontWeight: `bold`,
  },
  box: {
    margin: `1.5em 0 `,
  },
  ltext: {
    fontFamily: `monstserrat`,
  },
  t: {
    fontFamily: `montserrat`,
    fontSize: `0.8rem`,
    fontWeight: `500`,
  },
  tarea: {
    width: `1900px`,
  },
});
const VerifyDetails = () => {
  const classes = useStyles();
  //Redux  Data
  const list = useSelector((state) => state.stdLoginReducer.userData);
  const { name, email, identityNumber, identityType } = list.data;
  // Degree Details
  const DegreeList = useSelector((state) => state.selectedDegree.userData);
  //Destrc...
  const { id, NameOnDegree, InstituteName, ProgramTitle, year } =
    DegreeList.data;
  //State for Data verification
  const [Mode, setMode] = useState<string>(``);
  const [Disability, setDisability] = useState<string>(``);
  const [whereCheck, setwhereCheck] = useState<string>(``);
  const [appRef, setAppRef] = useState<string>(``);
  //Name State
  const [firstName, setfirstName] = useState<string>(``);
  const [middleName, setMiddle] = useState<string>(``);
  const [lastName, setlastName] = useState<string>(``);

  //Martial Status
  const [martialStatus, setmartialStatus] = useState<string>(``);
  //Gender
  const [gender, setGender] = useState<string>(``);
  //Date of Birth
  const [dateofbirth, setDateofbirth] = useState<Date | null>(new Date());
  const handleBOD = (newValue: Date | null) => {
    setDateofbirth(newValue);
  };
  //Father
  const [FatherName, setFatherName] = useState<string>(` `);
  const [address, setAddress] = useState<string>(``);
  //City
  const [city, setCity] = useState();
  const [postalcode, setpostalcode] = useState<string>(``);
  //=======Mode of Attestation
  // const full= new Date().getUTCDate
  const getMode = async () => {
    const data = { email };
    const res = await fetch(
      `http://localhost:3000/api/Student/Application/Mode/getMode`,
      {
        method: `POST`, //BECAUSE WE CHECK WITH EMAIL
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(data),
      },
    );
    const response = await res.json();
    console.log(response);

    if (response) {
      const { Mode, WhereCheck, Disability } = response.App.ModeOfAttestation;
      setMode(Mode);
      setDisability(Disability);
      setwhereCheck(WhereCheck);
      const { _id } = response.App;
      setAppRef(_id);
    }
  };
  //========================Verify User Detail ==========================
  const getUserDetail = async () => {
    const data = { email };
    const URL = `http://localhost:3000/api/Student/User/getUserDetailwithApplication`;
    const res = await fetch(URL, {
      method: `POST`, //BECAUSE WE CHECK User EMAIL
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    if (response) {
      const { user } = response;
      setfirstName(user?.First_Name);
      setMiddle(user?.Middle_Name);
      setlastName(user?.Last_Name);
      setmartialStatus(user?.Martial_Status);
      setGender(user?.Gender);
      // setDateofbirth(user?.Date_of_Birth)
      setFatherName(user?.Father_Name);
      setAddress(user?.Address);
      setpostalcode(user?.Postal_Code);
    }
  };

  useEffect(() => {
    getMode();
    getUserDetail();
  }, []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Alert icon={<LightbulbIcon />} severity="warning">
          <Typography color={`#484848`} fontSize={13} fontWeight={600}>
            Please review and verify all your application details once before
            submitting.
          </Typography>
        </Alert>
        <Box>
          <Typography
            marginBottom={`20px`}
            fontSize={14}
            fontWeight={700}
            color={`#191d28`}
          >
            APPLICATION DETAILS
          </Typography>
          <Grid container spacing={2} marginBottom={`20px`}>
            <Grid item xs={12} md={3}>
              <Typography fontSize={13} fontWeight={500} color="#333333d9">
                Application Reference:
              </Typography>
              <Typography fontSize={11} fontWeight={700} color="#333333d9">
                HEC/A&A/DAS/{appRef}
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography fontSize={13} fontWeight={500} color="#333333d9">
                Mode of Attestation
              </Typography>
              <Typography fontSize={13} fontWeight={700} color="#333333d9">
                {Mode}
              </Typography>
            </Grid>
            {Mode === `Walk-in (Urgent Attestation)` && (
              <Grid item xs={12} md={3}>
                <Typography fontSize={13} fontWeight={500} color="#333333d9">
                  From Where You Are Sending Documents
                </Typography>
                <Typography fontSize={13} fontWeight={700} color="#333333d9">
                  {city ? city : `Islamabad`}
                </Typography>
              </Grid>
            )}
            {Mode === `Attestation through Courier` && (
              <>
                <Grid item xs={12} md={3}>
                  <Typography fontSize={13} fontWeight={500} color="#333333d9">
                    From Where You Are Sending Documents
                  </Typography>
                  <Typography fontSize={13} fontWeight={700} color="#333333d9">
                    {whereCheck}
                  </Typography>
                </Grid>
                {whereCheck === `Outside Pakistan` && (
                  <Grid item xs={12} md={3}>
                    <Typography
                      fontSize={13}
                      fontWeight={500}
                      color="#333333d9"
                    >
                      Regional Center
                    </Typography>
                    <Typography
                      fontSize={13}
                      fontWeight={700}
                      color="#333333d9"
                    >
                      Islamabad
                    </Typography>
                  </Grid>
                )}
                {whereCheck === `Inside Pakistan` && (
                  <Grid item xs={12} md={3}>
                    <Typography
                      fontSize={13}
                      fontWeight={500}
                      color="#333333d9"
                    >
                      District
                    </Typography>
                    <Typography
                      fontSize={13}
                      fontWeight={700}
                      color="#333333d9"
                    >
                      {city}
                    </Typography>
                  </Grid>
                )}
              </>
            )}
            <Grid item xs={12} md={3}>
              <Typography fontSize={13} fontWeight={500} color="#333333d9">
                {identityType}
              </Typography>
              <Typography fontSize={13} fontWeight={700} color="#333333d9">
                {identityNumber}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            marginBottom={`20px`}
            fontSize={14}
            fontWeight={700}
            color={`#191d28`}
          >
            PERSONAL DETAILS
          </Typography>
          <Table size="small" sx={{ margin: `0 0 20px 0` }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography fontSize={11} fontWeight={600} color={`#757575`}>
                    ITEM
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize={11} fontWeight={600} color={`#757575`}>
                    PERSONAL DETAILS
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                    Full Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    fontSize={13}
                    fontWeight={700}
                    color={`#212529`}
                    textTransform={`capitalize`}
                  >
                    {` `}
                    {name}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                    Gender
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                    Male
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                    Date of Birth
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                    {new Date(dateofbirth).toISOString().slice(0, 10)}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                    Mailing Address
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                    {` `}
                    {address ? address : `Gujrat`}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox required color="success" />}
              label={
                <Typography
                  fontSize={`13px`}
                  fontWeight={600}
                  color={`rgba(51,51,51,.85)!important`}
                >
                  Please ensure that there is no variation in your name,
                  father's name and date of birth written in personal details as
                  mentioned above
                </Typography>
              }
            />
          </FormGroup>

          {/* Component of 3ed page */}
        </Box>
        {/* Degree Detail Verify */}
        <Typography
          marginTop={`20px`}
          fontSize={14}
          fontWeight={700}
          color={`#191d28`}
        >
          PREVIEW DOCUMENTS OF SELECTED EDUCATION
        </Typography>
        <Divider sx={{ mt: 4 }}></Divider>
        <TableContainer>
          <Table aria-label="collapsible table" size="small">
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ fontSize: `11px` }}>
                  YEAR OF PASSING
                </TableCell>
                <TableCell align="left" sx={{ fontSize: `11px` }}>
                  APPLICANT NAME ON DEGREE
                </TableCell>
                <TableCell align="left" sx={{ fontSize: `11px` }}>
                  QUALIFICATION LEVEL
                </TableCell>
                <TableCell align="left" sx={{ fontSize: `11px` }}>
                  UNIVERSITY
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <React.Fragment>
                <TableRow
                  sx={{
                    '& > *': { borderBottom: `unset` },
                    borderBottom: `1px dashed #ddd`,
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontSize: `12px`,
                      fontWeight: `600`,
                      color: `#404b61`,
                    }}
                  >
                    {year}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: `12px`,
                      fontWeight: `600`,
                      color: `#404b61`,
                    }}
                  >
                    {NameOnDegree}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: `12px`,
                      fontWeight: `600`,
                      color: `#404b61`,
                    }}
                  >
                    {ProgramTitle}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: `12px`,
                      fontWeight: `600`,
                      color: `#404b61`,
                    }}
                  >
                    {InstituteName}
                  </TableCell>
                </TableRow>
              </React.Fragment>
            </TableBody>
          </Table>
        </TableContainer>
        <Box marginTop={`40px`}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox required color="success" />}
              label={
                <Typography
                  fontSize={`13px`}
                  fontWeight={600}
                  color={`rgba(51,51,51,.85)!important`}
                >
                  I Mr./Ms. {name} User bearing {identityType} #{' '}
                  {identityNumber} hereby solemnly declare that all my
                  degree(s)/Transcript(s)/Certificates including Secondary
                  School Certificate (SSC), Higher Secondary Certificate (HSSC)
                  or Equivalent and all my subsequent degrees/transcripts or
                  equivalent are genuine from recognized university/degree
                  awarding institute and are in line with academic standards. If
                  at any stage it is revealed that any of my academic
                  degree(s)/Transcript(s) /Certificates are FAKE/BOGUS or not in
                  line with academic regulations of the university, the HEC
                  would have right to immediately cancel the attestation done on
                  my degree(s)/Transcript(s)/Certificates. Besides, I would be
                  held accountable for disciplinary and legal proceedings for
                  concealment of facts and forgery of academic documents.
                </Typography>
              }
            />
          </FormGroup>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default VerifyDetails;
