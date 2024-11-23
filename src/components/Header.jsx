import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {
  const dispatch=useDispatch()
  return (
    <nav className='flex bg-red-700 fixed w-full p-5 text-white font-bold'>
      <Link className='text-2xl' to={'/'} ><i className="fa-solid fa-utensils me-4"></i>FOOD ZONE</Link>
      <ul className='flex-1 text-right'>
       {insideHome && <li className='list-none inline-block  px-5'><input className='rounded p-1 text-black'
     onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))}
       style={{width:'300px'}} type='text' placeholder='Search Your Cuisine Here!'/></li>}
       
      </ul>
    </nav>
  )
}

export default Header