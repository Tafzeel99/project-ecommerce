import Image from 'next/image'
import React from 'react'
import { FaPenNib } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'

const BlogCard3 = ({size = "MINI", content = ""}: {size?: "MINI" | "LARGE", content?:string}) => {
    return (
        <div className='w-full flex flex-col rounded-md group'>

            <Image src={"/blog2.jpg"} width={size == "MINI" ? 377 : 870} height={size == "MINI" ? 255 : 543} alt='blog' className={`rounded-md ${size == "MINI" ? 'h-1/2' : 'h-2/3'}  object-cover`} />
            <div className='flex flex-col py-4 px-2 items-start gap-3'>
                <div className='flex justify-start gap-4'>
                    <div className="flex justify-start items-center gap-1">
                        <FaPenNib className='text-[#fb2e86] size-3' />
                        <p className={`font-josefin-sans text-[#151875] text-sm ${size == "MINI" ? 'bg-white' : 'bg-pink/20'}`}>Tafzeel</p>
                    </div>
                    <div className="flex justify-start items-center gap-1">
                        <SlCalender className='text-[#FFA454] size-3' />
                        <p className={`font-josefin-sans text-[#151875] text-sm ${size == "MINI" ? 'bg-white' : 'bg-pink/20'}`}>10-12-2024</p>
                    </div>
                </div>

                <h4 className={`font-josefin-sans font-bold  text-[#151875] ${size == "MINI" ? 'group-hover:text-red text-lg' : 'text-3xl'} `}>Top essential Trends in 2024</h4> 
                <p className='font-lato text-[#72718F] font-normal '>More off this less hello samlande lied much over tightly circa horse taped mightly {content}</p>
                <button className='bg-white text-[#151875] underline font-lato font-normal hover:text-black group-hover:text-pink'>Read More</button>
            </div>
        </div>
    )
}

export default BlogCard3
