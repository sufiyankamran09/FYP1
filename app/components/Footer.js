import React from 'react';
import Image from 'next/image';
import Facebook from '../../public/facebook.svg';
import Icon from '../../public/icon2.svg';
import Youtube from '../../public/youtube.svg';
import Insta from '../../public/insta.svg'


export const Footer = () => {
    return (
        <div className='px-6 mt-12 grid grid-cols-4 gap-4 mb-20'>
            <div className='col-span-2'>
                <h2 className='font-Inter font-medium text-[24px]'>Site name</h2>
                <div className='flex flex-row mt-20'>
                    <ul>
                        <li><Image src={Facebook}></Image></li>
                    </ul>
                    <ul>
                        <li><Image src={Icon}></Image></li>
                    </ul>
                    <ul>
                        <li><Image src={Youtube}></Image></li>
                    </ul>
                    <ul>
                        <li><Image src={Insta}></Image></li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-40'>
                <div>
                    <ul>
                        <li>
                            Topic
                        </li>
                        <li className='mt-4'>
                            Page
                        </li>
                        <li className='mt-4'>
                            Page
                        </li>
                        <li className='mt-4'>
                            Page
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            Topic
                        </li>
                        <li className='mt-4'>
                            Page
                        </li>
                        <li className='mt-4'>
                            Page
                        </li>
                        <li className='mt-4'>
                            Page
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            Topic
                        </li>
                        <li className='mt-4'>
                            Page
                        </li>
                        <li className='mt-4'>
                            Page
                        </li>
                        <li className='mt-4'>
                            Page
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}
