import React from 'react'
import BannerImg from '../../assets/Banner/BannerImg.jpg'
import { GrDeliver, GrSecure, GrShieldSecurity } from 'react-icons/gr'
import { CgPaypal } from 'react-icons/cg'
import { GiPayMoney } from 'react-icons/gi'
import { BiMoney, BiSolidOffer } from 'react-icons/bi'

const Banner = () => {
  return (
    <div className='py-10'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center" data-aos='zoom-in' data-aos-duration='1000'>
            <div>
                <img src={BannerImg} alt="" className='w-[300px] md:w-[600px] block mx-auto'/>
            </div>
            <div className='px-10 text-center flex justify-center flex-col'>
                <h1 className='text-3xl sm:text-4xl flex justify-center gap-6 sm:pt-0 font-bold dark:text-white py-4'>Library at your fingertips</h1>
                <p className='text-sm text-gray-500 tracking-wide dark:text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex libero similique cum animi incidunt fugiat odio accusamus neque odit quo.</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:flex xl:flex-col gap-6 py-6'>
                    <div className='flex items-center gap-4'>
                        <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-600 dark:bg-violet-400'/>
                        <p className='dark:text-white'>Quality Books</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <GrDeliver className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-600 dark:bg-green-400'/>
                        <p className='dark:text-white'>Fast Delivery</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <BiMoney className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-600 dark:bg-yellow-400'/>
                        <p className='dark:text-white'>Easy Payment Method</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <BiSolidOffer className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-600 dark:bg-blue-400'/>
                        <p className='dark:text-white'>Best Offers in the Country</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
