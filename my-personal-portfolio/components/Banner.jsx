import React from 'react';
import Image from 'next/image';
import bannerImg from '../public/assets/akinImg.jpg';
import coolImg from '../public/assets/cool-businessman.png';
import webdevImg from '../public/assets/man-developing-website-on-desk.png';
import remoteImg from '../public/assets/remote.png';
import { FaLinkedinIn } from 'react-icons/fa';
import { RiSuitcaseLine } from 'react-icons/ri';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import Link from 'next/link';

const Banner = () => {
  return (
    <div>
      <div className='w-screen h-[70vh] '>
        {/* <button className='text-red-200 font-bold p-2 cursor-pointer'>
            Hire Me
          </button> */}
        <div className='flex flex-col items-center justify-center w-screen h-screen'>
          <p className='text-[#444] sm:text-lg dark:text-[color:var(--bg-color)] font-extrabold'>
            Hi there 👋🏾, I am
          </p>
          <h1 className=' lg:text-[70px] md:text-[70px] sm:text-[50px] xs:text-[30px] text-[#444] dark:text-[color:var(--bg-color)] '>
            Akinyele Akindoyin
          </h1>
          <div className='flex flex-col justify-center xs:justify-center items-center gap-1 '>
            <p className='text-[#444] dark:text-[color:var(--bg-color)] sm:text-lg font-extrabold xs:text-center'>
              I am a Software Developer based in Los Angeles California.
            </p>
            <p className='text-[#444] dark:text-[color:var(--bg-color)] sm:text-lg font-extrabold xs:text-center '>
              Currently, I am a Computer Science and Programming major at Los
              Angeles City College.
            </p>
            <p className='text-[#444] dark:text-[color:var(--bg-color)] sm:text-lg font-extrabold xs:text-center'>
              I am a Driven Web Developer skilled
            </p>
            <p className='text-[#444] dark:text-[color:var(--bg-color)] sm:text-lg font-extrabold xs:text-center '>
              in team collaboration to formulate and conceptualize corporate web
              presence.
            </p>
            <p className='text-[#444] dark:text-[color:var(--bg-color)] sm:text-lg font-extrabold xs:text-center'>
              When I am not coding or learning some technology you will catch me
            </p>
            <p className='text-[#444] dark:text-[color:var(--bg-color)] sm:text-lg font-extrabold xs:text-center'>
              in the bowling lanes, or taking a walk or visiting somewhere new.
            </p>
            {/* <p className='text-[#444] dark:text-[color:var(--bg-color)] sm:text-lg font-extrabold xs:hidden'>
              Integrates knowledge of visual arts to develop functional,
            </p>
            <p className='text-[#444] dark:text-[color:var(--bg-color)] sm:text-lg font-extrabold xs:hidden '>
              appealing, custom-made web products and services.
            </p> */}
            <div>
              <div className='flex items-center mt-3'>
                {/* <div
                  className='p-1 hover:bg-[#f75023]/10  rounded-full flex items-center justify-center w-10 h-10 cursor-pointer'
                  title='About Me'
                >
                  <Link href='/'>
                    <SiAboutdotme
                      size={25}
                      className='cursor-pointer text-[#444] dark:text-[color:var(--bg-color)] '
                      title='About Me'
                    />
                  </Link>
                </div> */}
                <div
                  className='p-1 hover:bg-[#f75023]/10 rounded-full flex items-center justify-center w-10 h-10 cursor-pointer'
                  title='LinkedIn'
                >
                  <Link
                    href='https://www.linkedin.com/in/akinyeleakindoyin'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaLinkedinIn
                      size={20}
                      className='cursor-pointer text-[#444] dark:text-[color:var(--bg-color)] '
                      title='LinkedIn'
                    />
                  </Link>
                </div>
                <div
                  className='p-2 hover:bg-[#f75023]/10 rounded-full flex items-center justify-center w-10 h-10 cursor-pointer'
                  title='Github'
                >
                  <Link
                    href='https://github.com/akinyeleakindoyin'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiOutlineGithub
                      size={20}
                      className='cursor-pointer text-[#444] dark:text-[color:var(--bg-color)] '
                      title='Github'
                    />
                  </Link>
                </div>
                <div
                  className='p-2  hover:bg-[#f75023]/10 rounded-full flex items-center justify-center w-10 h-10 cursor-pointer'
                  title='Portfolio'
                >
                  <Link href='#portfolio'>
                    <RiSuitcaseLine
                      size={20}
                      className='cursor-pointer text-[#444] dark:text-[color:var(--bg-color)]  '
                      title='Portfolio'
                    />
                  </Link>
                </div>
                <div
                  className='p-1 hover:bg-[#f75023]/10  rounded-full flex items-center justify-center w-10 h-10 cursor-pointer'
                  title='About Me'
                >
                  <Link
                    href='mailto:akinyeleakindoyin@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AiOutlineMail
                      size={20}
                      className='cursor-pointer text-[#444] dark:text-[color:var(--bg-color)] '
                      title='About Me'
                    />
                  </Link>
                </div>
                <div
                  className='p-2 hover:bg-[#f75023]/10  rounded-full flex items-center justify-center w-10 h-10 cursor-pointer'
                  title='Contact Me'
                >
                  <Link href='tel:3237045668'>
                    <BiPhoneCall
                      size={20}
                      className='cursor-pointer text-[#444] dark:text-[color:var(--bg-color)]  font-light'
                      title='Contact Me'
                    />
                  </Link>
                </div>
                {/* </div> */}
                <div>
                  {/* <button className='text-[#fff] font-bold p-2 cursor-pointer'>
                    Hire Me
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
