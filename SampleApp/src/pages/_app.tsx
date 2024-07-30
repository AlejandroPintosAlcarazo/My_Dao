import type { AppProps } from 'next/app';
import '../styles/galileo-design1.module.css';
import '../styles/depth4-frame1.module.css';
import '../styles/depth6-frame.module.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
