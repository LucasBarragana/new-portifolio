import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Right from './icons/Rigth';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  return (
    <section id="hero" className="relative">
      <div className="md:mt-4 flex flex-col md:flex-row md:items-center z-20">
        <div className="py-8 md:py-12 flex flex-col items-center text-center md:w-1/2 z-20 ">
          <h1 className="text-6xl">
            Hello,<br />
          </h1>
          <h1 className="text-4xl mt-4 mb-4">
            I am<br />
          </h1>
          <span className="font-semibold text-6xl">
            Lucas Barragana
          </span>
          <p className="my-6 text-2xl text-orange-500 font-semibold">
            I am a Front-End Developer
          </p>
          <Card>
            <div className="flex gap-4 text-sm">
              <Link id="btnToContact" href={'/#contact'} className="flex justify-center uppercase bold flex items-center gap-2 px-4 py-2 rounded-full   hover:text-orange-500 transition ease-in-out duration-300 ">
                Lets work together
                <Right />
              </Link>
            </div>
          </Card>

          <div className="flex">
            <Link className="m-5 hover:scale-110 transition ease-in-out duration-300" target="_blank" href="https://www.linkedin.com/in/lucas-barragana-564b05187/">
              <p>Linkdn:</p>
              <Image src={'/icons8-linkedin-48.png'} width={45} height={45} alt="linkdn" />
            </Link>
            <Link className="m-5 hover:scale-110 transition ease-in-out duration-300" target="_blank" href="https://github.com/LucasBarragana">
              <p>Github:</p>
              <Image src={'/icons8-github-50.png'} width={40} height={40} alt="github" />
            </Link>
          </div>
        </div>

        <div className="py-10 md:py-20 flex flex-col items-center text-center md:w-1/2 z-20 hidden md:block relative">
          <img src={'/bear-dev.png'} alt='logo' className='scale-110 relative' />
        </div>
        <div className='hidden md:block'>
          <svg id="sw-js-blob-svg" className="absolute top-0 right-0 left-0 w-full h-full z-10 scale-105 opacity-80 " viewBox="-30 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
             <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
              <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
            </linearGradient>
            </defs>
          <path fill="url(#sw-gradient)" d="M21.2,-36.6C26.9,-33.5,30.5,-26.6,34.5,-19.8C38.5,-13.1,42.9,-6.6,43.4,0.3C43.9,7.1,40.4,14.2,35.7,19.7C31,25.2,25,29.2,18.9,32.1C12.7,35,6.4,37,-0.1,37.1C-6.5,37.3,-13.1,35.7,-19.6,32.9C-26.2,30.2,-32.7,26.5,-35.7,20.8C-38.7,15.1,-38.2,7.6,-37.3,0.5C-36.5,-6.6,-35.3,-13.2,-32.7,-19.5C-30.1,-25.8,-26,-31.9,-20.3,-35.1C-14.6,-38.2,-7.3,-38.3,0.2,-38.7C7.8,-39.1,15.6,-39.8,21.2,-36.6Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"></path>
          </svg>
        </div>
          

      </div>

    </section>
  )
}

export default Hero;
