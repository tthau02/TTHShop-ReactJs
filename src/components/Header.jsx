import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-3 bg-black'>
        <div className='container max-w-[1300px] mx-auto flex justify-between items-center'>
            <Link to='/' className='flex items-center'>
                <h1 className='text-[30px] uppercase font-bold text-red-600'>TH</h1>
                <span className='text-[30px] font-bold text-orange-400'>Shop</span>
            </Link>
            <nav className='flex items-center justify-center space-x-4'>
                <NavLink to="/" className='text-white hover:text-red-300'>Trang Chủ</NavLink>
                <NavLink to="/product" className='text-white hover:text-red-300'>Sản Phẩm</NavLink>
                <NavLink to="/sale" className='text-white hover:text-red-300'>Khuyến Mãi</NavLink>
                <NavLink to="/contact" className='text-white hover:text-red-300'>Liên Hệ</NavLink>
            </nav>
            <div className='flex justify-center items-center space-x-3'>
                <input type="text" placeholder='Search' className='p-2 text-[14px] rounded-lg'/>
                <button className='p-2 text-white bg-red-500 text-[14px] rounded-lg hover:bg-red-300'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Header