/* eslint-disable prettier/prettier */
import { Box } from '@mui/system';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SiderBar';
type Props = {
  children: JSX.Element[] | JSX.Element;
};
const StudentLayout = ({children}:Props) => {
  return (
    <>
      <Header />
      <SideBar />
      <Box sx={{ m:{ lg:`6em 3em 0 7em`,md:`6em 0em 0 1em`} }}>
        {children}
      </Box>
      <Footer />
      
    </>
  );
};

export default StudentLayout;
