'use client';

import { Inter } from '@next/font/google'
import Info from '../pages/blog/info.mdx'
import CarouselM from './components/carouselm';
import NavHead from './navhead/sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <div bg="light">
      <NavHead />
      <CarouselM />
      <Info />
    </div>
    </>
  )
}
