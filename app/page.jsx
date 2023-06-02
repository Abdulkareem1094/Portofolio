import Image from 'next/image'

import { AiFillDownCircle, AiFillGithub, AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from "react-icons/ai";

import HTML5 from '../public/html.png'
import CSS3 from '../public/css3.png'
import JS from '../public/download.png'
import TS from '../public/typescript k.png'
import Reactjs from '../public/react-logo-text.jpg'
import Nextjs from '../public/nextjs-logo.png'
import MyPic from '../public/mypic2.jpg'
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
          <div className='relative lg:w-[650px] md:w-[560px] sm:w-fit px-10 z-0'>
            <div className={`pt-32 pb-6 ${sigmar.className}`}>
              <h1 className='text-xl max-sm:text-lg'>Hello 👋, My name is</h1>
              <h1 className='text-5xl max-sm:text-4xl bg-orange-600 w-fit px-2 rounded-lg'>Abdulkareem</h1>
              <h1 className='text-2xl max-sm:text-xl'>and I'm a</h1>
              <h1 className='text-3xl max-sm:text-2xl bg-blue-700 w-fit px-2 rounded-lg rounded-bl-none'>Front-End Web</h1>
              <h1 className='text-3xl max-sm:text-2l bg-blue-700 w-fit px-2 rounded-lg rounded-t-none'>Developer</h1>
              <div className='flex gap-3 mt-4 pl-2 pr-8 max-sm:gap-0'>
                <Image className='h-5 w-6 max-sm:scale-75 ' src={HTML5} />
                <Image className='h-5 w-6 max-sm:scale-75 ' src={CSS3} />
                <Image className='h-5 w-6 max-sm:scale-75 ' src={JS} />
                <Image className='h-5 w-6 max-sm:scale-75 ' src={TS} />
                <Image className='h-5 w-14 max-sm:scale-75 ' src={Reactjs} />
                <Image className='h-5 w-14 max-sm:scale-75 ' src={Nextjs} />
              </div>
            </div>
            <div className='w-80 absolute right-0 bottom-0 -z-10'>
              <Image className='w-full' src={MyPic} />
            </div>
          </div>
        </div>
      </div>

      <div className='text-center p-6'>
        <div className='bg-bg text-white my-20 rounded-xl p-6 mx-auto max-w-[943px]'>
          <h1 className='sm:text-4xl text-3xl sm:mb-10 mb-5'>About</h1>
          <p className='sm:text-lg text-sm'>I love making sleek and professional looking websites using my favorite frameworks like React and Tailwind CSS. 
            My passion for coding and creating visually stunning, dynamic, and engaging websites is off the charts! As a front-end dev, 
            I've got the skills to make websites look as good as they function. I'm always on top of the latest technologies and trends, 
            and I'm excited to bring my fun and outgoing personality to any project. Let's create something awesome together!
          </p>
          <div className='flex gap-3 sm:justify-start justify-center mt-10 text-3xl text-center'>
            <a href="">
              <AiFillGithub/>
            </a>
            <a href="">
              <AiFillMail/>
            </a>
            <a href="">
              <AiFillLinkedin/>
            </a>
            <a href="">
              <AiFillTwitterCircle/>
            </a>
          </div>
        </div>

        <div className=' text-white my-20 rounded-xl '>
          <h1 className='text-4xl mb-10 text-black'>Projects</h1>
          <div className=" flex flex-wrap gap-y-5 gap-x-2 lg:text-left">
            <a
                href=""
                className="group relative w-96 h-fit overflow-hidden box-border mx-auto rounded-lg "
                target="_blank"
                rel="noopener noreferrer"
              >
              <Image className='' src={Web1} width='100%' height='100%' />
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
              <Image className='' src={Web1} width='100%' height='100%' />
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
              <Image className='' src={Web1} width='100%' height='100%' />
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
              <Image className='' src={Web1} width='100%' height='100%' />
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
    </main>
  )
}