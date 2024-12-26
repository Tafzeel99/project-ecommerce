import React from 'react'
import Heading from './mini/Heading'
import BlogCard3 from './mini/BlogCard3'
import BlogCard2 from './mini/BlogCard2'
import BlogCard1 from './mini/BlogCard1'

const LatestBlogs = () => {
  return (
    <div className='w-full px-5 lg:px-40 py-10'>
    <Heading text='Latest Blogs' />
    <div className='grid md:grid-cols-3 mt-10 md:gap-4 lg:gap-10'>
        <BlogCard1 />
        <BlogCard2 />
        <BlogCard3 />
    </div>
</div>
  )
}

export default LatestBlogs
