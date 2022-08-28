/* eslint-disable prettier/prettier */
import {
  Autocomplete, Button, TextField,
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Fade, Modal, Box, Backdrop, Alert
} from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import React, { useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Add } from '@mui/icons-material';
//Data Type 
interface fpDetail {
  email: string,
  isActive: boolean
}
//Search for Auto0Complete Component

//Style for Model
const style = {
  position: `absolute` as 'absolute',
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
  width: 500,
  bgcolor: `background.paper`,
  boxShadow: 24,
  p: 4,
};
const tableActionStyle = {
  display: `flex`, flexDirection: { lg: `row`, sm: `column` },
  justifyContent: { lg: `space-around`, md: `space-between` },
  alignItems: `center`, alignContent: { sm: `space-between` },
  height: { lg: `100px`, sm: `200px`, xs: `200px` }
}
//Main Component 
const UniveristiesDetails = () => {
  //State
  const [getEmail, getfnEmail] = React.useState<fpDetail[]>([])
   const [email, setEmail] = React.useState<string>(``)
  //state for Model 
  const [open, setOpen] = React.useState<boolean>(false);
  const [open2, setOpen2] = React.useState<boolean>(false);
  const [open3, setOpen3] = React.useState<boolean>(false);
  const [toast, SetToast] = React.useState<boolean>(false);
  const [toastDelete, setToastDelete] = React.useState<boolean>(false);
//Country
  const [countryId, setCountryId] = React.useState<string>(``)
  const [countryTitle, setcountryTitle] = React.useState<string>(``)
  const [countryList, setCountryList] = React.useState([])
  //Insistute
  const [insistuteId, setinsistuteId] = React.useState<string>(``)
  const [instituteName, setinstituteName] = React.useState<string>(``)
  const [InstituesList, setInstituesList] = React.useState([])
  const [editmode, setEditMode] = React.useState<boolean>(false)
  const [toastmsg, setToastMsg] = React.useState<string>(``)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);
  const handleCloseToastDelete = () => setToastDelete(false);

 //=================================Country =========================
  const getAllcountryList = async () => {
    const URL = `http://localhost:3000/api/hec/countryList`
    const res = await fetch(URL, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
    })
    const response = await res.json()
    if (response) {
      console.log(`CountryList`, response)
      setCountryList(response?.country)

    }
  }
  const addNewCountryInDB = async () => {
    handleClose3()
    const data = { countryTitle }
    const URL = `http://localhost:3000/api/hec/AddNewCountry`
    const res = await fetch(URL, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    if (response.success) {

      SetToast(true)
      setToastMsg(`New Country is Added`)
      getAllcountryList()
      //getProgrambyID()
    } else if (!response.success) {
      console.log(response.error)
      // setProgram(``)
      // getProgrambyID()
    }
  }
  const updateCountry = async () => {
    handleClose3()
    const data = { countryId, countryTitle }
    const URL = `http://localhost:3000/api/hec/updateCountry`
    const res = await fetch(URL, {
      method: `PATCH`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(response)
    if (response.success) {
      SetToast(true)
      setToastMsg(`Country is Updated ${countryTitle}`)
      setcountryTitle(``)
      getAllcountryList()
      //getProgrambyID()
    } else if (!response.success) {
      console.log(response.error)
      // setProgram(``)
      // getProgrambyID()
    }
  }
  const delCountry = async () => {
    const URL = `http://localhost:3000/api/hec/delCountry/${countryId}`
    const res = await fetch(URL, {
      method: `DELETE`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
    })
    const response = await res.json()
    if (response) {
      setToastMsg(response?.message)
      SetToast(true)
      getAllcountryList()
    }
  }
  //=========================================End of Country===============
  const updateInsistute = async () => {
    handleClose2()
    const data = { insistuteId, instituteTitle: instituteName }
    const URL = `http://localhost:3000/api/hec/ListOfInsistute/updateInsistute`
    const res = await fetch(URL, {
      method: `PATCH`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(response)
    if (response.success) {
      setToastMsg(response.message)
      SetToast(true)
      setinstituteName(``)
      setcountryTitle(``)
      setInstituesList([])
      setCountryList([])
      getAllcountryList()
    } else if (!response.success) {
      console.log(response.error)
    }
  }
  const addNewInsistute = async () => {
    handleClose2()
    const data = { countryTitle, instituteTitle: instituteName }
    const URL = `http://localhost:3000/api/hec/AddNewInsistute`
    const res = await fetch(URL, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(response)
    if (response.success) {
      setToastMsg(response.message)
      SetToast(true)
      setinstituteName(``)
      setcountryTitle(``)
      setCountryList([])
      setInstituesList([])
      getAllcountryList()
    } else if (!response.success) {
      console.log(response.error)
    }
  }
  const delInsistute = async () => {
    const URL = `http://localhost:3000/api/hec/ListOfInsistute/delInsistute/${insistuteId}`
    const res = await fetch(URL, {
      method: `DELETE`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
    })
    const response = await res.json()
    if (response) {
      setToastMsg(response?.message)
      SetToast(true)
      getAllcountryList()
    }
  }
  //===============================================Add Email ================
  //Api to get All Focal Person(FP) Email
  const fetchEmail = async () => {
    const data = { instituteName }
    const res = await fetch(`http://localhost:3000/api/focalPerson/getAllUser`, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    getfnEmail(response.user)
    console.log(response)
  }
  //Delete Focal Person
  const delEmail = async (email: string) => {
    // e.preventDefault();
    const data = { email }
    console.log(data)
    const res = await fetch(`/api/focalPerson/delUser`, {
      method: `DELETE`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    setToastDelete(true)
    if (response.user) {
      getfnEmail(response.user)
      console.log(response.user.length)
    } else {
      getfnEmail([])
    }


  }
  //Api for Post Focal Person (FP)
  const onSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    const pages = [{
      name: `Programs Details`,
      link: `ProgramsDetail`
    }, {
      name: `Degree Templates`,
      link: `FpDegreetemplate`
    }, {
      name: `Transcript Templates`,
      link: `Fptranscriptdetail`
    }, {
      name: `Degree Issuance`,
      link: `Fpstudentid`
    }, {
      name: `Acount Mangement`,
      link: `ACLManage`
    }]
    //const instituteName = value?.label;
    const isActive = true
    const data = { email, instituteName, isActive, pages }
    console.log(data)
    const res = await fetch(`/api/focalPerson/register`, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    if (response) {
      fetchEmail();
      console.log(response)
      SetToast(true)
      setToastMsg(`Email is Added for ${instituteName}`)
    }
  }
  // enable or Disable FP Email 
  const isActiveEmail = async (email: string, active: boolean) => {
    const data = { email, isActive: active }
    console.log(`Email is ${active} \n${data}`)
    const res = await fetch(`/api/focalPerson/isActiveUser`, {
      method: `PATCH`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    fetchEmail()
    console.log(response)
  }
  //Close Function for Toast or SnakBar
  const handleCloseToast = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === `clickaway`) {
      return;
    }

    SetToast(false);
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
  useEffect(() => {
    getAllcountryList()
  }, [])

  return (
    <>
      <Box margin={`1em 0`}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: `600`, fontSize: `16px` }}>Label</TableCell>
                <TableCell sx={{ fontWeight: `600`, fontSize: `16px` }}>Field</TableCell>
                <TableCell sx={{ fontWeight: `600`, fontSize: `16px` }}>Counts</TableCell>
                <TableCell sx={{ fontWeight: `600`, fontSize: `16px` }} align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ fontWeight: `600` }} align='left'>Country</TableCell>
                <TableCell width={`600px`}>
                  <Autocomplete
                    value={countryTitle}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setcountryTitle(newValue?.countryTitle);
                      } else if (newValue && newValue?.countryTitlee) {
                        // Create a new value from the user input
                        setcountryTitle(newValue?.countryTitle);
                        setCountryId(newValue?._id)
                      } else {
                        if(newValue)
                        {setCountryId(newValue?._id)
                        setcountryTitle(newValue?.countryTitle);
                        setInstituesList(newValue?.institutes)}
                        else{
                          setinstituteName(``)
                          setInstituesList([])
                        }
                      }
                    }
                    }
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="countries"
                    options={countryList?countryList:[]}
                    getOptionLabel={(option) => {
                      // Value selected with enter, right from the input
                      if (typeof option === `string`) {
                        return option;
                      }
                      // Add "xxx" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      // Regular option
                      return option?.countryTitle;
                    }}
                    renderOption={(props, option) => <li {...props}>{option?.countryTitle}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params}
                        label="Countries" variant="outlined"
                        color='success' size='small' />
                    )}
                  />
                </TableCell>
                <TableCell>
                  {countryList ? countryList.length : 0}
                </TableCell>
                <TableCell sx={tableActionStyle}>
                  <Button startIcon={<Add />} onClick={() => {
                    setOpen3(true)
                    setEditMode(false)
                    setcountryTitle(``)
                  }} color={`success`}>Add</Button>
                  <Button startIcon={<EditIcon />} disabled={!countryTitle}
                    onClick={() => {
                      setOpen3(true)
                      setEditMode(true)
                    }}
                  >Edit</Button>
                  <Button startIcon={<DeleteIcon />} color='error' disabled={!countryTitle}
                    onClick={delCountry}
                  >Delete</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: `600` }} align='left'>Institutes</TableCell>
                <TableCell>
                  <Autocomplete
                    onSelect={() => fetchEmail()}
                    value={instituteName}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setinstituteName(newValue?.instituteTitle);
                      } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setinstituteName(newValue?.instituteTitle);
                        setinsistuteId(newValue?._id)
                      } else {
                        setinstituteName(newValue?.instituteTitle);
                        setinsistuteId(newValue?._id)
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="free-solo-with-text-demo"
                    options={InstituesList}
                    getOptionLabel={(option) => {

                      // Value selected with enter, right from the input
                      if (typeof option === `string`) {
                        return option;
                      }
                      // Add "xxx" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue?.instituteTitle;
                      }
                      // Regular option
                      return option?.instituteTitle;
                    }}
                    renderOption={(props, option) => <li {...props}>{option?.instituteTitle}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} label="Insistute" variant="outlined" color='success' size='small' />
                    )}
                  />
                </TableCell>
                <TableCell>{InstituesList ? InstituesList.length : 0}</TableCell>
                <TableCell sx={tableActionStyle}>
                  <Button startIcon={<Add />} onClick={() => {
                    setOpen2(true)
                    setEditMode(false)
                    setinstituteName(``)
                  }} color={`success`} disabled={!countryTitle}>Add</Button>
                  <Button startIcon={<EditIcon />} onClick={() => {
                    setOpen2(true)
                    setEditMode(true)
                  }}
                    disabled={!instituteName} >Edit</Button>
                  <Button startIcon={<DeleteIcon />} color='error' disabled={!instituteName}
                    onClick={delInsistute}
                  >Delete</Button></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer sx={{ margin: `1em 0` }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: `600`, fontSize: `16px` }} align="center">Emails</TableCell>
                <TableCell align='center'>
                  <Button startIcon={<PersonAddIcon />} onClick={handleOpen} color={`success`} variant={`contained`}
                  disabled={!instituteName}
                  >Add Email</Button>
                </TableCell>
                <TableCell sx={{ fontWeight: `600`, fontSize: `16px` }} align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getEmail.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.email}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                  </TableCell>
                  <TableCell align="center">
                    {row.isActive && <Button onClick={() => isActiveEmail(row.email, false)}>Disable</Button>}
                    {!row.isActive && <Button onClick={() => isActiveEmail(row.email, true)}>Enable</Button>}
                    <Button color='error' onClick={() => delEmail(row.email)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {getEmail.length < 1 && <Box
            sx={{ display: `flex`, justifyContent: `center`, padding: `3em` }}
          >
            <Typography
              color={`red`}
              fontFamily={`montserrat`}
              fontWeight={`700`}
            >
              NO RECORDS FOUND
            </Typography>
          </Box>}
        </TableContainer>
        {/* Mode for Add Email for Univeristy Focal Person */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Add Email
              </Typography>
              <Typography fontSize={`12px`}>
                For <strong>{instituteName}</strong>
              </Typography>
              <TextField sx={{ margin: `1em 0 0 0` }} label={`Email`} value={email} onChange={(e) => setEmail(e.target.value)} type='email' color={`success`} size='small' fullWidth />
              <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={(e)=>onSubmit(e)}>Add</Button>
            </Box>
          </Fade>
        </Modal>
        {/* Model for University Name Add*/}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open2}
          onClose={handleClose2}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open2}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Add Institutes  <br />
              </Typography>
              <Typography fontSize={`14px`}>
                In <strong>{countryTitle}</strong> <br />
              </Typography>
              <TextField sx={{ margin: `1em 0 0 0` }} label={`Institutes`} value={instituteName} onChange={(e) => setinstituteName(e.target.value)} type='email' color={`success`} size='small' fullWidth />
              {!editmode &&
                <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={addNewInsistute}>Add</Button>}
              {editmode &&
                <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={updateInsistute}>Update</Button>}
            </Box>
          </Fade>
        </Modal>
        {/* Toasv t for country  Added for Univeristy */}
        <Snackbar
          anchorOrigin={{ vertical: `top`, horizontal: `center` }}
          open={toast}
          autoHideDuration={1000}
          onClose={handleCloseToast}
          action={action}
        >
          <Alert onClose={handleCloseToast} severity="success" sx={{ width: `100%` }}>
            {toastmsg}
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: `top`, horizontal: `center` }}
          open={toastDelete}
          autoHideDuration={1000}
          onClose={handleCloseToastDelete}
          action={action}
        >
          <Alert onClose={handleCloseToast} severity="success" sx={{ width: `100%` }}>
            Email Deleted Succesfully!
          </Alert>
        </Snackbar>
        {/* Add Country */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open3}
          onClose={handleClose3}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open3}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Add Country
              </Typography>
              <TextField sx={{ margin: `1em 0 0 0` }} label={`Country`} value={countryTitle} onChange={(e) => setcountryTitle(e.target.value)} type='text' color={`success`} size='small' fullWidth />
              {!editmode &&
                <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={addNewCountryInDB}>Add</Button>}
              {editmode &&
                <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={updateCountry}>Update</Button>}
            </Box>
          </Fade>
        </Modal>
        {/* Edit Country Model */}
      </Box>
    </>
  )
}
UniveristiesDetails.layout = `Admin`
export default UniveristiesDetails