import React from 'react'
import Dropbg  from '../assets/drop.png'

export const HeroSect = () => {
  return (
    <div className='w-full bg-[#1d2a3b] h-screen'>
        <div className='max-w-[1240px] mx-auto pt-8'>
        <div className='hidden md:flex max-w-[832px] absolute z-1'>
        <img src={Dropbg} alt="" />
        </div>
        </div>
        <div className='max-w-[1240px] mx-auto'>
        <div className= 'pt-8 px-4 flex flex-col  md:absolute top-[325px] left-[340px] z-1000'>
            <h1 className='text-[#FAFDFC]'>Hello, I'm Jack Kay</h1>
            <h1 className='text-[#8C91A9]'>I'm a UI/UX Designer</h1>
            <p className='text-[#8C91A9]'> I’m a Digital Designer specializing in creating (and occasionally coding) <span className='text-white'>human-centered</span> experiences. I focus on advancing the principles behind accessibility for all when building digital designs. </p>
            <button></button>
        </div>
        </div>
    </div>
  )
}
