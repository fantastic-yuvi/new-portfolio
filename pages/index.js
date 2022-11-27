import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import {SiLeetcode} from "react-icons/si";
import {FaHackerrank} from "react-icons/fa";
import {SiCodechef} from "react-icons/si";
import {SiCodeforces} from "react-icons/si";
import {MdMarkEmailUnread} from "react-icons/md";
import {RiInstagramFill} from "react-icons/ri";
import {FaGithub } from "react-icons/fa";
import { SiSolidity } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiJavascript } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { useState } from "react";
import main from "../public/main.jpg";
import data from "../public/data.jpg";
import opensea from "../public/opensea.jpg";
import weather from "../public/weather.jpg";
import Image from "next/image";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Developed By Yuvraj</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-purple-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:animate-pulse"
                  href="www.linkedin.com/in/yuvraj-singh-gangwar"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-pink-600 font-medium hover:text-cyan-600 dark:text-teal-400 md:text-6xl">
              Yuvraj Singh Gangwar
            </h2>
            <h3 className="text-2xl py-2 text-cyan-700 hover:text-pink-600 dark:text-white md:text-3xl">
              Competitive Programmer and Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              3rd Year Btech Computer Science Student. 
              Likes Programming.  
              Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a className="hover:scale-150 duration-300" href="https://twitter.com/YuvrajSinghGan1">
            <AiFillTwitterCircle/>
              <span class="sr-only">Twitter</span>  
            </a>
            <a className="hover:scale-150 duration-300" href="https://github.com/fantastic-yuvi">
            <FaGithub  />
              <span class="sr-only">GitHub</span>  
            </a>
            <a className="hover:scale-150 duration-300" href="www.linkedin.com/in/yuvraj-singh-gangwar">
            <AiFillLinkedin />
              <span class="sr-only">linkedin</span>  
            </a>
             
            <a className="hover:scale-150 duration-300" href="https://mailto:ysgangwarfbd@gmail.com">
            <MdMarkEmailUnread />
              <span class="sr-only">Email</span>  
            </a>

            <a  className="hover:scale-150 duration-300" href="https://www.instagram.com/fantastic_yuvi/">
            <RiInstagramFill />
              <span class="sr-only">Instagram</span>  
            </a>
             
            </div>
            <div className="mx-auto bg-gradient-to-b from-pink-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={main} alt="to" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        
          <div>
          <p className="text-2xl text-black  md:text-4xl font-bold text-center pt-4">
          Tech I Use 
        </p>
        </div>

    <div className = "flex flex-wrap justify-center pt-2">
        
       
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiSolidity color="#808080" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <p className="mt-6 text-xl font-semibold text-center">
            Solidity
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <p className="mt-6 text-xl font-semibold text-center">
            React
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiCplusplus color="orange" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <p className="mt-6 text-xl font-semibold text-center">
            C++
          </p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <p className="mt-6 text-base font-semibold text-center">
            Tailwind-CSS
          </p>
        </div>
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript color="#ffdf00" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <p className="mt-6 text-xl font-semibold text-center">
            JavaScript
          </p>
        </div>
       
        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <TbBrandNextjs color="red" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <p className="mt-6 text-xl font-semibold text-center">
            Next Js
          </p>
        </div>
    </div>
      <div>
          <p className="text-3xl py-1 dark:text-white  md:text-4xl  text-center pt-4">
          My Coding Profiles
        </p>
      </div>
      <div className = "flex flex-wrap justify-center pt-2">
        
       
       

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiCodeforces color="red" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <a href="https://codeforces.com/Lord_yuvi/">
          <p className="mt-6 text-xl font-semibold text-center hover:text-cyan-400 hover:scale-150 duration-150 hover:animate-pulse  duration-150 ">
            lord_yuvi
          </p>
          </a>
          
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiLeetcode color="#ffdf00" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <a href="https://leetcode.com/Lord_yuvi/">
          <p className="mt-6 text-xl font-semibold text-center hover:text-cyan-400  hover:scale-150 duration-150 hover:animate-pulse  duration-150 ">
            lord_yuvi
          </p>
          </a>
          
        </div>


        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiCodechef color="blue" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <a href="https://codechef.com/users/fantastic_yuvi/">
          <p className="mt-6 text-xl font-semibold text-center hover:text-cyan-400  hover:scale-150 duration-150 hover:animate-pulse  duration-150 ">
            fantastic_yuvi
          </p>
          </a>
          
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaHackerrank color="teal" className="mx-auto text-4xl hover:scale-150 duration-300" />
          <a href="https://www.hackerrank.com/2001640100322_2B">
          <p className="mt-6 text-xl font-semibold text-center hover:text-cyan-400  hover:scale-150 duration-150 hover:animate-pulse  duration-150 ">
            fantastic_yuvi
          </p>
          </a>
          
        </div>
      </div>

      <div>
          <p className="text-3xl py-1 dark:text-white  md:text-4xl  text-center pt-4">
          Some of My Personal Projects
        </p>
      </div>


          {/* </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <a href="https://opensea-clone-tan.vercel.app/">
              <Image src={opensea} width={300} height={200} />
              </a>
              
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                 OpenSea Clone App
              </h3>
              <a href="https://opensea-clone-tan.vercel.app/">
              <h2 className=" text-blue-600 hover:text-cyan-400 hover:scale-150 duration-150 hover:animate-pulse  duration-150">view live</h2>
              </a>
              <p className="py-2">
                This App is a NFT Marketplace in which we can Mint, Buy an NFT.
                Built on Ethereum Blockchain And Thirdweb. 
              </p>
              <p className="text-gray-800 py-1">Works on Georli Test Network</p>
              <a href="https://github.com/fantastic-yuvi/opensea-clone">
              <h4 className="py-4 text-teal-600 hover:text-cyan-400 hover:scale-150 duration-150 hover:animate-pulse  duration-150">View on Github</h4>
              </a>
              
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">Snaity.io</p>
              <p className="text-gray-800 py-1">Thirdweb</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <a href=" https://fantastic-yuvi.github.io/data-analytics-app/">
              <Image src={data} width={300} height={200} />
              </a>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Data Analytics App
              </h3>
              <a href=" https://fantastic-yuvi.github.io/data-analytics-app/">
              <h2 className=" text-blue-600 hover:text-cyan-400 hover:scale-150 duration-150 hover:animate-pulse  duration-150">view live</h2>
              </a>
             
              <p className="py-2">
              Data Analytics Web App Only Frontend Using Tailwind Css and React Js
              </p>
              <a href="https://github.com/fantastic-yuvi/data-analytics-app">
                <h4 className="py-4 text-teal-600 hover:text-cyan-400 hover:scale-150 duration-150 hover:animate-pulse  duration-150">View on Github</h4>
              </a>
              
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">Tailwind Css</p>
  
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <a href="https://weather-li.netlify.app/">
              <Image src={weather} width={300} height={200} />
              </a>
             
              <h3 className="text-lg font-medium pt-8 pb-2 ">Weather App</h3>
              <a href="https://weather-li.netlify.app/">
              <h2 className=" text-blue-600 hover:text-cyan-400 hover:scale-150 duration-150 hover:animate-pulse  duration-150">view live</h2>
              </a>
              <p className="py-2">
                This weather App tells the current weather in the Entered Location on city.
                Works on Openweather API
              </p>
              <a href="https://github.com/fantastic-yuvi/weather-App">
                <h4 className="py-4 text-teal-600 hover:text-cyan-400 hover:scale-150 duration-150 hover:animate-pulse  duration-150">View on Github</h4>
              </a>
              
              <p className="text-gray-800 py-1">React JS</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Openweather API</p>
            </div>
          </div>
        <div className="py-5 border-t-3/2">
            <div className="flex align-center justify-center mt-4">
                
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/fantastic-yuvi">
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.instagram.com/fantastic_yuvi/">
              <BsInstagram />
              <span class="sr-only">Instagram</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/yuvraj-singh-gangwar-b614a822b/">
              <BsLinkedin />
              <span class="sr-only">Linkedin</span>  
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://mailto:ysgangwarfbd2001@gmail.com">
              <FaRegEnvelope />
              <span class="sr-only">Email</span>  
            </a>
             
            </div>
            <div className="flex align-center justify-center mt-4">
              <p className="text-black mb-4">
                  Made with <span className = "mr-2" role="img" aria-label="heart">💙 </span>by<a className="text-blue-500 hover:underline" href="mailto:me.ysgangwarfbd2001@gmail.com"> Yuvraj Singh Gangwar</a>
              </p>
              </div>
        </div> */}
      </main>
    </div>
  );
}
