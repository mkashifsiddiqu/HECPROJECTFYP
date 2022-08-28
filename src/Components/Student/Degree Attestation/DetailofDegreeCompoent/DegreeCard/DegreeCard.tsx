import { Button, Card, Checkbox, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, useState, useEffect } from 'react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { selectedDegree } from '@/Components/Redux/action/index'
import {useDispatch} from 'react-redux'
interface degreeProps {
    id: string | number,
    NameOnDegree:string, // Name of Person
    QualificationLevel: string,
    year: Date | string | number,
    ProgramTitle: string,
    InstituteName: string,
    handleDeleteEdu: (id: string) => void,
    handleVeiwFordegree: (id: string, modeOfAcc: string) => void
}
const DegreeCard: FC<degreeProps> = ({
    id, NameOnDegree,
    QualificationLevel, year,
    ProgramTitle, InstituteName,
    handleDeleteEdu,
    handleVeiwFordegree
}) => {
    const dispatch = useDispatch();
    const CurrentDate = new Date(year) 
    year = CurrentDate.getFullYear() 
    // console.log(id)
    if (ProgramTitle === ``) {
        ProgramTitle = `BS Software Enginerring`
    }
    if (InstituteName === ``) {
        InstituteName = `Univeristy of Gujrat`
    }
    //***********For Degree Selecting*********** */
    const [Check, setCheck] = useState<boolean>(false)
    useEffect(() => {
        
         const data ={id,NameOnDegree,QualificationLevel,year,
            ProgramTitle,InstituteName}
        if (Check) 
        {  
             dispatch(selectedDegree(data))
        }
    }, [Check])
return (
        <div>
            <Card sx={{ backgroundColor: `#fdfdfd` }} elevation={1}>
                <Box display={`flex`} padding={`20px 30px`}>
                    <Checkbox value={Check} onChange={() => {
                        switch (Check) {
                            case true:
                                setCheck(false)
                                break;
                            case false:
                                setCheck(true)
                                break;
                            default:
                                break;
                        }
                    }} disableRipple />
                    <Box padding={`0 0 0 37px`}>
                        <Grid container spacing={2} xs={12}>
                            <Grid item xs={12}>
                                <Typography fontFamily={`montserrat`} color="#424b5f" fontSize={15} fontWeight={600} >{QualificationLevel}</Typography>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Box marginBottom={`10px`}>
                                    <Typography marginY={`4px`} fontFamily={`montserrat`} fontSize={12} color="#94b1bc" fontWeight={700}>Year</Typography>
                                    <Typography fontFamily={`montserrat`} fontSize={12} color="#777777" fontWeight={500}>{year}</Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Box marginBottom={`10px`}>
                                    <Typography marginY={`4px`} fontFamily={`montserrat`} fontSize={12} color="#94b1bc" fontWeight={700}>PROGRAM TITLE</Typography>
                                    <Typography fontFamily={`montserrat`} fontSize={12} color="#777777" fontWeight={500}>{ProgramTitle}</Typography>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Box marginBottom={`10px`}>
                                    <Typography marginY={`4px`} fontFamily={`montserrat`} fontSize={12} color="#94b1bc" fontWeight={700}>UNIVERSITY</Typography>
                                    <Typography fontFamily={`montserrat`} fontSize={12} color="#777777" fontWeight={500}>{InstituteName}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display={`flex`} justifyContent={`flex-end`}>
                                    <Button color='success' variant='outlined' sx={{ texttransform: `none` }}
                                        onClick={() => handleVeiwFordegree(id, `View`)}
                                    ><RemoveRedEyeOutlinedIcon sx={{ padding: `0 5px 0 0` }} color='success' />View</Button>
                                    <Button color='info' variant='outlined' sx={{ texttransform: `none`, margin: `0 10px` }}
                                        onClick={() => handleVeiwFordegree(id, `Edit`)}
                                    ><EditOutlinedIcon sx={{ padding: `0 5px 0 0` }} color='info' />Edit</Button>
                                    <Button color='error' variant='outlined' sx={{ texttransform: `none` }}
                                        onClick={() => handleDeleteEdu(id)}
                                    ><DeleteOutlineOutlinedIcon sx={{ padding: `0 5px 0 0` }} color='error' />Delete</Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Card>
        </div>
    )
}

export default DegreeCard