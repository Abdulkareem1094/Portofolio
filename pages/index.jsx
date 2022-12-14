import Head from 'next/head';
// import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
  AiFillGithub,
} from 'react-icons/ai'
import Image from 'next/image';
import code from "../public/code.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {

  // const [darkMode, setDarkMode] = useState(true)

  return (
    <div  >{/* className={ darkMode ? 'dark' : ''} */}

      <Head>
        <title>Abdulkareem Tukur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-900 px-10 text-white md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between  ">
            <h1 className="font-burtons text-xl">developedbyabdulkareem</h1>
            {/* <ul className="flex items-center"> */}
              {/* <li>
                <BsFillMoonStarsFill
                  onClick={() => { setDarkMode(!darkMode) }}
                  className=" cursor-pointer text-2xl"
                />
              </li> */}
              {/* <li> */}
                <a
                  className="text-teal-500 bg-gray-800 px-4 py-2 border-none transition-all duration-300 ease-linear rounded-lg ml-8 hover:bg-teal-500 hover:text-white"
                  href="#"
                >
                  Resume
                </a>
              {/* </li> */}
            {/* </ul> */}
          </nav>

          <div className="text-center p-10 py-10 bg-black bg-opacity-80 rounded-lg ">
            <h1 className="text-3xl font-Rubik py-2 font-medium text-teal-400 md:text-4xl lg:text-5xl">
              ABDULKAREEM TUKUR
            </h1>
            <h3 className="text-2xl text-orange-500 py-2 md:text-3xl">
            React Frontend Web Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-200 max-w-xl mx-auto md:text-xl">
            I develope web applications using React and other modern technologies. I am a computer science student and I am passionate for creating intuitive and user-friendly web experiences.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
              <AiFillTwitterCircle href='' className=' cursor-pointer '/>
              <AiFillGithub className=' cursor-pointer '/>
              <AiFillLinkedin className=' cursor-pointer '/>
              <AiFillMail className=' cursor-pointer '/>
            </div>
          </div>
        </section>

        <section>
          <div className='pt-20'>
            <h3 className="text-3xl py-1 ">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-200">
              <span className="text-teal-500"> Strong understanding </span>
              of HTML, CSS, JavaScript and React
            </p>
            <p className="text-md py-2 leading-8 text-gray-200">
              <span className="text-teal-500"> Proficient </span>
              in using Git for version control, Figma, Redux, GraphQL, and Apollo
            </p>
            <p className="text-md py-2 leading-8 text-gray-200">
              <span className="text-teal-500"> Experience </span>
              with responsive web design and mobile-first development
            </p>
          </div>
          <div className="pt-20">
            <div className="text-center shadow-lg p-10 rounded-lg my-10 bg-black bg-opacity-80 flex-1">
              <Image className='mx-auto' src={code} width={100} height={100} />
              <h3 className="text-lg font-medium text-orange-500 pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
              Are you ready to take your online presence to the next level and create a website that truly represents your brand or business?
              If you have an idea for your next great website, I'd love to help make it a reality. Together, we can turn your vision into a functional,
              visually appealing, and user-friendly website that will attract and retain visitors. Let's start turning your dream website into a reality.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-5xl py-5 pt-20 font-medium ">
              Projects
          </h3>
          <div className='flex relative flex-col gap-10 py-10 lg:flex-row lg:flex-wrap '>
            <div className='basis-1/3 flex-1 relative group'>
              <div className='scale-0 bg-teal-600 absolute rounded-lg w-full h-full opacity-90 transition-all duration-100 py-10 px-10 group-hover:scale-100'>
                <h3 className='text-xl font-bold pb-2 '>Description</h3>
                <p className='pb-5 '>This is a demonstration project that is currently being used for display purposes only. It is not my actual project at this time. </p>
                <a href="#" className='text-lg'>Visit site</a>
              </div>
              <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'}  />
            </div>
            <div className='basis-1/3 flex-1 relative group'>
              <div className='scale-0 bg-teal-600 absolute rounded-lg w-full h-full opacity-90 transition-all duration-100 py-10 px-10 group-hover:scale-100'>
                <h3 className='text-xl font-bold pb-2 '>Description</h3>
                <p className='pb-5 '>This is a demonstration project that is currently being used for display purposes only. It is not my actual project at this time. </p>
                <a href="#" className='text-lg'>Visit site</a>
              </div>
              <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'}  />
            </div>
            <div className='basis-1/3 flex-1 relative group'>
              <div className='scale-0 bg-teal-600 absolute rounded-lg w-full h-full opacity-90 transition-all duration-100 py-10 px-10 group-hover:scale-100'>
                <h3 className='text-xl font-bold pb-2 '>Description</h3>
                <p className='pb-5 '>This is a demonstration project that is currently being used for display purposes only. It is not my actual project at this time. </p>
                <a href="#" className='text-lg'>Visit site</a>
              </div>
              <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'}  />
            </div>
            <div className='basis-1/3 flex-1 relative group'>
              <div className='scale-0 bg-teal-600 absolute rounded-lg w-full h-full opacity-90 transition-all duration-100 py-10 px-10 group-hover:scale-100'>
                <h3 className='text-xl font-bold pb-2 '>Description</h3>
                <p className='pb-5 '>This is a demonstration project that is currently being used for display purposes only. It is not my actual project at this time. </p>
                <a href="#" className='text-lg'>Visit site</a>
              </div>
              <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'}  />
            </div>
            <div className='basis-1/3 flex-1 relative group'>
              <div className='scale-0 bg-teal-600 absolute rounded-lg w-full h-full opacity-90 transition-all duration-100 py-10 px-10 group-hover:scale-100'>
                <h3 className='text-xl font-bold pb-2 '>Description</h3>
                <p className='pb-5 '>This is a demonstration project that is currently being used for display purposes only. It is not my actual project at this time. </p>
                <a href="#" className='text-lg'>Visit site</a>
              </div>
              <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'}  />
            </div>
            <div className='basis-1/3 flex-1 relative group'>
              <div className='scale-0 bg-teal-600 absolute rounded-lg w-full h-full opacity-90 transition-all duration-100 py-10 px-10 group-hover:scale-100'>
                <h3 className='text-xl font-bold pb-2 '>Description</h3>
                <p className='pb-5 '>This is a demonstration project that is currently being used for display purposes only. It is not my actual project at this time. </p>
                <a href="#" className='text-lg'>Visit site</a>
              </div>
              <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'}  />
            </div>
           
          </div>
        </section>
      </main>
    </div>
  )
}
