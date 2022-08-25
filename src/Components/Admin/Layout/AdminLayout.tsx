/* eslint-disable prettier/prettier */
import React from 'react'
import Header from '../Header'
import SideBar from './SideBar'
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
      <Box sx={{ m: `6em .75em 1em 7em` }}>
        {children}
      </Box>
      <Footer/>
     
    </>
  )
}

export default AdminLayout