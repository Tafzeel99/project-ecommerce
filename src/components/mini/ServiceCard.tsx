import Image from 'next/image'
import React from 'react'

const ServiceCard = ({title, image}: {title: string, image: string}) => {
    return (
        <div className='bg-white h-[350px] flex flex-col items-center justify-center gap-4 p-4 mt-8 border-t-[1px] border-[#e4e5e8] rounded-md shadow-lg shadow-[#e4e5e8]'>
            <Image src={image} height={50} width={50} alt={title} />
            <h4 className='font-josefin-sans text-2xl font-semibold text-[#151875] text-center'>{title}</h4>
            <p className='text-gray-400 font-lato text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
    )
}

export default ServiceCard
