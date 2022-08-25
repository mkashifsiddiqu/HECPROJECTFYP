/* eslint-disable prettier/prettier */
import { Paper, Box, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import bg from '@/public/BackgroundImage/bg.jpg'
import { useRouter } from 'next/router';
const FpActivate = () => {
  const router = useRouter()
  const { email } = router.query
  console.log(email)
  const [name, setName] = React.useState<string>(``)
  const [password, setPassword] = React.useState<string>(``)
  const [cpassword, setCPassword] = React.useState<string>(``)
  const [error, serError] = React.useState<string>(``)
  const [invalid,setInvalid]= React.useState<boolean>(false);
  const [isActivate,SetActivated] = React.useState<boolean>(false);
  const activatedAccount = async () => {
    const data = { name, password, email }
    if (password == cpassword) {
      const res = await fetch(`/api/focalPerson/passwordSet`, {
        method: `PATCH`, // or 'PUT'
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(data),
      })
      const response = await res.json()
      if (response.success) {
        setName(``)
        setPassword(``)
        setCPassword(``)
        SetActivated(true)
      }else if(!response.success){
        serError(response.error)
        setInvalid(true)
      }
    } else {
      serError(`Password Does not Match`)
      setInvalid(true)
    }
  }
  return (
    <div>
      <Box
        display={`flex`}
        justifyContent={`center`}
        alignItems={`center`}
        sx={{
          background: `url(${bg.src})`,
          backgroundSize: `100% 100%`,
          position: `absolute`,
          top: `0`,
          right: `0`,
          left: `0`,
          bottom: `0`,
        }}
      >
        {!isActivate &&<Paper sx={{ width: `450px`, padding: `1em` }}>
          <Typography variant="h6">Focal Person Account Activation</Typography>
          <TextField
            sx={{ margin: `1em 0 0 0` }}
            value={name}
            required
            label={`Full Name`}
            size={`small`}
            type='text'
            fullWidth
            color={`success`}
            onChange={(e) =>{ setName(e.target.value) 
              setInvalid(false)}}
          />
          <TextField
            sx={{ margin: `1em 0 0 0` }}
            value={password}
            required
            label={`Password`}
            size={`small`}
            type='password'
            fullWidth
            color={`success`}
            onChange={(e) => {setPassword(e.target.value)
              setInvalid(false)}}
          />
          <TextField
            sx={{ margin: `1em 0 0 0` }}
            value={cpassword}
            required
            label={`Verify Password`}
            size={`small`}
            type='password'
            fullWidth
            color={`success`}
            onChange={(e) =>{ setCPassword(e.target.value)
              setInvalid(false)
            }}
          />
          {invalid &&
          <Typography
          fontSize={`13px`} sx={{ mt: `25px`,ml:`25px`,color:`red`}} 
          fontWeight={`500`}>
          {error}
          </Typography>}
          <Button
            sx={{ margin: `1em 0 0 0` }}

            color={`success`}
            variant={`contained`}
            onClick={activatedAccount}
          >
            Activated
          </Button>
        </Paper>}
        {isActivate &&<Paper sx={{ width: `450px`, padding: `1em`}}>
      <Typography variant="h5" component="div" gutterBottom color='green'>
              Congratulations your is Activated
      </Typography>
      <Typography  gutterBottom color='GrayText'>
              {email}
      </Typography>
      <Button variant='contained' color='success' onClick={()=>router.push(`/FocalPerson/`)}>
          Login
      </Button>
        </Paper> }
      </Box>
    </div>
  );
};
FpActivate.layout = `none`
export default FpActivate;
