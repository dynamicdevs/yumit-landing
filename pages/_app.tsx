import "../styles/index.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Header } from "../shared/elements/organisms";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Yumit</title>
        <meta
          name="description"
          content="Yumit pay a platform for paying with crypto"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
