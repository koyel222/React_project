import React from 'react';
// import { FaArrowUpRight } from 'react-icons/fa';
import computer from '../../assets/computer.png'

const Card = ({theme}) => {
  return (
        <div className='h-[400px] flex flex-col justify-between'>

            <div className=' flex items-center'>
                <img src={computer} className='w-[200px] ml-10 mt-5' />
            </div>
            <div className=''>
                <span className='ml-5 mr-3 text-blue-900  bg-blue-200 p-[12px] rounded-md'>20% Off</span>
                <span className='ml-5 mr-3 text-blue-900  bg-blue-200 p-[12px] rounded-md'>Limited time </span>
            </div>
            <div className='flex flex-col items-center'>
                <h2 className={`${theme == "dark" ? ' text-slate-400' : ' text-slate-700'} font-bold`}>Webbuilder 1</h2>
                <p className='text-slate-400'>Computer  Modern clasic with wix support</p>
            </div>
            <div>
                <span className={`text-xl ${theme == "dark" ? ' text-slate-100' : ' text-slate-700'} mr-5`}>$39.96</span>
                <span className='text-sm text-slate-400 mr-8'>$49.96</span>
                <span className='text-red-600'>(20% Off)</span>
            </div>
            <div className='text-center'>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-full">
                    View Deal
                </button>
            </div>
            

        </div>
  )
}

export default Card