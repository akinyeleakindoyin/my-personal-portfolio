import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProjectData } from '../public/assets/data';

const PortfolioItems = ({
  title,
  backgroundImg,
  projectUrl,
  techStack,
  demo,
  github,
}) => {
  // return (
  // <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
  //   <Image
  //     className='rounded-xl group-hover:opacity-10'
  //     src={backgroundImg}
  //     alt='/'
  //   />
  //   <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
  //     <h3 className='text-2xl text-white tracking-wider text-center'>
  //       {title}
  //     </h3>
  //     <p className='pb-4 pt-2 text-white text-center'>HTML/CSSS/JavaScript</p>
  //     <Link href={projectUrl}>
  //       <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
  //         More Info
  //       </p>
  //     </Link>
  //   </div>
  {
    /* Card display */
  }
  return (
    <div className=' mt-10'>
      <div className='h-[360px] w-80  bg-[#f3f3f3] relative  justify-center items-center shadow-xl shadow-[#212121]/20 rounded-b-lg rounded-t-lg'>
        <div className=' pt-2'>
          <h2 className=' text-[#444] font-extrabold text-lg ml-4 mt-4'>
            {title}
          </h2>
        </div>
        <div className='w-full mt-6 relative'>
          <Image src={backgroundImg} width='400' height='200' />
        </div>
        <div>
          <Link href={projectUrl}>
            <p className='text-start mb-6 text-gray-700 font-bold text-sm ml-4 underline cursor-pointer'>
              More Info
            </p>
          </Link>
        </div>
        <div>
          <p className='text-[#444] text-sm font-bold ml-4'>{techStack}</p>
          <div className='mt-4 absolute -left-1 bottom-3'>
            <button className='ml-4 shadow-gray-400 shadow-lg p-2 px-4 rounded-xl  text-[#444] hover:bg-[#f75023]/50 hover:text-[#f3f3f3] hover:scale-105  ease-in transition 0.6s font-bold tracking-wider'>
              <a href={demo} target='_blank'>
                Demo
              </a>
            </button>
            <button className='ml-4 shadow-gray-400 shadow-lg p-2  px-4 rounded-xl text-[#444] hover:bg-[#f75023]/50 hover:text-[#f3f3f3] hover:scale-105 ease-in transition 0.6s font-bold tracking-wider'>
              <a href={github} target='_blank'>
                Github
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItems;
