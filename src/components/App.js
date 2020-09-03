import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { ThemeProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import { Header } from 'components/ui';
import { ChatPortal, MusicPortal } from 'components/portal';
import { arc as theme } from 'components/theme';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <div>{Array(50).fill(loremIpsum)}</div>}
            />
            <Route component={() => <div>404 Not Found</div>} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
      {MusicPortal}
      {ChatPortal}
    </>
  );
}
