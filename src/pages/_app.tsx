/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '@/Components/Redux/store'
import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material';
import ScrollToTop from '@/Components/Student/Layout/ScrollToTop';
import NextNProgress from 'nextjs-progressbar';
import AdminLayout from '@/Components/Admin/Layout/AdminLayout';
import StudentLayout from '@/Components/Student/Layout/StudentLayout';
import NoneLayout from '@/Components/NoneLayout/NoneLayout';
import FocalPerson from '@/Components/Focal Person/Layout/FPLayout';
import Loading from '@/Components/Student/Layout/Loading'
//NextAuth Libraray
type Props = {
  children: JSX.Element[] | JSX.Element;
};
const layouts = {
  'Admin' : AdminLayout,
  'Student':StudentLayout,
  'none':NoneLayout,
  'FP':FocalPerson,
};
const theme = createTheme({
  typography: {
    fontFamily: `montserrat`,
    fontSize: 14,
  },
  palette: {
      success:{
        main:`#1bb55e`,
        contrastText:`#fff`
      }
  }
});
export default function MyApp({ 
    Component,
    pageProps: { session,
       ...pageProps }}): JSX.Element {
  const Layout = layouts[Component.layout] || ((children:Props) => <>{children }</>);
  const [loading, setloading] = useState<boolean>(false)
  useEffect(() => {
    if (typeof window !== `undefined`) {
            const loader = document.getElementById(`globalLoader`);
        if (loader)
            loader.style.display = `none`;
            setloading(true)
          const timeoutID = setTimeout(() => {
            setloading(false)
          }, 1000);
         return () => {
            // 👇️ clear timeout when component unmounts
            clearTimeout(timeoutID);
          };
    }
}, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Hec - E Services Portal</title>
      </Head>
     { loading && <Loading/>}
      {/* for Redux  */}
      <Provider store={store}>
      <ThemeProvider theme={theme}>
      {!loading &&
      <Layout>
         {/* For Page Progress Bar */}
         <NextNProgress height={2} options={{ showSpinner: false }} color={`#3d4aed`}/>
         
          {/* All Compoent Render from Here */}
        <Component {...pageProps} />
         {/* For Scroll to Top on All View */}
         <ScrollToTop/>
      </Layout>
       }
      </ThemeProvider>
      </Provider>
    </>
  );
}

