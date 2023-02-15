'use client';

import { Inter } from '@next/font/google'
import CarouselM from './components/carouselm';
import Clients from './components/clients';
import MyFooter from './components/myfooter';
import Products from './components/products';
import NavHead from './navhead/sidebar';
import Disclaimer from '../pages/blog/disclaimer.mdx'
import GovernmentNews from './components/government';
import './disc.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import Areas from './components/areas';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <ParallaxProvider>
      {/* <NavHead /> */}

      <CarouselM />
      <Areas />
      <Disclaimer components={{
        h4: (props) => <h4 {...props} className="text-xl font-light disc" />
      }}
      />
      <Clients />
      <Products />
      <GovernmentNews />
      </ParallaxProvider>

      <MyFooter />
      
    </>
  )
}
