import { AppProps } from 'next/app';
import { wrapper } from '../store';
import GlobalStyle from '../styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
