import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import StoreDatahandler from '@/components/mini/StoreDatahandler'
import React from 'react'
import Image from 'next/image'; // Ensure you import Image if you're using Next.js
import { FaStar } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'
import { TbHeart } from 'react-icons/tb'
import { LiaSearchPlusSolid } from 'react-icons/lia'
import { IProduct } from '../../../../types/products'
import { getProductData } from '@/sanity/lib/getProductData'
import { urlFor } from '@/sanity/lib/image'


export default async function ShopList() {
    const data: IProduct[] = await getProductData();
    const discountValue: number = 2

    return (
        <>
            <MainHeader title='Shop List' prev='Home . Pages . Shop . ' current='Shop List' />

            <StoreDatahandler />
            <div className="px-5 md:px-10 lg:px-40 w-full py-10">

                {/* map */}

                {data.map((product) => (

                    <div key={product._id} className='w-full h-min my-5 flex flex-row items-center shadow-sm duration-200 hover:shadow-md hover:shadow-rose-200 rounded-md shadow-gray-200'>
                        {/* Image */}
                        <div className='w-1/3 lg:w-[330px] h-min bg-skyBlue flex justify-center items-center'>
                            <Image src={urlFor(product.image).url()} height={200} width={250} alt='product' />
                        </div>

                        {/* Details */}
                        <div className='flex flex-col items-start justify-start gap-y-1 md:gap-y-4 bg-white p-5'>
                            <div className='flex justify-start items-center gap-3'>
                                <h1 className='text-[#151875] font-lato text-lg md:text-xl font-semibold'>{product.name}</h1>
                                <div className='md:flex justify-center items-center gap-3 hidden'>
                                    <div className='size-2 md:size-3 bg-[#05E6B7] rounded-full'></div>
                                    <div className='size-2 md:size-3 bg-[#fb2e86] rounded-full'></div>
                                    <div className='size-2 md:size-3 bg-[#151875] group-hover:bg-white rounded-full'></div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center gap-4">
                                <p className='font-josefin-sans text-left text-[#151875] font-medium'>{product.price}$  <span className='text-[#fb2e86] line-through'>{product.price * discountValue}</span></p>
                                <div className='flex justify-start gap-1 text-[#FFC416] text-sm'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar className='text-gray-400' />
                                </div>
                            </div>
                            <p className='font-lato text-gray-400 w-[500px] hidden md:block'>{product.description}</p>


                            <div className='flex justify-start items-center gap-5'>
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
                    </div>
                ))}

            </div>
            <Companies />
        </>
    )
}

