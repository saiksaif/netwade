// "use client"

import './globals.css'
// import dynamic from 'next/dynamic';

import Hero from './components/Hero';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Advantage from './components/Advantage';
import Testimonial from './components/Testimonial';
import Discuss from './components/Discuss';

import Data from '../json/landingPage.json';

export const metadata = {
  title: 'DreamsHub - Your Digital Dreams Come True',
  description: 'Welcome to DreamsHub - Where Your Dreams Come to Life. DreamsHub is your one-stop solution for YouTube automation, content creation, and content writing services. Explore your potential with us and let your digital dreams take flight.',
}

export default function Home() {
  return (
    <main className="">

      <Hero />
      <Service data={Data.service} />
      <Portfolio data={Data.portfolio} />
      <Advantage data={Data.advantage} />
      <Testimonial data={Data.testimonial} />
      <Discuss />
    </main>
  )
}
