import Image from 'next/image'
import React from 'react'
import { BsCart2 } from 'react-icons/bs'
import { LiaSearchPlusSolid } from 'react-icons/lia'
import { TbHeart } from 'react-icons/tb'

const TrendPR4 = ({showDots=false}: {showDots?: boolean}) => {
  return (
        <>
        <div className='w-full h-[360px] flex flex-col relative group transition-all duration-200 shadow-lg mt-12 shadow-gray-100'>

            {/* Image */}
            <div className='w-full h-[70%] bg-[#f6f7fb] flex justify-center items-center'>
                <Image src={'/trending4.png'} height={170} width={170} alt='product' />
            </div>

            {/* Details */}
            <div className='flex flex-col items-center justify-center gap-2 bg-white  py-2'>
                <h1 className='text-[#151875] font-lato font-semibold'>Cantilever chair</h1>
                {showDots && <div className='flex justify-center items-center gap-2'>
                    <div className="size-3 bg-[#DE9034] rounded-full"></div>
                    <div className="size-3 bg-[#fb2e86] rounded-full"></div>
                    <div className="size-3 bg-[#151875] rounded-full"></div>
                </div>}
                <div className='flex gap-2'>
                    <p className='font-josefin-sans font-normal text-sm text-[#151875]'>$42.00</p>
                    <p className={`font-lato text-xs ${showDots ? 'text-[#fb2e86]' : 'text-gray-400'} line-through`}>$65.00</p>
                </div>
            </div>


            {/* icons */}
            <div className='flex items-center gap-2 absolute bottom-28 left-7  md:left-8 lg:left-16 z-10 opacity-0 group-hover:opacity-100'>
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
        </>

  )
}

export default TrendPR4
