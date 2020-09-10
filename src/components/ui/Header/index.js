import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import menus from './menus';
import { arc as theme } from 'components/theme';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import HideOnScroll from './HideOnScroll';
import Tabs from './Tabs';
import Drawer from './Drawer';

export default function Header({
  selected,
  setSelected,
  selectedItem,
  setSelectedItem,
}) {
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [prevURL, setPrevURL] = useState('');

  useEffect(() => {
    if (prevURL !== window.location.pathname) {
      setPrevURL(window.location.pathname);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }

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
          case '/':
            setSelected(-1);
            break;
          case '/about':
            setSelected(-2);
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
        <AppBar
          style={{
            height: matches ? 80 : 100,
            zIndex: 1301,
            justifyContent: 'center',
          }}
          position="fixed"
          color="primary"
        >
          <Toolbar disableGutters>
            <Hidden mdDown>
              <Tabs
                menus={menus}
                selected={selected}
                setSelected={setSelected}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            </Hidden>
            <Hidden lgUp>
              <Drawer
                menus={menus}
                selected={selected}
                setSelected={setSelected}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div style={{ marginBottom: '6em' }}></div>
    </>
  );
}
