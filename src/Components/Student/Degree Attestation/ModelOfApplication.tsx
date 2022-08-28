import { Box, Button, Modal, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import error from '@/public/Model/Error.svg';
interface DataProps {
  ExistApp: boolean,
  ExistApphandleClose:()=>void
}
export default function GeekStepper({
  ExistApp,
  ExistApphandleClose,
}: DataProps) {
  return (
    <>
      <Modal open={ExistApp} onClose={ExistApphandleClose}>
        <Paper
          sx={{
            padding: `50px 35px`,
            maxWidth: `500px`,
            height: `363.27`,
            position: `relative`,
            margin: `1.75rem auto`,
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
          }}
        >
          <Box mb={`25px`}>
            <Image src={error} alt="error" />
          </Box>
          <Typography
            mb={`6.5px`}
            fontSize={`22px`}
            color={`#3d4b57`}
            fontWeight={700}
          >
            Error!
          </Typography>
          <Typography
            mb={`25px`}
            textAlign={`center`}
            color={`#3d4b57`}
            fontSize={`14px`}
            fontWeight={500}
          >
            You already have a saved application. Please open the application
            from dashboard
          </Typography>
          <div>
            <Button disableElevation color="error" variant="contained">
              OK
            </Button>
          </div>
          {/* <Image  height={'250px'} width={'250px'} style={{position:'absolute', top:'auto', right:'-45px', bottom:'-45px', left:'auto', opacity:'0.18', verticalAlign:'middle', margin:'0', inset:'0'}} src={error} alt='error' /> */}
        </Paper>
      </Modal>
    </>
  );
}
