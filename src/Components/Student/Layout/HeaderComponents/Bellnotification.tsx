/* eslint-disable prettier/prettier */
import  React,{useEffect,useState} from 'react';
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
  const [notification, setnotification] = useState([])
  // ======================================= Read Notification ============================================
  const getNotification = async () => {
    const res = await fetch(`/api/Notification/getNotification`, {
      method: `GET`, // or 'PUT'
      headers: {
        'Content-Type': `application/json`,
      },
    })
    const response = await res.json()
    if (response) {
      const { noti } = response
      setnotification(noti)
    }

    
  }
  useEffect(() => {
    getNotification()
  }, [])
  return (
    <div>
      <IconButton onClick={handleClick} sx={{ marginRight: `10px` }}>
      {notification.length >0 &&
        <Badge
          badgeContent={
            <Typography
              paddingTop={`1px`}
              fontFamily={`montserrat`}
              fontSize={10}
              fontWeight={700}
            >
              {notification.length}
            </Typography>
          }
          color="success"
          sx={{ padding: `1px` }}
        >
          <NotificationsNoneOutlinedIcon color="disabled" />
        </Badge>}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': `basic-button`,
        }}
        anchorOrigin={{
          vertical: `bottom`,
          horizontal: `left`,
        }}
        transformOrigin={{
          vertical: `top`,
          horizontal: `center`,
        }}
      >
        <Notification />
      </Menu>
    </div>
  );
}
