import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { StyledMenuIcon, StyledIconButton } from './styled/Hamburger';
import { ToolbarMargin } from './styled/Toolbar';

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  ${({ theme }) => theme.typography.tab};
  .MuiDrawer-paper {
    background-color: ${({ theme }) => theme.palette.common.blue};
  }
`;

const StyledListItem = styled(ListItem).attrs(() => ({
  divider: true,
  button: true,
}))`
  color: white;
  opacity: ${({ selected }) => (selected ? 1 : 0.7)};
`;

export default function Drawer({
  menus,
  selected,
  setSelected,
  setSelectedItem,
}) {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <StyledSwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <ToolbarMargin />
        <List disablePadding>
          <StyledListItem
            selected={selected === -1}
            to="/"
            onClick={() => {
              setSelected(-1);
              setOpenDrawer(false);
            }}
            component={Link}
          >
            <ListItemText disableTypography>Home</ListItemText>
          </StyledListItem>
          {menus.map((menu, index) => (
            <StyledListItem
              key={index}
              index={index}
              selected={selected === index}
              to={menu[0].link}
              onClick={() => {
                setSelected(index);
                setSelectedItem(menu[0].name);
                setOpenDrawer(false);
              }}
              component={Link}
            >
              <ListItemText disableTypography>{menu[0].name}</ListItemText>
            </StyledListItem>
          ))}
          <StyledListItem
            onClick={() => {
              setSelected(-2);
              setOpenDrawer(false);
            }}
            component={Link}
            to="/about"
            selected={selected === -2}
          >
            <ListItemText disableTypography>About</ListItemText>
          </StyledListItem>
        </List>
      </StyledSwipeableDrawer>
      <StyledIconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <StyledMenuIcon />
      </StyledIconButton>
    </>
  );
}
