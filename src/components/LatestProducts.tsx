import React from 'react'
import Heading from './mini/Heading'
import Image from 'next/image'; // Ensure you import Image if you're using Next.js
import { BsCart2 } from 'react-icons/bs';
import { LiaSearchPlusSolid } from 'react-icons/lia';
import { TbHeart } from 'react-icons/tb';
import { IProduct } from '../../types/products';
import { sixProductsData } from '@/sanity/lib/getProductData';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

export default async function LatestProducts() {

    const data: IProduct[] = await sixProductsData();
    const discountValue: number = 2;


    return (
        <div className='w-full px-5 lg:px-40 py-10'>
            <Heading text='Latest Products' />
            <div className='flex justify-center items-center gap-6 py-2 pb-5 flex-wrap'>
                <p className='text-[#151875] hover:text-[#fb2e86] hover:underline lato text-lg cursor-pointer '>New Arrivals</p>
                <p className='text-[#151875] hover:text-[#fb2e86] hover:underline lato text-lg cursor-pointer'>Best Seller</p>
                <p className='text-[#151875] hover:text-[#fb2e86] hover:underline lato text-lg cursor-pointer'>Featured</p>
                <p className='text-[#151875] hover:text-[#fb2e86] hover:underline lato text-lg cursor-pointer'>Special Offer</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>

                {/* MAP DATA */}
                {data.map((product) => (
                    <Link href={`product/${product._id}`}>
                        <div key={product._id} className='w-full h-[360px] flex flex-col relative group transition-all duration-200 shadow-sm hover:shadow-md shadow-gray-100'>

                            {/* Image */}
                            <div className='w-full h-[90%] bg-[#f7f7f7] group-hover:bg-transparent flex justify-center items-center'>
                                <Image src={urlFor(product.image).url()} height={220} width={220} alt='product' />
                            </div>

                            {/* Details */}
                            <div className='flex items-center justify-between gap-2 bg-white py-2'>
                                <h1 className='text-[#151875] font-josefin-sans font-semibold pl-1'>{product.name}</h1>
                                <div className='flex gap-2'>
                                    <p className='font-josefin-sans font-normal text-sm text-[#151875]'>${product.price}</p>
                                    <p className='font-lato text-xs text-[#fb2e86] line-through'>${product.price * discountValue}</p>
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
                    </Link>
                ))}

            </div>
        </div>
    )
}

