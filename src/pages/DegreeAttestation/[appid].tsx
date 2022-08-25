/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/quotes */
import React, { useEffect, useState } from 'react';
import AttestationDetails from '@/Components/Student/Degree Attestation/AttestationDetails';
import DocumentUpload from '@/Components/Student/Degree Attestation/DocumentUpload';
import Personaldetails from '@/Components/Student/Degree Attestation/Personaldetails';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import {
  Chip,
  Divider,
  Grid,
  Paper,
  StepIconProps,
  StepLabel,
} from '@mui/material';
import Detailofdegree from '@/Components/Student/Degree Attestation/Detailofdegree';
import { motion } from 'framer-motion';
import { makeStyles } from '@mui/styles';
import InfoIcon from '@mui/icons-material/Info';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
//icon
import download from '@/public/InstructionIcon/downloadm.svg';
import Instructions from '@/public/InstructionIcon/instructions.svg';
import Ohelp from '@/public/InstructionIcon/ohelp.svg';
import user from '@/public/StepperICon/profiel.png';
import education from '@/public/StepperICon/education.png';
import vDetail from '@/public/StepperICon/vdetails.png';
import uDetail from '@/public/StepperICon/atdetails.png';
import doc from '@/public/StepperICon/docup.png';
import VerifyDetails from '@/Components/Student/Degree Attestation/VerifyDetails';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
const useStyles = makeStyles({
  paper: {
    padding: '1.5em',
  },
  referencetext: {
    fontFamily: 'montserrat',
    fontSize: '0.8125rem',
    color: '#138e5d',
    fontWeight: '600',
  },
  chip: {
    backgroundColor: '#84dcff',
    fontFamily: 'montserrat',
    padding: '0.5em 0.2em',
    fontWeight: '500',
    color: '#0491ca',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#41a7fa',
      color: '#fff',
    },
    fontSize: '0.65rem',
    borderRadius: '4px',
    p: 2,
    boxShadow: ' 0 4px 10px rgb(0 0 0 / 10%)',
  },
  personalinfo: {
    fontFamily: 'montserrat',
    fontSize: '0.975rem',
    color: '#48465b',
    fontWeight: 'bold',
  },
  box: {
    margin: '1.5em 0 ',
  },
  ltext: {
    fontFamily: 'monstserrat',
    fontSize: '12px',
  },
  t: {
    fontFamily: 'montserrat',
    fontSize: '0.8rem',
    fontWeight: '500',
  },
  tarea: {
    width: '1900px',
  },
  BGB: {
    backgroundColor: 'white',
    color: '#8A8A8A',
    fontFamily: 'montserrat',
    padding: '0.6250em 1.875em',
    '&:hover': {
      backgroundColor: '#8A8A8A',
      color: '#fff',
    },
  },

  BSF: {
    backgroundColor: '#1bb55e',
    fontFamily: 'montserrat',
    padding: '0.6250em 1.875em',
  },
  Btnhelp: {
    color: '#23A75C',
    textTransform: 'capitalize',
    fontWeight: '600',
    fontSize: '13px',
    margin: '5px',
    '&:hover': { backgroundColor: 'transparent', mt: '2px' },
  },
  BSC: {
    margin: '0 1em',
    backgroundColor: 'white',
    color: '#1197cd',
    fontFamily: 'montserrat',
    padding: '0.6250em 1.875em',
    '&:hover': {
      backgroundColor: '#1197cd',
      color: '#fff',
    },
  },
  tab_4btn: {
    m: 1,
    backgroundColor: 'transparent',
    color: '#048753',
    boxShadow: '1px 1px 3px gray',
    textTransform: 'capitalize',
    fontWeight: '800',
    '&:hover': {
      backgroundColor: '#f4f4f4',
    },
  },
});

// All Custome Icon for  Stepper
const ColorlibStepIconRoot = styled('div')(() => ({}));
function ColorlibStepIcon(props: StepIconProps) {
  const { icon } = props;
  const icons = {
    1: <Image src={user} alt="user" />,
    2: <Image src={education} alt="education" />,
    3: <Image src={uDetail} alt="uDetail" />,
    4: <Image src={doc} alt="uDetail" />,
    5: <Image src={vDetail} alt="uDetail" />,
  };

  return (
    <ColorlibStepIconRoot>
      {icons[icon]}
    </ColorlibStepIconRoot>
  );
}
ColorlibStepIcon.propTypes = {
  icon: PropTypes.node,
};

