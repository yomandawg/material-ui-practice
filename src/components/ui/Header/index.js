import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

export default function Header() {
  const [selected, setSelected] = useState(-1);

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
              <img alt="nngg logo" src={logo} style={{ height: '7em' }} />
            </Logo>
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
                  label={menu}
                  index={index}
                  setSelected={setSelected.bind(this)}
                  selected={selected}
                  component={Link}
                  to={`/${menu}`}
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
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <ToolbarMargin />
    </>
  );
}
