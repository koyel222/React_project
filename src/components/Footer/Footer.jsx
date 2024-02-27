import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full bg-black min-h-80 flex justify-center items-center gap-5'>

        <div className='text-white flex flex-col '>
            {/* <h3>CATEGORIES</h3> */}
            <ul className='flex flex-col'>
                <li>Web Builder</li>
                <li>Hosting</li>
                <li>Data center</li>
                <li>Robotic-Automation</li>
            </ul>
        </div>
        <div className='text-white flex flex-row items-start '>
            {/* <h3>CONTACT</h3> */}
            <ul className='flex flex-col'>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
                <li>Categories</li>
                <li>About</li>
            </ul>
        </div>

    </div>
  )
}

export default Footer