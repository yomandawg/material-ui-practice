import React, { useState } from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import StyledTab from './StyledTab';

export default function DropdownTab({ label, subMenu }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledTab onClick={handleClick}>{label}</StyledTab>
      <Menu
        id={label}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {subMenu.map((menu) => (
          <MenuItem key={menu} onClick={handleClose.bind(this)}>
            {menu}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
