import Image from 'next/image'
import React from 'react'
import { BsCart2 } from 'react-icons/bs'
import { LiaSearchPlusSolid } from 'react-icons/lia'
import { TbHeart } from 'react-icons/tb'

const FeaturePR4 = () => {
    return (
        <div className='w-full h-[360px] flex flex-col relative group transition-all duration-200 shadow-lg drop-shadow-sm shadow-[#f4f4f4]'>

            {/* Image */}
            <div className='w-full h-2/3 bg-[#f6f7fb] flex justify-center items-center'>
                <Image src={'/fr4.png'} height={200} width={200} alt='product' />
            </div>

            {/* Details */}
            <div className='flex flex-col items-center gap-2 bg-white group-hover:bg-[#2f1ac4]  py-2'>
                <h1 className='text-[#fb2e86] group-hover:text-white font-lato text-lg font-semibold'>Cantilever chair</h1>
                <div className='flex justify-center items-center gap-3'>
                    <div className='w-4 h-1 bg-[#05E6B7] rounded-full'></div>
                    <div className='w-4 h-1 bg-[#fb2e86] rounded-full'></div>
                    <div className='w-4 h-1 bg-[#151875] group-hover:bg-white rounded-full'></div>
                </div>
                <p className='font-josefin-sans font-normal text-sm text-offBlue group-hover:text-white'>Code - Y523201</p>
                <p className='font-lato font-normal text-sm text-offBlue group-hover:text-white'>$42.00</p>
            </div>

            {/* Details Button */}
            <div className='flex justify-center items-center absolute bottom-[130px] left-8 md:left-16 opacity-0 group-hover:opacity-100'>
                <button className='px-4 py-2 rounded-sm text-white bg-[#08D15F] font-josefin-sans text-xs hover:bg-black'>View Details</button>
            </div>

            {/* icons */}
            <div className='flex justify-start items-center gap-2 absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100'>
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

export default FeaturePR4;
