import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuButton from './styled/MenuButton';

import menus from './menus';

export default function DropdownMenu({ label, index, selected, setSelected }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    setSelected(index);
    setAnchorEl(null);
  };

  return (
    <>
      <MenuButton
        index={index}
        selected={selected}
        disableRipple
        onMouseOver={handleMouseOver}
      >
        {label}
      </MenuButton>
      <Menu
        id={label}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {menus[label].map((menu) => {
          const pathname = menu.replace(/ |\.|-/g, '').toLowerCase();
          return (
            <MenuItem
              key={pathname}
              onClick={handleClick.bind(this)}
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
