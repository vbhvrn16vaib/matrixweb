'use client';

import { Inter } from '@next/font/google'
import CarouselM from './components/carouselm';
import Clients from './components/clients';
import MyFooter from './components/myfooter';
import Products from './components/products';
import NavHead from './navhead/sidebar';
import GovernmentNews from './components/government';
import './disc.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import Areas from './components/areas';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div id="home">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7962958774331843"
        crossorigin="anonymous"></script>
      <ParallaxProvider>
        <NavHead />
        <CarouselM />
        <Areas />
        <Products />
        <Clients />
        <GovernmentNews />
      </ParallaxProvider>
      <MyFooter />
    </div>
  )
}
