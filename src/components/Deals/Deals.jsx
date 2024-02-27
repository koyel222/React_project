import React from 'react'
import Card from './Card'

const Deals = ({theme}) => {
  return (
    <div className='mb-10'>
        <h2 className={`${theme == "dark" ? ' text-slate-200' : ' text-slate-700'} text-[35px]`}>Related deals you might like for</h2>
        <div className='flex gap-5'>
            <Card theme={theme}/>
            <Card theme={theme}/>
            <Card theme={theme}/>
        </div>
    </div>
  )
}

export default Deals