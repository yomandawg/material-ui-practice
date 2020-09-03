import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import logo from 'assets/logo.svg';
import menus from './menus';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HideOnScroll from './HideOnScroll';
import DropdownMenu from './DropdownMenu';
import ToolbarMargin from './styled/ToolbarMargin';
import Logo from './styled/Logo';
import MenuContainer from './styled/MenuContainer';
import MenuButton from './styled/MenuButton';
import StyledIconButton from './styled/StyledIconButton';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';

import { arc as theme } from 'components/theme';

export default function Header(props) {
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    const pathname = window.location.pathname.slice(1);
    switch (pathname) {
      case 'about':
        setSelected(-2);
        break;
      case 'javascript':
      case 'typescript':
      case 'nodejs':
        setSelected(0);
        break;
      case 'react':
      case 'classcomponents':
      case 'hooks':
      case 'redux':
        setSelected(1);
        break;
      case 'css':
      case 'styedcomponents':
      case 'materialui':
        setSelected(2);
        break;
      case 'graphql':
      case 'apolloclient':
      case 'apolloserver':
        setSelected(3);
        break;
      default:
        setSelected(-1);
    }
  });

  const tabs = (
    <>
      <MenuContainer>
        <MenuButton
          index={-1}
          selected={selected}
          disableRipple
          onClick={() => setSelected(-1)}
          component={Link}
          to="/"
          variant="contained"
          disableElevation
        >
          Home
        </MenuButton>
        {Object.keys(menus).map((menu, index) => (
          <DropdownMenu
            key={menu}
            component={Link}
            to={`/${menu}`}
            label={menu}
            index={index}
            selected={selected}
            setSelected={(selected) => setSelected(selected)}
          />
        ))}
        <MenuButton
          index={-2}
          selected={selected}
          disableRipple
          onClick={() => setSelected(-2)}
          component={Link}
          to="/about"
          variant="contained"
          disableElevation
        >
          About
        </MenuButton>
      </MenuContainer>
    </>
  );

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        sdaf
      </SwipeableDrawer>
      <StyledIconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon />
      </StyledIconButton>
    </>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Logo
              component={Link}
              to="/"
              disableRipple
              onClick={() => setSelected(-1)}
            >
              <img alt="nngg logo" src={logo} />
            </Logo>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <ToolbarMargin />
    </>
  );
}
