/* eslint-disable prettier/prettier */
import { Grid } from '@mui/material';
import React from 'react';
import Alerts from '../Components/Student/Dashboard/Alerts';
import Banner from '../Components/Student/Dashboard/Banner';
import Suggestions from '../Components/Student/Dashboard/Suggestions';
import Profile from '../Components/Student/Dashboard/Profile';
import { Box } from '@mui/system';
import DashBoardTables from '../Components/Student/Dashboard/DashBoardTables';
import TaskAssigned from '../Components/Student/Dashboard/TaskAssigned';
import RecentActivities from '../Components/Student/Dashboard/RecentActivities';
import { motion } from 'framer-motion';
const Dashboard = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Alerts />
        <Banner />
       <Box>
          <Grid container>
            <Grid item md={8} xs={12}>
            <DashBoardTables></DashBoardTables>
              <TaskAssigned></TaskAssigned>
            </Grid>
            <Grid item md={4} xs={12}>
              <Suggestions></Suggestions>
              <Profile></Profile>
              <RecentActivities></RecentActivities>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </>
  );
};
// export async function getServerSideProps(context) {
//   await mongoose.connect(process.env.MONGO_URL)
//   if (mongoose.connections[0].readyState) {
    
//   }
//   const product = await Product.find();
//   return {
//     props: {products:JSON.parse(JSON.stringify(product))}, // will be passed to the page component as props
//   }
// }
Dashboard.layout = `Student`
export default Dashboard;
