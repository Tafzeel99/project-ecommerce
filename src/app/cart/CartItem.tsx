import React from 'react'
import JustItem from './JustItem'
import JustItem1 from './justItem1'
import JustItem2 from './justItem2'
import JustItem3 from './justItem3'

const CartItem = () => {
    return (
        <>
        <tr className='border-b-2'>
            <td >
                <JustItem />
            </td>
            <td className='font-semibold text-[#1D3178] text-center font-josefin-sans'>$32.00</td>
            <td className='pl-10'>
                <div className='grid grid-cols-4 w-20'>
                    <button className='bg-gray-200 text-gray-500'>+</button>
                    <input type="text" className='bg-gray-100 text-gray-500 border-none outline-none text-center font-josefin-sans font-normal' defaultValue={1} />
                    <button className='bg-gray-200 text-gray-500'>-</button>
                </div>
            </td>
            <td className='font-semibold text-[#1D3178] text-center font-josefin-sans'>$142.00</td>
        </tr>

        <tr className='border-b-2'>
            <td >
                <JustItem1 />
            </td>
            <td className='font-semibold text-[#1D3178] text-center font-josefin-sans'>$32.00</td>
            <td className='pl-10'>
                <div className='grid grid-cols-4 w-20'>
                    <button className='bg-gray-200 text-gray-500'>+</button>
                    <input type="text" className='bg-gray-100 text-gray-500 border-none outline-none text-center font-josefin-sans font-normal' defaultValue={1} />
                    <button className='bg-gray-200 text-gray-500'>-</button>
                </div>
            </td>
            <td className='font-semibold text-[#1D3178] text-center font-josefin-sans'>$142.00</td>
        </tr>

        <tr className='border-b-2'>
            <td >
                <JustItem2 />
            </td>
            <td className='font-semibold text-[#1D3178] text-center font-josefin-sans'>$32.00</td>
            <td className='pl-10'>
                <div className='grid grid-cols-4 w-20'>
                    <button className='bg-gray-200 text-gray-500'>+</button>
                    <input type="text" className='bg-gray-100 text-gray-500 border-none outline-none text-center font-josefin-sans font-normal' defaultValue={1} />
                    <button className='bg-gray-200 text-gray-500'>-</button>
                </div>
            </td>
            <td className='font-semibold text-[#1D3178] text-center font-josefin-sans'>$142.00</td>
        </tr>

        <tr className='border-b-2'>
            <td >
                <JustItem3 />
            </td>
            <td className='font-semibold text-[#1D3178] text-center font-josefin-sans'>$32.00</td>
            <td className='pl-10'>
                <div className='grid grid-cols-4 w-20'>
                    <button className='bg-gray-200 text-gray-500'>+</button>
                    <input type="text" className='bg-gray-100 text-gray-500 border-none outline-none text-center font-josefin-sans font-normal' defaultValue={1} />
                    <button className='bg-gray-200 text-gray-500'>-</button>
                </div>
            </td>
            <td className='font-semibold text-[#1D3178] text-center font-josefin-sans'>$142.00</td>
        </tr>


        </>
    )
}

export default CartItem
