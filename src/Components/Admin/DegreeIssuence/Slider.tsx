import  React,{useState,useEffect,FC} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Tooltip, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
const Domain = process.env.Domain
interface AutoProps{
  templateId:[]
}
const AutoPlaySwipeableViews:FC<AutoProps> = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper({
    templateId,
}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = templateId.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  //======================================  Template Verify =======================
  const [templeRegId, settempleRegId] = useState(``)
  const [templeReg, settempleReg] = useState(``)
 const templateVerify=async () => {
  const data ={templeRegId,templeReg}
  if(templeRegId)
 {const URL = `${Domain}/api/degree/verifytemplate`
  const res = await fetch(URL, {
    method: `POST`, // or 'PUT'
    headers: {
      'Content-Type': `application/json`,
    },
    body: JSON.stringify(data),
  })
  const response = await res.json()}
  
}
useEffect(() => {
  templateVerify()
}, [templeReg])

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: `flex`,
          alignItems: `center`,
          height: 50,
          pl: 2,
          bgcolor: `background.default`,
        }}
      >
        <Box sx={{display:`flex`,justifyContent:`space-around`,width:`100%`}}>
          <Typography>Start Date: {new Date(templateId[activeStep].startDate).toISOString().slice(0, 10)}</Typography>
          <Typography>End Date: {new Date(templateId[activeStep].endDate).toISOString().slice(0, 10)}</Typography>
        </Box>
        
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === `rtl` ? `x-reverse` : `x`}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {templateId.map((step, index) => (
          <div key={step._id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
              <Box
                component="img"
                sx={{
                 // height: 255,
                  display: `block`,
                 // maxWidth: 400,
                  overflow: `hidden`,
                  width: `100%`,
                }}
                src={`${Domain}/api/degree/preveiwImage/${step.templateUrl}`}
                alt={step.startDate}
              />
              <Box sx={{display:`flex`,justifyContent:`space-evenly`,width:`100%`}}>
                <Tooltip title='Verify'><IconButton color='success' onClick={()=>{settempleRegId(step._id)
              settempleReg(`verified`) }}><CheckIcon/></IconButton></Tooltip>
                <Tooltip title='Reject'><IconButton onClick={()=>{settempleRegId(step._id)
              settempleReg(`Rejected`) }}><CloseIcon color='error'/></IconButton></Tooltip>
              </Box>
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === `rtl` ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === `rtl` ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
export default SwipeableTextMobileStepper;
