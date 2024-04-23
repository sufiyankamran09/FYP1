import React from 'react'
import Image from 'next/image'
import product1 from "../../public/Product1.svg";
import product2 from "../../public/product2.svg";
import product3 from "../../public/Product3.svg";

export const Grid = () => {
  return (
    <div className='px-6'>
        <div className='pt-20'>
            <h1 className='font-Inter font-medium text-[40px]'>Heading</h1>
        </div>
        <div className='mt-4 grid grid-cols-3 gap-4'>
            <div><Image src={product1}></Image>
            <h2 className='mt-4 font-Inter font-medium text-[20px]'>Product</h2>
            <h2 className='font-Inter font-medium text-[20px] text-[#828282]'>Description of first product</h2>
            <h2 className='font-Inter font-medium text-[20px]'>$10.99</h2>

            </div>
            <div><Image src={product2}></Image>
            <h2 className='mt-4 font-Inter font-medium text-[20px]'>Product</h2>
            <h2 className='font-Inter font-medium text-[20px] text-[#828282]'>Description of first product</h2>
            <h2 className='font-Inter font-medium text-[20px]'>$10.99</h2>

            </div>
            <div><Image src={product3}></Image>
            <h2 className='mt-4 font-Inter font-medium text-[20px]'>Product</h2>
            <h2 className='font-Inter font-medium text-[20px] text-[#828282]'>Description of first product</h2>
            <h2 className='font-Inter font-medium text-[20px]'>$10.99</h2>

            </div>
            <div><Image src={product3}></Image>
            <h2 className='mt-4 font-Inter font-medium text-[20px]'>Product</h2>
            <h2 className='font-Inter font-medium text-[20px] text-[#828282]'>Description of first product</h2>
            <h2 className='font-Inter font-medium text-[20px]'>$10.99</h2>

            </div>
            <div><Image src={product2}></Image>
            <h2 className='mt-4 font-Inter font-medium text-[20px]'>Product</h2>
            <h2 className='font-Inter font-medium text-[20px] text-[#828282]'>Description of first product</h2>
            <h2 className='font-Inter font-medium text-[20px]'>$10.99</h2>

            </div>
            <div><Image src={product1}></Image>
            <h2 className='mt-4 font-Inter font-medium text-[20px]'>Product</h2>
            <h2 className='font-Inter font-medium text-[20px] text-[#828282]'>Description of first product</h2>
            <h2 className='font-Inter font-medium text-[20px]'>$10.99</h2>

            </div>
        </div>
    </div>
  )
}

