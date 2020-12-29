import { createGlobalStyle, ThemeProvider } from "styled-components";
import DarkTheme from "@themes/dark";
import LightTheme from "@themes/light";
import { ThemeAppProvider, useThemeAppState } from "@contexts/theme_context";
import React from "react";

const GlobalStyle = createGlobalStyle`
  * {

    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const RootApp = ({ children }) => {
  const theme = useThemeAppState();
  return (
    <ThemeProvider theme={theme.isLightTheme ? LightTheme : DarkTheme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

const Application = ({ Component, pageProps }) => {
  return (
    <ThemeAppProvider>
      <RootApp>
        <Component {...pageProps} />
      </RootApp>
    </ThemeAppProvider>
  );
};

export default Application;
