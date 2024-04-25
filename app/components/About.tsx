'use client'

import React from 'react'
import Down from "../components/icons/Down";
import Up from "../components/icons/Up";
import { useState } from "react";
import { Card } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from 'next/image';
import Link from 'next/link';


const About = () => {
    const [showContent, setShowContent] = useState(false);  

  const toggleContent = () => {
    setShowContent(!showContent);
  };


  return (
    <section id='About'>
        <div className="">
            <blockquote className="flex justify-center  bold flex items-center gap-2 px-4 py-2 italic">
            &quot;Between lines of code and lonely hours, the programmer finds themselves in a state of creative hibernation, where the mind opens up to innovation and inspiration.&quot; - Lucas Barragana
            </blockquote>
        </div>

      <div className="relative flex justify-center items-center mt-5">
        <span className="absolute left-0 right-0  bold flex items-center px-4 py-2 rounded-full z-0">
        </span>

        <Card>
          <div id="btnAbout">
            <button onClick={toggleContent} 
            className="relative z-10 flex justify-center font-semibold items-center rounded-full px-4 py-3 gap-2 hover:text-orange-500 transition ease-in-out duration-300">
              More about me
              <Down />
            </button>
          </div>          
        </Card>
        
      </div>

      {showContent && (
        <div className=" p-10 -mt-8  rounded-lg z-20">
          <Image src={"/futebol-tecnologia.jpg"} alt='fundoSkills' className='absolute z-5 opacity-5' width={1000} height={1000}/>
          <h1 className="text-4xl font-semibold  mb-5">Extras</h1>
          <div className={`grid grid-cols-1 gap-4 z-20`}>
            <div className=" rounded-lg px-10 py-5 z-20" >
              <h3 className=" font-semibold mb-2 text-orange-500">About me</h3>
              <p className="font-semibold ">Passionate about technology. Constantly studying, learning new technologies, and improving in the ones that I identify myself the most.</p>
            </div>

            <div className=" rounded-lg  px-10 py-5 z-20">
              <h3 className="text-orange-500 font-semibold mb-2 ">Languages</h3>
              <p className="font-semibold ">English - Intermediate fluency</p>
              <p className="font-semibold ">Portuguese - Native</p>
            </div>

            <div className="rounded-lg px-10 py-5 z-20">
              <h3 className="text-orange-500 font-semibold mb-2">Academic Education:</h3>
              <h4 className="font-semibold ">Analysis and Systems Development</h4>
              <span  className="font-semibold ">Anhanguera University:</span><br />
              <span className=""> - Start: 02/23</span><br />
              <span className=""> - Expected Graduation: 06/25</span>
            </div>

           
              <div className=" rounded-lg px-10 py-5 z-20">
                <h3 className="text-orange-500 font-semibold mb-2">Extra-curricular Education:</h3>
                <ul className="font-semibold ">
                <Popover>  
                  <PopoverTrigger>
                    <div className='flex py-2'>
                      <li className="block mr-2">Node.js - 38h</li>
                      <p className='text-xs underline italic top-0 left-0 mt-1'>Certificate</p> 
                    </div>                                         
                  </PopoverTrigger>
                  <PopoverContent>
                    <Image src="/node-certificado.jpg" width={400} height={400} alt="NodeJS Badge"/>
                  </PopoverContent>
                </Popover> <br></br>

                <Popover>
                  <PopoverTrigger>
                  <div className='flex py-2'>
                      <li className="block mr-2">React.js - 30h</li>
                      <p className='text-xs underline italic top-0 left-0 mt-1'>Certificate</p> 
                    </div>
                    </PopoverTrigger>
                  <PopoverContent>
                    <Image src="/React-certificado.jpg" width={400} height={400} alt="React Badge"/>
                  </PopoverContent>
                </Popover><br></br>
                                
                <Popover>
                  <PopoverTrigger>
                    <div className='flex py-2'>
                      <li className="block mr-2">MongoDB - 19h</li>
                      <p className='text-xs underline italic top-0 left-0 mt-1'>Certificate</p> 
                    </div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Image src="/MongoDB-certificado.jpg" width={400} height={400} alt="MongoDB Badge"/>
                  </PopoverContent>
                </Popover>
                </ul>
              </div>          
            
          </div>

          <div className="relative flex justify-center items-center mt-5">
            <Card>                 
                <Link href={'/#btnAbout'} onClick={toggleContent} className="relative z-10 flex justify-center font-semibold items-center  rounded-full px-4 py-3 gap-2 hover:text-orange-500 transition ease-in-out duration-300 ">
                  Less about me
                  <Up />
                </Link>  
            </Card>    
          </div>      
        </div>
      )}
    </section>
    
  )
}

export default About