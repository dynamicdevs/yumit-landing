import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-primary-main-700 to-gradient-rhodolite-100">
        <h1 className="text-heading-04 md:text-heading-02 lg:text-heading-01 text-center font-extrabold text-primary-wb-white">
          Coming soon...
        </h1>
      </div>
    </>
  );
};

export default Home;
