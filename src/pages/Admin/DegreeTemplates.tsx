/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React,{useEffect,useState} from 'react';
import { Typography, List, ListItem, ListItemText, Box, IconButton, Paper, Divider,Button, Chip, Tooltip, Modal } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { Visibility } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import Slider from '@/Components/Admin/DegreeIssuence/slider'
function createData(
  name: string,
  status: String,
  action: any,
) {
  return { name, status, action };
}
function newRequestData(
  DegreeName: string,
  UniveristyName: String,
  
) {
  return { DegreeName, UniveristyName};
}
 
const rows = [
  createData(`Degree Name`, `Verfied`, <IconButton><VisibilityIcon color={`primary`} /></IconButton>),
  createData(`Degree Name`, `Verfied`, <IconButton><VisibilityIcon color={`primary`} /></IconButton>),
  createData(`Degree Name`, `Verfied`, <IconButton><VisibilityIcon color={`primary`} /></IconButton>),
  createData(`Degree Name`, `Verfied`, <IconButton><VisibilityIcon color={`primary`} /></IconButton>),
];
const newRequest = [
  newRequestData(`Degree Name 1`, `University of Gujrat`),
  newRequestData(`Degree Name 2`, `University of Gujrat`),
  newRequestData(`Degree Name 3`, `University of Gujrat`),
  newRequestData(`Degree Name 4`, `University of Gujrat`),
]
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
const Degreetemplate = () => {
  //State
  const [TemplateList, setTemplateList] = useState([])
  //
  const [templateId, settemplateId] = useState(``)

  // Focal Person
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //=================================Get All Template ==============================
  
  const [imagePreview,setimagePreview] = useState(``)
  const getAllDegreeTemplate = async () => {
    const URL = `http://localhost:3000/api/degree/AdminSide/requestTemplate`
    const res = await fetch(URL, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      }
    })
    const response = await res.json()
    if (response) {
      console.log(response)
      const { DegreeTemp } = response
      setTemplateList(DegreeTemp)
    }
  }
  useEffect(() => {
    getAllDegreeTemplate()
  }, [])
  
  return (
    <div>
      <Box margin={`0 3em`} >
        <Typography fontFamily={`montserrat`} fontSize={`1rem`} color={`#0000008a`} fontWeight={600}>New Request to Verify Degree Template</Typography>
        <Paper sx={{margin:`1em 0 0 0`}}>
        <List>
       
        <TableContainer  >
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Degree Type</TableCell>
                    <TableCell>Univerity</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {TemplateList.map((newRequestData)=>(
                <>
                <TableRow key={newRequestData._id}>
                    <TableCell>{newRequestData.TypeTitle}</TableCell>
                   <TableCell>{newRequestData.instituteName}</TableCell>
                   <TableCell>
                        <Tooltip title='View'><IconButton color='primary' onClick={()=>{
                          const selectedTemplate = TemplateList.filter(tl => tl._id === newRequestData._id);
                          settemplateId(selectedTemplate[0].template);
                          selectedTemplate[0].template.map(t => {console.log(t)});
                          handleOpen()
                        }}><Visibility/></IconButton></Tooltip>
                    </TableCell>
                </TableRow>
                 {/* Model For Preview Image  */}
                
                   
                </>   
                ))}
                 <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  sx={{display:`flex`,justifyContent:`center`,alignItems:`center`}}
                    >
                      <Slider templateId={templateId}
                       />
                    </Modal>  
                   
                
            </TableBody>
        </Table>
        </TableContainer>
       
      </List>
      
        </Paper>
       <Typography margin={`1em 0`} fontFamily={`montserrat`} fontSize={`1rem`} color={`#0000008a`} fontWeight={600}>Verified Degree Template</Typography>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:`600`, fontSize:`16px`}}>Degree Type</TableCell>
            <TableCell sx={{fontWeight:`600`, fontSize:`16px`}}>Univerity name</TableCell>
            <TableCell sx={{fontWeight:`600`, fontSize:`16px`}} align="right">Status</TableCell>
            <TableCell sx={{fontWeight:`600`, fontSize:`16px`}} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TemplateList.map((row) => (
            <TableRow
            key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{fontWeight:`600`}} align="left">
                 {row.TypeTitle}
              </TableCell>
              <TableCell sx={{fontWeight:`500`}} align="left">{row.instituteName}</TableCell>
              <TableCell sx={{fontWeight:`500`}} align="right">Verified</TableCell>
              <TableCell sx={{fontWeight:`500`}} align="right"> 
              <Tooltip title='View' onClick={()=>{
                const selectedTemplate = TemplateList.filter(tl => tl._id === row._id);
                settemplateId(selectedTemplate[0].template);
                //selectedTemplate[0].template.map(t => {console.log(t)});
                handleOpen()
              }}><IconButton color='primary'>
                <Visibility/></IconButton>
                </Tooltip></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </Box>
    </div>
  );
};
Degreetemplate.layout = `Admin`
export default Degreetemplate;