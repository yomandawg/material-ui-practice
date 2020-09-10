import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { arc as theme } from 'components/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.png" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAA2CAMAAAD9AfsAAAAAflBMVEX///8AAACJxiP7+/vT09Pw8PDf398PDw+bm5skJCRgYGDm5ubHx8dQUFBLS0twcHCmpqaCgoKsrKyNjY25ubmUlJRaWlqzs7NAQEAvLy9oaGg0NDRVVVVGRkZ8wQDh8NDC4J2o1G3x+OgYGBit1nai0WDT6LvL5KuczlV5eXkrytbOAAAD1UlEQVRoge2Y22KjIBCGMahRY6pGTTyk7XbTPfj+L7gGmGFAaZq2NrnY/yaKM/gB4zCEMfb8ulr9+s3uTX+eVqOeXm/NYelZYI1gP25NYuplBbo1iSnEevp5axRD98p1r+t4r3F/r3linLGX1dPf+8ur/3WleN4l5Ubf59s2888XwWF4bJukTDk8CuusaZss2kx7CfLEO2tIxV2ZyAupKksK3zCvBqNll3USISx672EnsGLRXwgme3E7Pqo9UCwMmf+ILUlgjW3AR94xYL64KOBpJm4PxL4zWx7EbQqWXje2FfKygYGo3lMNMWrL0RCeU6zUeOT58Gt2qcditURgH0MPEUwXTtjem1XPM6sl1Fi7eR9voJNDJ2xvtsQTz55trAloHe+YqL2INfYudDIxR61Vi1xpPuPKQrjKhU1wmjGaV6VeEjotWvO1e8AKoKUTt5upZ8YgFsYlFS7rqZFDKiL5dBVAMTe4thOuxDGwnr/F1Zd1Z9oPNQ3+wAjaL+QaRj8318H2SawPQ0YkMajDYFM1n+RqIjFeJ5eK0hwdTtzsVAZYhbdrlW31h/sBrgySrZNL5QEdlKXywLUVX0qCz3ETOH6YK9bJx8kFBhjWkEkj6sExr2B21++5movkRBdXDwaN7VRRj81cn+ByLZdOiW6uRzDAOId1SqmHHivps/wgV/IOrgcwwACa5UL3nvQJ38q1XNkCXA3p8564TqRPqJBuyKXjnlRkkMFcXOi0HJfe50nZB00WV8/tdy7HxbB81IGPCU5y6Z0KpvRggizCpavtwu4RuFrDgUHZPKpejotsbhJMb5jApYsSufnpoRyW42JbzeF15UDrSsWlt37vWEclqdc2C3LpZZtIcc3Uo1JqT5nlwkaL6wgGuAoQtRaXdU4yuOwuLFUWgj4AkMHItcaquAMDPBnCVx6aHoz1Lq7Wfocp2CIwzUIlZTSqggy++xoMMDqggVsejNtgMINYH1TenDAT2wMVgnpBTQeeMe0J1fUV1H3YwI0zsFdByL19lNOFESyJcYhXy7KDd8gAIyFY2E7+dHTkk4t9zJukxghJ2S9fwPVDtWY1M+Q3BGs0SozJYTLfbEnZx9IxU64rasKCnZzF/ZkW6q89tUjpSX4IDe/wPOERuyR+sWHeLVB2kMMKy8CvorKo82rm76B3vuJTwijfXbZdUHnTl/TPrdljxPdL7kNtDRD601vfEoukpmNRlvo4+Z5AXlDuXcj7hlB2q3RipZedF5SznCgv+y4qx4TdNLiE8jms6rLf4goK60/GuL7s9C3iad2pwm29r/0v+BD/Ae1jMI3C4n8MAAAAAElFTkSuQmCC"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Raleway:100,400,400i,700|Roboto:300,400,500,700&display=swap"
          />
          <meta property="og:image:type" content="img/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="company logo" />
        </Head>
        <body style={{ margin: 0 }}>
          <div
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: theme.palette.background.default,
            }}
          >
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
