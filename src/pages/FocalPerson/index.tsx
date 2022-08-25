/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Login from '@/Components/Focal Person/Layout/Login';
import React from 'react';
import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react';

const FP = () => {
 
  return (
    <React.Fragment>
      <Login />
    </React.Fragment>
  );
};
FP.layout =`none`
export default FP;