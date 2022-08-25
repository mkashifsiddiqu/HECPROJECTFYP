import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Badge, BadgeProps, Button, Link, styled } from '@mui/material';
import TextsmsIcon from '@mui/icons-material/Textsms';
import Home from '../../../../pages';
import { fontSize } from '@mui/system';
import { useRouter } from 'next/router'
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -11,
    top: 9
  },
  
}));

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [render, setrender] = React.useState(false);
  const onClickRender = () => {
    setrender(true);
  }
  const router =useRouter()
  return (
    <div style={{ width: "24em" }}>
      <Box sx={{ padding: "16px 16px 0 16px" }} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Typography fontFamily={"montserrat"} fontSize={14} fontWeight={700} color="#595d6e">USER NOTIFICATIONS</Typography>
        <Link onClick={() => router.push('/SeeAllNotificationPage')}
          sx={{

            border: 'none', textDecoration: 'none', p: '3px 7px 3px 7px',cursor:'pointer',
            color: '#168b88', backgroundColor: '#dbeae6', '&:hover': { backgroundColor: '#168b88', color: '#dbeae6' },
            fontSize:'12px',fontWeight:'500',textTransform:'capitalize',transitionDuration:'0.25',borderRadius:'10%'
          }}
        > See All</Link>
      </Box>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor='primary' sx={{ borderBottom: 3, borderColor: 'divider' }} >
          <Tab sx={{ padding: "8px 22px 8px 5px" }} disableRipple label={<StyledBadge color='success' badgeContent={<Typography fontFamily={"montserrat"} fontSize={10} fontWeight={700}>1</Typography>}><Typography color="#3e3c76" fontFamily={"montserrat"} fontSize={12} fontWeight={600}>Alerts</Typography></StyledBadge>} {...a11yProps(0)} />
          <Tab sx={{ padding: "8px 22px 8px 5px" }} disableRipple label={<StyledBadge color='success' badgeContent={0}><Typography color="#3e3c76" fontFamily={"montserrat"} fontSize={12} fontWeight={600}>Task</Typography></StyledBadge>} {...a11yProps(1)} />
          <Tab sx={{ padding: "8px 22px 8px 5px" }} disableRipple label={<StyledBadge color='success' badgeContent={<Typography fontFamily={"montserrat"} fontSize={10} fontWeight={700} >9</Typography>}><Typography color="#3e3c76" fontFamily={"montserrat"} fontSize={12} fontWeight={600}>Logs</Typography></StyledBadge>} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box marginY={0}>
          <Box sx={{ borderBottom: 0, borderColor: 'divider' }} paddingY={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <TextsmsIcon sx={{ marginRight: "16px" }} color='success' />
            <Box>
              <Typography color="#6a6a6a!important" fontFamily={"montserrat"} fontSize={13} fontWeight={600}>The status of your Degree Attestation System application 1718428 has been updated to Saved</Typography>
              <Typography fontFamily={"montserrat"} fontSize={12} fontWeight={500} color="#b1b1b1!important">3 months ago</Typography>
            </Box>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box marginY={1}>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Typography fontFamily={"montserrat"} color="#212529" fontSize={12} fontWeight={500}>All caught up!</Typography>
            <Typography fontFamily={"montserrat"} color="#212529" fontSize={12} fontWeight={700}>no new notifications.</Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box marginY={0}>
          <Box sx={{ borderBottom: 0, borderColor: 'divider' }} paddingY={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <TextsmsIcon sx={{ marginRight: "16px" }} color='success' />
            <Box>
              <Typography color="#6a6a6a!important" fontFamily={"montserrat"} fontSize={13} fontWeight={600}>The status of your Degree Attestation System application 1718428 has been updated to Saved</Typography>
              <Typography fontFamily={"montserrat"} fontSize={12} fontWeight={500} color="#b1b1b1!important">3 months ago</Typography>
            </Box>
          </Box>
          <Box sx={{ borderBottom: 0, borderColor: 'divider' }} paddingY={1} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <TextsmsIcon sx={{ marginRight: "16px" }} color='success' />
            <Box>
              <Typography color="#6a6a6a!important" fontFamily={"montserrat"} fontSize={13} fontWeight={600}>The status of your Degree Attestation System application 1718428 has been updated to Saved</Typography>
              <Typography fontFamily={"montserrat"} fontSize={12} fontWeight={500} color="#b1b1b1!important">3 months ago</Typography>
            </Box>
          </Box>
        </Box>
      </TabPanel>
    </div>
  );
}