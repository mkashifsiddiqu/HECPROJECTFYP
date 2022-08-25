/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  Select,
  Modal,
  Paper,
  Stack,
  Autocomplete,
  Fade,
  Backdrop,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import { useSelector } from 'react-redux';
import { Add } from '@mui/icons-material';
import { style } from '@mui/system';
import Image from 'next/image'
const Input = styled(`input`)({
  display: `none`,
});

const FpDegreetemplate = () => {
  const list = useSelector((state) => state.loginFPReducer.userData)
  const { instituteName } = list.data
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previewImage, setProImage] = React.useState()
  const handleImage = (event) => {
    const file = event.target.files[0]
    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      setProImage(reader.result)
    }

  }

  const handleChange = () => {

  }
  //================================STATE FOR PAGE ================================
  const [TypeId, setTypeId] = useState<string>(``)
  const [TypeName, setTypeName] = useState<string>(``)
  const [TypeList, setTypeList] = useState([])
  //For template 
  const [templateId, settemplateId] = useState<string>(``)
  const [templateList, setTemplateList] = useState([])
  const [templateName, settemplateName] = useState<string>(``)
  const [startDate, setstartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date())
  //Preview Image 
  const [ImagePreview, setImagePreview] = useState()
  const handleDateStart = (newValue: Date | null) => {
    setstartDate(newValue);
  };
  const handleDateEnd = (newValue: Date | null) => {
    setendDate(newValue);
  };
  //Update 
  const [updateMode, setupdateMode] = useState<boolean>(false)
  //==============================Model ====================================
  const [TypeModel, setTypeModel] = React.useState<boolean>(false);
  const [TemplateModel, setTemplateModel] = React.useState<boolean>(false);
  const handleCloseTypeModel = () => setTypeModel(false)
  const handleCloseTemplateModel = () => setTemplateModel(false)
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
  //==============================Degree Type Template ==============================
  const getDegreeType = async () => {
    const data = { instituteName }
    const URL = `http://localhost:3000/api/degree/getDegreeTypeTemp`
    const res = await fetch(URL, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),

    })
    const response = await res.json()
    if (response) {
      console.log(response)
      const { degreeTemplate } = response
      if (degreeTemplate) {
        setTypeList(degreeTemplate)
      }

    }
  }
  const AddNewDegreeType = async () => {
    setTypeModel(false)
    const data = { instituteName, TypeTitle: TypeName }
    const URL = `http://localhost:3000/api/degree/degreeTypeTemplate`
    const res = await fetch(URL, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),

    })
    const response = await res.json()
    if (response) {
      console.log(response)
      const { degreeTemplate } = response
      if (degreeTemplate) {
        setTypeList(degreeTemplate)
      }

    }
  }
  const updateDegreeType = async () => {
    setTemplateModel(false)
    const data = { TypeId, TypeTitle: TypeName }
    const URL = `http://localhost:3000/api/degree/updateDegreeTypeById`
    const res = await fetch(URL, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),

    })
    const response = await res.json()
  }
  const delDegreeType = async () => {
    const data = { TypeId }
    const URL = `http://localhost:3000/api/degree/delTemplateType`
    const res = await fetch(URL, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),

    })
    const response = await res.json()
    if (response) {
      getDegreeType()
    }
  }
  //==========================Degree Template Code ==================
  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // handleUploadFront(event) //for Icon
    if (!event.target.files?.length) {
      return;
    }

    const formData = new FormData();
    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    const config = {
      headers: { 'content-type': `multipart/form-data` },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, (Math.round((event.loaded * 100) / event.total)));
      },
    };
    const response = await axios.post(`http://localhost:3000/api/degree/DegreetempURL/upload/upload`, formData, config);
    console.log(`Image Upload on Server response`, response.data);

    if (response) {
      const { imagefile } = response.data
      if (imagefile) {
        settemplateName(imagefile)
      }
    }
  };
  const getAllTemplate = async () => {
    const data = { TypeId }
    const URL = `http://localhost:3000/api/degree/DegreetempURL/getTemplateURL`
    const res = await fetch(URL, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),

    })
    const response = await res.json()
    if (response) {
      const { templateurl } = response
      if (templateurl) {
        setTemplateList(templateurl)
      }
    }
  }
  const AddNewTemplate = async () => {
    setTemplateModel(false)
    const data = { TypeId, templateUrl: templateName, startDate, endDate }
    console.log(data)
    const URL = `http://localhost:3000/api/degree/degreeTemplateUrl`
    const res = await fetch(URL, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),

    })
    const response = await res.json()
  }
  const delTemplate = async () => {
    const data = { templateId }
   
    const URL = `http://localhost:3000/api/degree/DegreetempURL/delTemplateurl`
    const res = await fetch(URL, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),

    })
    const response = await res.json()
    if (response) {
      settemplateName(``)
      getAllTemplate()
    }
  }
  //===========================on Load Function ===================
  useEffect(() => {
    getAllTemplate()
  }, [TypeName])
  useEffect(() => {
    getDegreeType()
  }, [])

  return (
    <div>
      <Box margin={`10px 0`}>
        {/* <Accordion>
          <AccordionSummary>Degree Template</AccordionSummary>
          <AccordionDetails> */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: `600`, fontSize: `16px` }}>Label</TableCell>
                <TableCell sx={{ fontWeight: `600`, fontSize: `16px` }}>Field</TableCell>
                <TableCell sx={{ fontWeight: `600`, fontSize: `16px` }}>Operations</TableCell>
                <TableCell sx={{ fontWeight: `600`, fontSize: `16px` }}>Counts</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ fontWeight: `600` }}>Type</TableCell>
                <TableCell>
                  <Autocomplete
                    value={TypeName}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setTypeName(newValue);
                      } else {
                        setTypeId(newValue?._id)
                        setTypeName(newValue?.TypeTitle)
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="Degree"
                    options={TypeList}
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
                      return option?.TypeTitle;
                    }}
                    renderOption={(props, option: string) => <li {...props}>{option?.TypeTitle}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} color="success"
                        helperText={`Please Type  to Search`}
                        size="small"
                        fullWidth
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                  <Stack direction={`row`} spacing={2}>
                    <Button onClick={() => {
                      setupdateMode(false)
                      setTypeName(``)
                      setTypeModel(true)
                    }} startIcon={<Add />} color={`success`}>Add</Button>
                    <Button onClick={() => {
                      setupdateMode(true)
                      setTypeModel(true)

                    }}
                      startIcon={<EditIcon />} disabled={!TypeName}>Edit</Button>
                    <Button onClick={delDegreeType}
                      startIcon={<DeleteIcon />} color='error' disabled={!TypeName}>Delete</Button>
                  </Stack>
                </TableCell>
                <TableCell sx={{ fontWeight: `500` }}>{TypeList?TypeList.length:0}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: `600` }}>Transcript Template</TableCell>
                <TableCell>
                  <Autocomplete
                    value={templateName}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setTypeName(newValue);
                      } else {
                        settemplateId(newValue?._id)
                        settemplateName(newValue?.templateUrl)
                        setstartDate(newValue?.startDate)
                        setendDate(newValue?.endDate)
                        if(!newValue)
                        {
                        setstartDate(null)
                        setendDate(null)
                        }
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="Degree"
                    options={templateList}
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
                      return option?.templateUrl;
                    }}
                    renderOption={(props, option: string) => <li {...props}>{option?.templateUrl}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} color="success"
                        helperText={`Please Type  to Search`}
                        size="small"
                        fullWidth
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                  <Button onClick={() => {
                    setupdateMode(false)
                    setTemplateModel(true)
                  }} startIcon={<Add />} color={`success`} disabled={!TypeName}>Add</Button>
                  <Button color='primary' onClick={handleOpen} startIcon={<PhotoSizeSelectActualIcon />} disabled={!templateName}>View</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{display:`flex`,justifyContent:`center`,alignItems:`center`}}
                  >
                    <img src={`http://localhost:3000/api/degree/preveiwImage/${templateName}`}
                         alt={`degreeTemplate`}
                      />
                  </Modal>
                  <Button startIcon={<DeleteIcon />} color="error" disabled={!templateName}
                    onClick={delTemplate}>Delete</Button>
                </TableCell>
                <TableCell>{templateList?templateList.length:0}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: `600` }}>Start Date</TableCell>
                <TableCell>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      inputFormat="dd/MM/yyyy"
                      value={startDate}
                      disabled={true}
                      onChange={handleChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="success"
                          size="small"
                          fullWidth
                          disabled={false}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: `600` }}>End Date</TableCell>
                <TableCell>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      inputFormat="dd/MM/yyyy"
                      value={endDate}
                      onChange={handleChange}
                      disabled={true}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="success"
                          size="small"
                          disabled={false}
                          fullWidth
                        />
                      )}
                    />
                  </LocalizationProvider>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {/* </AccordionDetails>
        </Accordion> */}

        {/* ============================================= */}

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={TypeModel}
          closeAfterTransition
          onClose={handleCloseTypeModel}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={TypeModel}>

            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Add New Type <br /><br />
                <strong>{instituteName}</strong>
              </Typography>
              <TextField
                value={TypeName}
                onChange={(e) => { setTypeName(e.target.value) }}
                sx={{ margin: `1em 0 0 0` }} label={`Program title`} size='small' fullWidth />
              {!updateMode &&
                <Button variant={`contained`}
                  sx={{ margin: `1em 0 0 0` }}
                  type='submit' color={`success`} onClick={AddNewDegreeType}>Add</Button>}
              {updateMode &&
                <Button variant={`contained`}
                  sx={{ margin: `1em 0 0 0` }}
                  type='submit' color={`success`}
                  onClick={updateDegreeType}>Update</Button>
              }
            </Box>

          </Fade>
        </Modal>
        {/* Model For Template   */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={TemplateModel}
          closeAfterTransition
          onClose={handleCloseTemplateModel}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={TemplateModel}>

            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Add New Template For Degree Type <br /><br />
                {TypeName}
                <strong>{TypeName}</strong>
                <br /><br />
                <strong>{instituteName}</strong>
                <br />
                <br />
              </Typography>
              <input type={`file`}
                name='template' onChange={uploadImage} id='upload-file-front' />
              <br />
              <br />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  inputFormat="dd/MM/yyyy"
                  value={startDate}
                  onChange={handleDateStart}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="success"

                      helperText="Please Select Your Start Date e.g 01/01/2022"
                      size="small"
                      fullWidth
                    />
                  )}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  inputFormat="dd/MM/yyyy"
                  value={endDate}
                  onChange={handleDateEnd}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="success"
                      helperText="Please Select Your End Date e.g 01/01/2028"
                      size="small"
                      fullWidth
                    />
                  )}
                />
              </LocalizationProvider>
              {!updateMode &&
                <Button variant={`contained`}
                  sx={{ margin: `1em 0 0 0` }}
                  type='submit' color={`success`} onClick={AddNewTemplate} >Add</Button>}
              {updateMode &&
                <Button variant={`contained`}
                  sx={{ margin: `1em 0 0 0` }}
                  type='submit' color={`success`}
                  onClick={updateDegreeType}>Update</Button>
              }
            </Box>

          </Fade>
        </Modal>
      </Box>
    </div>
  );
};
FpDegreetemplate.layout = `FP`
export default FpDegreetemplate;
