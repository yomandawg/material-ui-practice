import React from 'react';
// import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import NextLink from 'next/link';

import { MenuContainer, MenuButton } from './styled/Menu';
import DropdownMenu from './DropdownMenu';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

export default function Tabs({
  menus,
  selected,
  setSelected,
  selectedItem,
  setSelectedItem,
}) {
  return (
    <MenuContainer>
      <NextLink href={'/'}>
        <MenuButton
          index={-1}
          selected={selected}
          onClick={() => {
            setSelected(-1);
          }}
        >
          Home
        </MenuButton>
      </NextLink>
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
      <NextLink href={'/about'}>
        <MenuButton
          index={-2}
          selected={selected}
          onClick={() => {
            setSelected(-2);
            ReactGA.event({
              category: 'About Page',
              action: 'Desktop About Pressed',
            });
          }}
        >
          About
        </MenuButton>
      </NextLink>
    </MenuContainer>
  );
}
