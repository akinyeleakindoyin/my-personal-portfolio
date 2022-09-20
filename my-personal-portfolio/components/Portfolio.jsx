import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import omnifood from '../public/assets/projects/omnifood.png';
import bankist from '../public/assets/projects/bankist.png';
import piggame from '../public/assets/projects/piggame.png';
import admindashboard from '../public/assets/projects/admindashboard.png';
import fitnessImg from '../public/assets/projects/fitnessgym.png';
import adukeImg from '../public/assets/projects/adukemenu.png';
import ecommerceImg from '../public/assets/projects/ecommerce.png';
import Link from 'next/link';
import PortfolioItems from './PortfolioItems';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { ProjectData } from '../public/assets/data.js';

const Portfolio = () => {
  return (
    <div
      id='portfolio'
      className=' py-2 mx-1 overflow-x-scroll  items-center justify-center '
    >
      {/* <div>
        <p className='text-xl tracking-widest text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I Have Built</h2> */}
      {/* <div>
          {ProjectData.map((project) => {
            <div className='flex'>
              <PortfolioItems
                title={project.Name}
                key={project.ProjectID}
                backgroundImg={project.image}
              />
              ;
            </div>;
          })}
        </div> */}
      <div className='md:grid flex  lg:flex-wrap lg:gap-8  gap-2 md:grid-cols-2 md:gap-2 md:ml-10 justify-center xs:translate-x-[6%] sm:translate-x-[6%] sm:justify-start xs:justify-start  items-center'>
        <div id='slides' className=''>
          <PortfolioItems
            title='Fitness-Gym'
            backgroundImg={fitnessImg}
            projectUrl='/fitnessgym'
            demo='https://fitnessexercises-akinyele.netlify.app/'
            github='https://github.com/akinyeleakindoyin/fitnessexercises.git'
          />
        </div>
        <div id='slides' className=''>
          <PortfolioItems
            title='Aduke E-Menu'
            backgroundImg={adukeImg}
            projectUrl='/adukemenu'
            demo='https://aduke-e-menu.vercel.app/'
            github='https://github.com/akinyeleakindoyin/aduke_e-menu.git'
          />
        </div>
        <div id='slides' className=''>
          <PortfolioItems
            title='Ecommerce - Akin Headphones'
            backgroundImg={ecommerceImg}
            projectUrl='/ecommerce'
            github='https://github.com/akinyeleakindoyin/ecommerce-akinyele.git'
            demo='https://ecommerce-akinyele.vercel.app/'
          />
        </div>
        {/* <div id='slider' className=''> */}
        <div id='slides' className=''>
          <PortfolioItems
            title='Omnifood | Landing Page'
            backgroundImg={omnifood}
            projectUrl='/omnifood'
            github='https://github.com/akinyeleakindoyin/omnifood.git'
            demo='omnifood-akinyele.netlify.app'
          />
        </div>
        <div id='slides' className=' '>
          {/* <div className='testimonial'> */}
          <PortfolioItems
            title='Admin Dashboard'
            backgroundImg={admindashboard}
            projectUrl='/admindashboard'
            demo='http://syncfusion-dashboard-akinyele.netlify.app/'
            github='https://github.com/akinyeleakindoyin/syncfusion-admindashboard.git'
          />
          {/* </div> */}
        </div>
        {/* <div id='slides' className=''>
          <PortfolioItems
            title='Omnifood'
            backgroundImg={omnifood}
            projectUrl='/omnifood'
          />
        </div> */}

        <div id='slides' className=''>
          {/* <div className='testimonial'> */}
          <PortfolioItems
            title='Bankist'
            backgroundImg={bankist}
            projectUrl='/bankist'
            demo='http://bankistproject-akinyele.netlify.app/'
            github='https://github.com/akinyeleakindoyin/bankist-project.git'
          />
          {/* </div> */}
        </div>
        <div id='slides' className=''>
          {/* <div className='testimonial'> */}
          <PortfolioItems
            title='Pig Game'
            backgroundImg={piggame}
            projectUrl='/piggame'
            github='https://github.com/akinyeleakindoyin/PigGame.git'
            demo='https://akinyeleakindoyin.github.io/PigGame/'
          />
          {/* </div> */}
        </div>
        {/* <div id='slides' className=''> */}
        {/* <div className='testimonial'> */}
        {/* <PortfolioItems
            title='Pig Game'
            backgroundImg={piggame}
            projectUrl='/piggame'
          /> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className=''> */}
        {/* <AiOutlineLeft
            id='slider__btn--l slider__btn'
            className='slider__btn--left slider__btn'
          /> */}
        {/* </div> */}
        {/* <div className=''> */}
        {/* <div id='dots' className='dots'></div>
          <AiOutlineRight
            id='slider__btn--r slider__btn'
            className='slider__btn--right slider__btn'
          /> */}
        {/* </div> */}
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Portfolio;
