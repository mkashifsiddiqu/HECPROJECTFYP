import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Browserhelplibrary from './Browserhelplibrary';
import Contactinfo from './Contactinfo';
import Downloadresources from './Downloadresources';

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
        <Box>
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: `100%` }}>
      <Box sx={{ borderBottom: 1, borderColor: `divider` }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: `#006e99`,
            },
          }}
        >
          <Tab label="Browser Help Library" {...a11yProps(0)} />
          <Tab label="Contact Info" {...a11yProps(1)} />
          <Tab label="Download Resources" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Browserhelplibrary />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box width={`675px`}>
          <Contactinfo />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box width={`675px`}>
          <Downloadresources />
        </Box>
      </TabPanel>
    </Box>
  );
}
