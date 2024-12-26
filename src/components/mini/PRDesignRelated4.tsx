import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const PRDesignRelated4 = ({ version = 1 }: { version?: 1 | 2 }) => {
    return (
        <div className='w-full h-[360px] flex flex-col relative group transition-all duration-200 hover:shadow-sm shadow-gray-300'>

            {/* Image */}
            <div className='w-full h-2/3 bg-skyBlue flex justify-center items-center'>
                <Image src={'/prRelated4.jpg'} height={version == 1 ? 270 : 254} width={version == 1 ? 340 : 210} alt='product' />
            </div>

            {/* Details */}
            <div className='flex items-start justify-between gap-2 bg-white  py-5'>
                <div className={`"flex flex-col ${version == 2 ? 'items-end' : 'items-start'} gap-5"`}>
                    <h1 className={`text-black font-lato font-semibold ${version == 2 && 'text-lg'}`}>Top Wall Digital Clock</h1>
                    <div className='flex justify-start items-center gap-2'>
                        <p className={`font-lato font-normal text-sm text-[#151875]`}>$42.00</p>
                        {version == 2 && <p className={`font-lato font-normal text-sm text-[#fb2e86] line-through`}>$62.00</p>}
                       {version ==2 && <div className={`flex justify-start gap-1 text-[#FFC416] text-[10px]`}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar className='text-gray-400' />
                        </div>}
                    </div>
                </div>
                <div className={`flex justify-start gap-1 text-[#FFC416] ${version == 2 ? 'hidden' : 'text-sm'}`}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className='text-gray-400' />
                </div>
            </div>
        </div>
    )
}

export default PRDesignRelated4