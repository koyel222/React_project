import React from 'react'
import '../Header/Header.css'
import { FaRegCheckCircle  } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoCaretDownCircleOutline } from "react-icons/io5";

const Heading = () => {
  return (
    <div className='head'>
        <div className='head-text'>Best Website builders in the US</div>

        <div className='head-second'>
          <div className=' flex justify-center items-center gap-2'>
            <FaRegCheckCircle />
            Last Updated - February 22,2020
            <IoMdInformationCircleOutline />
            Advertising Disclosure
          </div>
          <div className=' flex justify-center items-center gap-2 cursor-pointer'>
            Top Relevent
            <IoCaretDownCircleOutline />
          </div>
        </div>
    </div>
  )
}

export default Heading ;