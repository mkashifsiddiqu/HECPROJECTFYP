/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Login from '@/Components/Admin/Login';
import React from 'react';
import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react';

const Admin = () => {
 
  return (
    <React.Fragment>
      <Login />
    </React.Fragment>
  );
};
Admin.layout =`none`
export default Admin;
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const session = await getSession({ req: ctx.req })

//   if (session) {
//     return {
//       redirect: {
//         destination: `/`,
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: {},
//   }
// }
