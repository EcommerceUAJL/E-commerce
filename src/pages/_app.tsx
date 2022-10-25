import '../styles/globals.css';

type MyAppProps = {
  Component: keyof JSX.IntrinsicElements;
  pageProps: any;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
