import React from 'react';
import { IProduct } from '../../../../types/products';
import { client } from '@/sanity/lib/client';
import Companies from '@/components/Companies';
import MainHeader from '@/components/MainHeader';
import Image from 'next/image';
import { FaArrowRight, FaCircle, FaFacebookF, FaHeart, FaInstagram, FaStar, FaTwitter } from 'react-icons/fa';
import { urlFor } from '@/sanity/lib/image';

interface ProductPageParams {
    id: string;
}

interface ProductPageProps {
    params: Promise<ProductPageParams>; // Ensure params is a Promise
}

const Page: React.FC<ProductPageProps> = async ({ params }) => {
    const { id } = await params; // Await the params to get the actual value
    const discountValue: number = 2;

    const query = `*[_type=="product" && _id == "${id}"]{
        name,
        "id": _id,
        price,
        description,
        image,
        discountPercentage,
        stockLevel,
        category,
    }[0]`;

    const product: IProduct | null = await client.fetch(query);

    if (!product) {
        return (
            <div>
                <h1>Product not found</h1>
            </div>
        );
    }

    return (
        <div className='w-full'>
            <MainHeader title='Product Details' current='Product Details' prev='Home . Pages . ' />
            <div key={product.id} className='w-full px-5 lg:px-56 py-20'>
                <div className="grid grid-cols-3 md:grid-cols-7 gap-3 rounded-md shadow-lg bg-[#f1f0ff] shadow-gray-200 border-2 border-gray-100">
                    <div className='col-span-2 flex justify-center items-center bg-white'>
                        <Image src={urlFor(product.image).url()} width={420} height={520} alt='product' className='col-span-2' />
                    </div>
                    <div className='flex flex-col gap-3 p-5 col-span-4'>
                        <h2 className='text-4xl text-[#0D134E] font-semibold font-josefin-sans'>{product.name}</h2>
                        <div className='flex justify-start items-center gap-2'>
                            <div className="flex justify-start items-center gap-1 text-sm">
                                <FaStar className='text-[#FFC416]' />
                                <FaStar className='text-[#FFC416]' />
                                <FaStar className='text-[#FFC416]' />
                                <FaStar className='text-[#FFC416]' />
                                <FaStar className='text-gray-400' />
                                <p className='text-black text-sm font-josefin-sans'>(22)</p>
                            </div>
                        </div>
                        <p className='font-josefin-sans text-[#151875] flex justify-start items-center gap-3'>${product.price} <span className='text-red line-through'>${product.price * discountValue}</span></p>
                        <p className='flex justify-start items-center gap-3 font-semibold text-[#151875] font-josefin-sans'>Color: <span className='flex justify-start items-center gap-2'><FaCircle size={15} color={"pink"} /><FaCircle size={15} color={"red"} /><FaCircle size={15} color={"green"} /></span></p>
                        <p className='text-gray-400 font-semibold font-josefin-sans'>{product.description}</p>
                        <div className='flex justify-start items-center gap-x-2'>
                            <button className='px-6 py-2 text-[#151875] shadow-sm transition-all font-semibold bg-white rounded-md hover:bg-[#151875] hover:text-white'>Add to Cart</button>
                            <button className='px-6 py-2 text-navyBlue shadow-sm transition-all font-semibold bg-white rounded-md hover:bg-pink hover:text-white'><FaHeart /></button>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <p className='font-semibold text-[#151875] font-josefin-sans'>Categories:</p>
                            <p className='font-semibold text-gray-500 font-josefin-sans'>{product.category}</p>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <p className='font-semibold text-[#151875] font-josefin-sans'>Stock:</p>
                            <p className='font-semibold text-gray-500 font-josefin-sans'>{product.stockLevel}</p>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <p className='font-semibold text-[#151875] font-josefin-sans'>Share</p>
                            <div className='flex justify-end items-center gap-2'>
                                <div className='flex justify-center cursor-pointer items-center bg-[#151875] size-5 rounded-full text-white'>
                                    <FaFacebookF />
                                </div>
                                <div className='flex justify-center cursor-pointer items-center bg-[#fb2e86] size-5 rounded-full text-white'>
                                    <FaInstagram />
                                </div>
                                <div className='flex justify-center cursor-pointer items-center bg-[#37DAF3] size-5 rounded-full text-white'>
                                    <FaTwitter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#F9f8fe] w-full px-5 md:px-10 lg:px-40 py-10'>
                <div className='flex flex-wrap gap-3 md:gap-7 justify-start items-center lg:gap-20'>
                    <h3 className='text-2xl text-[#151875] font-semibold font-josefin-sans hover:underline hover:cursor-pointer hover:text-pink'>Description</h3>
                    <h3 className='text-2xl text-[#151875] font-semibold font-josefin-sans hover:underline hover:cursor-pointer hover:text-pink'>Additional Info</h3>
                    <h3 className='text-2xl text-[#151875] font-semibold font-josefin-sans hover:underline hover:cursor-pointer hover:text-pink'>Reviews</h3>
                    <h3 className='text-2xl text-[#151875] font-semibold font-josefin-sans hover:underline hover:cursor-pointer hover:text-pink'>Video</h3>
                </div>
                <div className='py-5'>
                    <h2 className='text-2xl text-[#151875] font-semibold font-josefin-sans py-3'>Lorem, ipsum.</h2>
                    <p className='text-gray-600 font-normal'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis.</p>
                    <h2 className='text-2xl text-[#151875] font-semibold font-josefin-sans py-3'>More Details</h2>
                    <div className='flex justify-start items-center gap-2'>
                        <FaArrowRight size={16} className='text-[#151875] hover:text-navyBlue' />
                        <p className="text-gray-500">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.</p>
                    </div>
                    {/* Additional details can be added here */}
                </div>
            </div>
            <Companies />
        </div>
    );
};

export default Page;
