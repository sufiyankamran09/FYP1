import React from 'react'
import Image from 'next/image'
import Watermelon from "../../public/watermelon.svg";

export const Header = () => {
  return (
    <div>
        <div className='px-14 ml-8 mt-2 justify-center'>
           <Image src={Watermelon} className='w-[1275px] h-[597px] '></Image>
        </div>
    </div>
  )
}

