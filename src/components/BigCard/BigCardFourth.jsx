import React from 'react'
import { RiStarSFill } from 'react-icons/ri'
import computer from '../../assets/computer.png'
import { TiTick } from "react-icons/ti";

const BigCardFourth = ({theme}) => {
  return (
    <div className='w-full flex justify-evenly  mt-7 mb-9'>
        {/* Image */}
        <div className='flex flex-col justify-center items-center'>
            <img src= {computer} className='w-[200px]'/>
            <span className={`${theme == "dark" ? 'text-white' : ' text-slate-600'}`}>CDK</span>
        </div>
        {/* Content */}
        <div className='flex flex-col'>
            <div className={`${theme == "dark" ? 'text-white' : 'text-slate-500'} flex flex-col `}>
                <p><span className='font-bold'>CDK Resposive Builder:</span> An extensive library of widgets and apps, and detailed step-by-step guides</p>
                <div className='w-[100px] bg-slate-200  text-center'>
                    <span className='text-blue-600'>26% Off</span>
                </div>
            </div>

            <div><p className={`${theme == "dark" ? 'text-white': 'text-slate-700'} font-bold`}>Main highlights</p></div>

            <div className=' ml-4'>
                <div className='flex flex-col  justify-evenly  bg-orange-100 h-[150px] p-7 font-semibold'>
                    <div><span className='text-blue-600'>9.9</span><span className=' ml-3 text-slate-600'>building responsive</span></div>
                    <div><span className='text-blue-600'>8.9</span><span className=' ml-3 text-slate-600'>Cool</span></div>
                    <div><span className='text-blue-600'>8.9</span><span className=' ml-3 text-slate-600'>Docs</span></div>
                </div>
            </div>

            <div className={`${theme == "dark" ? 'text-white' : 'text-slate-700'} mt-2`}>
                <p className='font-semibold'>Why We Love It?</p>
                <div className='flex flex-col'>
                    <div className='flex cursor-pointer'><TiTick/><span>Documentation</span></div>
                    <div className='flex cursor-pointer'><TiTick/><span>Easy Use</span></div>
                    <div className='flex cursor-pointer'><TiTick/><span>Out Of Box</span></div>
                </div>
            </div>
            
        </div>
        {/* Rating & View */}
        <div className='flex flex-col h-[300px] justify-evenly items-center'>
            <div className='h-[150px] w-[150px] flex flex-col justify-center items-center       bg-blue-100'>
                <div className='text-[50px] text-blue-700'>9.1</div>
                <div className='text-[16px] text-blue-800'>Very Good</div>
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

export default BigCardFourth