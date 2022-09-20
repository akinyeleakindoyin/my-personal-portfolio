import Head from 'next/head';
import Image from 'next/image';
import { Banner, Portfolio, Skills } from '../components';
import bankist from '../public/assets/projects/bankist.png';

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <Skills />
        {/* <div
          id='projects'
          className='w-screen lg:max-w-[1240px] mx-auto px-2 py-16 '
        > */}
        <div className='mt-14'>
          <p className='ml-6 text-xl tracking-widest text-[#444] font-bold text-center'>
            Projects
          </p>
          <h2 className='py-4 ml-6 text-center'>What I Have Built</h2>
        </div>
        <Portfolio />
      </div>
      {/* </div> */}
    </>
  );
}
