/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import loader from '@/Components/NoneLayout/loading';


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <head>
          <style>{loader}</style>
        </head>
        <body>
          <div id={`globalLoader`}>
            <div className="loader" />
            <div className='loading2'/>
            <div className='loading1'/>
            <div className='loading3'/>
        </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
