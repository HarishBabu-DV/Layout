import React, { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { GoBell } from "react-icons/go";
import { RiMenu2Fill } from "react-icons/ri";
const Header = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false)
    const [isUserOpen,setIsUserOpen]=useState(false);
    const currentLocation=useLocation()
    return (
        <header className='max-w-[1920px] bg-[#363131] w-full mx-auto'>
            <nav>
                <input type="checkbox" name="" id="togglemenu" className='hidden'/>
            
                <div className='flex items-center justify-between px-4 py-3 max-md:relative'>
                    <label htmlFor='togglemenu' className='p-2 hidden hover:bg-[#b3b3b36e] rounded-md max-md:block' onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                        <RiMenu2Fill className='hover:text-white text-gray-200 text-2xl '/>
                    </label>

                    <div className='flex items-center gap-4 text-gray-200 '>
                        <Link to={'/'} className='block w-[42px] h-[42px]'>
                            <img src={'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500'} alt="" className='w-full h-full'/>
                        </Link>
                        <ul className={`flex items-center max-md:absolute  max-md:transition-[top] max-md:duration-300 ${isMenuOpen ?'max-md:top-full' :' max-md:-top-[200px]' } max-md:bg-[#383737] max-md:w-full max-md:-z-10 max-md:left-0 max-md:right-0 max-md:flex-col max-md:items-start`}>
                            <li className={`${currentLocation.pathname==='/'? 'bg-[#1d1d1d] text-white':null} w-full capitalize py-2 px-3 rounded-md  font-semibold`}>
                                <Link to={'/'} className=' '>dashboard</Link>
                            </li>
                            <li className='capitalize py-2 px-3 rounded-md hover:bg-[#9d9d9d41]  hover:text-white font-semibold w-full'>
                                <Link to={'/'} >team</Link>
                            </li>
                            <li className='capitalize py-2 px-3 rounded-md hover:bg-[#9d9d9d41]  hover:text-white font-semibold w-full'>
                                <Link to={'/'} >projects</Link>
                            </li>
                            <li className='capitalize py-2 px-3 rounded-md hover:bg-[#9d9d9d41]  hover:text-white font-semibold w-full'>
                                <Link to={'/'} >calendar</Link>
                            </li>
                        </ul>                     
                    </div>
                    <div className='flex items-center gap-4 max-sm:gap-2'>
                        <Link to={'/'} className=''><GoBell className='text-gray-200 text-lg hover:text-white' /></Link>
                        <Link to={'/'} className='block w-[40px] h-[40px] relative p-1' onClick={()=>{
                            setIsUserOpen(!isUserOpen)  
                        }}>
                            <img src={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80s'} alt="" className='w-full h-full rounded-[50%]' />
                            <div className={`absolute flex flex-col w-[200px] py-2 top-[130%] right-0 bg-white rounded-lg shadow-lg ${isUserOpen?'scale-100 duration-400 transition-transform':'scale-0 duration-400 transition-transform'}`}>
                                <Link to={'/'} className='capitalize hover:bg-gray-200 px-4 py-2'>your profile</Link>
                                <Link to={'/'} className='capitalize hover:bg-gray-200 px-4 py-2'>settings</Link>
                                <Link to={'/'} className='capitalize hover:bg-gray-200 px-4 py-2'>sign out</Link>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>

                </div>
            </nav>
        </header>
    )
}

export default Header