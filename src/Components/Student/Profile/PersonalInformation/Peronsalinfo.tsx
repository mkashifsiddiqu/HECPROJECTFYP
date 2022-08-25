/* eslint-disable prettier/prettier */
import { Box, Paper, Typography, Grid, TextField, RadioGroup, FormControl, FormLabel, FormControlLabel, Radio, Checkbox, Button } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import Image from 'next/image';
import bw from '../public/BW.JPG'
import single from '../public/single.svg'
import ManIcon from '@mui/icons-material/Man';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@material-ui/styles';
import {Card, Divider, Hidden } from '@mui/material';


const theme = createTheme({
    typography:{
        fontFamily:`montserrat`,
        fontSize:12
    },
  });
const useStyles = makeStyles({
    htext:{
        fontFamily:`montserrat`,
        fontSize:`0.6875rem`,
        color:`#757575`,
        fontWeight:`bold`,
    },
    btext:{
        fontFamily:`montserrat`,
        fontSize:`0.8125rem`,
        color:`#333333d9`,
        fontWeight:`initial`
    },
    card:{
        padding:`1em`
    }
})

function createData(
  identification: number,
  type: string,
  country: string,
) {
  return { identification, type, country};
}

const rows = [
  createData(3420103814143, `CNIC`, `Pakistan`),
];
const cards = [
    createData(3420103814143, `CNIC`, `Pakistan`),
  ];

