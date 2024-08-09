import React, { useState } from 'react'

import { Button, Img, Text } from 'components'

import { handleSectionNavigation } from 'utils'

const Navbar = props => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <header className="sticky top-0 z-50 shadow">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img src="/images/mamapesa.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MamaPesa</span>
          </a>
          
          <ul className='flex flex-row gap-8 sm:hidden items-start justify-start w-auto common-row-list'>
            <li>
              <a href='/#hero-section' className='text-base text-black-900'>
                <Text size='txtLatoRegular16'>{props?.nav1}</Text>
              </a>
            </li>
            <li>
              <a href='/#services' className='text-base text-black-900'>
                <Text
                  className='common-pointer'
                  size='txtLatoRegular16'
                  onClick={() => {
                    handleSectionNavigation('services')
                  }}
                >
                  {props?.nav2}
                </Text>
              </a>
            </li>
            <li>
              <a href="/airtime-purchase" className='text-base text-black-900'>
                <Text
                  className='common-pointer'
                  size='txtLatoRegular16'
                >
                  Buy Airtime
                </Text>
              </a>
            </li>
            <li>
              <a href="/bill-payment" className='text-base text-black-900'>
                <Text
                  className='common-pointer'
                  size='txtLatoRegular16'
                >
                  Bill Payment
                </Text>
              </a>
            </li>
            <li>
              <a href='/#contact-us' className='text-base text-black-900'>
                <Text
                  className='common-pointer'
                  size='txtLatoRegular16'
                  onClick={() => {
                    handleSectionNavigation('contact-us')
                  }}
                >
                  {props?.nav3}
                </Text>
              </a>
            </li>
          </ul>

          <Button
              className='!rounded-[20px] cursor-pointer font-roboto min-w-[97px] md:rounded-[16px] text-base text-center hide-mobi'
              shape='square'
              color='purple_800'
              size='xxs'
              variant='fill'
            >
              {props?.btn}
            </Button>

          <button
            className="inline-flex items-center show-mobi p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >

            <span className="sr-only">Toggle mobile menu</span>
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
            <svg
              className={`w-6 h-6 ${isMobileMenuOpen ? '' : 'hidden'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className={`lg:hidden w-full ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="/#hero-section" onClick={toggleMobileMenu} className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">
                      {props?.nav1}
                    </a>
                </li>
                <li>
                    <a href="/#services" 
                      onClick={() => {
                        handleSectionNavigation('services'),toggleMobileMenu()
                      }} 
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{props?.nav2}</a>
                </li>
                <li>
                    <a onClick={toggleMobileMenu} href="/airtime-purchase" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Buy Airtime</a>
                </li>
                <li>
                    <a onClick={toggleMobileMenu} href="/bill-payment" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Bill payment</a>
                </li>
                <li>
                    <a href="/#contact-us" 
                    onClick={() => {
                      handleSectionNavigation('contact-us'),toggleMobileMenu()
                    }}
                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{props?.nav3}</a>
                </li>
                <Button
                  onClick={toggleMobileMenu}
                  className='!rounded-[20px] cursor-pointer font-roboto min-w-[97px] md:rounded-[16px] text-base text-center'
                  shape='square'
                  color='purple_800'
                  size='xxs'
                  variant='fill'
                >
                  {props?.btn}
                </Button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

Navbar.defaultProps = {
  nav1: 'About Us',
  nav2: 'Services',
  nav3: 'Contact Us',
  btn: 'Get App'
}

export default Navbar
