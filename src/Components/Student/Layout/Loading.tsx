/* eslint-disable react/jsx-no-undef */
import React from 'react';
import style from '@/styles/loading.module.css';
import logo from '@/public/logo.png';
import Image from 'next/image';
import Box from '@mui/material/Box';
const Loading = () => {
  return (
    <div className={style.main}>
      <div className={style.loading} />
      <div className={style.loading1} />
      <div className={style.loading2} />
      <div className={style.loading3}>
        <Image src={logo} height={`60px`} width={`60px`} alt={`logo`} />
      </div>
    </div>
  );
};
export default Loading;
