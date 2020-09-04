import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { StyledMenu, MenuButton, StyledMenuItem } from './styled/Menu';

export default function DropdownMenu({
  index,
  menu,
  selected,
  setSelected,
  selectedItem,
  setSelectedItem,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event, name) => {
    setSelected(index);
    setSelectedItem(name);
    setAnchorEl(null);
  };

  return (
    <>
      <MenuButton
        index={index}
        selected={selected}
        onMouseOver={handleMouseOver}
      >
        {index === selected ? selectedItem : menu[0].name}
      </MenuButton>
      <StyledMenu
        style={{ zIndex: 1302 }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        keepMounted
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        transitionDuration={0}
        variant="menu"
      >
        {menu.map((item) => (
          <StyledMenuItem
            key={item.name}
            disableRipple
            onClick={(event) => handleClick(event, item.name)}
            component={Link}
            to={item.link}
            selected={item.name === selectedItem}
          >
            {item.name}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  );
}
