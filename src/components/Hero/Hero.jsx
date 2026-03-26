import React from 'react'
import { BiLogoPlayStore } from 'react-icons/bi'
import { FaAppStoreIos } from 'react-icons/fa'

import hero from '../../assets/hero.png'
export default function Hero() {
    return (
        <div className='py-12 lg:py-20 min-h-80'>
           <div className='space-y-10'>
             <div className='flex flex-col justify-center items-center'>
                <p className='lg:text-6xl text-4xl font-bold max-w-120vh flex flex-col items-center'>We Build </p>
                <p className='lg:text-6xl text-4xl max-w-120vh font-bold'><span className='font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text'>Productive</span> Apps</p>
            </div>
            <p className='sm:4 lg:px-48 text-center text-base font-medium text-gray-600'>At APPDECK, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex gap-2 justify-center'>
                <button className='flex items-center btn hover:border-2 hover:border-blue-500'><BiLogoPlayStore size={24}/>
                    Google Play</button>
                <button className='flex items-center btn hover:border-2 hover:border-blue-500'><FaAppStoreIos size={24}/>
                    App Store</button>
            </div>
            <div className='flex justify-center px-4'>
                <img src={hero} alt="hero img" />
            </div>
           </div>
           <div className='min-h-32 py-10 lg:py-20 px-4 w-full bg-linear-to-r from-[#632EE3] to-[#9F62F2] '>
            <p className='text-3xl font-semibold text-center text-gray-100'>Trusted by Millions, Built for You</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className='flex flex-col items-center justify-center space-y-4 text-white'>
                <p>Total Downloads</p>
                <p className='text-4xl font-extrabold'>29.6M</p>
                <p className='capitalize'>21% More than last month</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-4 text-white'>
                <p>Total Reviews</p>
                <p className='text-4xl font-extrabold'>906K</p>
                <p className='capitalize'>46% More than last month</p>
            </div>
            <div className='flex flex-col items-center justify-center space-y-4 text-white'>
                <p>Active Apps</p>
                <p className='text-4xl font-extrabold'>132+</p>
                <p className='capitalize'>32 More will Launch</p>
            </div>
            </div>
           </div>

        </div>
    )
}
