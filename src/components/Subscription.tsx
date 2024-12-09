import React from 'react'

const Subscription = () => {
  return (
    <div className='w-full h-[460px] flex justify-center items-center bg-[url("/bg.png")] bg-center px-5 md:px-0'>
        <div className="text-center p-4 rounded-lg">
        <h1 className='text-[#151875] font-semibold text-2xl md:text-4xl'>
          Get Latest Updates By Subscribe 
        </h1>
        <h2 className='text-[#151875] font-semibold text-xl md:text-2xl mt-2'>
         Our Newsletter
        </h2>

      
        <button 
          className="bg-[#FB2E86] text-white font-bold py-2 px-8 mt-6 rounded"
          style={{ width: '161.92px', height: '49px' }}
        >
          Shop Now
        </button>
      </div>
    
    </div>
  )
}

export default Subscription
