import React from 'react'
import Image from 'next/image'
import Featured from "../../public/feature.svg";
import product1 from "../../public/Product1.svg";
import product2 from "../../public/product2.svg";


export const Card = () => {
    return (
        <div className='px-6 pb-20'>
            <div className='pt-20'>
                <h1 className='font-Inter font-medium text-[40px]'>Heading</h1>
            </div>

            <div className='mt-4 grid grid-cols-3 gap-0 space-x-12'>
                <div className='col-span-2'>
                    <Image src={Featured} className='w-[735px] h-[642px] mt-0'></Image>
                    <h2 className=' font-Inter font-medium text-[20px] mt-4'>Featured product</h2>
                    <h2 className='font-Inter font-medium text-[20px] text-[#828282]'>Description of Featured product</h2>
                    <h2 className='font-Inter font-medium text-[20px]'>$10.99</h2>
                </div>
                <div className='col-span-1 gap-1 '>
                    <div><Image src={product1}></Image>
                        <h2 className='mt-4 font-Inter font-medium text-[20px]'>Product</h2>
                        <h2 className='font-Inter font-medium text-[20px] text-[#828282]'>Description of first product</h2>
                        <h2 className='font-Inter font-medium text-[20px]'>$10.99</h2>

                    </div>
                    <div className='mt-4'><Image src={product2}></Image>
                        <h2 className='mt-4 font-Inter font-medium text-[20px]'>Product</h2>
                        <h2 className='font-Inter font-medium text-[20px] text-[#828282]'>Description of first product</h2>
                        <h2 className='font-Inter font-medium text-[20px]'>$10.99</h2>

                    </div>
                </div>

            </div>

        </div>
    )
}

