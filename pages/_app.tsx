import { createGlobalStyle, ThemeProvider } from "styled-components";
import useTheme from "@hooks/use_theme";
import DarkTheme from "@themes/dark";
import LightTheme from "@themes/light";

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

const Application = ({ Component, pageProps }) => {
  // TODO: Change this into Context Hooks State Management
  const [theme, toggleTheme] = useTheme();
  return (
    <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
        <p onClick={() => toggleTheme(!theme)}>{JSON.stringify(theme)}</p>
      </>
    </ThemeProvider>
  );
};

export default Application;
