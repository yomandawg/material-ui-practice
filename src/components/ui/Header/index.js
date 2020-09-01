import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo.svg';
import menus from './menus';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { useHeaderStyles, selectedCSS } from './Styles';
import HideOnScroll from './HideOnScroll';
import DropdownTab from './DropdownTab';
import StyledTab from './StyledTab';

export default function Header() {
  const [selected, setSelected] = useState(-1);
  const classes = useHeaderStyles();

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              disableRipple
              onClick={() => setSelected(-1)}
            >
              <img alt="nngg logo" src={logo} className={classes.logo} />
            </Button>
            <div className={classes.tabContainer}>
              <StyledTab
                style={selected === -1 ? selectedCSS : {}}
                disableRipple
                onClick={() => setSelected(-1)}
                component={Link}
                to="/"
              >
                Home
              </StyledTab>
              {Object.keys(menus).map((menu, index) => (
                <DropdownTab
                  key={menu}
                  label={menu}
                  subMenu={menus[menu]}
                  index={index}
                  setSelected={setSelected.bind(this)}
                  selected={selected}
                />
              ))}
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
