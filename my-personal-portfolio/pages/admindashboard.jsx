import React from 'react';
import Image from 'next/image';
import admindashboardImg from '../public/assets/projects/admindashboard.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const admindashboard = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={admindashboardImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Admin Dashboard</h2>
          <h3>ReactJS | SyncfusionUI </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Shoppy is an admin dashboard that comprises a lot of feature such as
            Calendar, Kanban, Different kinds of Charts, Employees and Orders
            page, Chat, Notification, Admin profile, Carts.
          </p>
          <div className='text-[#444]'>
            <button className='px-8 py-2 mt-4 mr-8'>
              <Link
                href='http://syncfusion-dashboard-akinyele.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                Demo
              </Link>
            </button>
            <button className='px-8 py-2 mt-4'>
              <Link
                href='https://github.com/akinyeleakindoyin/syncfusion-admindashboard.git'
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
                <RiRadioButtonFill className='pr-1' /> ReactJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SyncfusionUI
              </p>
            </div>
          </div>
        </div>

        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default admindashboard;
