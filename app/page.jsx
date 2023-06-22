'use client'
import Image from 'next/image'

import { AiFillDownCircle, AiFillGithub, AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from "react-icons/ai";

import HTML5 from '../public/html.png'
import CSS3 from '../public/css3.png'
import JS from '../public/download.png'
import TS from '../public/typescript k.png'
import Reactjs from '../public/react-logo-text.jpg'
import Nextjs from '../public/nextjs-logo.png'
import MyPic from '../public/my pic shadow.png'
import Logo from '../public/logo.jpg'
import Web1 from '../public/web1.png'

import { Sigmar } from 'next/font/google'

const sigmar = Sigmar({
  weight: '400',
  subsets: ['latin'],
  variable:'--font-sigmar',
})

export default function Home() {
  return (
    <main className=" bg-[#ffffff]">
      <div className='bg-bg text-white '>
        <div className={`flex p-6 w-full justify-between ${sigmar.className} `}>
          <Image className='w-fit h-8 rounded-full border-white border-2' src={Logo} width={100} height={100}/>
          <button className='flex gap-1'>
            <h1 className='my-auto'>CV</h1>
            <AiFillDownCircle className='my-auto text-lg'/>
          </button>
        </div>
        <div className='relative flex justify-center px-6'>
          <div className='absolute top-0 left-0 w-full h-full z-10'/>
          <div className='relative bg-[#ffffff] rounded-t-xl lg:w-[650px] md:w-[560px] sm:w-fit mt-32 px-10 max-sm:px-5 z-0'>
            <div className={`pt-32 pb-6 ${sigmar.className}`}>
              <h1 className='text-xl text-bg max-sm:text-sm'>Hello 👋, My name is</h1>
              <h1 className='text-5xl max-sm:text-2xl bg-orange-600 w-fit px-2 bg-opacity-70 rounded-lg'>Abdulkareem</h1>
              <h1 className='text-2xl text-bg max-sm:text-xs'>and I'm a</h1>
              <h1 className='text-3xl max-sm:text-lg bg-blue-700 w-fit px-2 bg-opacity-70 rounded-lg rounded-bl-none'>Front-End Web</h1>
              <h1 className='text-3xl max-sm:text-lg bg-blue-700 w-fit px-2 bg-opacity-70 rounded-lg rounded-t-none'>Developer</h1>
              <div className='flex gap-3 mt-4 pl-2 pr-8 max-sm:gap-0'>
                <Image className='h-5 w-6 max-sm:scale-75 ' src={HTML5} />
                <Image className='h-5 w-6 max-sm:scale-75 ' src={CSS3} />
                <Image className='h-5 w-6 max-sm:scale-75 ' src={JS} />
                <Image className='h-5 w-6 max-sm:scale-75 ' src={TS} />
                <Image className='h-5 w-14 max-sm:scale-75 ' src={Reactjs} />
                <Image className='h-5 w-14 max-sm:scale-75 ' src={Nextjs} />
              </div>
            </div>
            <div className='w-72 max-sm:w-60 absolute right-0 bottom-0 -z-10'>
              <Image className='w-full' src={MyPic} />
            </div>
          </div>
        </div>
      </div>

      <div className='text-center p-6'>
        <div className='bg-bg text-white mt-64 rounded-xl p-6 pt-0 mx-auto max-w-[943px]'>
          <h1 className='sm:text-4xl text-bg text-3xl font-bold sm:mb-10 mb-5 mx-auto bg-white rounded-xl rounded-t-none w-fit py-3 px-10 '>About</h1>
          <p className='sm:text-lg text-sm'>I love making sleek and professional looking websites using my favorite frameworks like React and Tailwind CSS. 
            My passion for coding and creating visually stunning, dynamic, and engaging websites is off the charts! As a front-end dev, 
            I've got the skills to make websites look as good as they function. I'm always on top of the latest technologies and trends, 
            and I'm excited to bring my fun and outgoing personality to any project. Let's create something awesome together!
          </p>
          <div className='flex gap-3 sm:justify-start justify-center mt-10 text-3xl text-center'>
            <a href="https://github.com/Abdulkareem1094">
              <AiFillGithub/>
            </a>
            <a href="https://www.linkedin.com/in/abdulkareem-tukur-b1b229262">
              <AiFillLinkedin/>
            </a>
            <a href="https://twitter.com/ak_mt__?t=imTLdVgtoV8UfZYEjd6yWg&s=09">
              <AiFillTwitterCircle/>
            </a>
          </div>
        </div>

        <div className=' text-white mt-64 rounded-xl'>
          <div className='flex'>
            <div className='w-full border-b-2 border-bg' />
            <h1 className='text-4xl text-bg rounded-t-xl border-2 border-bg border-b-white px-10 py-3 w-fit font-bold '>Projects</h1>
            <div className='w-full border-b-2 border-bg' />
          </div>
          <div className=" flex flex-wrap gap-y-5 gap-x-2 pt-5 lg:text-left">
            <a
                href=""
                className="group relative w-96 h-fit overflow-hidden box-border mx-auto rounded-lg "
                target="_blank"
                rel="noopener noreferrer"
              >
              <Image className='group-hover:scale-150 duration-300 transition-all' src={Web1} width='100%' height='100%' />
              <div className='absolute px-5 h-full top-[286px] bg-bg transition-all duration-300 group-hover:top-10 group-hover:py-4 '>
                <h1 className='text-lg mb-2'>Lorem ipsum</h1>
                <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veritatis consequatur, 
                  tempore magni illo accusantium esse, ipsa sint dolore earum nesciunt impedit est. 
                  Debitis repudiandae nulla, earum placeat quidem quasi.</p>
              </div>
            </a>
            <a
                href=""
                className="group relative w-96 h-fit overflow-hidden box-border mx-auto rounded-lg "
                target="_blank"
                rel="noopener noreferrer"
              >
              <Image className='group-hover:scale-150 duration-300 transition-all' src={Web1} width='100%' height='100%' />
              <div className='absolute px-5 h-full top-[286px] bg-bg transition-all duration-300 group-hover:top-10 group-hover:py-4 '>
                <h1 className='text-lg mb-2'>Lorem ipsum</h1>
                <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veritatis consequatur, 
                  tempore magni illo accusantium esse, ipsa sint dolore earum nesciunt impedit est. 
                  Debitis repudiandae nulla, earum placeat quidem quasi.</p>
              </div>
            </a>
            <a
                href=""
                className="group relative w-96 h-fit overflow-hidden box-border mx-auto rounded-lg "
                target="_blank"
                rel="noopener noreferrer"
              >
              <Image className='group-hover:scale-150 duration-300 transition-all' src={Web1} width='100%' height='100%' />
              <div className='absolute px-5 h-full top-[286px] bg-bg transition-all duration-300 group-hover:top-10 group-hover:py-4 '>
                <h1 className='text-lg mb-2'>Lorem ipsum</h1>
                <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veritatis consequatur, 
                  tempore magni illo accusantium esse, ipsa sint dolore earum nesciunt impedit est. 
                  Debitis repudiandae nulla, earum placeat quidem quasi.</p>
              </div>
            </a>
            <a
                href=""
                className="group relative w-96 h-fit overflow-hidden box-border mx-auto rounded-lg "
                target="_blank"
                rel="noopener noreferrer"
              >
              <Image className='group-hover:scale-150 duration-300 transition-all' src={Web1} width='100%' height='100%' />
              <div className='absolute px-5 h-full top-[286px] bg-bg transition-all duration-300 group-hover:top-10 group-hover:py-4 '>
                <h1 className='text-lg mb-2'>Lorem ipsum</h1>
                <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veritatis consequatur, 
                  tempore magni illo accusantium esse, ipsa sint dolore earum nesciunt impedit est. 
                  Debitis repudiandae nulla, earum placeat quidem quasi.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <div className='flex flex-col bg-bg text-gray-400 mt-64'>
        <ContactForm />
        <h1 className='text-center'>MadeByAbdulkareem</h1>
      </div>
    </main>
  )
}


import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("myyaqpqk");
  if (state.succeeded) {
      return <p>Email successfully sent!</p>;
  }
  return (
    <form className=' text-sm flex gap-6 flex-col text-left w-96 max-sm:w-60 text-bg bg-bg p-3' onSubmit={handleSubmit}>
      <h1 className='text-3xl text-white font-bold -mt-16 -ml-3 bg-bg px-10 py-3 w-fit rounded-t-xl rounded-l-none max-sm:text-2xl'>Get in touch</h1>
      <div className='flex flex-col' >
        <input
          className='outline-none border-bg border-[1px] bg-gray-200 p-2 '
          id="name"
          type="text" 
          name="name"
          placeholder='Name'
          required
        />
      </div>
      <div className='flex flex-col' >  
        <input
          className='outline-none border-bg border-[1px] bg-gray-200 p-2 '
          id="email"
          type="email" 
          name="email"
          placeholder='Email'
          required
        />
      </div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div className='flex flex-col' >     
        <textarea
          className='outline-none border-bg border-[1px] bg-gray-200 p-2 h-40'
          id="message"
          name="message"
          required
          placeholder='Massage'
        />
      </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button
        className='outline-none border-white border-[1px]  w-fit py-2 px-6 bg-white text-bg rounded-md font-bold' 
        type="submit" 
        disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}


