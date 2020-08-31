import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { arc } from 'components/theme';
import { Header } from 'components/ui';

export default function App() {
  return (
    <ThemeProvider theme={arc}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>HOME</div>} />
          <Route exact path="/javascript" component={() => <div>JS</div>} />
          <Route exact path="/react" component={() => <div>REACT</div>} />
          <Route exact path="/css" component={() => <div>CSS</div>} />
          <Route exact path="/graphql" component={() => <div>CSS</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
