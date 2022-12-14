import React from 'react';
import Image from 'next/image';
import adukeImg from '../public/assets/projects/adukemenu.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const adukemenu = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={adukeImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>E-Menu | Aduke Nigerian Cuisine</h2>
          <h3>NextJS | TaiwindCSS | Sanity</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a list of nmenu item devloped into an e-format. Developed
            for Aduke Nigerian Cuisine in Los Angeles to further enhance
            customer experience in their expansion to a bigger store.
          </p>
          <div className='text-[#444]'>
            <button className='px-8 py-2 mt-4 mr-8'>
              <Link
                href='https://aduke-e-menu.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
                Demo
              </Link>
            </button>
            <button className='px-8 py-2 mt-4'>
              <Link
                href='https://github.com/akinyeleakindoyin/aduke_e-menu.git'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </Link>
            </button>
          </div>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-gray-400 shadow-xl rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NextJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TailwindCSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sanity
              </p>
            </div>
          </div>
        </div>

        <Link href='/#portfolio'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default adukemenu;
