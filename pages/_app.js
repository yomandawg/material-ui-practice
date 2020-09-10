import React, { useState } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { arc as theme } from 'components/theme';
import { Header, Footer } from 'components/ui';

ReactGA.initialize('UA-177653926-1');

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [selected, setSelected] = useState(-1);
  const [selectedItem, setSelectedItem] = useState(null);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>NNGG</title>
      </Head>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
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
              selectedItem={selectedItem}
              setSelected={setSelected}
              setSelectedItem={setSelectedItem}
            />
            <Component {...pageProps} />
            <Footer
              setSelected={setSelected}
              setSelectedItem={setSelectedItem}
            />
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
