/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { useState, MouseEvent } from 'react';
import {
  TableContainer, Table, TableHead, TableRow,
  TableCell, TableBody, TextField, FormGroup,
  FormControlLabel, Checkbox, Button, Box, Paper, IconButton, Snackbar, Alert, Typography,
} from '@mui/material';
import ACLTable from '@/Components/Admin/ACLTable';
interface Page {
  name: string,
  link: string
}
const ACLMange = () => {
  // State
  const [email, setEmail] = useState<string>(``)
  const [password, setPassword] = useState<string>(``)
  const [name, setName] = useState<string>(``)
  const [pages, setPages] = useState<Page[]>([])
  const [open, setOpen] = React.useState(false);
  const [refresh, setFresh] = React.useState<boolean>(false)
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  //For initializing Array for Pages
  React.useEffect(() => {
    setPages([])
  }, [])
  //Selecting Page CheckBox 1 to 6
  const handleChkB1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pageobject = { name: `Universities Details`, link: event.target.value };
    if (!checked1) {
      setPages(preArray => [...preArray, pageobject])
      setChecked1(true)
    } else {
      setPages(preArray => preArray.filter(item => (
        item.name != `Universities Details`)))
      setChecked1(false)
    }
    console.log(pages)
  };
  const handleChkB2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pageobject = { name: `Degree Templates`, link: event.target.value };
    if (!checked2) {
      setPages(preArray => [...preArray, pageobject])
      setChecked2(true)
    } else {
      setPages(preArray => preArray.filter(item => (
        item.name != `Degree Templates`)))
        setChecked2(false)
    }
    console.log(pages)
  };
  const handleChkB3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pageobject = { name: `Transcript Templates`, link: event.target.value };
    if (!checked3) {
      setPages(preArray => [...preArray, pageobject])
      setChecked3(true)
    } else {
      setPages(preArray => preArray.filter(item => (
        item.name != `Transcript Templates`)))
        setChecked3(false)
    }
    console.log(pages)
  };
  const handleChkB4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pageobject = { name: `Degree Issuance`, link: event.target.value };
    if (!checked4) {
      setPages(preArray => [...preArray, pageobject])
      setChecked4(true)
    } else {
      setPages(preArray => preArray.filter(item => (
        item.name != `Degree Issuance`)))
        setChecked4(false)
    }
    console.log(pages)
  };
  const handleChkB5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pageobject = { name: `Hec Queries`, link: event.target.value };
    if (!checked5) {
      setPages(preArray => [...preArray, pageobject])
      setChecked5(true)
    } else {
      setPages(preArray => preArray.filter(item => (
        item.name != `Hec Queries`)))
        setChecked5(false)
    }
    console.log(pages)
  };
  const handleChkB6 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pageobject = { name: `Acount Mangement`, link: event.target.value };
    if (!checked6) {
      setPages(preArray => [...preArray, pageobject])
      setChecked6(true)
    } else {
      setPages(preArray => preArray.filter(item => (
        item.name != `Acount Mangement`)))
        setChecked6(false)
    }
    console.log(pages)
  };
  const onSubmit = async (e: MouseEvent) => {
    console.log(`in submit`)
    e.preventDefault();
    const data = { name, email, password, pages }
   const res = await fetch(`/api/admin/User/register`, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(response)
    setFresh(true)
    setName(``)
    setEmail(``)
    setPassword(``)
    setOpen(true)
  }
  //Close Function for Toast 
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === `clickaway`) {
      return;
    }

    setOpen(false);
  };
  //Action for Toast or SnakBar 
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <Paper sx={{ margin: `25px 0` }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{fontWeight:'600', fontSize:"16px"}}>Label</TableCell>
                <TableCell sx={{fontWeight:'600', fontSize:"16px"}}>Field</TableCell>
                <TableCell sx={{fontWeight:'600', fontSize:"16px"}}>Operations</TableCell>
                <TableCell sx={{fontWeight:'600', fontSize:"16px"}}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{fontWeight:'600'}}>Hec Sub Admin Account</TableCell>
                <TableCell>
                  <Box sx={{ display: `flex`, flexDirection: `column`, justifyContent: `space-around`, height: `30vh` }}>
                    <TextField
                    inputProps={{style:{fontSize: `13px`,fontWeight:'600'}}}
                    InputLabelProps={{ style: { fontWeight: 600, fontSize: `13px`, fontFamily: `montserrat` } }} variant="outlined" color='success' size='small'
                      label='Name'
                      type='email'
                      value={name}
                      fullWidth
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                    inputProps={{style:{fontSize: `13px`,fontWeight:'600'}}}
                    InputLabelProps={{ style: { fontWeight: 600, fontSize: `13px`, fontFamily: `montserrat` } }} variant="outlined" color='success' size='small'
                      label='Email'
                      type='email'
                      value={email}
                      fullWidth
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                    inputProps={{style:{fontSize: `13px`,fontWeight:'600'}}}
                    InputLabelProps={{ style: { fontWeight: 600, fontSize: `13px`, fontFamily: `montserrat` } }} variant="outlined" color='success' size='small'
                      label='Password'
                      fullWidth
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Box>

                </TableCell>
                <TableCell>
                  <FormGroup sx={{ display: `flex` }}>
                    <FormControlLabel
                      control={<Checkbox value={`UniversitiesDetails`} checked={checked1} onChange={(event) => handleChkB1(event)} />}
                      label={<Typography fontWeight={600} fontSize={'14px'}>Universities Details</Typography>}
                    />
                    <FormControlLabel
                      control={<Checkbox value={`DegreeTemplates`} checked={checked2} onChange={(event) =>handleChkB2(event)} />}
                      label={<Typography fontWeight={600} fontSize={'14px'}>Degree Templates</Typography>}
                    />
                    <FormControlLabel
                      control={<Checkbox value={`TranscriptTemplates`} checked={checked3} onChange={(event) =>handleChkB3(event)} />}
                      label={<Typography fontWeight={600} fontSize={'14px'}>Transcript Templates</Typography>}
                    />
                    <FormControlLabel
                      control={<Checkbox value={`DegreeIssuance`} checked={checked4}onChange={(event) =>handleChkB4(event)} />}
                      label={<Typography fontWeight={600} fontSize={'14px'}>Degree Issuance</Typography>}
                    />
                    <FormControlLabel
                      control={<Checkbox value={`HecQueries`}  checked={checked5}onChange={(event) =>handleChkB5(event)} />}
                      label={<Typography fontWeight={600} fontSize={'14px'}>Hec Queries</Typography>}
                    />
                    <FormControlLabel
                      control={<Checkbox value={`ACLMange`} checked={checked6} onChange={(event) =>handleChkB6(event)} />}
                      label={<Typography fontWeight={600} fontSize={'14px'}>Acount Mangement</Typography>}
                    />
                  </FormGroup>
                </TableCell>
                <TableCell >
                  <Box>
                    <Button startIcon={<BeenhereIcon/>} variant="contained" color='success' size='small' onClick={onSubmit}>
                      Save
                    </Button>
                    {/* To Show Toast after Save */}
                    <Snackbar
                      anchorOrigin={{ vertical: `top`, horizontal: `center` }}
                      open={open}
                      autoHideDuration={1000}
                      onClose={handleClose}
                      action={action}
                    >
                      <Alert onClose={handleClose} severity="success" sx={{ width: `100%` }}>
                        Account Created Succesfully!
                      </Alert>
                    </Snackbar>
                    {/* <Button variant="text"  size='small'>
                  Update
                </Button>
                <Button variant="text" size='small'>
                  Delete
                </Button> */}
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <ACLTable refresh={refresh} setFresh={setFresh} />
    </>
  );
};
ACLMange.layout = `Admin`
export default ACLMange;
