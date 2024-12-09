import React from 'react'

const Heading = ({text, color = {primary: true, value :"[#1a0b5b]"}}: {text: string, color?:{primary?:boolean, value?:string}}) => {
  const finalColor = color.primary ? `text-${color.value}` : `text-${color.value}-600`;
  return (

    <h2 className={`py-5 text-3xl lg:text-[40px] text-[#1a0b5b] font-bold ${finalColor} font-josefin-sans text-center`}>
      {text}
    </h2>
  )
}

export default Heading
