import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GridWrapper from '../elements/GridWrapper'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yumit</title>
        <meta name="description" content="Yumit pay a platform for paying with crypto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-primary-wb-white w-screen fixed">
        <GridWrapper>
          <div className='col-span-2 h-26 md:h-32 lg:h-36 flex items-center'>
            <img src="/logo.png" alt="Yumit Logo" className='w-[148px] hidden md:block' />
            <img src="/logo-mini.png" alt="Yumit Logo" className='w-[148px] md:hidden' />
          </div>
        </GridWrapper>
      </div>


      <main className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-primary-main-700 to-gradient-rhodolite-100">
        <h1 className="text-heading-04 md:text-heading-02 lg:text-heading-01 text-center font-extrabold text-primary-wb-white">
          Coming soon!
        </h1>

      </main>
    </>
  )
}

export default Home
