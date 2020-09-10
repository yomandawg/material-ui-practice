import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import NextLink from 'next/link';
import ButtonLink from './MuiNextLink';
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
}))`
  color: white;
  opacity: ${({ selected }) => (selected ? 1 : 0.7)};

  &.MuiListItem-root {
    padding: 0;
  }

  & div {
    text-align: center;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 2em;
    padding-right: 2em;
  }
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
        open={openDrawer === true}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <ToolbarMargin />
        <List disablePadding>
          <StyledListItem
            disableGutters
            selected={selected === -1}
            href="/"
            component={ButtonLink}
          >
            <ListItemText
              onClick={() => {
                setSelected(-1);
                setOpenDrawer(false);
              }}
              disableTypography
            >
              Home
            </ListItemText>
          </StyledListItem>
          {menus.map((menu, index) => (
            <StyledListItem
              disableGutters
              key={index}
              index={index}
              selected={selected === index}
              href={menu[0].link}
              component={ButtonLink}
            >
              <ListItemText
                disableTypography
                onClick={() => {
                  setSelected(index);
                  setOpenDrawer(false);
                  setSelectedItem(menu[0].name);
                }}
              >
                {menu[0].name}
              </ListItemText>
            </StyledListItem>
          ))}
          <StyledListItem
            disableGutters
            component={ButtonLink}
            href="/about"
            selected={selected === -2}
          >
            <ListItemText
              onClick={() => {
                setSelected(-2);
                setOpenDrawer(false);
                ReactGA.event({
                  category: 'About Page',
                  action: 'Mobile About Pressed',
                });
              }}
              disableTypography
            >
              About
            </ListItemText>
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
