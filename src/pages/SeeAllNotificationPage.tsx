import { Alert, Box, Button, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import WarningIcon from '@mui/icons-material/Warning';
import FeedIcon from '@mui/icons-material/Feed';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const theme = createTheme({
    typography: {
        fontFamily: "montserrat"
    },
});

const SeeAllNotificationPage = () => {
    return (
        <div>
            <Paper sx={{ padding: "30px" }} elevation={0}>
                <ThemeProvider theme={theme}>
                    <Box marginBottom={"25px"}>
                        <Typography paddingBottom={"10px"} fontSize={16} fontWeight={700} color="#191d289e">NOTIFICATIONS</Typography>
                        <Divider></Divider>
                    </Box>
                    <Typography paddingTop={"5px"} marginBottom={"20px"} fontSize={14} fontWeight={600} color="#32405d66">TODAY</Typography>
                    <Typography paddingTop={"5px"} marginBottom={"20px"} fontSize={14} fontWeight={600} color="#32405d66">YESTERDAY</Typography>
                    <Typography paddingTop={"5px"} marginBottom={"20px"} fontSize={14} fontWeight={600} color="#32405d66">OLDER</Typography>
                    <Box marginBottom={"20px"}>
                        <Box display={"flex"} paddingBottom={"10px"}>
                            <Alert sx={{ borderRadius: "50%", bgcolor: "#ff000026", width: "40px", height: "40px" }} icon={false}><WarningIcon sx={{ position: "relative", top: "-7px", right: "7px" }} color='error'></WarningIcon></Alert>
                            <Box margin={"0 0 0 20px"}>
                                <Typography color="#32405d" fontSize={13} fontWeight={600}>Personal details in your profile have been updated</Typography>
                                <Typography marginTop={"5px"} color="#32405d80" fontSize={12} fontWeight={600} >10 days ago</Typography>
                            </Box>
                        </Box>
                        <Divider></Divider>
                    </Box>
                    <Box marginBottom={"20px"}>
                        <Box display={"flex"} paddingBottom={"10px"}>
                            <Alert sx={{ borderRadius: "50%", bgcolor: "#ff000026", width: "40px", height: "40px" }} icon={false}><WarningIcon sx={{ position: "relative", top: "-7px", right: "7px" }} color='error'></WarningIcon></Alert>
                            <Box margin={"0 0 0 20px"}>
                                <Typography color="#32405d" fontSize={13} fontWeight={600}>Personal details in your profile have been updated</Typography>
                                <Typography marginTop={"5px"} color="#32405d80" fontSize={12} fontWeight={600} >10 days ago</Typography>
                            </Box>
                        </Box>
                        <Divider></Divider>
                    </Box>
                    <Box marginBottom={"20px"}>
                        <Box display={"flex"} paddingBottom={"10px"}>
                            <Alert sx={{ borderRadius: "50%", width: "40px", height: "40px" }} severity='success' icon={false}><FeedIcon color='success' sx={{ position: "relative", top: "-7px", right: "7px" }}></FeedIcon></Alert>
                            <Box margin={"0 0 0 20px"}>
                                <Typography color="#32405d" fontSize={13} fontWeight={600}>The status of your Degree Attestation System application 1718428 has been updated to Saved</Typography>
                                <Typography marginTop={"5px"} color="#32405d80" fontSize={12} fontWeight={600} >10 days ago</Typography>
                            </Box>
                        </Box>
                        <Divider></Divider>
                    </Box>
                    <Box marginBottom={"20px"}>
                        <Box display={"flex"} paddingBottom={"10px"}>
                            <Alert sx={{ borderRadius: "50%", bgcolor: "#ff000026", width: "40px", height: "40px" }} icon={false}><WarningIcon sx={{ position: "relative", top: "-7px", right: "7px" }} color='error'></WarningIcon></Alert>
                            <Box margin={"0 0 0 20px"}>
                                <Typography color="#32405d" fontSize={13} fontWeight={600}>Personal details in your profile have been updated</Typography>
                                <Typography marginTop={"5px"} color="#32405d80" fontSize={12} fontWeight={600} >10 days ago</Typography>
                            </Box>
                        </Box>
                        <Divider></Divider>
                    </Box>
                    <Button variant='contained' sx={{ bgcolor: "#20ad75", '&:hover': { backgroundColor: '#188258' } }}><Typography fontFamily={"montserrat"} fontSize={12} fontWeight={700}>See more</Typography><ArrowRightIcon></ArrowRightIcon></Button>
                </ThemeProvider>
            </Paper>
        </div>
    )
}
SeeAllNotificationPage.layout = `Student`
export default SeeAllNotificationPage