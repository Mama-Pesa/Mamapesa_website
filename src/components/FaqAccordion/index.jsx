import React, { useState } from 'react'
import '../../styles/index.css'

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div className='p-2 border-black-900 border-opacity-40  border-b-2 w-full'>
      <h2
        onClick={toggleOpen}
        className='flex justify-between items-center font-semibold leading-normal text-black-900 text-left text-lg py-2 '
      >
        {question}
        <span className='text-2xl'>{isOpen ? '-' : '+'}</span>
      </h2>
      <p
        className={`transition-all duration-200 ${
          isOpen ? 'opacity-64 h-auto' : 'opacity-0 h-0'
        } text-black text-[16px] font-normal leading-normal  mt-4  `}
      >
        {answer}
      </p>
    </div>
  )
}

export default FAQ
