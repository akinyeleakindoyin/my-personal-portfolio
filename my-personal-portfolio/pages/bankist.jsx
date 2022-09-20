import React from 'react';
import Image from 'next/image';
import bankistImg from '../public/assets/projects/bankist.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const bankist = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={bankistImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Bank Transaction App</h2>
          <h3>HTML / CSS / JavaScript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Bankist is a minimalist banking app for accounts holder with
            Bankist. The Web App is the client dashboard where they are able to
            make transactions within their accounts. There are two accounts that
            you can use to check out the functionality of this app. Account 1:
            Akin Brain ( username: ab | password: 1111) Account 2: Sammie Davis
            (username: sd | password: 2222) Once sucessfully logged in, You can
            see the summary of their accounts There is a timer checking for
            inactivity You can transfer and receive money between the two
            accounts and request for a loan It is quite an interesting app
          </p>
          <div className='text-white'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            <button className='px-8 py-2 mt-4'>Code</button>
          </div>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-gray-400 shadow-xl rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
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

export default bankist;
