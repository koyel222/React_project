import React from 'react'
import computer from '../../assets/computer.png'
import { RiStarSFill } from 'react-icons/ri';
import { IoIosArrowDown } from "react-icons/io";

const BigCard = ({rating,review,caption,theme}) => {
  return (
    <div className='w-full flex  justify-evenly  mt-7'>
        {/* Image */}
        <div className='flex flex-col justify-center items-center'>
            <img src= {computer} className='w-[200px]'/>
            <span className={`${theme == "dark" ? 'text-white' : ' text-slate-600'}`}>{caption}</span>
        </div>
        {/* Content */}
        <div className='w-[600px] flex flex-col justify-center items-center'>
            <div className={`${theme == "dark" ? 'text-white' : ' text-slate-600'}`}>
                <p><span className='font-bold'>WixPro 72-Inch Responsive Website Builder-</span> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
            </div>
            <div>
                <h3 className={`${theme == "dark" ? 'text-white' : ' text-slate-600'} font-bold`}>Main highlights</h3>
                <p className={`${theme == "dark" ? 'text-white' : ' text-slate-600'} ml-3`}>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
            </div>
            <div className='flex justify-center w-[140px] h-[40px] items-center text-blue-500 cursor-pointer'>
                <span>Show More</span>
                <IoIosArrowDown />
            </div>
        </div>
        {/* Rating & View */}
        <div className='flex flex-col h-[300px] justify-evenly items-center'>
            <div className='h-[150px] w-[150px] flex flex-col justify-center items-center       bg-blue-100'>
                <div className='text-[50px] text-blue-700'>{rating}</div>
                <div className='text-[16px] text-blue-800'>{review}</div>
                <div className='flex items-between h-[15px]'> 
                    <RiStarSFill className='w-[12px] text-yellow-400'/>
                    <RiStarSFill className='w-[12px] text-yellow-400'/>
                    <RiStarSFill className='w-[12px] text-yellow-400'/>
                    <RiStarSFill className='w-[12px] text-yellow-400'/>
                    <RiStarSFill className='w-[12px] text-yellow-400'/>
                </div>
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-full">
                    View
            </button>
        </div>
    </div>
  )
}

export default BigCard