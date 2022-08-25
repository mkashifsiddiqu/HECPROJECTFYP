/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { Autocomplete, Box, Button, Grid, IconButton, Modal, TableContainer, TableHead, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Alert from '@mui/material/Alert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { styled } from '@mui/material/styles';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import axios from 'axios';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector } from 'react-redux';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === `light` ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === `light` ? `#1a90ff` : `#308fe8`,
  },
}));
const useStyles = makeStyles({
  trow: {
    backgroundColor: `#f5f9fc`,
  },
  referencetext: {
    fontFamily: `montserrat`,
    fontSize: `0.8125rem`,
    color: `#138e5d`,
    fontWeight: `600`
  },
  myalert: {
    backgroundColor: `#fff4e5`,
    margin: `1em`,
    fontSize:`13px`,
    fontWeight:`600`,
    color:`#484848`
  },
  personalinfo: {
    fontFamily: `montserrat`,
    fontSize: `14px`,
    color: `#48465b`,
    fontWeight: `bold`
  }
})
const extraDoc = [
  `Stamped paper`,
  `Certified true copies of Admission/Registration form`,
  `Award list/Result statement`,
  `PMDC for MBBS`,
  `PEC for Engineering students`,
  `Industrial Training Certificate for B-TECH students`,
  `Supplementary form`,
  `Affidavit/ Marriage Certificate`,
  `Session Clash Letter`,
  `Proof of Registration/Accreditation of Professional Body/Council`,
  `Proof of PCD (Phd Country Directory)`,
  `Correction Letter from University`,
  `Verification Letter from University`,
  `Others`
]
const DocumentUpload = () => {
  const list = useSelector((state) => state.stdLoginReducer.userData)
  const { name,email,identityNumber,identityType,Nationality } = list.data
  const DegreeList = useSelector((state)=>state.selectedDegree.userData) 
  //Destrc...
  const {id,NameOnDegree,InstituteName,ProgramTitle,year,QualificationLevel} =DegreeList.data
  const classes = useStyles();
  /*****For Upload or Not Icon  */
  const [uploadFront, setuploadFront] = useState<boolean>(false)
  const [uploadFrontLink, setuploadFrontLink] = useState<string>(``)
  const [uploadBack, setuploadBack] = useState<boolean>(false)
  const [uploadBackLink, setuploadBackLink] = useState<string>(``)
  const [uploadDegree, setUploadDegree] = useState<boolean>(false)
  const [uploadDegreeLink, setuploadDegreeLink] = useState<string>(``)
  const [uploadprogress, setuploadprogress] = useState(0)
  const [uploadbtn, setUploadBtn] = useState(false)
  // *************************For Add File ************************
  const [addFileBtn, setaddFileBtn] = useState<boolean>(false)
  // **************************** Upload **************************
  const [imageName,setImageName] =useState(``)
  const [ImageOpen,setImageOpen] =useState<boolean>(false)
  const handleImageOpen =()=>setImageOpen(true)
  const handleImageClose =()=>setImageOpen(false)

  //for Uploading file on Server
  const onChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
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
        console.log(`Current progress:`, setuploadprogress(Math.round((event.loaded * 100) / event.total)));
      },
    };

    const response = await axios.post(`/api/Doc/upload`, formData, config);
    console.log(`response`, response.data);
    const { imagefile } = response.data
    return imagefile
  };
  const handleUploadFront = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setuploadFront(true)
    const link = onChangeHandler(event)
    setuploadFrontLink(await link)
    console.log(uploadFrontLink)
  }
  const handleUploadBack = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setuploadBack(true)
    const link = onChangeHandler(event)
    setuploadBackLink(await link)
  }
  const handleuploadDegree = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setUploadDegree(true)
    console.log(uploadDegree)
    const link = onChangeHandler(event)
    setuploadDegreeLink(await link)

  }
  const submitDocment =async () => {
    const data = { uploadFrontLink, uploadBackLink, uploadDegreeLink,email }
    const URL = `http://localhost:3000/api/Student/Application/upload/addDoc`
    if(uploadFrontLink)
    {const res = await fetch(URL, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(response)}
  }
  const getDocment =async () => {
    const data = { email }
    const URL = `http://localhost:3000/api/Student/Application/upload/getAllDocument`
    const res = await fetch(URL, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    if(response.success){
      const {Doc} =response
      console.log(Doc)
     setuploadFront(true)
     setuploadBack(true)
     setuploadFrontLink(Doc?.frontSide)
     setuploadBackLink(Doc?.backSide)
     setUploadDegree(true)
     setuploadDegreeLink(Doc?.degree)
    }
  }
  useEffect(() => {
    submitDocment()
  }, [uploadDegree])

useEffect(() => {
  getDocment()
}, [])
  return (
    <div>
      <Modal
        open={ImageOpen}
        onClose={handleImageClose}
        sx={{display:`flex`,justifyContent:`center`,alignItems:`center`}}
        > 
        <img src={`http://localhost:3000/api/Doc/previewdoc/${imageName}`} alt="upload"/>
        </Modal>
      <Alert
        icon={<LightbulbIcon />}
        severity='warning'
        sx={{ bgcolor: `#fff4e5`, margin: `1em` }}
        className={classes.myalert}
      >
        Please ensure to upload readable scanned copies of CNIC,
        Degree(s) along with transcript(s) and other
        documents (case to case basis)
      </Alert>
      <Typography className={classes.personalinfo}>PERSONAL DOCUMENT LIST</Typography>
      <Alert
        icon={<LightbulbIcon />}
        severity='warning'
        sx={{ backgroundcolor: `#fff4e5`, margin: `1em` }}
        className={classes.myalert}
      >
        Note: Please upload the document only in png, jpg or pdf format.
      </Alert>

      {/* Upload Document Table*/}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontSize:`11px`, color:`#757575`, fontWeight:`600`}}>TYPE</TableCell>
              <TableCell sx={{fontSize:`11px`, color:`#757575`, fontWeight:`600`}} align="left">INDENTIFICATION NUMBER</TableCell>
              <TableCell sx={{fontSize:`11px`, color:`#757575`, fontWeight:`600`}} align="left">TYPE</TableCell>
              <TableCell sx={{fontSize:`11px`, color:`#757575`, fontWeight:`600`}} align="left">COUNTRY</TableCell>
              <TableCell sx={{fontSize:`11px`, color:`#757575`, fontWeight:`600`}} align="right">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" sx={{ display: `flex`, alignItems: `center`, justifyContent: `flex-start`,fontSize:`13px`, fontWeight:`600`, color:`#383838` }}>
                {!uploadFront && <CancelIcon color='error' fontSize='small' />}
                {uploadFront && <CheckCircleIcon color='success' fontSize='small' />}
                &nbsp;
                Copy of CNIC - Front
              </TableCell>
              <TableCell sx={{fontSize:`13px`, color:`#383838`, fontWeight:`600`}} align="left">{identityNumber}</TableCell>
              <TableCell sx={{fontSize:`13px`, fontWeight:`600`, color:`#383838`}} align="left">{identityType}</TableCell>
              <TableCell sx={{fontSize:`13px`, fontWeight:`600`, color:`#383838`}} align="left">{Nationality}</TableCell>
              <TableCell sx={{ display: `flex`, justifyContent: `flex-end` }}>
                {uploadFront &&
                  <>
                    <VisibilityIcon fontSize='small' onClick={()=>{setImageOpen(true)
                    setImageName(uploadFrontLink)
                    }}/>
                    &nbsp;
                  <DeleteIcon color='error'  
                    onClick={() => setuploadFront(false)}
                    cursor='pointer' fontSize='small' />
                   &nbsp;
                  </>
                }
                {!uploadFront &&
                  <>
                    <input type={`file`} accept=".png"
                      name='pdoclist' onChange={handleUploadFront} id='upload-file-front' hidden />
                    <label htmlFor='upload-file-front'>
                      <UploadFileIcon fontSize='small' />
                    </label>
                  </>
                }
              </TableCell>

            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className={classes.trow}
            >
              <TableCell align="left" sx={{ display: `flex`, alignitems: `center`, justifyContent: `flex-start`,fontSize:`13px`, fontWeight:`600`, color:`#383838` }}>
                {!uploadBack && <CancelIcon color='error' fontSize='small' />}
                {uploadBack && <CheckCircleIcon color='success' fontSize='small' />}
                &nbsp;
                Copy of CNIC - Back
              </TableCell>
              <TableCell sx={{fontSize:`13px`, fontWeight:`600`, color:`#383838`}} align="left">{identityNumber}</TableCell>
              <TableCell sx={{fontSize:`13px`, fontWeight:`600`, color:`#383838`}} align="left">{identityType}</TableCell>
              <TableCell sx={{fontSize:`13px`, fontWeight:`600`, color:`#383838`}} align="left">{Nationality}</TableCell>
              <TableCell sx={{ display: `flex`, justifyContent: `flex-end` }}>
                {uploadBack &&
                  <>
                    <VisibilityIcon fontSize='small' onClick={()=>{setImageOpen(true)
                    setImageName(uploadBackLink)}} />
                    &nbsp;
                    <DeleteIcon color='error' onClick={() => setuploadBack(false)} fontSize='small' />
                    &nbsp;
                  </>
                }
                {!uploadBack &&
                  <>
                    <input name='pdoclist' accept=".png"
                      type={`file`} onChange={handleUploadBack} id='upload-file-back' hidden />
                    <label htmlFor='upload-file-back'>
                      <UploadFileIcon fontSize='small' />
                    </label>
                  </>
                }
              </TableCell>

            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography className={classes.personalinfo} sx={{ marginTop: `30px` }}>EDUCATION DOCUMENT LIST</Typography>
      <Alert
        icon={<LightbulbIcon />}
        severity='warning'
        sx={{ backgroundcolor: `#fff4e5`, margin: `1em` }}
        className={classes.myalert}
      >
        Note: Please upload the document only in png, jpg or pdf format.
      </Alert>
      {/* Upload Document Table*/}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontSize:`11px`, color:`#757575`, fontWeight:`600`}}>DOCUMENT TYPE</TableCell>
              <TableCell sx={{fontSize:`11px`, color:`#757575`, fontWeight:`600`}} align="right">QUALIFICATION LEVEL</TableCell>
              <TableCell sx={{fontSize:`11px`, color:`#757575`, fontWeight:`600`}} align="right">PROGRAM TITLE</TableCell>
              <TableCell sx={{fontSize:`11px`, color:`#757575`, fontWeight:`600`}} align="right">ACTIONS(Upload, View, Delete & Download Documents)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" sx={{ display: `flex`, alignitems: `center`, justifyContent: `flex-start` }}>
                {!uploadDegree && <CancelIcon color='error' fontSize='small' />}
                {uploadDegree && <CheckCircleIcon color='success' fontSize='small' />}
                &nbsp;
                Degree
              </TableCell>
              <TableCell sx={{fontSize:`13px`, fontWeight:`600`, color:`#383838`}} align="center">{QualificationLevel}</TableCell>
              <TableCell sx={{fontSize:`13px`, fontWeight:`600`, color:`#383838`}} align="left">{ProgramTitle}</TableCell>
              <TableCell sx={{ display: `flex`, justifyContent: `flex-end` }}>
                {uploadDegree &&
                  <>
                    <VisibilityIcon fontSize='small'  onClick={()=>{setImageOpen(true)
                    setImageName(uploadDegreeLink)}}/>
                    &nbsp;
                    <DeleteIcon color='error' fontSize='small' onClick={() => setUploadDegree(false)} />
                  </>
                }
                &nbsp;
                {!uploadDegree &&
                  <>
                    <input type={`file`} id='upload-file-degree'
                      name='pdoclist' accept=".png"
                      onChange={handleuploadDegree} hidden />
                    <label htmlFor="upload-file-degree">
                      <UploadFileIcon fontSize='small' cursor='pointer' />
                    </label>
                  </>
                }
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography className={classes.personalinfo} sx={{ marginTop: `30px` }}>OTHER DOCUMENTS</Typography>
      <Alert
        icon={<LightbulbIcon />}
        severity='warning'
        sx={{ backgroundcolor: `#fff4e5`, margin: `1em` }}
        className={classes.myalert}
      >
        Applicable on case to case basis such as registration/accreditation of professional body/council, DSIF, Stamp paper, Marriage certificate, verification letter, etc.
      </Alert>
      {/* Upload Document Table*/}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontSize:`11px`, color:`#757575`, fontWeight:`600`}}>DOCUMENT NAME</TableCell>
              <TableCell sx={{fontSize:`11px`, color:`#757575`, fontWeight:`600`}} align="right">DOCUMENT TYPE</TableCell>
              <TableCell sx={{fontSize:`11px`, color:`#757575`, fontWeight:`600`}} align="right">ACTIONS(Upload, View, Delete & Download Documents)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" sx={{display:`flex`,alignitems:`center`,justifyContent:`flex-start`}}>
                {!uploadDegree &&<CancelIcon color='error' fontSize='small'/>}
                {uploadDegree &&<CheckCircleIcon color='success' fontSize='small'/>}
                &nbsp;
                Degree
              </TableCell> 
              <TableCell align="center">16 Level</TableCell> 
              <TableCell align="left">Program Title</TableCell>
              <TableCell sx={{display:`flex`,justifyContent:`flex-end`}}>
                  <VisibilityIcon fontSize='small'/>
                  &nbsp;
                  <DeleteIcon color='error' fontSize='small'/>
                  &nbsp;
                  <input type={`file`} id='upload-file-degree' hidden/>
                  <label htmlFor="upload-file-degree">
                  <UploadFileIcon fontSize='small' cursor='pointer'/>
                  </label>
                </TableCell> 
  </TableRow>*/}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display='flex' justifyContent='flex-start' marginTop={`40px`} marginLeft={`15px`}>
        <Button
          variant='contained'
          color='success'
          startIcon={<AddCircleIcon />}
          onClick={() => setaddFileBtn(true)}
        >
          Add Files
        </Button>
        {/* <Button
          variant='contained'
          color='success'
          // startIcon={<AddCircleIcon />}
          onClick={submitDocment}
        >
          Saved Document 
        </Button> */}
      </Box>

      {addFileBtn && <>
        <Box marginLeft={`15px`}>
          <Alert
            icon={<LightbulbIcon />}
            severity='warning'
            sx={{ backgroundcolor: `#fff4e5`, margin: `1em` }}
            className={classes.myalert}
          >
            Note: Please upload the document only in png or pdf format.
          </Alert>
          <Grid container spacing={20}>
            <Grid item md={3}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={extraDoc}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params}
                  color='success'
                  size='small'
                  label="Document Type"
                  fullWidth
                />}
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                helperText='Please Type Comments'
                color='success'
                size='small'
                label="Comments"
                fullWidth />
            </Grid>
          </Grid>
          <Box sx={{
            marginTop: `15px`, border: `1px dashed gray`,
            height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`
          }}>
            {!uploadbtn &&
              <Box sx={{ margin: `15px 0 15px 0` }}>
                <input type={`file`} id='upload-file-degree' hidden />
                <label htmlFor="upload-file-degree">
                  <Typography sx={{ fontWeight: `600`, textAlign: `center` }}>
                    <FileUploadIcon fontSize='large' /> <br />
                    Drap and Drop file here
                  </Typography>
                  <Typography sx={{ fontWeight: `600`, textAlign: `center` }}>or</Typography>
                  <Typography sx={{
                    color: `white`, backgroundColor: `#028652`,
                    padding: `10px 25px!important`, borderRadius: `27px!important`,
                    cursor: `pointer`, textTransform: `capitalize`, fontWeight: `600`,
                    marginTop: `10px`
                  }}
                  >Browse for file</Typography>
                </label>
              </Box>
            }
            {uploadbtn &&
            <Box  display={`flex`} flexDirection={`row`} width={`100%`} height={`100%`} justifyContent={`flex-end`}>
            <InsertDriveFileIcon sx={{color:`#edeada`,width:`60px`,height:`60px`}}/>
             <Box display={`flex`} flexDirection={`column`} width={`100%`} justifyContent={`space-evenly`}>
               <Typography>{uploadDegreeLink}</Typography>  
             <BorderLinearProgress variant="determinate" value={uploadprogress} />
            </Box>
            <IconButton onClick={() => {setUploadBtn(false)
            setuploadprogress(0)
            }} sx={{borderRadius:`10%`}}>
            <DeleteForeverIcon  />
            </IconButton>
            
            </Box>
            }
          
          
          </Box>
          <Grid container spacing={1} marginTop='10px'>
            <Grid item>
              <Button variant='outlined' color='success' onClick={() => setaddFileBtn(false)}>Upload</Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='success' onClick={() => setaddFileBtn(false)}>Cancel</Button>
            </Grid>
          </Grid>
        </Box>
      </>
      }
    </div>
  )
}

export default DocumentUpload