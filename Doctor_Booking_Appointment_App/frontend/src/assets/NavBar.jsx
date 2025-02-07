import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Doctors from '../Pages/Doctors'

const NavBar = () => {
return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b-gray-400'>
        <img className='w-35 cursor-pointer' src={assets.logo} alt='' />

        <ul className='hidden sm:flex items-start gap-4 font-medium relative'>
            <li className='py-1'>
                <Link to='/' element={<Home />}>Home</Link>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </li>
            < li className='py-1'>
                <Link to='/doctors' element={<Doctors/>}>All Doctors</Link>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </ li >
            < li className='py-1'>
                <Link to='/about' element={<About />}>About</Link>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </ li >
            < li className='py-1'>
                <Link to='/Contacts' element={<Contact />}>Contacts</Link>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </li>
          
        </ul>

        <div className='hidden sm:flex my-5'>
        <button className='bg-blue-500 text-white px-3 py-3 rounded-full font-light '>Create account</button>
        </div>
    </div>
)
}

export default NavBar
