import React from 'react';
import Image from 'next/image';
import htmlImg from '../public/assets/skills/html5.png';
import cssImg from '../public/assets/skills/css3.png';
import javascriptImg from '../public/assets/skills/javascript.png';
import githublImg from '../public/assets/skills/github.png';
import nextImg from '../public/assets/skills/nextjs.png';
import reactImg from '../public/assets/skills/reactjs.png';
import tailwindImg from '../public/assets/skills/tailwindcss.png';
import bootstrapImg from '../public/assets/skills/bootstrap.png';
import sqlImg from '../public/assets/skills/sql.png';

const Skills = ({ nav }) => {
  return (
    <div id='skills' className='w-full mt-20 lg:mt-20 p-6'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full items-center'>
        <p className='text-xl tracking-widest uppercase text-[#444] font-bold'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='flex flex-wrap xs:grid xs grid-cols-3 xs:gap-3 gap-8 items-center justify-center'>
          <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='flex flex-col justify-center items-center'>
              <div className='xs:z-10'>
                <Image src={htmlImg} width='64px' height='64px' alt='/' />
              </div>
              <div className=''>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='flex flex-col justify-center items-center'>
              <div className=''>
                <Image src={cssImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='flex flex-col justify-center items-center'>
              <div className='m-auto'>
                <Image src={javascriptImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='flex flex-col justify-center items-center'>
              <div className='m-auto'>
                <Image src={reactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='flex flex-col justify-center items-center'>
              <div className='m-auto'>
                <Image src={nextImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NextJs</h3>
              </div>
            </div>
          </div>
          <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='flex flex-col justify-center items-center'>
              <div className='m-auto'>
                <Image src={tailwindImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwindcss</h3>
              </div>
            </div>
          </div>
          <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='flex flex-col justify-center items-center'>
              <div className='m-auto'>
                <Image src={githublImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='flex flex-col justify-center items-center'>
              <div className='m-auto'>
                <Image src={bootstrapImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='flex flex-col justify-center items-center'>
              <div className='m-auto'>
                <Image src={sqlImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>SQL</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
