/* eslint-disable prettier/prettier */
import React from 'react'

import { Box, Icon, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Fpstudentid = () => {
  return (
    <div>
      <Box margin={`10px 0`}>
      {/* <Accordion>
        <AccordionSummary>Student Degree Issuance</AccordionSummary>
        <AccordionDetails> */}
          <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Label</TableCell>
              <TableCell>Field</TableCell>
              <TableCell>Operations</TableCell>
              <TableCell>Counts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Student ID</TableCell>
              <TableCell><TextField variant="outlined" color='success' size='small' /></TableCell>
              <TableCell><IconButton><Icon><AddIcon/></Icon></IconButton><IconButton><Icon><EditIcon/></Icon></IconButton><IconButton><Icon><DeleteIcon/></Icon></IconButton></TableCell>
              <TableCell>0/100</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
        {/* </AccordionDetails>
      </Accordion> */}
      </Box>
    </div>
  )
}
Fpstudentid.layout =`FP`
export default Fpstudentid
