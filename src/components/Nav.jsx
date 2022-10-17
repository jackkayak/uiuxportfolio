import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {MdWaves} from 'react-icons/md'

const Nav = () => {
const [nav, setNav] = useState(false)
const handleNav = () => {
    setNav(!nav)
}


  return (
    <div className='w-full h-[90px] bg-[#1d2a3b]'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>

            <div>
                <h1 className='text-[#fff]'>JK</h1>
            </div>
            <div className='justify-center'>
                <div className='hidden md:flex'>
                    <ul className='flex text-white items-center'>
                        <li>Digital Design</li>
                        <li>About</li>
                        <MdWaves size={30} />
                    </ul>
                </div>
                </div>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={30} className='text-white'/> : <AiOutlineMenu size={30} className='text-white' />}
                    
                </div>
                <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' :
            'hidden absolute left-[100%]'}>
                    <ul>
                    <li className='text-2xl'>Digital Design</li>
                        <li className='text-2xl'>About</li>
                    </ul>
                </div>
            

        </div>
    </div>
  )
}

export default Nav

