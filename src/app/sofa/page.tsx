import { client } from "@/sanity/lib/client";
import { IProduct } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image'; // Ensure you import Image if you're using Next.js

export const getProductData = async (): Promise<IProduct[]> => {
    try {
        const res = await client.fetch('*[_type=="product"]'); // Corrected query syntax
        return res;
    } catch (error) {
        console.error("Error fetching product data:", error);
        return []; // Return an empty array in case of error
    }
}

export default async function SOFA() {
    const data: IProduct[] = await getProductData();
    console.log(data);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.map((product) => (
                <div key={product._id} className='w-full h-[360px] flex flex-col relative group transition-all duration-200 shadow-lg drop-shadow-sm shadow-[#f4f4f4]'>
                
                    {/* Image */}
                    <div className='w-full h-2/3 bg-[#f6f7fb] flex justify-center items-center'>
                        <Image src={urlFor(product.image).url()} height={170} width={170} alt='product' />
                    </div>
                
                    {/* Details */}
                    <div className='flex flex-col items-center gap-2 bg-white group-hover:bg-[#2f1ac4] py-2'>
                        <h1 className='text-[#fb2e86] group-hover:text-white font-lato text-lg font-semibold'>{product.name}</h1>
                        <div className='flex justify-center items-center gap-3'>
                            <div className='w-4 h-1 bg-[#05E6B7] rounded-full'></div>
                            <div className='w-4 h-1 bg-[#fb2e86] rounded-full'></div>
                            <div className='w-4 h-1 bg-[#151875] group-hover:bg-white rounded-full'></div>
                        </div>
                        <p className='font-josefin-sans font-normal text-sm text-offBlue group-hover:text-white'>Code - Y523201</p>
                        <p className='font-lato font-normal text-sm text-offBlue group-hover:text-white'>{product.price}</p>
                    </div>
                
                    {/* Details Button */}
                    <div className='flex justify-center items-center absolute bottom-[130px] left-8 md:left-16 opacity-0 group-hover:opacity-100'>
                        <button className='px-4 py-2 rounded-sm text-white bg-[#08D15F] font-josefin-sans text-xs hover:bg-black'>View Details</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

// "use client"

// import { useEffect, useState } from "react"
// import { IProduct } from "../../../types/products"
// import { allProducts } from "@/sanity/lib/queries"
// import { client } from "@/sanity/lib/client"

// const SOFA = () => {

//     const [product, setProduct] = useState<IProduct[]>([])

//     useEffect(() => {

//         async function fetchProduct() {
//             const fetchedProduct : IProduct[] = await client.fetch(allProducts)
//             setProduct(fetchedProduct)
//         }
//         fetchProduct()
//     },[])

//     return (

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//              {product.map((product) => (
//                 <div key={product._id} className='w-full h-[360px] flex flex-col relative group transition-all duration-200 shadow-lg drop-shadow-sm shadow-[#f4f4f4]'>
//                 {product.name}
//                 {product.price}

//                 </div>
//             ))}
//         </div>
//     )
// }