/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import { Alert, Box, Button, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { makeStyles } from '@mui/styles';
import Qualificationdetail from './DetailofDegreeCompoent/Qualificationdetail';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import DegreeCard from './DetailofDegreeCompoent/DegreeCard/DegreeCard';
import Degree from './DetailofDegreeCompoent/Degree';
import { useSelector } from 'react-redux';
import Loading from '@/Components/Student/Layout/Loading';
const useStyles = makeStyles({
  myalert: {
    backgroundColor: `#fff4e5`,
    margin: `1em`,
  },
  myalertLink: {
    color: `#3e3c76!important`,
  },
});
const Detailofdegree = () => {
  //For Loading 
  const [loading, setloading] = useState<boolean>(false)
  //Student emial 
  const list = useSelector((state)=>state.stdLoginReducer.userData)
  const {email} = list.data
  const Email = email
  //According Working
  const [showAcco, seShowAcco] = React.useState(false);
  const [Mode,setMode] = useState<string>(`New`)
  const classes = useStyles();
  //**********************TO Handle Cancel and Next in Accorin */
  const [nextAccord, setnextAccord] = React.useState<string>(`open`)
  const handleClick = () => {
    seShowAcco(true);
  };
  // *******************End of Handle ******************************/
  //********************Qualification Level********************** */
  const [Qualilevel, SetQaliLevel] = React.useState<string | null>(``)
  const [degStatus, setDegStatus] = useState<string>(``)
  const [degstart, setDegStart] = React.useState<Date | null>(new Date)
  const [endDeg, SetEndDeg] = React.useState<Date | null>(new Date)
  const [NameDeg, setNameDeg] = React.useState<string | null>(``)
  //For Date Set 
  const handleStart = (newValue: Date | null) => {
    setDegStart(newValue);
  };
  const handleEnd = (newValue: Date | null) => {
    SetEndDeg(newValue);
  };
  //**********************End of QLvel************************** */
  // **********************Details of Degree***********************///
  const [Country, setCountry] = useState<string | null | undefined>(``)
  const [InsituteName, SetInsituteName] = useState<string | null | undefined>(``)
  const [Program, setProgram] = useState<string | null | undefined>(``)
  const [InsistuteNameOnDegree, setInsistuteNameOnDegree] = useState<string | null | undefined>(``)
  const [Campus, setCampus] = useState<string | null | undefined>(``)
  const [Department, setDepartment] = useState<string | null | undefined>(``)
  const [DegreeType, setDegreeType] = useState<string | null | undefined>(``)
  const [Session, setSession] = useState<string | null | undefined>(``)
  const [AreaofSearch, setAreaofSearch] = useState<string | null | undefined>(``)
  const [RollNo, setRollNo] = useState<string | null | undefined>(``)
  //***********************End of Details**************************/
  //************************Get Education for degree Card****** */
  const [degreeList,setDegreeList] = useState([]);
   // Detail of Existing Degree Card
const getEducation = async () =>{
    const URL = `http://localhost:3000/api/Student/Education/EducationDetails`
    const data = {Email}
    const res = await fetch(URL, {
      method: `PATCH`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    const {edu} =response
    setDegreeList(edu)
    console.log(`Edu :`,edu)
  }
  useEffect(() => {
    getEducation()
  }, [])
  //***************************End of  Get ************************** */
  const handleResetEducation =()=>{
    setnextAccord(`open`)
    //According #1 Data 
    SetQaliLevel(null)
    setDegStart(null)
    SetEndDeg(null)
    //According #2 Data 
    setCountry(null)
    SetInsituteName(null)
    setProgram(null)
    setInsistuteNameOnDegree(null)
    setCampus(null)
    setDepartment(null)
    setDegreeType(null)
    setSession(null)
    setAreaofSearch(null)
    setRollNo(null)
    // Mode of Acc 
    setMode(`New`)
  }
  // *********************Add Education Function *****************/
  const handleEducation = async () => {
    const data = {
      Qualilevel,degStatus, // Degree Level and Status 
      degstart, endDeg, 
      NameDeg,//Person Name on Degree
      Country, InsituteName, InsistuteNameOnDegree, Program,
      Campus, Department, DegreeType, Session, AreaofSearch,
      RollNo,Email
    }
    seShowAcco(false)
    console.log(data)
    // Write Backend Here Only
    const URL = `http://localhost:3000/api/Student/Education/EducationDetails`
    const res = await fetch(URL, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(response)
    getEducation()
  }
 
  // *********************End of  Education Function *****************/
  //Delete Education 
  const handleDeleteEdu =async(id:string)=>{

    setloading(true)
    const URL = `http://localhost:3000/api/Student/Education/EducationDetails`
    const data ={id}
    const res = await fetch(URL, {
      method: `DELETE`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    if(response)
    {getEducation()
      setloading(false)
    }
  }
  //FC for Veiw Degree Detail and Edit Show
  const [temporyID, settemporyID] = useState<string>(``)
  const handleVeiwFordegree =async(id:string,modeOfAcc:string)=>{
    seShowAcco(true)
    setnextAccord(`open`)
    //use for Edit 
    settemporyID(id)
    const URL = `api/Student/Education/getEducationById`
    const data ={id}
    const res = await fetch(URL, {
      method: `POST`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    console.log(response)
    if(response)
    {  const {
      AreaOfResearch,
      CampusTitle,
      Country,
      DegreeType,
      DepartmentTitle,
      EndDate,
      InstituteName,
      ProgramTitle,
      QualificationLevel,
      RollNumber,
      SessionType,
      StartDate,
      UniversityNameOnDegree} = response.edu
      //According #1 Data 
      SetQaliLevel(QualificationLevel)
      setDegStart(StartDate)
      SetEndDeg(EndDate)
      //According #2 Data 
      setCountry(Country)
      SetInsituteName(InstituteName)
      setProgram(ProgramTitle)
      setInsistuteNameOnDegree(UniversityNameOnDegree)
      setCampus(CampusTitle)
      setDepartment(DepartmentTitle)
      setDegreeType(DegreeType)
      setSession(SessionType)
      setAreaofSearch(AreaOfResearch)
      setRollNo(RollNumber)
      // Mode of Acc 
      setMode(modeOfAcc)



    }
  }
  //********For Editing Degree Request************************** */
  const handleEditForEdu =async()=>{
    seShowAcco(false)
    const URL = `http://localhost:3000/api/Student/Education/getEducationById`
    const data ={id:temporyID,
      Qualilevel, degstart, endDeg, NameDeg,
      Country, InsituteName, InsistuteNameOnDegree, Program,
      Campus, Department, DegreeType, Session, AreaofSearch,
      RollNo,Email}
    const res = await fetch(URL, {
      method: `PATCH`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    })
    const response = await res.json()
    if(response)
    {  
      getEducation()
      setloading(false)
      console.log(response)
      handleResetEducation()
      
    }
  }
  return (
    <div>
      {/* Simple Alert */}
      {loading && <Loading/>}
      <Box sx={{ m: 2 }}>
        <Alert
        sx={{backgroundColor: `#fff4e5`, margin:'1rem', fontWeight:'600', fontSize:"13px"}}
          icon={<LightbulbIcon />}
          severity="warning"
        >
          This page shows details of only those qualification(s) which are
          attested by HEC. To view your other qualification(s),which were saved
          at eportal.hec.gov.pk,
          <br />
          Please{` `}
          <a href="#" className={classes.myalertLink}>
            click here
          </a>
        </Alert>
      </Box>
      <Divider variant="middle" sx={{ ml: 4, mr: 4 }} />
      <Box sx={{ m: 2 }}>
        <Alert
        sx={{backgroundColor: `#fff4e5`, margin:'1rem', fontWeight:'600', fontSize:"13px"}}
          icon={<ReportProblemIcon />}
          severity="warning"
        >
          You have currently enrolled Bachelor (16 Years) Degree, please update
          your Bachelor (16 Years) Degree if <br />
          completed or you want to add another currently enrolled education
        </Alert>
      </Box>
      {/* Show when click on Button */}
      {showAcco && <Qualificationdetail
        nextAccord={nextAccord} setnextAccord={setnextAccord}
        Qualilevel={Qualilevel} SetQaliLevel={SetQaliLevel}
        degStatus={degStatus} setDegStatus={setDegStatus}
        degstart={degstart} handleStart={handleStart}
        endDeg={endDeg} handleEnd={handleEnd}
        NameDeg={NameDeg} setNameDeg={setNameDeg}
        Mode={Mode}
      />}
      {showAcco &&
        <Box sx={{ mt: -3, mb: 2 }}>
          <Degree nextAccord={nextAccord} setnextAccord={setnextAccord}
            Country={Country} setCountry={setCountry}
            InsituteName={InsituteName} SetInsituteName={SetInsituteName}
            Program={Program} setProgram={setProgram}
            InsistuteNameOnDegree={InsistuteNameOnDegree} setInsistuteNameOnDegree={setInsistuteNameOnDegree}
            Campus={Campus} setCampus={setCampus}
            Department={Department} setDepartment={setDepartment}
            DegreeType={DegreeType} setDegreeType={setDegreeType}
            Session={Session} setSession={setSession}
            AreaofSearch={AreaofSearch} setAreaofSearch={setAreaofSearch}
            RollNo={RollNo} setRollNo={setRollNo}
            handleEducation={handleEducation}
            //for Mode 
            Mode={Mode}
            //Editting
            handleEditForEdu={handleEditForEdu}
          />
          <Divider variant="middle" sx={{ ml: 4, mr: 4 }} />
        </Box>
      }
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          margin:"15px 0 0 0",
          ml: 4,
          fontSize:"12px",
          fontWeight:"500",
          backgroundColor: `#018651`,
          color: `#fff`,
          fontFamily: `montserrat`,
          padding: `10px 30px`,
          '&:hover': {
            backgroundColor: `white`,
            color: `#8A8A8A`,
          },
        }}
      >
        Add Detail of Degree
      </Button>
      {/* Card of Added Degree */}
      <Box>
        <Typography fontSize={13} fontWeight={600} color={'#434349'} sx={{ pl: 4, m: 4, borderLeft: `4px solid #018651` }}>
          Please enter details of degree(s) which you want to get attested
        </Typography>
      </Box>
      
      <Box sx={{ pl: 3, m: 1 }}>
      {degreeList.map((edu)=>( 
      <>
       <DegreeCard key={edu._id}
       id={edu._id.toString()} 
       QualificationLevel={edu.QualificationLevel}
       year={edu.EndDate}
       ProgramTitle={edu.ProgramTitle}
       InstituteName={edu.InstituteName}
       NameOnDegree={edu.PersonOnDegree}
       handleDeleteEdu={handleDeleteEdu}
       handleVeiwFordegree={handleVeiwFordegree}
       />
       <br/>
      </>
      
      ))}
          
    </Box>
      <Box>
        <Typography fontSize={13} fontWeight={600} color={'#434349'} sx={{ pl: 4, m: 4, borderLeft: `4px solid #018651` }}>
          Please{` `}
          <a href="#" onClick={handleClick}>
            <u>click here</u>
          </a>{` `}
          to add details of another degree
        </Typography>
      </Box>
    </div>
  );
};
export default Detailofdegree;
