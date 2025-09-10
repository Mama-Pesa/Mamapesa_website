import React from 'react'

import { Img, Line, Text } from 'components'

import { handleSectionNavigation } from 'utils'

const Footer = props => {
  return (
    <>
      <footer className={props.className}>
        <div className='bg-white-A700 flex flex-col md:gap-10 gap-20 items-start md:items-start justify-start md:justify-start sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[] sm:pt-[] md:px-10 px-16 py-20 w-full'>
          <div className='flex sm:flex-col flex-row gap-8 items-center justify-start max-w-[1312px] w-full'>
            <div className='flex flex-1 flex-col sm:items-center items-start justify-start md:w-[] w-full'>
              <Img
                className='h-[60px] w-[60px]'
                alt='logos_Two'
                src={props?.logo}
              />
            </div>
            <div className='flex flex-row gap-8 items-start justify-start w-auto'>
              <Text
                className='text-base text-black-900 w-auto'
                size='txtManropeSemiBold16'
              >
                {props?.link1}
              </Text>
              <a href='/#contact-us' className='text-base text-black-900 w-auto'>
                <Text
                  className='common-pointer'
                  size='txtManropeSemiBold16'
                  onClick={() => {
                    handleSectionNavigation('contact-us')
                  }}
                >
                  {props?.link2}
                </Text>
              </a>
              <a href='javascript:' className='text-base text-black-900 w-auto'>
                <Text size='txtManropeSemiBold16'>{props?.link3}</Text>
              </a>
            </div>
            <div className='flex flex-1 flex-row gap-3 items-center sm:justify-center justify-end w-full'>
              <Img
                className='md:cursor-pointer h-6 w-6'
                alt='iconfacebook'
                src={props?.socials1}
              />
              <Img
                className='md:cursor-pointer h-6 w-6'
                alt='info'
                src={props?.socials2}
              />
              <Img
                className='md:cursor-pointer h-6 w-6'
                alt='close'
                src={props?.socials3}
              />
              <Img
                className='md:cursor-pointer h-6 w-6'
                alt='iconlinkedin'
                src={props?.socials4}
              />
            </div>
          </div>
          <div className='flex flex-col gap-8 items-center justify-start sm:justify-start w-full'>
            <Line className='bg-black-900 h-px w-full' />
            <div className='flex md:flex-col flex-row gap-6 md:items-center items-start justify-start md:justify-start w-auto md:w-full'>
              <Text
                className='text-black-900 text-sm w-auto'
                size='txtLatoRegular14'
              >
                {props?.copyright}
              </Text>
              <div className='flex flex-row gap-6 items-start justify-start w-auto'>
                <a
                  href='javascript:'
                  className='text-black-900 text-sm underline w-auto'
                >
                  <Text size='txtLatoRegular14'>Privacy Policy</Text>
                </a>
                <a
                  href='javascript:'
                  className='text-black-900 text-sm underline w-auto'
                >
                  <Text size='txtLatoRegular14'>Terms of Service</Text>
                </a>
                <Text
                  className='text-black-900 text-sm underline w-auto'
                  size='txtLatoRegular14'
                >
                  Cookies Settings
                </Text>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Footer.defaultProps = {
  logo: 'images/mamapesa.png',
  link1: 'About Us',
  link2: 'Contact Us',
  link3: 'FAQs',
  socials1: 'images/img_iconfacebook.svg',
  socials2: 'images/img_camera.svg',
  socials3: 'images/img_airplane.svg',
  socials4: 'images/img_iconlinkedin.svg',
  copyright: '© 2023 MamaPesa. All rights reserved.'
}

export default Footer
