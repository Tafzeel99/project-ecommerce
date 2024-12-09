import React from 'react'

const MainHeader = ({ title, prev, current }: { title: string, prev: string, current: string }) => {
    return (
        <div className='w-full h-[286px] px-8 lg:px-40 flex justify-start items-center bg-[#f1f0ff]'>
            <div className='flex flex-col items-start'>
                <h1 className='font-bold font-josefin-sans text-4xl text-[#151875]'>{title}</h1>
                <p className='font-lato font-medium text-black'>{prev}<span className='text-[#fb2e86]'>{current}</span></p>
            </div>
        </div>
    )
}

export default MainHeader
