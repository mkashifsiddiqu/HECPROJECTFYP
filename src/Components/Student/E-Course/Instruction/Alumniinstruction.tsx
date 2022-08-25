import React from 'react'
import { Box, List, ListItem, Typography } from '@mui/material'
import Link from 'next/link'
import { motion } from 'framer-motion'
const Alumniinstruction = () => {
  return (
    <div>
      <Box sx={{ m: 2 }}>
        <Typography
          fontFamily={"montserrat"}
          variant="subtitle1"
          fontWeight={700}
          fontSize={13}
        >General Terms & Conditions (FOR FACULTY):</Typography>
        <List>
          <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={700}>Rs.8000 (Total 1200 licenses first come first served)</Typography></ListItem>
          <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500}>I do hereby confirm that I am a Pakistani Citizen.</Typography></ListItem>
          <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500}>I acknowledge that this opportunity is given to me on a first come first serve basis after fulfilling the eligibility criteria specified by the Digital Learning and Skills Enrichment Initiative (DLSEI) and HEC Pakistan for the students.</Typography></ListItem>
          <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500}>DLSEI and HEC Pakistan can contact me via any available communication channel and can enquire about documentation checks, course progress, and any issues faced during the learning journey.</Typography></ListItem>
          <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500}>I do hereby confirm that I will provide the correct information while for online course registration. If the information that I provide is incorrect, DLSEI and HEC Pakistan reserve the right to disqualify me from the project and award my token/license to another eligible candidate.</Typography></ListItem>
          <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500}>I would be responsible to complete the course within the time specified by DLSEI and HEC Pakistan.</Typography></ListItem>
          <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500}>I acknowledge that this license is given to me with a no refund policy.</Typography></ListItem>
          <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500}>If I fail to comply with the rules of registration, the HEC reserves the right that it may exclude me from future programs offered by HEC.</Typography></ListItem>
          <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500}>HEC, Government of Pakistan reserves the right to take any or all legal action against me if the Terms of Award are breached.</Typography></ListItem>
          <ListItem><Typography fontFamily={"montserrat"} fontSize={13} fontWeight={500} >I confirm that I will adhere to the <Link href={"https://www.coursera.support/s/article/209818863-Coursera-Honor-Code?language=en_US"}>Coursera Honor Code</Link></Typography></ListItem>
        </List>
      </Box>
    </div>
  )
}

export default Alumniinstruction