/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt,faAlignRight } from '@fortawesome/free-solid-svg-icons';
import { IconButton, Link, Typography } from '@mui/material';
import Bellnotification from './Bellnotification';
import Personalprofile from './Personalprofile';
type Anchor = 'top';
export default function ResponsiveHeader() {
  const [state, setState] = React.useState({ top: false });
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
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[`Inbox`, `Starred`, `Send email`, `Drafts`].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {([`top`] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton>
            <MoreVertIcon onClick={toggleDrawer(anchor, true)}>
              {anchor}
            </MoreVertIcon>
          </IconButton>
          <Drawer
            elevation={0}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            transitionDuration={0.5}
            sx={{
              Paper: { backgroundColor: `transparent` },
            }}
          >
            <Box
              display={`flex`}
              justifyContent={`flex-end`}
              alignItems={`center`}
              paddingRight={`25px`}
              sx={{
                position: `inherit`,
                top: `80px`,
                backgroundColor: ` white`,
                right: `0px`,
                width: `100%`,
                boxShadow: 0,
              }}
            >
              <Link
                href="#"
                sx={{
                  textDecoration: `none`,
                  '&:hover': { textDecoration: `underline` },
                }}
              >
                <Typography
                  display={`flex`}
                  alignItems={`center`}
                  sx={{ color: `#006d9a!important` }}
                  fontFamily={`montserrat`}
                  fontSize={13}
                  fontWeight={600}
                >
                  <FontAwesomeIcon
                    className="fa-lg"
                    icon={faCloudDownloadAlt}
                    style={{
                      width: `20px`,
                      height: `16px`,
                      margin: `0 2px 0 0`,
                    }}
                  />
                  Download Manual
                </Typography>
              </Link>
              <Bellnotification />
              <Personalprofile />
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}
