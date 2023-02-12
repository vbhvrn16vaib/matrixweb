'use client';

import { Inter } from '@next/font/google'
import CarouselM from './components/carouselm';
import Clients from './components/clients';
import MyFooter from './components/myfooter';
import Products from './components/products';
import NavHead from './navhead/sidebar';
import Disclaimer from '../pages/blog/disclaimer.mdx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <div bg="light">
      <NavHead />
      <CarouselM />
      <Disclaimer />
      <Products />
      <Clients />
      <MyFooter />
    </div>
    </>
  )
}
