import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import menus from './menus';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuButton from './styled/MenuButton';

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: theme.palette.common.arcBlue,
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
    backgroundColor: 'unset !important',
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

  const handleClick = (value) => () => {
    setLocation(value);
    setSelected(index);
    setAnchorEl(null);
  };

  useEffect(() => {
    if (index !== selected) {
      setLocation(label);
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
            <MenuItem
              key={pathname}
              onClick={handleClick.bind(this)(menu)}
              component={Link}
              to={`/${pathname}`}
              classes={{ root: classes.menuItem }}
            >
              {menu}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
