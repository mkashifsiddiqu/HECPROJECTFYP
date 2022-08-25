/* eslint-disable prettier/prettier */
import React from 'react'
import Header from './Header'
import SideBar from './SiderBar'
import { Box } from '@mui/system';
import Footer from '@/Components/Student/Layout/Footer';

type Props = {
  children: JSX.Element[] | JSX.Element;
};
const AdminLayout = ({children}:Props) => {
  return (
    <>
     
      <Header/>
      <SideBar/>
      <Box sx={{ m: `7.5em 1em 1em 7.5em` }}>
        {children}
      </Box>
      <Footer/>
     
    </>
  )
}

export default AdminLayout