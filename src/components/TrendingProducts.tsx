import React from 'react'
import Heading from './mini/Heading'
import PromotedCategory from './mini/PromotedCategory'
import ProductBar1 from './mini/ProductBar1'
import ProductBar2 from './mini/ProductBar2'
import ProductBar3 from './mini/ProductBar3'
import Image from 'next/image'; // Ensure you import Image if you're using Next.js
import { BsCart2 } from 'react-icons/bs'
import { TbHeart } from 'react-icons/tb'
import { LiaSearchPlusSolid } from 'react-icons/lia'
import { IProduct } from '../../types/products'
import { TrendingProductsData } from '@/sanity/lib/getProductData'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

export default async function TrendingProducts() {

    const data: IProduct[] = await TrendingProductsData();
    const discountValue: number = 2;

    return (
        <div className='w-full px-5 lg:px-40 py-10'>
            <Heading text='Trending Products' />
            <div className='grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-5 lg:gap-10'>


                {/* MAP DATA */}
                {data.map((product) => (
                    <Link key={product._id} href={`product/${product._id}`}>
                    <div  className='w-full h-[360px] flex flex-col relative group transition-all duration-200 shadow-lg mt-12 hover:shadow-md shadow-gray-100'>

                        {/* Image */}
                        <div className='w-full h-[70%] bg-[#f6f7fb] flex justify-center items-center'>
                            <Image src={urlFor(product.image).url()} height={170} width={170} alt='product' />
                        </div>

                        {/* Details */}
                        <div className='flex flex-col items-center justify-center gap-2 bg-white  py-2'>
                            <h1 className='text-[#151875] font-lato font-semibold'>{product.name}</h1>
                            {<div className='flex justify-center items-center gap-2'>
                                <div className="size-3 bg-[#DE9034] rounded-full"></div>
                                <div className="size-3 bg-[#fb2e86] rounded-full"></div>
                                <div className="size-3 bg-[#151875] rounded-full"></div>
                            </div>}
                            <div className='flex gap-2'>
                                <p className='font-josefin-sans font-normal text-sm text-[#151875]'>$${product.price}</p>
                                <p className={`font-lato text-xs 'text-[#fb2e86]' : 'text-gray-400'} line-through`}>${product.price * discountValue}</p>
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
                </Link>
                ))}


            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4">
                <div className='md:col-span-3'>
                    <PromotedCategory title='23% off in all products' btn='Shop Now' image={{ src: '/promoted.png', width: 200, height: 200 }} isActive={false} />
                </div>
                <div className='md:col-span-3'>
                    <PromotedCategory title='23% off in all products' image={{ src: '/promoted2.png', width: 312, height: 173 }} isActive={true} btn='View Collection' />
                </div>
                <div className=' hidden md:block md:col-span-6 lg:col-span-2 flex-col md:flex-row lg:flex-col gap-2 sm:mt-8'>
                    <ProductBar1 />
                    <ProductBar2 />
                    <ProductBar3 />
                </div>
            </div>
        </div>
    )
}

