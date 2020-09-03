import { AuthProvider } from '@/lib/auth';

import { Global, css } from '@emotion/core';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from '@/styles/theme';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
        ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};

        /* ::selection {
          background-color: #47a3f3;
          color: #fefefe;
        } */

        html {
          min-width:360px;
          scroll-behavior: smooth;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: ${colorMode === 'light' ? 'white' : '#171923'};
        }
      `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme = { customTheme }>
      <AuthProvider>
      <CSSReset />
    <Component {...pageProps} />
    </AuthProvider>

    </ThemeProvider >
  )
}
export default App
