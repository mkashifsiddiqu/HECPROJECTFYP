/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faHome,
  faListAlt,
  faAlignCenter,
  faBook,
  faAlignRight,
} from '@fortawesome/free-solid-svg-icons';
import { Close } from '@mui/icons-material';
import { useRouter } from 'next/router';
type Anchor = 'top' | 'left' | 'bottom' | 'right';
export default function ResponsiveSiderBar() {
  const router = useRouter();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
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

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === `top` || anchor === `bottom` ? `auto` : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display={`flex`} justifyContent={`flex-end`}>
      <IconButton onClick={toggleDrawer(anchor, false)} sx={{borderRadius:`1px`,m:1}}>
        <Close/>
      </IconButton>
      </Box>
      <List>
        {[`Home`, `Degree Attestation`, `Track Application`, `Equivalance Service`, `E-courses`].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index == 0 && <FontAwesomeIcon className="fa-lg" icon={faHome} /> }
                {index == 1 && <FontAwesomeIcon className="fa-lg" icon={faBookOpen} /> }
                {index == 2 && <FontAwesomeIcon className="fa-lg" icon={faListAlt} /> }
                {index == 3 && <FontAwesomeIcon className="fa-lg" icon={faAlignCenter} /> }
                {index == 4 && <FontAwesomeIcon className="fa-lg" icon={faBook} /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {([`left`] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton>
            <MenuIcon onClick={toggleDrawer(anchor, true)}>
              {anchor}
            </MenuIcon>
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            transitionDuration={0}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
