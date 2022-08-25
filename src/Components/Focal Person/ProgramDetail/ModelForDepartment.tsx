/* eslint-disable prettier/prettier */
import { Modal, Backdrop, Fade, Box, Typography, TextField, Button } from '@mui/material'
import { style } from '@mui/system'
import React from 'react'
interface modelData{
    modelDepartment:boolean,
    setmodelDepartment:React.Dispatch<React.SetStateAction<boolean>>
}
const ModelForDepartment = ({
    modelDepartment,setmodelDepartment
}) => {
    const handleCloseToast = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === `clickaway`) {
          return;
        }
        setmodelDepartment(false);
      };
  return (
    <>
     <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modelDepartment}
          closeAfterTransition
          onClose={handleCloseToast}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modelDepartment}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                Add New Campus 
              </Typography>
              <br/>
              <Typography>
                In Program :<strong>{Program}</strong>
              </Typography>
              <TextField 
              value={Campus}
              onChange={(e)=>{setCampus(e.target.value)}}
              sx={{ margin: `1em 0 0 0` }} label={`Campus`}  size='small' fullWidth />
             <Button variant={`contained`} sx={{ margin: `1em 0 0 0` }} type='submit' color={`success`} onClick={addNewCampus}>Add</Button>
            </Box>
          </Fade>
        </Modal>
    </>
  )
}

export default ModelForDepartment