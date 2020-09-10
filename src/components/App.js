import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { ChatPortal, MusicPortal } from 'components/portals';
import { Header, Footer } from 'components/ui';
import { Home, About } from 'components/pages';
import { arc as theme } from 'components/theme';

export default function App() {
  const [selected, setSelected] = useState(-1);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <div
              style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: theme.palette.background.default,
              }}
            >
              <Header
                selected={selected}
                setSelected={setSelected}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
              <Switch>
                <Route
                  exact
                  path="/"
                  component={(props) => <Home {...props} />}
                />
                <Route
                  exact
                  path="/about"
                  component={(props) => <About {...props} />}
                />
                <Route component={() => <div></div>} />
              </Switch>
              <Footer
                selected={selected}
                setSelected={setSelected}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </MuiThemeProvider>
      {MusicPortal}
      {ChatPortal}
    </>
  );
}
