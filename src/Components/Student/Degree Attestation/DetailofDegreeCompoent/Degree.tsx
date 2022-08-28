/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Accordion,AccordionDetails,AccordionSummary,Alert,
  Autocomplete,Button,Divider,Grid,TextField,Typography,Box
} from '@mui/material';

import LightbulbIcon from '@mui/icons-material/Lightbulb';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const Domain = process.env.Domain
interface IDegreeProp{
  Mode:string,
  nextAccord:string ,
  setnextAccord:React.Dispatch<React.SetStateAction<string >>,
  Country:string , 
  setCountry:React.Dispatch<React.SetStateAction<string >>,
  InsituteName:string ,
  SetInsituteName:React.Dispatch<React.SetStateAction<string >>,
  Program:string ,
  setProgram:React.Dispatch<React.SetStateAction<string >>,
  InsistuteNameOnDegree:string ,
  setInsistuteNameOnDegree:React.Dispatch<React.SetStateAction<string >>,
  Campus:string , 
  setCampus:React.Dispatch<React.SetStateAction<string >>,
  Department:string , 
  setDepartment:React.Dispatch<React.SetStateAction<string >>,
  DegreeType:string , 
  setDegreeType:React.Dispatch<React.SetStateAction<string >>,
  Session:string , 
  setSession:React.Dispatch<React.SetStateAction<string >>,
  AreaofSearch:string , 
  setAreaofSearch:React.Dispatch<React.SetStateAction<string >>,
  RollNo:string , 
  setRollNo:React.Dispatch<React.SetStateAction<string >>,
  handleEducation:()=>void,
  handleEditForEdu:()=>void

}
const Degree:FC<IDegreeProp> = (
  {
    nextAccord,setnextAccord,
    Country, setCountry,
    InsituteName,SetInsituteName,
    Program, setProgram,
    InsistuteNameOnDegree,setInsistuteNameOnDegree,
    Campus, setCampus,
    Department, setDepartment,
    DegreeType, setDegreeType,
    Session, setSession,
    AreaofSearch, setAreaofSearch,
    RollNo, setRollNo,
    handleEducation,
    Mode,
    handleEditForEdu

  }) => {
    //Main FC Component
    if(!nextAccord){
      setnextAccord(`close`)
    }
const [expanded, setExpanded] = React.useState<string | false>(false);
const handleChange =
(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
 };
  const handleCancel = 
  (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
    setnextAccord(`open`)
    window.scrollTo(0, 450);
  };
  //========================= Univeristies Detail from Backend ==================//
  const [countryList, setcountryList] = useState([])
  const [UniveristiesList,setUniveristiesList]=useState([])
  const [ProgramsList,setProgramList]=useState([])
  const [UniNameOnDeg,setUniNameOnDeg] =useState<string[]>([])
  const [CampusList,setCampusList]=useState([])
  const [DepartmentList,setDepartmentList]=useState([])
  const [DegreeTypeList, setDegreeTypeList] = useState([])
  const [sessionList,setsessionList]= useState([])
  const getCountry = async() =>{
   
    const URL = `${Domain}/api/hec/countryList/`
    const res = await fetch(URL, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      // body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(response)
    if(response){
      const {country} =response
      setcountryList(country)
      console.log(country)
    }
  }
  //For AutoCall Country 
  useEffect(() => {
    getCountry()
  }, [])
const getProgrambyID = async() =>{
    const URL = `${Domain}/api/hec/ListofProgram/${InsituteName}`
    const res = await fetch(URL, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      
    })
    const response = await res.json()
    if(response)
    {
      const {Program} = response
      setProgramList(Program)
      setUniNameOnDeg([InsituteName])
    }
  }
  useEffect(()=>{
    if(InsituteName)
    {
      getProgrambyID()
    }
  },[InsituteName])
  //For Campus 
  const [programId, setprogramId] = useState<string>(``)
  const getCampusbyID = async() =>{
    const URL = `${Domain}/api/hec/ListofCampus/${programId}`
    const res = await fetch(URL, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      
    })
    const response = await res.json()
    if(response)
    {
      
       const {Campus} = response
       setCampusList(Campus)
      
    }
    
  }
  useEffect(()=>{
      if(Program){
        getCampusbyID()
      }
  },[Program])
  //For Department 
  const [campusId, setCampusId] = useState<string>(``)
  const getDepartmentbyID = async() =>{
    const URL = `${Domain}/api/hec/ListofDepartment/${campusId}`
    const res = await fetch(URL, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      
    })
    const response = await res.json()
    if(response)
    {
        const {Department} = response
        setDepartmentList(Department)
      
    }
    
  }
  useEffect(()=>{
    if(Campus){
      getDepartmentbyID()
    }
},[Campus])
//for Degree Type
const [DepartmentId, setDepartmentId] = useState<string>(``)
const getDegreeTypeID = async() =>{
  const URL = `${Domain}/api/hec/ListOfdegreeType/${DepartmentId}`
  const res = await fetch(URL, {
    method: `GET`, // or 'PUT'
    headers: {
      'Content-Type': `application/json`,
    },
    
  })
  const response = await res.json()
  if(response)
  {
    const {DegreeType} = response
    setDegreeTypeList(DegreeType)
  }
  
}
useEffect(()=>{
  if(Department){
    getDegreeTypeID()
  }
},[Department])
//for Session
const [DegreeTypetId, setDegreeTypetId] = useState<string>(``)
const getSessionID = async() =>{
  const URL = `${Domain}/api/hec/ListOfSession/${DegreeTypetId}`
  const res = await fetch(URL, {
    method: `GET`, // or 'PUT'
    headers: {
      'Content-Type': `application/json`,
    },
    
  })
  const response = await res.json()
  if(response)
  {
    const {Session} = response
    setsessionList(Session)
  }
}
useEffect(()=>{
  if(DegreeType){
    getSessionID()
  }
},[DegreeType])
 return (
    <>
      <Box sx={{ m: 4 }}>
        <Accordion 
        elevation={0}
        expanded={nextAccord===`close` && expanded === `panel1`}
        onChange={handleChange(`panel1`)}
        sx={{backgroundColor:`#fff`}}>
          <AccordionSummary>
          <Box width={`100%`}>
            <Box sx={{display:`flex`,justifyContent:`space-between`,width:`100%`}}>
              <Typography fontSize={`14.43px`} color={`#48465b`} fontWeight={700}>
                Degree / Certificate Awarding Institute Details
              </Typography>
              <KeyboardArrowDownIcon/>
            </Box>
            <Divider sx={{margin:`10px 0 0 0`}}/>
            </Box>
          </AccordionSummary>
          <Alert
            icon={<LightbulbIcon />}
            severity="warning"
            sx={{backgroundColor: `#fff4e5`,margin: `2.5em`,}}
          >
            If details of your campus/college/degree title are not available,
            please contact focal person of your University or lodge a complaint
            at <br />
            <Link
              href="https://onlinehelp.hec.gov.pk/"
              style={{color: `#3e3c76!important`}}
            >
              Onlinehelp.hec.gov.pk
            </Link>{` `}
            and select Pakistan Qualification Register(PQR) in Service tab. To
            check list of focal person,please Click here
            <br />
            Please{` `}
            <Link href="#" style={{color: `#3e3c76!important`}}>
              click here
            </Link>
          </Alert>
          <AccordionDetails sx={{margin: `1.5em 0`}}>
          <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item md={4} xs={12}>
              <Autocomplete
                    disabled={Mode===`View`}
                    value={Country}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setCountry(newValue?.countryTitle)
                      } else {
                        setCountry(newValue?.countryTitle);
                        if(newValue)
                        {setUniveristiesList(newValue?.institutes)}
                        SetInsituteName(``)
                        setProgram(``)
                        setInsistuteNameOnDegree(``)
                        setCampus(``)
                        setDepartment(``)
                        setDegreeType(``)
                        setSession(``)
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="Country"
                    options={countryList}
                    getOptionLabel={(option:any) => {

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
                    renderOption={(props, option:string) => <li {...props}>{option?.countryTitle}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} color="success"
                      label={`Country`}
                      helperText={`Please select country`}
                      size="small"
                      fullWidth
                      />
                    )}
                  />
              </Grid>
              <Grid item md={4} xs={12}>
              <Autocomplete
                   disabled={Mode===`View`}
                    value={InsituteName}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        SetInsituteName(newValue);
                      } else {
                        SetInsituteName(newValue?.instituteTitle);
                        setProgram(``)
                        setInsistuteNameOnDegree(``)
                        setCampus(``)
                        setDepartment(``)
                        setDegreeType(``)
                        setSession(``)
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="CIty"
                    options={UniveristiesList}
                    getOptionLabel={(option:sting) => {

                      // Value selected with enter, right from the input
                      if (typeof option === `string`) {
                        return option;
                      }
                      // Add "xxx" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      // Regular option
                      return option.instituteTitle;
                    }}
                    renderOption={(props, option:string) => <li {...props}>{option?.instituteTitle}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} color="success"
                      label={`Degree Awarding Institute`}
                      helperText={`Please select degree awarding institute`}
                      size="small"
                      fullWidth
                      />
                    )}
                  />
              </Grid>
              <Grid item md={4} xs={12}>
              <Autocomplete
                   disabled={Mode===`View`}
                    value={Program}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setProgram(newValue);
                      } else {
                        setProgram(newValue?.programTitle);
                        setprogramId(newValue?._id)
                        setCampus(``)
                        setDepartment(``)
                        setDegreeType(``)
                        setSession(``)
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="CIty"
                    options={ProgramsList}
                    getOptionLabel={(option:any) => {

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
                    renderOption={(props, option:string) => <li {...props}>{option.programTitle}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} color="success"
                      label={`Program Title`}
                      helperText={`Please enter program title`}
                      size="small"
                      fullWidth
                      />
                    )}
                  />
              </Grid>
              {/* Degree Nmae */}
              <Grid item md={4} xs={12}>
              <Autocomplete
                   disabled={Mode===`View`}
                    value={InsistuteNameOnDegree}
                    onChange={(event, newValue:string) => {
                      if (typeof newValue === `string`) {
                        setInsistuteNameOnDegree(newValue);
                      } else {
                        setInsistuteNameOnDegree(newValue);
                        
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="University name on Degree"
                    options={UniNameOnDeg}
                    getOptionLabel={(option:any) => {

                      // Value selected with enter, right from the input
                      if (typeof option === `string`) {
                        return option;
                      }
                      // Add "xxx" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      // Regular option
                      return option;
                    }}
                    renderOption={(props, option:any) => <li {...props}>{option}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} color="success"
                      label={`University name on degree`}
                      helperText={`Please Select University name on degree`}
                      size="small"
                      fullWidth
                      />
                    )}
                  />
              </Grid>
              <Grid item md={4} xs={12}>
              <Autocomplete
                    disabled={Mode===`View`}
                    value={Campus}
                    onChange={(event, newValue:string) => {
                      if (typeof newValue === `string`) {
                        setCampus(newValue);
                      } else {
                        setCampus(newValue?.campusTitle);
                        setCampusId(newValue?._id)
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
                    getOptionLabel={(option:any) => {

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
                    renderOption={(props, option:any) => <li {...props}>{option?.campusTitle}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} color="success"
                      label={`Campus`}
                      helperText={`Please enter campus`}
                      size="small"
                      fullWidth
                      />
                    )}
                  />
              </Grid>
              <Grid item md={4} xs={12}>
              <Autocomplete
                    disabled={Mode===`View`}
                    value={Department}
                    onChange={(event, newValue) => {
                      if (typeof newValue === `string`) {
                        setDepartment(newValue);
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
                    getOptionLabel={(option:any) => {

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
                    renderOption={(props, option:any) => <li {...props}>{option?.departmentTitle}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} color="success"
                      label={`Department`}
                      helperText={`Please enter department`}
                      size="small"
                      fullWidth
                      />
                    )}
                  />
              </Grid>
              <Grid item md={4} xs={12}>
              <Autocomplete
                    disabled={Mode===`View`}
                    value={DegreeType}
                    onChange={(event, newValue:string) => {
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
                    getOptionLabel={(option:any) => {

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
                    renderOption={(props, option:any) => <li {...props}>{option?.degreeTypeTitle}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} color="success"
                      label={` Degree Type`}
                      helperText={`Please select degree type`}
                      size="small"
                      fullWidth
                      />
                    )}
                  />
              </Grid>
              <Grid item md={4} xs={12}>
              <Autocomplete
                    disabled={Mode===`View`}
                    value={Session}
                    onChange={(event, newValue:string) => {
                      if (typeof newValue === `string`) {
                        setSession(newValue);
                      }  else {
                        setSession(newValue?.sessionTitle);
                      }
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="CIty"
                    options={sessionList}
                    getOptionLabel={(option:any) => {

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
                    renderOption={(props, option:any) => <li {...props}>{option?.sessionTitle}</li>}
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} color="success"
                        label={`Session Type`}
                        helperText={`Please select session type`}
                        size="small"
                        fullWidth
                      />
                    )}
                  />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  disabled={Mode===`View`}
                  value={AreaofSearch}
                  onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
                    setAreaofSearch(e.target.value)
                    }}
                  color="success"
                  label={`Area of Research`}
                  helperText={`Please enter area of research`}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                 disabled={Mode===`View`}
                 value={RollNo}
                 onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>setRollNo(e.target.value)}
                 color="success"
                  label={`Registration/Roll Number`}
                  helperText={`Please enter registration/roll nummber`}
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
            
          </AccordionDetails>
          <Divider />
          <Box sx={{ display: `flex`, justifyContent: `flex-end`}}>
            <Button
              onClick={handleCancel(`panel1`)}
              sx={{
                m: 1,
                backgroundColor: `transparent`,
                color: `#048753`,
                boxShadow: `1px 1px 3px gray`,
                textTransform:`capitalize`
              }}
              startIcon={<ArrowLeftIcon/>}
            >
              Previos
            </Button>
            {Mode==`New` && <Button
              sx={{
                m: 1,
                backgroundColor: `transparent`,
                color: `#048753`,
                boxShadow: `1px 1px 3px gray`,
                textTransform:`capitalize`
              }}
              onClick={handleEducation}
            >
            Add Education
            </Button>}
            {Mode==`Edit` && <Button
              sx={{
                m: 1,
                backgroundColor: `transparent`,
                color: `#048753`,
                boxShadow: `1px 1px 3px gray`,
                textTransform:`capitalize`
              }}
              onClick={handleEditForEdu}
            >
            Update Education
            </Button>}
            <Button
              sx={{
                m: 1,
                backgroundColor: `transparent`,
                color: `#048753`,
                boxShadow: `1px 1px 3px gray`,
                textTransform:`capitalize`
              }}
              onClick={handleChange(`panel1`)}
            >
              Cancel
            </Button>
          </Box>
        </Accordion>
      </Box>
    </>
  );
};

export default Degree;
