import Image from 'next/image'
import React from 'react'
import { BsCart2 } from 'react-icons/bs'
import { LiaSearchPlusSolid } from 'react-icons/lia'
import { TbHeart } from 'react-icons/tb'


const LatestPR4 = () => {
    return (
        <div className='w-full h-[360px] flex flex-col relative group transition-all duration-200 shadow-sm hover:shadow-md shadow-gray-100'>

            {/* Image */}
            <div className='w-full h-[90%] bg-[#f7f7f7] group-hover:bg-transparent flex justify-center items-center'>
                <Image src={'/latest4.png'} height={220} width={220} alt='product' />
            </div>

            {/* Details */}
            <div className='flex items-center justify-between gap-2 bg-white  py-2'>
                <h1 className='text-[#151875] font-josefin-sans font-semibold pl-1'>Comfort Handy Craft</h1>
                <div className='flex gap-2'>
                    <p className='font-josefin-sans font-normal text-sm text-[#151875]'>$42.00</p>
                    <p className='font-lato text-xs text-[#fb2e86] line-through'>$65.00</p>
                </div>
            </div>


            {/* icons */}
            <div className='flex flex-col items-center gap-2 absolute bottom-16 left-2 z-10 opacity-0 group-hover:opacity-100'>
                <div className='flex justify-center items-center bg-transparent text-[#151875] hover:bg-[#e6e6e7] hover:text-offNavyBlue cursor-pointer rounded-full size-8 p-1'>
                    <BsCart2 size={25} />
                </div>

                <div className='flex justify-center items-center bg-transparent text-[#151875] hover:bg-[#e6e6e7] hover:text-offNavyBlue cursor-pointer rounded-full size-8 p-1'>
                    <TbHeart size={25} />
                </div>

                <div className='flex justify-center items-center bg-transparent text-[#151875] hover:bg-[#e6e6e7] hover:text-offNavyBlue cursor-pointer rounded-full size-8 p-1'>
                    <LiaSearchPlusSolid size={25} />
                </div>
            </div>
        </div>
    )
}

export default LatestPR4
