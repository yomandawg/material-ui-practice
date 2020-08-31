import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { selectedCSS } from './Styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import StyledTab from './StyledTab';

export default function DropdownTab({
  label,
  subMenu,
  index,
  handleSelected,
  selected
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleSelected(index);
  };

  return (
    <>
      <StyledTab
        style={selected === index ? selectedCSS : {}}
        disableRipple={true}
        onClick={handleClick}
      >
        {label}
      </StyledTab>
      <Menu
        id={label}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {subMenu.map((menu) => {
          const pathname = menu.replace(/ |\.|-/g, '').toLowerCase();
          return (
            <MenuItem
              key={pathname}
              onClick={handleClose.bind(this)}
              component={Link}
              to={`/${pathname}`}
            >
              {menu}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
