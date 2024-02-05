'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/navbar/logowhite.png'
import MobileMenu from '@/components/NavbarMobile'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-100 transition duration-300 ease-in-out ${!top ? 'bg-[#5569B2] backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-1 max-lg:py-2 ">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4 z-30">
            <Link href="/">
                <Image src={Logo} alt='tes' className='w-[250px] max-md:w-[200px] drop-shadow-2xl'></Image>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/aboutus" className="font-medium text-[17px] text-white hover:text-gray-600 px-5 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl">About Us</Link>
              </li>
              <li>
                <Link href="/signin" className="font-medium text-[17px] text-white hover:text-gray-600 px-5 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl">Services</Link>
              </li>
              <li>
                <Link href="/signin" className="font-medium text-[17px] text-white hover:text-gray-600 px-5 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl">Blog</Link>
              </li>
              <li>
                <Link href="/signin" className="font-medium text-[17px] text-white hover:text-gray-600 px-5 py-3 flex items-center transition duration-150 ease-in-out drop-shadow-2xl">Contact Us</Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
