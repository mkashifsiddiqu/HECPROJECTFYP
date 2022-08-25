/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { Alert, Autocomplete, Backdrop, Box, Button, Fade, Icon, IconButton, Modal, Snackbar, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { TextField } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { Add } from '@mui/icons-material';
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
const Fpdegreedetail = () => {
  //
  
  const list = useSelector((state) => state.loginFPReducer.userData)
  const { instituteName } = list.data
  //===========================State for ID Manage===============
  const [programId, setprogramId] = useState<string>(``)
  const [campusId, setCampusId] = useState<string>(``)
  const [DepartmentId, setDepartmentId] = useState<string>(``)
  const [DegreeTypetId, setDegreeTypetId] = useState<string>(``)
  const [SessionId, setSessionId] = useState<string>(``)    // Del and Update Only
  //All State String Data that is use for Read, Update and Delete
  const [Program, setProgram] = useState<string>(``)
  const [DegreeNameOnUni, setDegreeNameOnUni] = useState<string>(``)
  const [Campus, setCampus] = useState<string>(``)
  const [Department, setDepartment] = useState<string>(``)
  const [DegreeType, setDegreeType] = useState<string>(``)
  const [Session, setSession] = useState<string>(``)
  //All State for Array Data 
  const [ProgramsList, setProgramList] = useState([])
  const [UniNameOnDeg, setUniNameOnDeg] = useState(``)
  const [CampusList, setCampusList] = useState([])
  const [DepartmentList, setDepartmentList] = useState([])
  const [DegreeTypeList, setDegreeTypeList] = useState([])
  const [sessionList, setsessionList] = useState([])
  //=========================Model Management Add Update Delete====================
  const [open, setOpen] = React.useState<boolean>(false);
  const [modelCampus, setmodelCampus] = React.useState<boolean>(false);
  const [modelDepartment, setmodelDepartment] = React.useState<boolean>(false);
  const [modelDegreeType, setmodelDegreeType] = React.useState<boolean>(false);
  const [modelSession, setmodelSession] = React.useState<boolean>(false);
  const [toast, SetToast] = React.useState<boolean>(false);
  const [toastMsg, SetToastMsg] = React.useState<string>(``);
  const handleClose = () => setOpen(false)
  const handleCloseModelCampus = () => setmodelCampus(false)
  //Update 
  const [updateMode, setupdateMode] = useState<boolean>(false)
  //=========================Toast or Snack Bar Mnagement =================
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
        onClick={handleCloseToast}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  //===============================Program Detail ================
  const getProgrambyID = async () => {
    const URL = `http://localhost:3000/api/hec/ListofProgram/${instituteName}`
    const res = await fetch(URL, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },

    })
    const response = await res.json()
    if (response) {
      console.log(response)
      const { Program } = response
      if (Program) {
        setProgramList(Program)
      }
      // setUniNameOnDeg([instituteName])
    }
  }
  useEffect(() => {
    getProgrambyID()
  }, [])
  const addNewProgram = async () => {
    setOpen(false)
    const data = { Program, instituteName, DegreeNameOnUni }
    const URL = `http://localhost:3000/api/hec/ListofProgram/addNewProgram`
    const res = await fetch(URL, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    if (response.success) {
      setProgram(``)
      setDegreeNameOnUni(``)
      SetToastMsg(response.message)
      SetToast(true)
      console.log(response)
      getProgrambyID()
    } else if (!response.success) {
      console.log(response.error)
      setProgram(``)
      getProgrambyID()
    }
  }
  const deleteProgram = async () => {
    if (!programId) {
      //when not any Program is Selected
      SetToastMsg(`Please Select any Program to Delete`)
      SetToast(true)
    } else {

      //when Selected Program
      const URL = `http://localhost:3000/api/hec/ListofProgram/deleteProgram/${programId}`
      const res = await fetch(URL, {
        method: `DELETE`, // or 'PUT'
        headers: {
          'Content-Type': `application/json`,
        },
      })
      const response = await res.json()
      if (response.success) {
        SetToastMsg(response.message)
        SetToast(true)
        setProgram(``)
        setprogramId(``)
        //Again Refresh List
        getProgrambyID()
      } else if (!response.success) {
        console.log(response.error)
      }
    }
  }
  const updateProgram = async () =>{
    setOpen(false)
    const data = { Program,programId, DegreeNameOnUni }
    const URL = `http://localhost:3000/api/hec/ListofProgram/updateProgram`
    const res = await fetch(URL, {
      method: `PATCH`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    if (response.success) {
      setProgram(``)
      setDegreeNameOnUni(``)
      SetToastMsg(response.message)
      SetToast(true)
      console.log(response)
      getProgrambyID()
    } else if (!response.success) {
      console.log(response.error)
      setProgram(``)
      getProgrambyID()
    }
  }
  //================================Campus Detail=============

  const getCampusbyID = async () => {
    const URL = `http://localhost:3000/api/hec/ListofCampus/${programId}`
    const res = await fetch(URL, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },

    })
    const response = await res.json()
    if (response) {
      const { Campus } = response
      console.log(Campus)
      if (Campus) {
        setCampusList(Campus)
      }
    }
  }
  useEffect(() => {
    if (Program) {
      getCampusbyID()
    }
  }, [Program])
  const addNewCampus = async () => {
    if (programId == ``) {
      SetToastMsg(`Please Make Sure Program is Selected`)
    } else {
      setmodelCampus(false)
      const data = { programId, Campus }
      const URL = `http://localhost:3000/api/hec/ListofCampus/AddNewCampus`
      const res = await fetch(URL, {
        method: `POST`, // or 'PUT'
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(data),
      })
      const response = await res.json()
      if (response.success) {
        setProgram(``)
        setCampus(``)
        SetToastMsg(response.message)
        SetToast(true)
        console.log(response)
        getProgrambyID()
      } else if (!response.success) {
        console.log(response.error)
        setProgram(``)
        getProgrambyID()
      }
    }
  }
  const delCampus = async () => {
    if (!campusId) {
      //when not any Campus is Selected
      SetToastMsg(`Please Select any Campus to Delete`)
      SetToast(true)
    } else {

      //when Selected Campus
      const URL = `http://localhost:3000/api/hec/ListofCampus/delCampus/${campusId}`
      const res = await fetch(URL, {
        method: `DELETE`, // or 'PUT'
        headers: {
          'Content-Type': `application/json`,
        },
      })
      const response = await res.json()
      if (response.success) {
        SetToastMsg(response.message)
        SetToast(true)
        setCampus(``)
        setCampusId(``)
        //Again Refresh List
        getCampusbyID()
      } else if (!response.success) {
        console.log(response.error)
      }
    }
  }
  const updateCampus = async () =>{
    setmodelCampus(false)
    const data = { Campus,campusId}
    const URL = `http://localhost:3000/api/hec/ListofCampus/updateCampus`
    const res = await fetch(URL, {
      method: `PATCH`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
   if (response.success) {
      setCampus(``)
      SetToastMsg(response.message)
      SetToast(true)
      console.log(response)
      getCampusbyID()
    } else if (!response.success) {
      console.log(response.error)
      setCampus(``)
      getCampusbyID()
    }
  }
  //==========================For Department ============================

  const getDepartmentbyID = async () => {
    const URL = `http://localhost:3000/api/hec/ListofDepartment/${campusId}`
    const res = await fetch(URL, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },

    })
    const response = await res.json()
    if (response) {
      const { Department } = response
      if (Department) {
        setDepartmentList(Department)
      }

    }

  }
  useEffect(() => {
    if (Campus) {
      getDepartmentbyID()
    }
  }, [Campus])
  const addNewDartment = async () => {
    if (campusId == ``) {
      SetToastMsg(`Please Make Sure campus is Selected`)
      console.log(`in Not Id Depart fn`)
    } else {
      setmodelDepartment(false)
      console.log(`Campus Id`, campusId)
      const data = { Department, campusId }
      const URL = `http://localhost:3000/api/hec/ListofDepartment/AddNewDepartment/`
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
        setCampus(``)
        setDepartment(``)
        SetToastMsg(response.message)
        SetToast(true)

        getCampusbyID()
        console.log(`in Add`)
      } else if (!response.success) {
        console.log(response.error)
        console.log(`in Error`)
        setCampus(``)
        getCampusbyID()
      }
    }
  }
  const delDepartment = async () => {
    if (!DepartmentId) {
      //when not any Campus is Selected
      SetToastMsg(`Please Select any Campus to Delete`)
      SetToast(true)
    } else {
      const URL = `http://localhost:3000/api/hec/ListofDepartment/delDepartment/${DepartmentId}`
      const res = await fetch(URL, {
        method: `DELETE`, // or 'PUT'
        headers: {
          'Content-Type': `application/json`,
        },
      })
      const response = await res.json()
      if (response.success) {
        SetToastMsg(response.message)
        SetToast(true)
        setDepartment(``)
        setDepartmentId(``)
        //Again Refresh List
        getDepartmentbyID()
      } else if (!response.success) {
        console.log(response.error)
      }
    }
  }
  const updateDartment = async () => {
    setmodelDepartment(false)
      const data = { Department, DepartmentId }
      const URL = `http://localhost:3000/api/hec/ListofDepartment/updateDepartment/`
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
        setDepartment(``)
        SetToastMsg(response.message)
        SetToast(true)
        getDepartmentbyID()
      } else if (!response.success) {
        console.log(response.error)
        console.log(`in Error`)
        setDepartment(``)
        getDepartmentbyID()
      }
  }
  //==========================for Degree Type==========================

  const getDegreeTypeID = async () => {
    const URL = `http://localhost:3000/api/hec/ListOfdegreeType/${DepartmentId}`
    const res = await fetch(URL, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },

    })
    const response = await res.json()
    if (response) {
      const { DegreeType } = response
      if (DegreeType) {
        setDegreeTypeList(DegreeType)
      }
    }

  }
  useEffect(() => {
    if (Department) {
      getDegreeTypeID()
    }
  }, [Department])
  const addNewDegreeType = async () => {

    if (DepartmentId == ``) {
      SetToastMsg(`Please Make Sure campus is Selected`)
      SetToast(true)
    } else {
      setmodelDegreeType(false)
      const data = { DegreeType, DepartmentId }
      const URL = `http://localhost:3000/api/hec/ListOfdegreeType/AddNewDegreeType/`
      const res = await fetch(URL, {
        method: `POST`, // or 'PUT'
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(data),
      })
      const response = await res.json()
      if (response.success) {
        setDepartment(``)
        setDegreeType(``)
        SetToastMsg(response.message)
        SetToast(true)
        console.log(response)
        getDepartmentbyID()
      } else if (!response.success) {
        console.log(response.error)
        setCampus(``)
        getDepartmentbyID()
      }
    }
  }
  const delDegreeType = async () => {
    if (!DepartmentId) {
      //when not any DegreeType is Selected
      SetToastMsg(`Please Select any DegreeType to Delete`)
      SetToast(true)
    } else {

      const URL = `http://localhost:3000/api/hec/ListOfdegreeType/delDegreeType/${DegreeTypetId}`
      const res = await fetch(URL, {
        method: `DELETE`, // or 'PUT'
        headers: {
          'Content-Type': `application/json`,
        },
      })
      const response = await res.json()
      if (response.success) {
        SetToastMsg(response.message)
        SetToast(true)
        setDegreeType(``)
        setDegreeTypetId(``)
        //Again Refresh List
        getDepartmentbyID()
      } else if (!response.success) {
        console.log(response.error)
      }
    }
  }
  const updateDegreeType = async () => {
      setmodelDegreeType(false)
      const data = { DegreeType, DegreeTypetId }
      const URL = `http://localhost:3000/api/hec/ListOfdegreeType/updateDegreeType/`
      const res = await fetch(URL, {
        method: `PATCH`, // or 'PUT'
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(data),
      })
      const response = await res.json()
      if (response.success) {
        setDegreeType(``)
        SetToastMsg(response.message)
        SetToast(true)
        getDegreeTypeID()
      } else if (!response.success) {
        setDegreeType(``)
        getDegreeTypeID()
      }
    }
  //======================================for Session==================
  const getSessionID = async () => {
    const URL = `http://localhost:3000/api/hec/ListOfSession/${DegreeTypetId}`
    const res = await fetch(URL, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },

    })
    const response = await res.json()
    if (response) {
      const { Session } = response
      if (Session) {
        setsessionList(Session)
      }
    }
  }
  useEffect(() => {
    if (DegreeType) {
      getSessionID()
    }
  }, [DegreeType])
  const addNewSession = async () => {

    if (SessionId == ``) {
      SetToastMsg(`Please Make Sure Session is Selected`)
      SetToast(true)
    } else {
      setmodelSession(false)
      const data = { Session, DegreeTypetId }
      const URL = `http://localhost:3000/api/hec/ListOfSession/AddNewSession`
      const res = await fetch(URL, {
        method: `POST`, // or 'PUT'
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(data),
      })
      const response = await res.json()
      if (response.success) {
        setDegreeType(``)
        setSession(``)
        SetToastMsg(response.message)
        SetToast(true)
        console.log(response)
        getDegreeTypeID()
      } else if (!response.success) {
        console.log(response.error)
        setSession(``)
        getDegreeTypeID()
      }
    }
  }
  const delSession = async () => {
    if (!SessionId) {
      //when not any SessionId is Selected
      SetToastMsg(`Please Select any SessionId to Delete`)
      SetToast(true)
    } else {
      const URL = `http://localhost:3000/api/hec/ListOfSession/delSession/${SessionId}`
      const res = await fetch(URL, {
        method: `DELETE`, // or 'PUT'
        headers: {
          'Content-Type': `application/json`,
        },
      })
      const response = await res.json()
      if (response.success) {
        SetToastMsg(response.message)
        SetToast(true)
        setSession(``)
        setSessionId(``)
        //Again Refresh List
        getDegreeTypeID()
      } else if (!response.success) {
        console.log(response.error)
      }
    }
  }
  const updateSession = async () => {
     setmodelSession(false)
      const data = { Session, SessionId }
      const URL = `http://localhost:3000/api/hec/ListOfSession/updateSession`
      const res = await fetch(URL, {
        method: `PATCH`, // or 'PUT'
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(data),
      })
      const response = await res.json()
      if (response.success) {
        setSession(``)
        SetToastMsg(response.message)
        SetToast(true)
        getSessionID()
      } else if (!response.success) {
        setSession(``)
        getSessionID()
      }
  }
  
  return (
    <div>
      <Box margin={`10px 0`}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{fontWeight:`600`, fontSize:`16px`}}>Label</TableCell>
                <TableCell sx={{fontWeight:`600`, fontSize:`16px`}}>Field</TableCell>
                <TableCell sx={{fontWeight:`600`, fontSize:`16px`}}>Operations</TableCell>
                <TableCell sx={{fontWeight:`600`, fontSize:`16px`}}>Counts</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{fontWeight:`600`}}>Program Title</TableCell>
                <TableCell>
                <Autocomplete
                    value={Program}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setProgram(newValue);
                      } else {
                        setprogramId(newValue?._id)
                        setProgram(newValue?.programTitle);
                        setUniNameOnDeg(newValue?.degree_title)
                        setCampus(``)
                        setDepartment(``)
                        setDegreeType(``)
                        setSession(``)
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="Programs"
                    options={ProgramsList}
                    getOptionLabel={(option: any) => {

                      // Value selected with enter, right from the input
                      if (typeof option === `string`) {
                        return option;
                      }
                      // Add "xxx" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      // Regular option
                      return option?.programTitle;
                    }}
                    renderOption={(props, option: string) => <li {...props}>{option?.programTitle}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} color="success"
                        helperText={`Please Type  to Search`}
                        size="small"
                        fullWidth
                        color='success'
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                <Stack direction={`row`} spacing={2}>
                  <Button onClick={() => {setOpen(true) 
                    setupdateMode(false)
                    setProgram(``)
                    }} disabled={!instituteName} startIcon={<Add />} color={`success`}>Add</Button>
                  <Button onClick={() => {setupdateMode(true) 
                    setOpen(true)}
                    } disabled={!Program} startIcon={<EditIcon/>}>Edit</Button>
                  <Button onClick={deleteProgram} disabled={!Program} startIcon={<DeleteIcon />} color='error'>Delete</Button>
                </Stack>
                </TableCell>
                <TableCell sx={{fontWeight:`500`}}>{ProgramsList ? ProgramsList.length : 0}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{fontWeight:`600`}}>University Name on Degree</TableCell>
                <TableCell>
                  <TextField
                    value={instituteName}
                    placeholder='University Name on Degree'
                    variant="outlined" color='success' size='small' fullWidth
              //       inputProps={{style:{fontSize: `13px`,fontWeight:`600`}}}
              // InputLabelProps={{ style: { fontWeight: 600, fontSize: `13px`, fontFamily: `montserrat` } }}
                  />
                </TableCell>
                <Stack direction={`row`} spacing={2}>
                  <Button startIcon={<Add />} color={`success`}>Add</Button>
                  <Button startIcon={<EditIcon/>}>Edit</Button>
                  <Button startIcon={<DeleteIcon />} color='error'>Delete</Button>
                </Stack>
                <TableCell sx={{fontWeight:`500`}}>{UniNameOnDeg && `1`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{fontWeight:`600`}}>Campus</TableCell>
                <TableCell>
                  <Autocomplete
                    value={Campus}
                    onChange={(event, newValue: string) => {
                      if (typeof newValue === `string`) {
                        setCampus(newValue);
                      } else {
                        setCampusId(newValue?._id)
                        setCampus(newValue?.campusTitle);
                        setDepartment(``)
                        setDegreeType(``)
                        setSession(``)
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="CIty"
                    options={CampusList}
                    getOptionLabel={(option: any) => {

                      // Value selected with enter, right from the input
                      if (typeof option === `string`) {
                        return option;
                      }
                      // Add "xxx" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      // Regular option
                      return option?.campusTitle;
                    }}
                    renderOption={(props, option: any) => <li {...props}>{option?.campusTitle}</li>}
                    fullWidth
                   renderInput={(params) => (
                      <TextField {...params} color="success"
                      
                        label={`Campus`}
                        helperText={`Please enter campus`}
                        size="small"
                        fullWidth
                        color='success'
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                <Stack direction={`row`} spacing={2}>
                  <Button onClick={() => {setmodelCampus(true) 
                  setupdateMode(false)
                  setCampus(``)}} 
                  disabled={!Program} startIcon={<Add />} color={`success`}>Add</Button>
                  <Button onClick={() => {setmodelCampus(true) 
                  setupdateMode(true)}} disabled={!Campus} startIcon={<EditIcon/>}>Edit</Button>
                  <Button disabled={!Campus} onClick={delCampus} startIcon={<DeleteIcon />} color='error'>Delete</Button>
                </Stack>
                </TableCell>
                <TableCell sx={{fontWeight:`500`}}>{CampusList ? CampusList.length : 0}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{fontWeight:`600`}}>Department</TableCell>
                <TableCell>
                  <Autocomplete

                    value={Department}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setDepartment(newValue)
                      } else {
                        setDepartment(newValue?.departmentTitle);
                        setDepartmentId(newValue?._id)
                        setDegreeType(``)
                        setSession(``)
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="CIty"
                    options={DepartmentList}
                    getOptionLabel={(option: any) => {

                      // Value selected with enter, right from the input
                      if (typeof option === `string`) {
                        return option;
                      }
                      // Add "xxx" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      // Regular option
                      return option?.departmentTitle;
                    }}
                    renderOption={(props, option: any) => <li {...props}>{option?.departmentTitle}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params}
                      label={`Department`}
                        helperText={`Please enter department`}
                        fullWidth
                        size='small'
                        color='success'
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                <Stack direction={`row`} spacing={2}>
                  <Button onClick={() => { setmodelDepartment(true) 
                  setupdateMode(false)
                  }} disabled={!Campus} startIcon={<Add />} color={`success`}>Add</Button>
                  <Button disabled={!Department} onClick={() => { setupdateMode(true)
                    setmodelDepartment(true) }} startIcon={<EditIcon/>}>Edit</Button>
                  <Button onClick={delDepartment} disabled={!Department} startIcon={<DeleteIcon />} color='error'>Delete</Button>
                </Stack>
                    </TableCell>
                <TableCell sx={{fontWeight:`500`}}>{DepartmentList ? DepartmentList.length : 0}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{fontWeight:`600`}}>Degree Type</TableCell>
                <TableCell>
                  <Autocomplete

                    value={DegreeType}
                    onChange={(event, newValue: string) => {
                      if (typeof newValue === `string`) {
                        setDegreeType(newValue);
                      } else {
                        setDegreeType(newValue?.degreeTypeTitle);
                        setDegreeTypetId(newValue?._id)
                        setSession(``)
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="CIty"
                    options={DegreeTypeList}
                    getOptionLabel={(option: any) => {

                      // Value selected with enter, right from the input
                      if (typeof option === `string`) {
                        return option;
                      }
                      // Add "xxx" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      // Regular option
                      return option?.degreeTypeTitle;
                    }}
                    renderOption={(props, option: any) => <li {...props}>{option?.degreeTypeTitle}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params}
                     label={` Degree Type`}
                        helperText={`Please select degree type`}
                        fullWidth
                        size='small'
                        color='success'
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                <Stack direction={`row`} spacing={2}>
                  <Button onClick={() => {setmodelDegreeType(true)
                  setDegreeType(``)
                  setupdateMode(false)
                  }} disabled={!Department} startIcon={<Add />} color={`success`}>Add</Button>
                  <Button onClick={() => {setmodelDegreeType(true)
                  setupdateMode(true)
                  }} disabled={!DegreeType} startIcon={<EditIcon/>}>Edit</Button>
                  <Button onClick={delDegreeType} disabled={!DegreeType} startIcon={<DeleteIcon />} color='error'>Delete</Button>
                </Stack>
                </TableCell>
                <TableCell sx={{fontWeight:`500`}}>{DegreeTypeList ? DegreeTypeList.length : 0}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{fontWeight:`600`}}>Session Type</TableCell>
                <TableCell>
                  <Autocomplete

                    value={Session}
                    onChange={(event, newValue: string) => {
                      if (typeof newValue === `string`) {
                        setSession(newValue);
                      } else {
                        setSession(newValue?.sessionTitle);
                        setSessionId(newValue?._id)
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="CIty"
                    options={sessionList}
                    getOptionLabel={(option: any) => {

                      // Value selected with enter, right from the input
                      if (typeof option === `string`) {
                        return option;
                      }
                      // Add "xxx" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      // Regular option
                      return option?.sessionTitle;
                    }}
                    renderOption={(props, option: any) => <li {...props}>{option?.sessionTitle}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params}
                      label={`Session Type`}
                        helperText={`Please select session type`}
                        fullWidth
                        color='success'
                        size='small'
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                <Stack direction={`row`} spacing={2}>
                  <Button onClick={() => {setmodelSession(true)
                  setSession(``)
                  setupdateMode(false)
                  }} disabled={!DegreeType} startIcon={<Add />} color={`success`}>Add</Button>
                  <Button onClick={() => {setmodelSession(true)
                  setupdateMode(true)
                  }} disabled={!Session} startIcon={<EditIcon/>}>Edit</Button>
                  <Button onClick={delSession} disabled={!Session} startIcon={<DeleteIcon />} color='error'>Delete</Button>
                </Stack>
                </TableCell>
                <TableCell sx={{fontWeight:`500`}}>{sessionList ? sessionList.length : 0}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* ================Model===================== */}
      {/* ================================================== */}
      {/* Model For Program Add */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add New Program <br /><br />
              <strong>{instituteName}</strong>
            </Typography>
            <TextField
              value={Program}
              onChange={(e) => { setProgram(e.target.value) }}
              sx={{ margin: `1em 0 0 0` }} label={`Program title`} size='small' fullWidth />
            <TextField
              value={DegreeNameOnUni}
              onChange={(e) => { setDegreeNameOnUni(e.target.value) }}
              sx={{ margin: `1em 0 0 0` }} label={`Degree Title on Program`} size='small' fullWidth />
            {!updateMode &&
              <Button variant={`contained`} 
              sx={{ margin: `1em 0 0 0` }} 
              type='submit' color={`success`} onClick={addNewProgram}>Add</Button>}
            {updateMode &&
              <Button variant={`contained`} 
              sx={{ margin: `1em 0 0 0` }} 
              type='submit' color={`success`} 
              onClick={updateProgram}>Update</Button>
            }
            </Box>
        </Fade>
      </Modal>
      {/* ================================================== */}
      {/* Model for Campus Add */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modelCampus}
        closeAfterTransition
        onClose={handleCloseModelCampus}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modelCampus}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add New Campus
            </Typography>
            <br />
            <Typography>
              In Program : <strong>{Program}</strong>
            </Typography>
            <TextField
              value={Campus}
              onChange={(e) => { setCampus(e.target.value) }}
              sx={{ margin: `1em 0 0 0` }} label={`Campus`} size='small' fullWidth />
              {!updateMode &&
            <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={addNewCampus}>Add</Button>}
            {updateMode && <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={updateCampus}>Update</Button>}
          </Box>
        </Fade>
      </Modal>
      {/* ========================Department ================= */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modelDepartment}
        closeAfterTransition
        onClose={() => setmodelDepartment(false)}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modelDepartment}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add New Department
            </Typography>
            <br />
            <Typography>
              In Campus :<strong>{Campus}</strong>
            </Typography>
            <TextField
              value={Department}
              onChange={(e) => { setDepartment(e.target.value) }}
              sx={{ margin: `1em 0 0 0` }} label={`Department`} size='small' fullWidth />
              {!updateMode &&
            <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={addNewDartment}>Add</Button>}
            {updateMode &&
            <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={updateDartment}>Update</Button>}
          </Box>
        </Fade>
      </Modal>
      {/* ========================Degree Type ================= */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modelDegreeType}
        closeAfterTransition
        onClose={() => setmodelDegreeType(false)}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modelDegreeType}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add New Degree Type
            </Typography>
            <br />
            <Typography>
              In Department :<strong>{Department}</strong>
            </Typography>
            <TextField
              value={DegreeType}
              onChange={(e) => { setDegreeType(e.target.value) }}
              sx={{ margin: `1em 0 0 0` }} label={`Degree Type`} size='small' fullWidth />
              {!updateMode &&
            <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={addNewDegreeType}>Add</Button>}
            {updateMode &&
            <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={updateDegreeType}>Update</Button>}
          </Box>
        </Fade>
      </Modal>
      {/* ======================Session ======================= */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modelSession}
        closeAfterTransition
        onClose={() => setmodelSession(false)}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modelSession}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add New Session
            </Typography>
            <br />
            <Typography>
              In Degree Type :<strong>{DegreeType}</strong>
            </Typography>
            <TextField
              value={Session}
              onChange={(e) => { setSession(e.target.value) }}
              sx={{ margin: `1em 0 0 0` }} label={`Session`} size='small' fullWidth />
              {!updateMode && 
            <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={addNewSession}>Add</Button>}
          {updateMode && 
            <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={updateSession}>Update</Button>}
          </Box>
        </Fade>
      </Modal>
      {/* =======================Toast or Snack bar Message Show==================  */}
      <Snackbar
        anchorOrigin={{ vertical: `top`, horizontal: `center` }}
        open={toast}
        autoHideDuration={1000}
        onClose={handleCloseToast}
        action={action}
      >
        <Alert onClose={handleCloseToast} severity="success" sx={{ width: `100%` }}>
          {toastMsg}
        </Alert>
      </Snackbar>
    </div>
  )
}
Fpdegreedetail.layout = `FP`
export default Fpdegreedetail
