'use client';

import { Inter } from '@next/font/google'
import CarouselM from './components/carouselm';
import MyFooter from './components/myfooter';
import NavHead from './navhead/sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <div bg="light">
      <NavHead />
      <CarouselM />
      <MyFooter />
    </div>
    </>
  )
}
