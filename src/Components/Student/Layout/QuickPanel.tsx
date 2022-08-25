/* eslint-disable prettier/prettier */

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Quickpaneltabs from '../Layout/Quick Panel Compenents/Quickpaneltabs';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComments,faHeadset,faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import{ useRouter } from 'next/router'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
type Anchor = 'top' | 'left' | 'bottom' | 'right';
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
  right: false,
  });
 const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === `keydown` &&
        ((event as React.KeyboardEvent).key === `Tab` ||
          (event as React.KeyboardEvent).key === `Shift`)
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
    const router = useRouter();
  return (
    <div>
      <Box zIndex={`1500000`} m={`4`}>
      {([`right`] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Box sx={{transform:`rotate(270deg)`, position:`fixed`,right:`-60px`,top:`35%`}}>
          <Button  variant={`contained`} sx={{bgcolor:`#048753`,'&:hover':{bgcolor:`#048753`}}} 
            startIcon={<FontAwesomeIcon icon={faQuestionCircle as IconProp} color='#fff'/>}
            onClick={toggleDrawer(anchor, true)}>Quick Panel</Button>
          </Box>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box sx={{display:`flex`,justifyContent:`flex-end`}}>
              <Button onClick={toggleDrawer(anchor, false)}>
                <CloseIcon/>
              </Button>
            </Box>
            <Quickpaneltabs/>
          </Drawer>
          <Box sx={{transform:`rotate(270deg)`, position:`fixed`,right:`-60px`,top:`63%`}}>
          <Button  variant={`contained`} sx={{bgcolor:`#048753`,'&:hover':{bgcolor:`#048753`}}}
          startIcon={<FontAwesomeIcon icon={faHeadset as IconProp} color='#fff'/>} 
          onClick={()=>{router.push(`https://onlinehelp.hec.gov.pk/`)}}>
            Online Help
          </Button>
          </Box>
        </React.Fragment>
      ))}
      <Box sx={{position:`fixed`,right:`60px`,bottom:`13%`}}>
         <Button
          variant={`contained`} 
          sx={{
          borderRadius:`8px`,height:`50px`,  
          bgcolor:`#048753`,'&:hover':{bgcolor:`#048753`},
          '&::after':{
          content: `" "`,
          position: `absolute`,
          top: `100%`,
          left: `87%`,
          marginLeft: `-13px`,
          width: `0`,
          height: `0`,
          borderTop: `13px solid #048753`,
          borderLeft: `15px solid transparent`,
          borderRight: `5px solid transparent`,
          }
        }}
          startIcon={<FontAwesomeIcon icon={faComments as IconProp} color='#fff'/>}
         >Online Chat
         </Button>
      </Box>
      </Box>
    </div>
  );
}
