/* eslint-disable prettier/prettier */
import React from 'react'
type Props = {
    children: JSX.Element[] | JSX.Element;
  };
const NoneLayout = ({children}:Props) => (
    <>
        {children}
    </>
)
export default NoneLayout