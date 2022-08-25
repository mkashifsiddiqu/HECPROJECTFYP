/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
interface Pages{
  name:string
}
interface LProps{
  name:string,
  email:string,
  pages:Pages
}
interface RProp{
  refresh:boolean,
  setFresh:React.Dispatch<React.SetStateAction<boolean>>
}
export default function BasicTable({refresh,setFresh}:RProp) {
  const [allUser, setAllUser] = React.useState([]);
  const [loading,setLoading] = React.useState<boolean>(true)
  const fetchTable = async () => {
    setFresh(false)
    const res = await fetch(`/api/admin/User/getAllUser/`, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
    });
    const response = await res.json();
    if(response.succes)
    {
      setLoading(false)
    }
    setAllUser(response.user);
  };
  const delTable = async (email:string)=>{
    setLoading(true)
    if(email!=``)
    {const data ={email}
    const res = await fetch(`/api/admin/User/delUser/`, {
      method: `DELETE`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    fetchTable();
  }}
  React.useEffect(() => {
    fetchTable();
  }, [refresh]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Pages</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        {loading && 
        <Box sx={{display:`flex`,width:`180vh`,height:`20vh`,justifyContent:`center`,alignItems:`center`}}>
          <CircularProgress  />
        </Box>
        
        }
        {!loading && <TableBody >
        {allUser.map((row:LProps, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>

              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.pages.map((list:Pages)=>(
                  <FormControlLabel
                     key={list.name}
                    sx={{display:`flex`,flexDirection:`row`}}
                    control={<Checkbox checked />}
                    label={list.name}
                  />
                ))}
              </TableCell>
              <TableCell >
                  <Box sx={{display:`flex`,flexDirection:`column`,justifyContent:`center`}}>
                  <Button >Update</Button>
                  <Button onClick={()=>{delTable(row.email)}}>Delete</Button>
                  </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>}
      </Table>
    </TableContainer>
  );
}
BasicTable.layout = `none`;
