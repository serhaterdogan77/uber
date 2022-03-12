import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Drive from '../components/Drive'
import Icons from '../components/Icons'
import App from '../components/App'
import Login from '../components/Login'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className="font-sans">

      <Head>
        <title>Uber</title>
        <meta name="description" content="Flower Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header  />
      <HeroSection />
      <Features />
      <Drive />
      <Icons />
      <App />
      <Login />
      <Footer />

    </div>
    
  )
}
