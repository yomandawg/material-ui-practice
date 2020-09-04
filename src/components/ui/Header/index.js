import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import menus from './menus';
import { arc as theme } from 'components/theme';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import HideOnScroll from './HideOnScroll';
import Tabs from './Tabs';
import Drawer from './Drawer';
import { Logo } from './styled/Menu';
import { ToolbarMargin } from './styled/Toolbar';

export default function Header({
  selected,
  setSelected,
  selectedItem,
  setSelectedItem,
}) {
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    menus.forEach((menu, index) => {
      menu.forEach((item) => {
        switch (window.location.pathname) {
          case `${item.link}`:
            if (selected !== index) {
              setSelected(index);
              if (selectedItem !== item.name) {
                setSelectedItem(item.name);
              }
            }
            break;
          default:
            break;
        }
      });
    });
  });

  return (
    <>
      <HideOnScroll>
        <AppBar style={{ zIndex: 1301 }} position="fixed" color="primary">
          <Toolbar disableGutters>
            <Logo
              component={Link}
              to="/"
              disableRipple
              onClick={() => setSelected(-1)}
            >
              <img alt="nngg logo" />
            </Logo>
            {matches ? (
              <Drawer
                menus={menus}
                selected={selected}
                setSelected={setSelected}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            ) : (
              <Tabs
                menus={menus}
                selected={selected}
                setSelected={setSelected}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <ToolbarMargin />
    </>
  );
}
