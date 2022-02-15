import { AppProps } from 'next/app';
import { wrapper } from 'src/store';
import GlobalStyle from 'src/styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
