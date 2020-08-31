import React, { useState } from 'react';

import { useHeaderStyles } from './Styles';

import logo from 'assets/logo.svg';
import menus from './menus';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HideOnScroll from './HideOnScroll';
import DropdownTab from './DropdownTab';
import StyledTab from './StyledTab';

export default function Header(props) {
  const classes = useHeaderStyles();

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <img alt="nngg logo" src={logo} className={classes.logo} />
            <div className={classes.tabContainer}>
              <StyledTab>Home</StyledTab>
              {Object.keys(menus).map((menu) => (
                <DropdownTab key={menu} label={menu} subMenu={menus[menu]} />
              ))}
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
