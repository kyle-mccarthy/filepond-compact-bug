import { FC } from 'react';
import { AppProps } from 'next/app';
import 'filepond/dist/filepond.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
