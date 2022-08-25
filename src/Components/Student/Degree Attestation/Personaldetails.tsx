/* eslint-disable prettier/prettier */
import React, { useState, useEffect, FC } from 'react';
import {
  Autocomplete,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Image from 'next/image';
import Nationalitytable from './Personaldetails/Nationalitytable';
import { createTheme, ThemeProvider } from '@mui/material';
import single from '@/public/martial/single.svg';
import married from '@/public/martial/married.svg';
import male from '@/public/Gender/male.svg';
import female from '@/public/Gender/female.svg';
import EditIcon from '@mui/icons-material/Edit';
import bw from '@/public/logo.png'
import CircularProgress from '@mui/material/CircularProgress';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import cities from '../../../../Utli/CitiesofPakistn.json'
import country from './../../../../Utli/countries.json'
import countrytbl from './../../../../Utli/countryDetail/tbl_country.json'
import stateTable from './../../../../Utli/countryDetail/tbl_state.json'
import { Item } from 'framer-motion/types/components/Reorder/Item';
import axios from 'axios'
import { useSelector } from 'react-redux';
const theme = createTheme({
  typography: {
    fontFamily: `montserrat`,
    fontSize: 12,
    fontWeightRegular: 500,
  },
});
const useStyles = makeStyles({
  main: {
    margin: `7em 2em 0 6em`,
  },
  paper: {
    padding: `1.5em`,
  },
  referencetext: {
    fontFamily: `montserrat`,
    fontSize: `0.8125rem`,
    color: `#138e5d`,
    fontWeight: `600`,
  },
  chip: {
    backgroundColor: `#84dcff`,
    fontFamily: `montserrat`,
    padding: `0.5em 0.2em`,
    fontWeight: `500`,
    color: `#0491ca`,
    cursor: `pointer`,
    '&:hover': {
      backgroundColor: `#41a7fa`,
      color: `#fff`,
    },
    fontSize: `0.65rem`,
    borderRadius: `10%`,
    p: 2,
    boxShadow: `0px 1px 2px grey`,
  },
  personalinfo: {
    fontFamily: `montserrat`,
    fontSize: `0.975rem`,
    color: `#48465b`,
    fontWeight: `bold`,
  },
  box: {
    margin: `1.5em 0 `,
  },
  ltext: {
    fontFamily: `monstserrat`,
    fontSize: `12px`,
  },
  t: {
    fontFamily: `montserrat`,
    fontSize: `0.8rem`,
    fontWeight: `500`,
  },
  tarea: {
    width: `1900px`,
  },
  BGB: {
    backgroundColor: `white`,
    color: `#8A8A8A`,
    fontFamily: `montserrat`,
    padding: `0.6250em 1.875em`,
    '&:hover': {
      backgroundColor: `#8A8A8A`,
      color: `#fff`,
    },
  },

  BSF: {
    backgroundColor: `#1bb55e`,
    fontFamily: `montserrat`,
    padding: `0.6250em 1.875em`,
  },
  Btnhelp: {
    color: `#23A75C`,
    textTransform: `capitalize`,
    fontWeight: `500`,
    fontSize: `14px`,
    margin: `5px`,
    '&:hover': { backgroundColor: `transparent`, mt: `2px` },
  },
});
interface city {
  name:string,
  value:number
}
interface UniOptionType {
  inputValue?: string;
  label?: string;
  value?: number;
}
interface PersonalProps{
  firstName:string,
  setfirstName:React.Dispatch<React.SetStateAction<string>>,
  middleName:string,
  setMiddle:React.Dispatch<React.SetStateAction<string>>,
  lastName:string,
  setlastName:React.Dispatch<React.SetStateAction<string>>,
  martialStatus:string,
  setmartialStatus:React.Dispatch<React.SetStateAction<string>>,
  gender:string,
  setGender:React.Dispatch<React.SetStateAction<string>>,
  dateofbirth:Date,
  handleBOD:(newValue: Date | null) => void,
  FatherName:string,
  setFatherName:React.Dispatch<React.SetStateAction<string>>,
  address:string,
  setAddress:React.Dispatch<React.SetStateAction<string>>,
  city:city,setCity:React.Dispatch<React.SetStateAction<city>>
  postalcode:string,
  setpostalcode:React.Dispatch<React.SetStateAction<string>>,
}
const Personaldetails:FC<PersonalProps> = ({
  firstName,setfirstName,
  middleName,setMiddle,
  lastName,setlastName,
  martialStatus,setmartialStatus,
  gender,setGender,
  dateofbirth,handleBOD,
  FatherName,setFatherName,
  address,setAddress,
  city,setCity,
  postalcode,setpostalcode,
  country,setCountry,
  district,seDistrict
}) => {
  const classes = useStyles();
  const list = useSelector((state)=>state.stdLoginReducer.userData)
  const {email} = list.data
  //for Image in UI
  const [profImage, setProImage] = useState<string | ArrayBuffer | null>(bw)
  const titleList = [`Mr.`, `Dr.`, `Ms.`, `Engr.`];
  //fo<string>r Profile Image Change in Foam
  const [countryValue,setCountryValue] = React.useState<UniOptionType>();
  //for Uploading file on Server
  const [imageurl,setimageurl] =useState<string>(``)
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
        console.log(`Current progress:`,(Math.round((event.loaded * 100) / event.total)));
      },
    };
    const response = await axios.post(`http://localhost:3000/api/Profile/student/upload`, formData, config);
    console.log(`response`, response.data);
    if(response.data)
    {const { imagefile } = response.data
    setimageurl(imagefile)}
  };
  // Display Image 
  const handleImage = async(event:React.ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(event)
    const file = event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      setProImage(reader.result)
    }
    reader.onerror = error => reject(error);
    if (!event.target.files?.length) {
      return;
    }
    //Post 
  }
  const addNewProfile =async()=>{
  const  data={email,imageurl}
  const res = await fetch(`http://localhost:3000/api/Profile/student/AddNewprofile`, {
  method: `POST`, //BECAUSE WE CHECK WITH EMAIL 
  headers: {
      'Content-Type': `application/json`,
  },
  body: JSON.stringify(data),
  })
  const response = await res.json()
  console.log(response)
  }
  useEffect(() => {
    addNewProfile();
  }, [imageurl])
  
  /*****************Manage City State And Country ***************** */
  const [countryID, setCountryID] = useState<number>()
  //  useEffect(() => {
  //   stateTable.map((item)=>
  //   {if(Item.country_id==countryID)
  //   console.log(item.state_name)}
  //   )
  //  }, [countryID])
  
  
 
  return (
    <div>
      {/* Personal Info */}
      <ThemeProvider theme={theme}>
        <Box>
          <Typography className={classes.personalinfo}>
            Perosnal Info
          </Typography>
          <Divider></Divider>
          <Box className={classes.box}>
            <Box margin={`0 0 25px 0`}>
              <button style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, padding: `2px 0`, width: `110px`, height: `20px`, border: `0px`, cursor: `pointer` }}>
                {/* //we can also use useRef Heren  */}
                <input type={`file`} id='upload-progile-image' name={`profile`}
                  accept="image/*" hidden onChange={(event) => handleImage(event)} />
                <label htmlFor="upload-progile-image">
                  <Box sx={{ display: `flex`, alignItems: `center`, cursor: ` pointer` }}>
                    <Typography fontSize={`10px`} fontWeight={600} paddingRight={`5px`} >Edit Picture</Typography>
                    <EditIcon sx={{ width: `16px`, height: `16px` }} />
                  </Box>
                </label>

              </button>
               { profImage ?<Image width={`100px`} height={`100px`} layout='fixed' src={profImage?profImage:`http://localhost:3000/api/Profile/student/${imageurl}`} 
               alt="profile"/>:<CircularProgress/>}
            </Box>
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <TextField
                  required
                  className={classes.ltext}
                  select
                  color="success"
                  label={`Title`}
                  helperText="Please select title"
                  size="small"
                  fullWidth
                >
                  {titleList.map((item,index) => (
                    <MenuItem key={index} value={item} sx={{ fontSize: `12px` }}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {/* Name */}
              <Grid item md={4} xs={12}>
                <TextField
                  
                  required
                  value={firstName}
                  color="success"
                  label={`First Name`}
                  helperText="Please enter first name"
                  size="small"
                  fullWidth
                  onChange={(e)=>setfirstName(e.target.value)}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  value={middleName}
                  color="success"
                  label={`Middile Name`}
                  helperText="Please enter middle name"
                  size="small"
                  fullWidth
                  onChange={(e)=>setMiddle(e.target.value)}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                 value={lastName}
                  required
                  color="success"
                  label={`Last Name`}
                  helperText="Please enter last name"
                  size="small"
                  fullWidth
                  onChange={(e)=>setlastName(e.target.value)}
                />
              </Grid>
              {/* Check Box For Martial Status */}
              <Grid item md={4} xs={12}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                  <Typography fontSize={11} color={'rgb(51 51 51 / 85%)'} fontWeight={600}>Martial Status</Typography>
                  </FormLabel>
                  <RadioGroup
                    value={martialStatus}
                    onChange={(e)=>{
                      setmartialStatus(e.target.value)
                      console.log(martialStatus)
                    }}
                    color="success"
                    row
                    sx={{ m: `10px` }}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="single"
                      color="success"
                      control={
                        <Tooltip title={'Single'}>
                        <Radio
                          icon={<Box bgcolor={`#ebebeb`} width={35} height={35} border={`2px solid #d8d8d8`} borderRadius={`5px`} display={`flex`} justifyContent={`center`} alignItems={`center`}>{<Image src={single}/>}</Box>}
                          checkedIcon={<Box bgcolor={`#ebebeb`} width={35} height={35} border={`2px solid #00b068`} borderRadius={`5px`} display={`flex`} justifyContent={`center`} alignItems={`center`}>{<Image src={single}/>}</Box>}
                        /></Tooltip>
                      }
                    />
                    <FormControlLabel
                      value="married"
                      control={
                        <Tooltip title={'married'}>
                        <Radio
                          color="success"
                          icon={<Box bgcolor={`#ebebeb`} width={35} height={35} border={`2px solid #d8d8d8`} borderRadius={`5px`} display={`flex`} justifyContent={`center`} alignItems={`center`}>{<Image src={married}/>}</Box>}
                          checkedIcon={<Box bgcolor={`#ebebeb`} width={35} height={35} border={`2px solid #00b068`} borderRadius={`5px`} display={`flex`} justifyContent={`center`} alignItems={`center`}>{<Image src={married}/>}</Box>}
                        /></Tooltip>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item md={4} xs={12}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                  <Typography fontSize={11} color={'rgb(51 51 51 / 85%)'} fontWeight={600}>Gender</Typography>
                  </FormLabel>
                  <RadioGroup
                    value={gender}
                    onChange={(e)=>setGender(e.target.value)}
                    color="success"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Male"
                      control={
                        <Tooltip title={'Male'}>
                        <Radio
                          color="success"
                          icon={<Box bgcolor={`#ebebeb`} width={35} height={35} border={`2px solid #d8d8d8`} borderRadius={`5px`} display={`flex`} justifyContent={`center`} alignItems={`center`}>{<Image src={male}/>}</Box>}
                          checkedIcon={<Box bgcolor={`#ebebeb`} width={35} height={35} border={`2px solid #00b068`} borderRadius={`5px`} display={`flex`} justifyContent={`center`} alignItems={`center`}>{<Image src={male}/>}</Box>}
                        /></Tooltip>
                      }
                    />
                    <FormControlLabel
                      value="Female"
                      control={
                        <Tooltip title={'Female'}>
                        <Radio
                          color="success"
                          icon={<Box bgcolor={`#ebebeb`} width={35} height={35} border={`2px solid #d8d8d8`} borderRadius={`5px`} display={`flex`} justifyContent={`center`} alignItems={`center`}>{<Image src={female}/>}</Box>}
                          checkedIcon={<Box bgcolor={`#ebebeb`} width={35} height={35} border={`2px solid #00b068`} borderRadius={`5px`} display={`flex`} justifyContent={`center`} alignItems={`center`}>{<Image src={female}/>}</Box>}
                        /></Tooltip>
                      }
                    />
                    <FormControlLabel
                      value="other"
                      control={
                        <Tooltip title={'Other'}>
                        <Radio
                          color="success"
                          icon={<Box bgcolor={`#ebebeb`} width={35} height={35} border={`2px solid #d8d8d8`} borderRadius={`5px`} display={`flex`} justifyContent={`center`} alignItems={`center`}>{<Image src={male}/>}</Box>}
                          checkedIcon={<Box bgcolor={`#ebebeb`} width={35} height={35} border={`2px solid #00b068`} borderRadius={`5px`} display={`flex`} justifyContent={`center`} alignItems={`center`}>{<Image src={male}/>}</Box>}
                        /></Tooltip>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item md={4} xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      inputFormat="MM/dd/yyyy"
                      value={dateofbirth}
                      onChange={handleBOD}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="success"
                          label="Date of Birth"
                          InputLabelProps={{
                            style: {
                              fontWeight: 700,
                              fontSize: `14px`,
                              fontFamily: `montserrat`,
                            },
                          }}
                          helperText="Please Select Your Date of Birth e.g 01/01/1980"
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                  </LocalizationProvider>
              </Grid>
              <Grid item md={4} xs={12}>
              <TextField
                value={FatherName}
                onChange={(e)=>setFatherName(e.target.value)}
                 required
                  color="success"
                  label={`Father Name`}
                  helperText="Please enter father name"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* Contact Info */}
        <Box>
          <Typography className={classes.personalinfo}>Contact Info</Typography>
          <Divider></Divider>
          <Box className={classes.box}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={address}
                  onChange={(e)=>setAddress(e.target.value)}
                  required
                  color="success"
                  label={`Address`}
                  helperText="Please enter address"
                  multiline
                  minRows={2}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
              <Autocomplete
                    value={countryValue}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setCountryValue(newValue);
                        console.log(`1: `,newValue)
                      } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setCountryValue(newValue.inputValue);
                        console.log(`2: `,newValue.inputValue)
                      } else {
                        setCountryValue(newValue?.country_name);
                        setCountry(newValue?.country_name)
                        setCountryID(newValue?.country_id)
                        console.log(newValue?.country_name)
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="countries"
                    options={countrytbl}
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
                      return option.country_name;
                    }}
                    renderOption={(props, option) => <li {...props}>{option.country_name}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} label="Country" 
                      helperText='Please Select Country'
                      variant="outlined" color='success' size='small' />
                    )}
                  />
              </Grid>
              <Grid item md={6} xs={12}>
              <Autocomplete
                    value={city}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setCity(newValue?.state_name);
                      } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setCity(newValue.inputValue?.state_name);
                        seDistrict(newValue.inputValue?.state_name)
                      } else {
                        setCity(newValue?.state_name);
                        seDistrict(newValue?.state_name)
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="Cities"
                    options={stateTable}
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
                      return option.state_name;
                    }}
                    renderOption={(props, option) => <li {...props}>{option.state_name}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params}  label={`City`} 
                      helperText='Please Select City'
                      variant="outlined" color='success' size='small' />
                    )}
                  />
              </Grid>
              <Grid item md={6} xs={12}>
              <Autocomplete
                    value={city}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setCity(newValue?.state_name);
                      } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setCity(newValue.inputValue?.state_name);
                      } else {
                        setCity(newValue?.state_name);
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="Cities"
                    options={stateTable}
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
                      return option.state_name;
                    }}
                    renderOption={(props, option) => <li {...props}>{option.state_name}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params}  
                      color="success"
                      label={`District`}
                      required
                      helperText="Please select district"
                      size="small"
                      fullWidth
                      />
                    )}
                  />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  value={postalcode}
                  onChange={(e)=>setpostalcode(e.target.value)}
                  color="success"
                  label={`Postal Code`}
                  helperText="Please select postal"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* Nationality Info */}
      </ThemeProvider>
      <Box>
        <Typography className={classes.personalinfo}>
          Nationality Info
        </Typography>
        <Divider></Divider>
        <Box className={classes.box}>
          <Nationalitytable></Nationalitytable>
        </Box>
      </Box>
    </div>
  );
};

export default Personaldetails;
