import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { List, ListItem, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { motion } from 'framer-motion'
import { Box } from '@mui/system'
const Facultyinstruction = () => {
    return (
        <div>
            <Box sx={{ m: 2 }}>
                <Typography
                    fontFamily={"montserrat"}
                    variant="subtitle1"
                    fontWeight={700}
                    fontSize={13}
                    mb={2}
                >General Terms & Conditions (FOR FACULTY):</Typography>
                <Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >
                    I do hereby confirm that I am a <Typography fontFamily={"montserrat"} fontSize={13} fontWeight={700} component="span">Pakistani Citizen,</Typography> and I am currently enrolled student or employed faculty member of a University.
                </Typography>
                <List>
                    <ListItem><Typography fontFamily={"montserrat"} fontWeight={700} fontSize={13} >Licenses can now be availed at Rs.8000 (Non-reimbursable)</Typography></ListItem>
                    <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >I acknowledge that this opportunity is given to me on a first come first served basis (open merit) after verification of my eligibility(<Link href={"https://dlsei.hec.gov.pk/"}>https://dlsei.hec.gov.pk/</Link>)</Typography></ListItem>
                    <List sx={{ marginLeft: "1em" }}>
                        <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >All Public/ Private University Students currently enrolled in 16-year education programs and above are eligible</Typography></ListItem>
                        <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >Faculty members of Public/Private Universities are also eligible</Typography></ListItem>
                        <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >The applicant must have a valid CNIC/ B-form number</Typography></ListItem>
                    </List>
                    <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >I do hereby confirm that I will provide the correct information for online course registration. I understand that the information I provide (such as email address) will be used to provide me access to HEC-Coursera portal and <Typography fontFamily={"montserrat"} fontSize={13} fontWeight={700} component="span">cannot</Typography> be changed later.</Typography></ListItem>
                    <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >DLSEI and HEC Pakistan can contact me via any available communication channel and can enquire about documentation checks, course progress, and any issues faced during the learning journey.</Typography></ListItem>
                    <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >I would be responsible to effectively complete maximum number of courses under the Coursera license provided by HEC.</Typography></ListItem>
                    <ListItem><Typography fontFamily={"montserrat"} fontWeight={700} fontSize={13} >For Public Sector Universities (100% Fee Reimbursement Model)</Typography></ListItem>
                    <List sx={{ marginLeft: "1em" }}>
                        <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >All Public/ Private University Students currently enrolled in 16-year education programs and above are eligible</Typography></ListItem>
                        <List sx={{ marginLeft: "1em" }}>
                            <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >I do not enroll in at least 1 course within 14 days after receiving the Coursera license via an invitation email</Typography></ListItem>
                            <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >I enroll in multiple courses but I am inactive for the 90 days and have done no activity at all in any of my enrolled courses.</Typography></ListItem>
                        </List>
                    </List>
                    <ListItem><Typography fontFamily={"montserrat"} fontWeight={700} fontSize={13} >For Private Sector Universities</Typography></ListItem>
                    <List sx={{ marginLeft: "1em" }}>
                        <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >I acknowledge that this license is given to me on a no refund policy.</Typography></ListItem>
                        <List sx={{ marginLeft: "1em" }}>
                            <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >If I fail to comply with the rules of registration, the Higher Education Commission reserves the right that it may exclude me from future programs offered by HEC.</Typography></ListItem>
                            <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >HEC, Government of Pakistan reserves the right to take any or all legal action against me if the Terms of Award are breached.</Typography></ListItem>
                        </List>
                    </List>
                </List>
                <Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >I confirm that I will adhere to the <Link href={"https://www.coursera.support/s/article/209818863-Coursera-Honor-Code?language=en_US"}>Coursera Honor Code</Link></Typography>
            </Box>
        </div>
    )
}

export default Facultyinstruction