import React from 'react';
import { Link } from 'react-router-dom';

import { MenuContainer, MenuButton } from './styled/Menu';
import DropdownMenu from './DropdownMenu';

export default function Tabs({
  menus,
  selected,
  setSelected,
  selectedItem,
  setSelectedItem,
}) {
  return (
    <MenuContainer>
      <MenuButton
        index={-1}
        selected={selected}
        onClick={() => setSelected(-1)}
        component={Link}
        to="/"
      >
        Home
      </MenuButton>
      {menus.map((menu, index) => (
        <DropdownMenu
          key={index}
          index={index}
          menu={menu}
          selected={selected}
          setSelected={setSelected}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ))}
      <MenuButton
        index={-2}
        selected={selected}
        onClick={() => setSelected(-2)}
        component={Link}
        to="/about"
      >
        About
      </MenuButton>
    </MenuContainer>
  );
}
