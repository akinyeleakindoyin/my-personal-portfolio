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
  /* Card display */

  return (
    <div className=' mt-10'>
      <div className='h-[360px] w-80  bg-[#f3f3f3] relative  justify-center items-center shadow-xl shadow-[#212121]/20 rounded-b-lg rounded-t-lg'>
        <div className=' pt-2'>
          <h2 className=' text-[#444] font-extrabold text-lg ml-4 mt-4'>
            {title}
          </h2>
        </div>
        <div className='w-full mt-6 relative'>
          <Image src={backgroundImg} width='400' height='200' alt='/' />
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
              <Link href={demo} target='_blank' rel='noreferrer'>
                Demo
              </Link>
            </button>
            <button className='ml-4 shadow-gray-400 shadow-lg p-2  px-4 rounded-xl text-[#444] hover:bg-[#f75023]/50 hover:text-[#f3f3f3] hover:scale-105 ease-in transition 0.6s font-bold tracking-wider'>
              <Link href={github} target='_blank' rel='noreferrer'>
                Github
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItems;
