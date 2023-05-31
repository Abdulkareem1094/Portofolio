import Image from 'next/image'

import HTML5 from '../public/html.png'
import CSS3 from '../public/css3.png'
import JS from '../public/download.png'
import TS from '../public/typescript k.png'
import Reactjs from '../public/react-logo-text.jpg'
import Nextjs from '../public/nextjs-logo.png'
import MyPic from '../public/mypic2.jpg'
import Logo from '../public/logo.jpg'

export default function Home() {
  return (
    <main className="font-inter ">
      <div className='bg-bg text-white'>
        <div className='flex p-6 w-full justify-between'>
          <Image className='w-fit h-8 rounded-full border-black border-2' src={Logo} width={100} height={100}/>
          <button>CV</button>
        </div>
        <div className='relative flex justify-center'>
          <div className='absolute top-0 left-0 w-full h-full '/>
          <div className='w-96 pt-32 font-sigmar'>
            <h1 className='text-xl'>Hello 👋, My name is</h1>
            <h1 className='text-5xl bg-orange-600 w-fit px-2 rounded-lg'>Abdulkareem</h1>
            <h1 className='text-2xl'>and I'm a</h1>
            <h1 className='text-3xl bg-blue-700 w-fit px-2 rounded-lg rounded-bl-none'>Front-End Web</h1>
            <h1 className='text-3xl bg-blue-700 w-fit px-2 rounded-lg rounded-t-none'>Developer</h1>
            <div className='flex gap-3 mt-4 pl-2 pr-8'>
              <Image className='h-6' src={HTML5} />
              <Image className='h-6' src={CSS3} />
              <Image className='h-6' src={JS} />
              <Image className='h-6' src={TS} />
              <Image className='h-6' src={Reactjs} />
              <Image className='h-6' src={Nextjs} />
            </div>
          </div>
          <div className='w-96'>
            <Image className='w-80 ' src={MyPic} />
          </div>
        </div>
      </div>

      <div>
        <h1>About</h1>
          <p>I love making sleek and professional looking websites using my favorite frameworks like React and Tailwind CSS. 
            My passion for coding and creating visually stunning, dynamic, and engaging websites is off the charts! As a front-end dev, 
            I've got the skills to make websites look as good as they function. I'm always on top of the latest technologies and trends, 
            and I'm excited to bring my fun and outgoing personality to any project. Let's create something awesome together!
          </p>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
           >
         </a>
        <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
           >
         </a>
        <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
           >
         </a>
        <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
           >
         </a>
      </div>
    </main>
  )
}