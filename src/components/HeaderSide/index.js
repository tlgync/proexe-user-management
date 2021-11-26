import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

import './HeaderSide.css';

export const HeaderSide = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl || false;
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="header_container">
      <Button
        style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', outline: 0 }}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span>Tolga Yonca</span>
        <div
          onClick={handleClick}
          className="profile_container"
        >
          <img
            className="profile_image"
            width="35"
            src="https://media-exp1.licdn.com/dms/image/C5603AQEmdm1PnAsuwg/profile-displayphoto-shrink_100_100/0/1601992336748?e=1641427200&v=beta&t=M_LwX5JbW1aosxUK7o_M7fItI8bz1X6YNiy8Dpp5f0o"
            alt="profileImage"
          />
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

    </div>
  );
};
