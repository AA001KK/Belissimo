import React from 'react'

const Kombo = ({name}) => {
  return (
    <div className='kombo '>
      <a href="" className=' '>
        <div className=' py-[7px] px-[15px] hover:bg-[#006f4c] hover:text-[white] bg-[#f4f4f4]  rounded-[100px] all duration-[.7s] ease text-[16px]'> 
{name}
        </div>
      </a>
    </div>
  )
}

export default Kombo
