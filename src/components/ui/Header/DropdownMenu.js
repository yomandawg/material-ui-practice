import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import menus from './menus';

import Menu from '@material-ui/core/Menu';
import MenuButton from './styled/MenuButton';
import StyledMenuItem from './styled/StyledMenuItem';

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: theme.palette.common.arcBlue,
    borderRadius: 0,
  },
}));

export default function DropdownMenu({ label, index, selected, setSelected }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [location, setLocation] = useState(label);
  const classes = useStyles();

  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event, value) => {
    setLocation(value);
    setSelected(index);
    setAnchorEl(null);
  };

  useEffect(() => {
    if (index === selected) {
      for (let menu of menus[label]) {
        if (
          menu.replace(/ |\.|-/g, '').toLowerCase() ===
          window.location.pathname.slice(1)
        ) {
          setLocation(menu);
          break;
        }
      }
    }
  });

  return (
    <>
      <MenuButton
        index={index}
        selected={selected}
        disableRipple
        onMouseOver={handleMouseOver}
        disableElevation
        variant="contained"
      >
        {location}
      </MenuButton>
      <Menu
        id={label}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menus[label].map((menu) => {
          const pathname = menu.replace(/ |\.|-/g, '').toLowerCase();
          return (
            <StyledMenuItem
              key={pathname}
              onClick={(event) => handleClick(event, menu)}
              component={Link}
              to={`/${pathname}`}
              selected={menu === location && index === selected}
            >
              {menu}
            </StyledMenuItem>
          );
        })}
      </Menu>
    </>
  );
}
