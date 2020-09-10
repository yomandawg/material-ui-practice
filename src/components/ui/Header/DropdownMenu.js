import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import ButtonLink from './MuiNextLink';

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
    if (!anchorEl) {
      setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };

  const handleClick = (event, name) => {
    setAnchorEl(null);
    setSelected(index);
    setSelectedItem(name);
  };

  return (
    <>
      <MenuButton
        style={{ padding: 0 }}
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
        MenuListProps={{
          onMouseLeave: () => setAnchorEl(null),
        }}
        onMouseLeave={() => setAnchorEl(null)}
        elevation={0}
        transitionDuration={0}
        variant="menu"
      >
        {menu.map((item) => (
          <StyledMenuItem
            key={item.name}
            disableRipple
            onClick={(event) => handleClick(event, item.name)}
            selected={item.name === selectedItem}
            component={ButtonLink}
            href={item.link}
          >
            {item.name}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  );
}
