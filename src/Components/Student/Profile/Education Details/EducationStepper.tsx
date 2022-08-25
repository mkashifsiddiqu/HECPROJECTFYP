import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { Grid, IconButton, Paper, StepConnector, StepIcon } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGenderless } from '@fortawesome/free-solid-svg-icons';
import { truncate } from 'fs/promises';
const theme = createTheme({
    typography: {
        fontSize: 12,
        allVariants: {
            color: '#74788D'
        }
    }
})

const steps = [
    {
        label: '2022',
        degreeLevel: 'Bachelor (16 Years) Degree',
        degreeName: 'Bachelor of Software Engineering',
        universityName: 'University of Gujrat,Gujrat',
        grade: '3.03'
    },
    {
        label: '2021',
        degreeLevel: 'Bachelor (16 Years) Degree',
        degreeName: 'Bachelor of Software Engineering',
        universityName: 'University of Sailkot,Sailkot',
        grade: '2.9'
    }
];
export default function EducationStepper() {
    const [activestep, setactiveStep] = React.useState('0')
    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper orientation="vertical">
                {steps.map((step) => (
                    <Step active={true} key={step.label}>
                       <Grid container spacing={10}>
                            <Grid item sm={8}>
                                <StepIcon icon={<FontAwesomeIcon icon={faGenderless} />}>
                                    <StepLabel>{step.label}</StepLabel>
                                </StepIcon>
                                <StepContent TransitionProps={{ unmountOnExit: true }}>
                                    <ThemeProvider theme={theme}>
                                        <Typography fontWeight={700}>{step.degreeLevel}</Typography>
                                        <Typography>{step.degreeName}</Typography>
                                        <Typography>{step.universityName}</Typography>
                                        <Typography>Grade/GPA/Marks: {step.grade}</Typography>
                                    </ThemeProvider>
                                </StepContent>
                            </Grid>
                            <Grid item sm={4}>
                                <IconButton sx={{ bgcolor: '#018651', color: 'white', '&:hover': { bgcolor: '#018650' } }}>
                                    <MoreVertIcon>
                                    </MoreVertIcon>
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Box>
                        </Box>
                    </Step>
                    
                ))}
            </Stepper>
        </Box>
    );
}
