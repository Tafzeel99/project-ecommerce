import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

const OrderCompleted = () => {
    return (
        <>
        <div className='w-full relative'>
            <MainHeader title='Order Completed' current='Order Completed' prev='Home . Pages . ' />
            <div className='w-full px-10 lg:px-40 py-20 flex justify-center items-center'>
                <div className='w-[625px] flex flex-col items-center justify-center gap-8'>
                    <div className='size-16 rounded-full bg-[url("/fancytick.png")] flex justify-center items-center'>
                        <GiCheckMark size={35} className='text-[#fb2e86]' />
                    </div>
                    <h1 className='font-josefin-sans text-4xl font-bold text-[#151875] capitalize text-center'>Your order is completed!</h1>
                    <p className='text-[#8D92A7] font-lato text-center'>Thank you for your order! Your order is being processed and will be completed within 3-6
                        hours. You will receive an email confirmation, when your order is completed.
                    </p>
                    <button className='bg-[#fb2e86] rounded-md font-josefin-sans px-8 text-white py-3'>Continue Shipping</button>
                </div>
            </div>
            </div>
        <Companies />
        </>
    )
}

export default OrderCompleted
