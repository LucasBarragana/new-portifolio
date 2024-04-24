import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Right from "../components/icons/Rigth";
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  return (
    <section id="hero" >
      <div className="md:mt-4 flex flex-col md:flex-row md:items-center ">
        <div className="py-8 md:py-12 flex flex-col items-center text-center md:w-1/2 ">
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
              <Image src={'/icons8-linkedin-48.png'} width={45} height={45}  alt="linkdn" />              
            </Link> 
            <Link className="m-5 hover:scale-110 transition ease-in-out duration-300" target="_blank" href="https://github.com/LucasBarragana">
              <p>Github:</p>
              <Image src={'/icons8-github-50.png'}   width={40} height={40}  alt="github" />              
            </Link> 
          </div>
        </div>        
        <div className="relative hidden md:block md:w-1/2 ">
          <Image  src={'/bear-dev.png'}  alt='logo' className='scale-110' width={800}  height={800} />
        </div>
      </div>
    </section>
  )
}

export default Hero