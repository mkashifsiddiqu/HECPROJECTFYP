/* eslint-disable prettier/prettier */
import { Autocomplete, Button, TextField,
   Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Fade, Modal, Box, Backdrop, Alert } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import React from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'; 
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
import { createFilterOptions } from '@mui/material/Autocomplete';
import uni from '../../../Utli/insistute.json'
import country from '../../../Utli/countries.json'
import { Add} from '@mui/icons-material';
//Data Type 
interface UniOptionType {
  inputValue?: string;
  label?: string;
  value?: number;
}
interface fpDetail {
  email: string,
  isActive: boolean
}
//Search for Auto0Complete Component
const filter = createFilterOptions<UniOptionType>();
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
  const [value, setValue] = React.useState<UniOptionType>();
  const [email, setEmail] = React.useState<string>(``)
  const [btn, setbtn] = React.useState<boolean>(false);
  const [btn1, setbtn1] = React.useState<boolean>(false);
  //state for Model 
  const [open, setOpen] = React.useState<boolean>(false);
  const [open2, setOpen2] = React.useState<boolean>(false);
  const [open3, setOpen3] = React.useState<boolean>(false);
  const [toast, SetToast] = React.useState<boolean>(false);
  const [toastDelete, setToastDelete] = React.useState<boolean>(false);
  //State for Country or Insisite
  const [addInstitutes, setAddInstitute] = React.useState<string>(``)
  const [countryValue, setCountryValue] = React.useState<UniOptionType>();
  const [addNewCountry, setAddCountry] = React.useState<string>(``)
  const [UniJSON, SetUniJson] = React.useState<UniOptionType>()
  const handleOpen = () => setOpen(true);
  const handleClose =()=> setOpen(false)
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);
  const handleCloseToastDelete = () => setToastDelete(false);
  //Add new COUNTRY
  const handleAddNewCountry = () => {
    const label = addNewCountry;
    const value = Date.now()

    country.push({ label, value })
    setAddCountry(``);
  }

  // Add New Univeristy 
  const handleAddNewInsitute = () => {
    const label = addInstitutes;
    const value = Date.now()
    uni.Insistutes.push({ label, value })
    console.log(label)
    setAddInstitute(``);
    setCountryValue({ label: `` });
  }
  // const handleDeleteCountry= ()=>{
  //      delete 
  // }
  //Sort University According to Country
  // const sortUni = (country:string) =>{

  // }
  //Edit Univeristy
  const handleEdit = () => {
    let index: number | string = 0;
    index = uni.Insistutes.indexOf(addNewCountry)
    console.log(`Index of`, index)
  }
  //Api to get All Focal Person(FP) Email
  const fetchEmail = async () => {
    const instituteName = value?.label
    const data = { instituteName }
    const res = await fetch(`/api/focalPerson/getAllUser`, {
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
    const instituteName = value?.label;
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
  return (
    <>
      <Box margin={`1em 0`}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{fontWeight:`600`, fontSize:`16px`}}>Label</TableCell>
                <TableCell sx={{fontWeight:`600`, fontSize:`16px`}}>Field</TableCell>
                <TableCell sx={{fontWeight:`600`, fontSize:`16px`}}>Counts</TableCell>
                <TableCell sx={{fontWeight:`600`, fontSize:`16px`}} align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{fontWeight:`600`}} align='left'>Country</TableCell>
                <TableCell width={`600px`}>
                  <Autocomplete
                    value={countryValue}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setCountryValue({
                          label: newValue,
                        });
                      } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setCountryValue({
                          label: newValue.inputValue,
                        });
                      } else {
                        setCountryValue(newValue);
                      }
                    }
                  }
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="countries"
                    options={country}
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
                      return option.label;
                    }}
                    renderOption={(props, option) => <li {...props}>{option.label}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} 
                      label="Countries" variant="outlined" 
                      color='success' size='small' />
                    )}
                  />
                </TableCell>
                <TableCell>
                  {/* {country.Countries.length} */}

                </TableCell>
                <TableCell sx={tableActionStyle}>
                  <Button startIcon={<Add />} onClick={() => setOpen3(true)} color={`success`}>Add</Button>
                  <Button startIcon={<EditIcon/>} disabled={!countryValue}>Edit</Button>
                  <Button startIcon={<DeleteIcon />} color='error' disabled={!countryValue}>Delete</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{fontWeight:`600`}} align='left'>Institutes</TableCell>
                <TableCell>
                  <Autocomplete
                    onSelect={() => fetchEmail()}
                    value={value}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setValue({
                          label: newValue,
                        });
                      } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setValue({
                          label: newValue.inputValue,
                        });
                      } else {
                        setValue(newValue);
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="free-solo-with-text-demo"
                    options={uni.Insistutes}
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
                      return option.label;
                    }}
                    renderOption={(props, option) => <li {...props}>{option.label}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} label="Insistute" variant="outlined" color='success' size='small' />
                    )}
                  />
                </TableCell>
                <TableCell>{uni.Insistutes.length}</TableCell>
                <TableCell sx={tableActionStyle}>
                  <Button startIcon={<Add />} onClick={() => setOpen2(true)} color={`success`}>Add</Button>
                  <Button startIcon={<EditIcon/>} onClick={handleEdit} disabled={!value}>Edit</Button>
                  <Button startIcon={<DeleteIcon />} color='error' disabled={!value}>Delete</Button></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer sx={{ margin: `1em 0` }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{fontWeight:`600`, fontSize:`16px`}} align="center">Emails</TableCell>
                <TableCell align='center'>
                  <Button startIcon={<PersonAddIcon/>} onClick={handleOpen} color={`success`} variant={`contained`}>Add Email</Button>
                </TableCell>
                <TableCell sx={{fontWeight:`600`, fontSize:`16px`}} align="center">Actions</TableCell>
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
              <Autocomplete
                    value={countryValue}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setCountryValue({
                          label: newValue,
                        });
                      } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setCountryValue({
                          label: newValue.inputValue,
                        });
                      } else {
                        setCountryValue(newValue);
                      }
                    }
                  }
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="countries"
                    options={country}
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
                      return option.label;
                    }}
                    renderOption={(props, option) => <li {...props}>{option.label}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} 
                      label="Countries" variant="outlined" 
                      color='success' size='small' />
                    )}
                  />
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  if (typeof newValue === `string`) {
                    setValue({
                      label: newValue,
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                      label: newValue.inputValue,
                    });
                  } else {
                    setValue(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some((option) => inputValue === option.label);
                  if (inputValue !== `` && !isExisting) {
                    filtered.push({
                      inputValue,
                      label: `Add New Institues  :"${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                options={uni.Insistutes}
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
                  return option.label;
                }}
                renderOption={(props, option) => <li {...props}>{option.label}</li>}
                sx={{ margin: `1em 0 0 0` }}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} label="Insistute" variant="outlined" color='success' size='small' />
                )}
              />
              <TextField sx={{ margin: `1em 0 0 0` }} label={`Email`} value={email} onChange={(e) => setEmail(e.target.value)} type='email' color={`success`} size='small' fullWidth />
              <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={onSubmit}>Add</Button>
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
                Add Institutes
              </Typography>
              <Autocomplete
                    value={countryValue}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setCountryValue({
                          label: newValue,
                        });
                      } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setCountryValue({
                          label: newValue.inputValue,
                        });
                      } else {
                        setCountryValue(newValue);
                      }
                    }
                  }
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="countries"
                    options={country}
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
                      return option.label;
                    }}
                    renderOption={(props, option) => <li {...props}>{option.label}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} 
                      label="Countries" variant="outlined" 
                      color='success' size='small' />
                    )}
                  />
              <TextField sx={{ margin: `1em 0 0 0` }} label={`Institutes`} value={addInstitutes} onChange={(e) => setAddInstitute(e.target.value)} type='email' color={`success`} size='small' fullWidth />
              <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={handleAddNewInsitute}>Add</Button>
            </Box>
          </Fade>
        </Modal>
        {/* Toasv t for Email Added for Univeristy */}
        <Snackbar
          anchorOrigin={{ vertical: `top`, horizontal: `center` }}
          open={toast}
          autoHideDuration={1000}
          onClose={handleCloseToast}
          action={action}
        >
          <Alert onClose={handleCloseToast} severity="success" sx={{ width: `100%` }}>
            Email Updated Succesfully!
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
              <TextField sx={{ margin: `1em 0 0 0` }} label={`Country`} value={addNewCountry} onChange={(e) => setAddCountry(e.target.value)} type='text' color={`success`} size='small' fullWidth />
              <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={handleAddNewCountry}>Add</Button>
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