//********************************************End Here Custom Icon *********************************/
const steps = [
  '1- Personaldetails',
  '2- Detail of Degree(s)',
  '3- Attestation Details',
  '4- Document Upload',
  '5- Verify Details',
];
const DegreeAttestation = () => {
  const Router = useRouter() //Route or Link or <a>
  const classes = useStyles(); // Css 
  //To Use this in Application
  const list = useSelector((state) => state.stdLoginReducer.userData)
  const { email } = list.data

  //====================== For Stepper =====================//
  const [activeStep, setActiveStep] = React.useState(0);
  //for Completed marking
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});
  //To Count Total Step
  const totalSteps = () => {
    return steps.length;
  };
  //Marking Complete step fn
  const completedSteps = () => {
    return Object.keys(completed).length;
  };
  //last step or submit form
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  //Handle Back Button
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const newCompleted = completed;
    newCompleted[activeStep] = false;
    setCompleted(newCompleted);
  };
  //activing Step
  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  //handle Next Button for new Tab
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
  };
  //===================================End of Stepper ====================//

  // =================================== 1-Personal Detail Step====================================//
  //Name State 
  const [firstName, setfirstName] = useState<string>(``)
  const [middleName, setMiddle] = useState<string>(``)
  const [lastName, setlastName] = useState<string>(``)

  //Martial Status
  const [martialStatus, setmartialStatus] = useState<string>(``)
  //Gender
  const [gender, setGender] = useState<string>(``)
  //Date of Birth
  const [dateofbirth, setDateofbirth] = useState<Date | null>(
    new Date());
  const handleBOD = (newValue: Date | null) => {
    setDateofbirth(newValue);
  };
  //Father
  const [FatherName, setFatherName] = useState<string>(` `)
  const [address, setAddress] = useState<string>(``)
  //City 
  const [city, setCity] = useState()
  const [postalcode, setpostalcode] = useState<string>(``)
  //
  const [country,setCountry] = useState<string>(``)
  const [district,seDistrict]= useState<string>(``)

  //For Posting Data intoData base
  const handlePersonalDetail = async () => {
    const data = {
      firstName, middleName, lastName, martialStatus,
      gender, dateofbirth, FatherName, Domicile_Province:city, postalcode, email,Country:country
      ,Domicile_City:district,
      //Phase II
      address,
    }
    // if (email != `Studen@demo.com`) {
    const res = await fetch(`http://localhost:3000/api/Student/User/userDetail`, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(`User Detail table:`, response)
    // }
  }

  //===================================End of Personal Detail Step =============================//
  
 //===================================Applicatin Creation ===================//
 const [ApplicationId,setApplicationId] =useState<string>(``) 
 const [applicationStatus, setapplicationStatus] = useState<string>(`save`)
  //Application mode EDIT or New 
  const [ApplicationMode, setApplicationMode] = useState(`New`)
  const createApplication = async () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const  yyyy = today.getFullYear();
     today = mm + '/' + dd + '/' + yyyy;
    // const fullDate = new Date.now()
    // const currentDate = `${fullDate.getDate()}/${fullDate.getMonth() + 1}/${fullDate.getFullYear()}`
    const ApplicationType = `Degree Attestation Service`
    const data = {
      applicationStatus, ApplicationType,
      date:today,email
    }
    const res = await fetch(`http://localhost:3000/api/Student/Application/createApplication`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(response)
  }
  //Get Application
  const getExistApplication = async () => {
    const data = { email }
    const res = await fetch(`http://localhost:3000/api/Student/Application/getExistApplication`, {
      method: `POST`, //BECAUSE WE CHECK WITH EMAIL 
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    if (response) {
      const { Application } = response
      if (Application.length <=0) {
        if (ApplicationMode === `New`) {
          createApplication()
        }
      } else {
        Router.push(`/Dashboard`)
      }
    }
  }
  //===============================Appliication for Edit Mode============== 

  //=========================================== 3 - Mode of Attestation ============================//
  const [Disability, setDisability] = useState<string>(``)
  const [mode, setmode] = React.useState(`Walk-in (Urgent Attestation)`);
  const [whereCheck, setwhereCheck] = useState(``)
  const [cityDistrict,setCityDistrict]= useState(``)
  const modeOfAttestion =async() =>{
    const data ={mode,whereCheck,cityDistrict,Disability}
    const res = await fetch(`http://localhost:3000/api/Student/Application/Mode/ModeofAttestation`, {
      method: `POST`, //BECAUSE WE CHECK WITH EMAIL 
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(`step 4 : Mode`,response)
  }
  //===============================GET Application By ID ============================
  const getApplicationByID = async()=>{
    const data ={id:ApplicationId}
    const res = await fetch(`http://localhost:3000/api/Student/Application/getExistApplication`, {
      method: `POST`, //BECAUSE WE CHECK WITH EMAIL 
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
  }
  //===============================Step Wise Data Saver =============================
  //=================================Get User Detail ==============================
  const getUserDetail = async()=>{
    const data ={email}
    const res = await fetch(`http://localhost:3000/api/Student/User/getUserDetailwithApplication`, {
      method: `POST`, //BECAUSE WE CHECK WITH EMAIL 
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    if(response){
      const {user} = response
      // const {First_Name,Middle_Name,Last_Name,
      //   Martial_Status,Gender,Date_of_Birth,
      //   Father_Name,Address}=user
      setfirstName(user?.First_Name)
      setMiddle(user?.Middle_Name)
      setlastName(user?.Last_Name)
      setmartialStatus(user?.Martial_Status)
      setGender(user?.Gender)
      setDateofbirth(user?.Date_of_Birth)
      setFatherName(user?.Father_Name)
      setAddress(user?.Address)
      setpostalcode(user?.Postal_Code)
      setCountry(user?.Country)
      seDistrict(user?.Domicile_Province) 
      setCity(user?.Domicile_City)
    }
  }
  //====================================== End Of User Detail ==================================
  const updateNotification =async()=>{
    const current = new Date();
    const fullDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const NotificationTime =  Date(fullDate)
    const  datas={NotificationType:`log`,NotificationContent:`You Application is Submitted with Reffernce Number ${ApplicationId}`,
    NotificationTime
      }
    const URLs = `http://localhost:3000/api/Notification/addNotification`
          const res = await fetch(URLs, {
            method: `POST`, //BECAUSE WE CHECK User EMAIL 
            headers: {
              'Content-Type': `application/json`,
            },
            body: JSON.stringify(datas),
          })
          const response = await res.json()
  }
  const onSubmitApplication = async()=>{
    const  data={ApplicationId,applicationStatus:`submit`}
     const URL = `http://localhost:3000/api/Student/Application/submitApplication`
          const res = await fetch(URL, {
             method: `POST`, //BECAUSE WE CHECK User EMAIL 
             headers: {
               'Content-Type': `application/json`,
             },
             body: JSON.stringify(data),
           })
           const response = await res.json()
           //handleReset()
           if(response){
             Router.push(`/Dashboard`)
           }
   }
  useEffect(() => {
    switch (activeStep) {
      case 1:
        handlePersonalDetail()
        break;
      case  2:
        modeOfAttestion()
        break;
      default:
        
        break;
    }
  }, [activeStep])
  // const getApplication
  useEffect(() => {
    const {appid} = Router.query
    setApplicationId(appid)
    getUserDetail()
    getApplicationByID()
   }, [])
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Divider />
      {/* Stepper Main Code  */}
      <Stepper
        nonLinear
        orientation="vertical"
        connector={0}
        activeStep={activeStep}
        sx={{
          // m: { lg: 1, sm: 0 },
          // p: { lg: 1 },
          // paddingY: { sm: 1 },
          cursor: 'pointer',
          display: { lg: 'flex', md: `flex`, sm: `block` },
          flexDirection: `row`,
          justifyContent: 'space-around',
          alignItems: `center`,
        }}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]} sx={{

            // paddingY: { sm: 1 },
            '.Mui-active': {
              borderBottom: { sm: `3px solid #136e97` },py:2
            },
            '.Mui-completed': {
              color: `blue`
            }
          }}>
            {/* <Box sx={{display:`flex`,flexDirection:`row`,alignItems:`center`,justifyContent:`space-between`}}>
             */}
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              sx={{
                width: `100%`, display: `flex`, alignItems:'flex-end',
                flexDirection: { lg: `row`, md: `column` },

              }}
             // onClick={handleStep(index)}
            >
              <Typography fontWeight={700} fontSize={`14px`}>
                {label}
              </Typography>
            </StepLabel>
            {/* </Box> */}
          </Step>

        ))
        }
      </Stepper>
      {/* Information Button */}
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 1, height: `40px` }}>
        <motion.div whileHover={{ marginTop: -5 }}>
          <Button
            size='small'
            variant="outlined"
            color="success"
            className={classes.Btnhelp}
            startIcon={
              <Image
                src={Instructions}
                alt={'download'}
                width="16px"
                height=""
              />
            }
            sx={{ textTransform: 'capitalize' }}
          >
            Read Instructions
          </Button>
        </motion.div>
        <motion.div whileHover={{ marginTop: -5 }}>
          <Button
            size='small'
            variant="outlined"
            color="success"
            className={classes.Btnhelp}
            startIcon={
              <Image src={Ohelp} alt={'download'} width="16px" height="" />
            }
            sx={{ textTransform: 'capitalize' }}
          >
            Help
          </Button>
        </motion.div>
        <motion.div whileHover={{ marginTop: -5 }}>
          <Button
            size='small'
            variant="outlined"
            color="success"
            className={classes.Btnhelp}
            startIcon={
              <Image src={download} alt={'download'} width="16px" height="" />
            }
            sx={{ textTransform: 'capitalize' }}
          >
            Download
          </Button>
        </motion.div>
      </Box>
      {/**Here All Page Start */}
      <Paper className={classes.paper} elevation={0} sx={{ mb: 6 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 4,
          }}
        >
          <Box>
            <Typography
              className={classes.referencetext}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <InfoIcon
                sx={{ height: '0.8125rem', width: '0.8125rem', mr: '2px' }}
              ></InfoIcon>
              Reference Number: HEC/&amp;A/DAS/{ApplicationId}
            </Typography>
          </Box>
          <Box>
            <Chip className={classes.chip} label="Saved" size="small"
              // will edit function
              onClick={() => setapplicationStatus(`save`)}
            />
          </Box>
        </Box>
        {/* Main 5 Component of Stepper Render Here */}
        <Box>
          {activeStep == 0 && <Personaldetails
            firstName={firstName} setfirstName={setfirstName}
            middleName={middleName} setMiddle={setMiddle}
            lastName={lastName} setlastName={setlastName}
            martialStatus={martialStatus} setmartialStatus={setmartialStatus}
            gender={gender} setGender={setGender}
            dateofbirth={dateofbirth} setDateofbirth={setDateofbirth} handleBOD={handleBOD}
            FatherName={FatherName} setFatherName={setFatherName}
            address={address} setAddress={setAddress}
            city={city} setCity={setCity}
            postalcode={postalcode} setpostalcode={setpostalcode}
            country={country} setCountry={setCountry}
            district={district} seDistrict ={seDistrict}
          />}
          {activeStep == 1 && <Detailofdegree />}
          {activeStep == 2 && <AttestationDetails
            Disability={Disability} setDisability={setDisability}
            mode={mode} setmode={setmode}
            whereCheck={whereCheck} setwhereCheck={setwhereCheck}
            cityDistrict={cityDistrict} setCityDistrict={setCityDistrict}
          />}
          {activeStep == 3 && <DocumentUpload />}
          {activeStep == 4 && <VerifyDetails />}
        </Box>
        {/*All Navigation Button Render Here */}
        <Box>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}  onClick={onSubmitApplication}>submit</Typography>
               <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button 
                  onClick={onSubmitApplication}
                    size="medium" className={classes.tab_4btn}
                  >Submit</Button>
                </Box>
              {activeStep == 4 && (
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button 
                  onClick={onSubmitApplication}
                    size="medium" className={classes.tab_4btn}
                  >Submit</Button>
                </Box>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* render button according to Tab and Need*/}
              {activeStep == 2 && (
                <Grid container spacing={1} sx={{ mt: 2, mb: 2 }} display="flex" justifyContent="flex-end">
                  <Grid item>
                    <Button size="medium" className={classes.tab_4btn} onClick={()=>Router.push(`/Dashboard`)}>
                      Save&Close
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      size="medium"
                      className={classes.tab_4btn}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Grid>
                </Grid>
              )}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 2,
                  p: 3,
                }}
              >
                <Box>
                  <Grid container spacing={2}>
                    <Grid item>
                      {activeStep == 0 && (
                        <Button
                          className={classes.BGB}
                          variant="contained"
                          sx={{ mr: 1 }}
                        >
                          GO BACK TO DASHBOARD
                        </Button>
                      )}
                    </Grid>
                    <Grid item>
                      {activeStep >= 1 && (
                        <Button
                          className={classes.BGB}
                          variant="contained"
                          onClick={handleBack}
                        >
                          GO PREVIOUS TAB
                        </Button>
                      )}
                    </Grid>
                    <Grid item>
                      {activeStep >= 1 && (
                        <Button
                          className={classes.BSF}
                          variant="contained"
                          color="error"
                          onClick={()=>Router.push(`/Dashboard`)}
                        >
                          CLOSE APPLICATION
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item>
                      {activeStep == 1 && (
                        <Button className={classes.BSC} variant="contained">
                          SAVE&#38;CLOSE
                        </Button>
                      )}
                    </Grid>
                    <Grid item>
                      {activeStep != 2 && (
                        <Button
                          onClick={handleNext}
                          className={classes.BSF}
                          variant="contained"
                          color="success"
                        >
                          Next STEP
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Paper>
    </motion.div>
  );
};
DegreeAttestation.layout = `Student`;
export default DegreeAttestation;
