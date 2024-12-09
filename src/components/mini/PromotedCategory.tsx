import Image from 'next/image'
import React from 'react'

const PromotedCategory = ({ title, image, btn}: { title: string, image: {src: string, width: number, height: number}, btn: string, isActive: boolean }) => {
    return (
        <div className={`w-full mt-8 flex flex-col h-[270px] `}>
            <div className='flex flex-col p-4 bg-[#fff6fb] items-start'>
                <h3 className='text-2xl font-semibold text-[#151875]'>{title}</h3>
                <button className='bg-transparent text-[#fb2e86] font-semibold underline'>{btn}</button>
            </div>
            <div className='w-full flex justify-between bg-[#fff6fb]'>
                <div></div>
                <Image src={image.src} width={image.width} height={image.height} alt='category' />
            </div>
        </div>
    )
}

export default PromotedCategory
