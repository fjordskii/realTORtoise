import type { AppProps } from 'next/app';
import 'terminal.css';
import { ThemeProvider } from 'theme-ui';
import Layout from '../components/layout';
import '../styles/globals.css';
import { theme } from '../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