const Peronsalinfo = () => {
    const classes = useStyles()
  return (
    <div>
        <ThemeProvider theme={theme}>
            <Paper sx={{padding:`25px`}}>
                <Typography color={`#666c7e`} fontSize={16} fontWeight={700} marginBottom={`25px`}>PERSONAL INFO</Typography>
                <Box margin={`0 0 25px 0`}>
                    <button style={{display:`flex`, alignItems:`center`, justifyContent:`center`, padding:`2px 0`, width:`110px`, height:`20px`, border:`0px`, cursor:`pointer`}}><Typography fontSize={`10px`} fontWeight={600} paddingRight={`5px`} >Edit Picture</Typography> <EditIcon sx={{width:`16px`, height:`16px`}} /></button>
                    <Image width={`110px`} height={`100px`} src={bw} alt="pic"></Image>
                </Box>
                <Grid container spacing={2} marginBottom={`20px`}>
                    <Grid item xs={12} md={4}>
                        <TextField
                        select
                        required
                        label="Title"
                        color='success'
                        helperText={<Typography fontSize={10.2} fontWeight={500}>Please selct title</Typography>}
                        size='small'
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                        required
                        label="First Name"
                        color='success'
                        helperText={<Typography fontSize={10.2} fontWeight={500}>Please enter first name</Typography>}
                        size='small'
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                        label="Middle Name"
                        color='success'
                        helperText={<Typography fontSize={10.2} fontWeight={500}>Please enter middle name</Typography>}
                        size='small'
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                        required
                        label="Last Name"
                        color='success'
                        helperText={<Typography fontSize={10.2} fontWeight={500}>Please enter last name</Typography>}
                        size='small'
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label" color='info' sx={{fontSize:`12px`, color:`#333333d9`, fontWeight:`600`}} >Martial Status</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="single"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="single" control={<Radio color='success' />} label="Single" />
                            <FormControlLabel value="married" control={<Radio color='success' />} label="Married" />
                            <FormControlLabel value="divorced" control={<Radio color='success' />} label="Divorced" />
                            <FormControlLabel value="widowed" control={<Radio color='success' />} label="Widowed" />
                        </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label" color='info' sx={{fontSize:`12px`, color:`#333333d9`, fontWeight:`600`}}>Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="male"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="male" control={<Radio color='success' />} label="Male" />
                            <FormControlLabel value="female" control={<Radio color='success' />} label="Female" />
                            <FormControlLabel value="other" control={<Radio color='success' />} label="Other" />
                        </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Typography color={`#666c7e`} fontSize={16} fontWeight={700} marginBottom={`25px`}>BIOGRAPHICAL INFORMATION</Typography>
                <Grid container spacing={2} marginBottom={`20px`}>
                    <Grid item xs={12} md={4}>
                        <TextField
                        select
                        required
                        label="Date Of Birth"
                        color='success'
                        helperText={<Typography fontSize={10.2} fontWeight={500}>Please selct date of birth</Typography>}
                        size='small'
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                        select
                        required
                        label="Country Of Birth"
                        color='success'
                        helperText={<Typography fontSize={10.2} fontWeight={500}>Please select country of birth</Typography>}
                        size='small'
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                        select
                        required
                        label="Religion"
                        color='success'
                        helperText={<Typography fontSize={10.2} fontWeight={500}>Please select religion</Typography>}
                        size='small'
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                        required
                        label="Domicile province"
                        color='success'
                        helperText={<Typography fontSize={10.2} fontWeight={500}>Please select domicile province</Typography>}
                        size='small'
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                        required
                        label="Domicile City"
                        color='success'
                        helperText={<Typography fontSize={10.2} fontWeight={500}>Please select domicile province</Typography>}
                        size='small'
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                        required
                        label="Domicile District"
                        color='success'
                        helperText={<Typography fontSize={10.2} fontWeight={500}>Please select domicile district</Typography>}
                        size='small'
                        fullWidth
                        />
                    </Grid>
                </Grid>
                <Typography color={`#666c7e`} fontSize={16} fontWeight={700} marginBottom={`25px`}>FATHER'S INFORMATION</Typography>
                <Grid container spacing={2} marginBottom={`20px`}>
                    <Grid item xs={12} md={4}>
                        <TextField
                        required
                        label="Father Name"
                        color='success'
                        helperText={<Typography fontSize={10.2} fontWeight={500}>Please enter father name</Typography>}
                        size='small'
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                        select
                        required
                        label="Father Status"
                        color='success'
                        helperText={<Typography fontSize={10.2} fontWeight={500}>Please select father status</Typography>}
                        size='small'
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                        required
                        label="Father CNIC"
                        color='success'
                        helperText={<Typography fontSize={10.2} fontWeight={500}>Please enter father cnic</Typography>}
                        size='small'
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                        select
                        required
                        label="Father Occupation"
                        color='success'
                        helperText={<Typography fontSize={10.2} fontWeight={500}>Please select father occupation</Typography>}
                        size='small'
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <FormControlLabel
                        value="end"
                        control={<Checkbox color='success' />}
                        label="Currently Employed"
                        labelPlacement="end"/>
                    </Grid>
                </Grid>
                <Typography color={`#666c7e`} fontSize={16} fontWeight={700} marginBottom={`25px`}>NATIONALITY INFO</Typography>
                <Box>
          <Hidden mdDown>
         <TableContainer elevation={0} component={Paper} sx={{margin:`0 0 25px 0`}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{borderTop:1, borderColor:`#e0e0e0`}} >
            <TableCell className={classes.htext}>IDENRIFICATION</TableCell>
            <TableCell align="left" className={classes.htext}>TYPE</TableCell>
            <TableCell align="left" className={classes.htext}>COUNTRY</TableCell>
            <TableCell align="right" className={classes.htext}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.identification}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className={classes.btext} component="th" scope="row"><TextField select disabled fullWidth size='small' aria-readonly='true' value="3420103814143"></TextField></TableCell>
              <TableCell align="left" className={classes.btext}><TextField select disabled aria-readonly='true' fullWidth size='small' sx={{textcolor:`#333333d9`}} value="CNIC"></TextField></TableCell>
              <TableCell align="left" className={classes.btext}><TextField select disabled aria-readonly='true' fullWidth size='small' value="Pakistan"></TextField></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
      </Hidden>
      <Hidden mdUp>
          {cards.map((card) => (
      <Card elevation={3} className={classes.card} key={card.identification} sx={{margin:`0 0 25px 0`}}>
          <Box>
              <Typography className={classes.htext}>IDENRIFICATION</Typography>
              <TextField select disabled fullWidth size='small' aria-readonly='true' value="3420103814143"></TextField>
          </Box>
          <Box sx={{marginTop:`1em`, marginBottom:`1em`}}>
              <Typography className={classes.htext}>TYPE</Typography>
              <TextField select disabled aria-readonly='true' fullWidth size='small' sx={{textcolor:`#333333d9`}} value="CNIC"></TextField>
          </Box>
          <Box>
              <Typography className={classes.htext}>COUNTRY</Typography>
              <TextField select disabled aria-readonly='true' fullWidth size='small' value="Pakistan"></TextField>
          </Box>
          <Box>
              <Typography className={classes.htext}>Action</Typography>
          </Box>
      </Card>))}
      </Hidden>
      
      </Box>
      <Box display={`flex`} justifyContent={`flex-end`}>
          <Button variant='outlined' color='success' sx={{margin:`0 15px 0 0`}}>Save & Close</Button>
          <Button variant='outlined' sx={{color:`grey`}}>Close</Button>
      </Box>
            </Paper>
        </ThemeProvider>
    </div>
  )
}

export default Peronsalinfo