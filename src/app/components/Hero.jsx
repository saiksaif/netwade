/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import dynamic from 'next/dynamic';
// import Image from 'next/image';

// const HeroImg = import("../../assets/images/startup.png");

// const Button = dynamic(() => import('../../elements/Button'));
import Button from '@/elements/Button';

export default function Hero() {
  return (
    <section className="hero">
      {/* <RevealWrapper> */}
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
          <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
            Growing Your Business
            {' '}
            <br />
            Is Our Calling
          </h1>

          <p className="font-light text-xl text-gray-400 leading-relaxed mb-5">
            We provide Youtube Automation and other Services
            to help you scale up your business.
          </p>

          <Button href="/project" type="link" className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200">
            See Our Work
            <svg className="ml-2 w-7 h-7 text-white animate-bounce-x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      {/* </RevealWrapper> */}

      {/* <RevealWrapper> */}
        <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
          <img className="" src="/assets/images-c/startup.webp" alt='Build website image' fetchPriority='high' />
          {/* <Image className="" src="/assets/images/startup.png" alt='Build website image' width={640} height={452} blurDataURL="/assets/images/startup-blur.png" placeholder='blur' /> */}
        </div>
      {/* </RevealWrapper> */}
    </section>
  );
}
