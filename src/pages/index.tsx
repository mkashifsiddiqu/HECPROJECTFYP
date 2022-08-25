/* eslint-disable prettier/prettier */
import React from 'react';
import Dashboard from './Dashboard';
import type { NextPage } from 'next';

const Home: NextPage = (props) => {
  return (
    <>
      <Dashboard />
      {/* <Loading/> */}
    </>
  );
};
export default Home;
