import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';

import logoImg from '../public/assets/A2.png';
import akinImg from '../public/assets/akinLogo2.png';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState('#f3f3f3');
  const [logo, setLogo] = useState(false);
  const [linkColor, setLinkColor] = useState('#444');

  const router = useRouter();

  useEffect(() => {
    window.addEventListener('click', () => setNav(false));
    return () => window.removeEventListener('click', () => setNav(false));
  });

  const handleNav = (e) => {
    e.stopPropagation();
    setNav(!nav);
  };

  useEffect(() => {
    if (
      router.asPath === '/fitnessgym' ||
      router.asPath === '/ecommerce' ||
      router.asPath === '/adukemenu' ||
      router.asPath === '/omnifood' ||
      router.asPath === '/bankist' ||
      router.asPath === '/piggame' ||
      router.asPath === '/admindashboard'
    ) {
      setLogo(true);
      setNavBg('transparent');
      setLinkColor('#f3f3f3');
    } else {
      setNavBg('#f3f3f3');
      setLinkColor('#444');
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 20) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div>
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? 'fixed w-screen flex items-center h-20 shadow-sm z-[100] justify-between'
            : 'fixed w-screen flex items-center justify-between h-20 z-[100]'
        }
      >
        <div className=' ml-10 flex justify-center'>
          <Link href='/' className='cursor-pointer'>
            <Image
              src={logo ? akinImg : logoImg}
              alt='akinyele logo'
              width='50'
              height='50'
              className='cursor-pointer'
            />
          </Link>
        </div>
        <ul
          style={{ color: `${linkColor}` }}
          className='flex  item-center justify-between font-bold  py-1 px-4 rounded-full xs:hidden mr-14'
        >
          <li className=' p-2 cursor-pointer'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-2 ml-4 cursor-pointer'>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li className='p-2 ml-4 cursor-pointer '>
            <Link
              href='https://drive.google.com/file/d/1ZlQwEGPcEHnYIzb-IAQNCHxhIQx-SOhn/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              download
            >
              Resume
            </Link>
          </li>
        </ul>
        <div
          style={{ color: `${linkColor}` }}
          className='lg:hidden md:hidden mr-10'
          onClick={handleNav}
        >
          <FiMenu size={20} />
        </div>
      </div>
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/80 z-[9999]'
            : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f3f3f3] p-10 ease-in duration-500 z-[9999]'
              : 'fixed -right-[150%] top-0  p-10 ease-in duration-500'
          }
        >
          <div className='flex w-full items-center justify-between'>
            <div className='flex justify-center item-center mt-2'>
              <Link href='/'>
                <Image src={logoImg} alt='/' width='50' height='50' />
              </Link>
            </div>
            <div
              className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'
              onClick={handleNav}
            >
              <AiOutlineClose size={20} />
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>
              Let\'s build something legendary together
            </p>
          </div>
          <div>
            <ul className='flex flex-col  item-center justify-between font-bold  py-1 rounded-full'>
              <li onClick={() => setNav(false)} className=' p-2 cursor-pointer'>
                <Link href='/'>Home</Link>
              </li>
              <li onClick={() => setNav(false)} className='p-2 cursor-pointer'>
                <Link href='#portfolio'>Portfolio</Link>
              </li>
              <li onClick={() => setNav(false)} className='p-2 cursor-pointer '>
                <Link
                  href='https://drive.google.com/file/d/1ZlQwEGPcEHnYIzb-IAQNCHxhIQx-SOhn/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                  download
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
