/* eslint-disable prettier/prettier */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/styles';
import { Box, Card, Hidden, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
const useStyles = makeStyles({
  htext: {
    fontFamily: `montserrat`,
    fontSize: `0.6875rem`,
    color: `#757575`,
    fontWeight: `bold`,
  },
  btext: {
    fontFamily: `montserrat`,
    fontSize: `0.8125rem`,
    color: `#333333d9`,
    fontWeight: `initial`,
  },
  card: {
    padding: `1em`,
  },
});
export default function DenseTable() {
  const classes = useStyles();
  const list = useSelector((state)=>state.stdLoginReducer.userData)
  const {identityNumber,identityType,Nationality} = list.data
  return (
    <Box>
      <Hidden mdDown>
        <TableContainer elevation={0} component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.htext}>IDENRIFICATION</TableCell>
                <TableCell align="left" className={classes.htext}>
                  TYPE
                </TableCell>
                <TableCell align="left" className={classes.htext}>
                  COUNTRY
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                <TableRow
                 
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    className={classes.btext}
                    component="th"
                    scope="row"
                  >
                    {identityNumber}
                  </TableCell>
                  <TableCell align="left" className={classes.btext}>
                    {/* need Add here */}
                  {identityType}
                  </TableCell>
                  <TableCell align="left" className={classes.btext}>
                    {Nationality}
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Hidden>
      <Hidden mdUp>
        
          <Card
            elevation={3}
            className={classes.card}
            
          >
            <Box>
              <Typography className={classes.htext}>IDENRIFICATION</Typography>
              <Typography className={classes.btext}>
                {identityNumber}
              </Typography>
            </Box>
            <Box sx={{ marginTop: `1em`, marginBottom: `1em` }}>
              <Typography className={classes.htext}>TYPE</Typography>
              <Typography className={classes.btext}>{identityType}</Typography>
            </Box>
            <Box>
              <Typography className={classes.htext}>COUNTRY</Typography>
              <Typography className={classes.btext}>{Nationality}</Typography>
            </Box>
          </Card>
       
      </Hidden>
    </Box>
  );
}
