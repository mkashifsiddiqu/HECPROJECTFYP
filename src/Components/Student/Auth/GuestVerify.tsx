import { Paper, Typography,Button,Box,styled } from '@mui/material';
import qrcode from '@/public/Login/qrcode.png';
import bgverify from '@/public/Login/verify.png';
import React from 'react';
import Image from 'next/image';
import Modal from '@mui/material/Modal';

import CircularProgress, {
    CircularProgressProps,
  } from '@mui/material/CircularProgress';
const Input = styled(`input`)({
    display: `none`,
    
  });
 const style = {
    position: `absolute` as 'absolute',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    width: 400,
    bgcolor: `background.paper`,
    boxShadow: 24,
    p: 4,
  };
  function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
  ) {
    return (
      <Box sx={{ position: `relative`, display: `inline-flex` }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: `absolute`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
const GuestVerify = () => {

    const [progress, setProgress] = React.useState(10);
    const [showProgres, SetshowProgres] = React.useState(true);
    const [states,setState] = React.useState({selectedFiles:[]});
    React.useEffect(() => {
      const timer = setInterval(() => {
         setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));

      }, 600);
      return () => {
        if(progress==100)
        {
            SetshowProgres(false)
        }
      };
    },[]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSelectedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ selectedFiles: Array.from(event.target.files)})
  }
  return (
    <>
      <Paper sx={{ p: `30px 25px`,width: `425px` }}>
        <Box sx={{ width: `400px`, mb: `6.5px` }}>
          <Typography
            fontSize={`22px`}
            sx={{ textTransform: `capitalize`, fontWeight: `700` }}
          >
            Guest Verify Degree
          </Typography>
          <Typography
            fontSize={`13px`}
            color={`#333333D9`}
            sx={{ textTransform: `capitalize`, fontWeight: `600`,mb:`3px`}}
          >
            Only Upload QRCODE Degree File (PDF or PNG or JPG)
          </Typography>
          <Box
            sx={{
              display: `flex`,
              justifyContent: `space-around`,
              alignItems: `center`,
            }}
          >
            <Image
              src={qrcode}
              alt={`qrcode`}
              width={`100px`}
              height={`100px`}
            />
            <label htmlFor="contained-button-file">
              <Input
                accept="file/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={(e)=>handleSelectedFile(e)}
              />
              <Button
                variant="contained"
                component="span"
                sx={{
                  backgroundColor: `#1BB55E`,
                  '&:hover': { backgroundColor: `#1BB55E` },
                }}
              >
                Upload
              </Button>
              
            </label>
          </Box>

          <Button
            variant={`contained`}
            onClick={handleOpen}
            sx={{
              width: `382px`,
              height: `48px`,
              mt: `12px`,
              backgroundColor: `#1BB55E`,
              '&:hover': { backgroundColor: `#1BB55E` },
            }}
          >
            Verify Degree
          </Button>
        </Box>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Verification of Degree
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2,color:`#1BB55E`,fontSize:`13px` }}>
                Verified successfully!
        </Typography>
        </Paper>
      </Modal>
      </Paper>
    </>
  );
};

export default GuestVerify;
