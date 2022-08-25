import * as React from 'react';
import Menu from '@mui/material/Menu';
import { Badge, IconButton, Typography } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Notification from './BellNotificationCompoent/Notifications';
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick} sx={{marginRight:"10px"}}>
        <Badge badgeContent={<Typography paddingTop={"1px"} fontFamily={"montserrat"} fontSize={10} fontWeight={700}>20</Typography>} color="success" sx={{padding:"1px"}}>
          <NotificationsNoneOutlinedIcon color='disabled'/>
          </Badge>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical:'bottom',
          horizontal:'left'
        }}
        transformOrigin={{
          vertical:'top',
          horizontal:'center'
        }}
      >
      <Notification/>
      </Menu>
    </div>
  );
}