import React from 'react'
import Logo from '../assets/logo.jpg'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate } from 'react-router-dom';
//import SearchIcon from '@mui/icons-material/Search';

const Navbar = ({setOpen}) => {

  const Navigate = useNavigate();

  const loginButtonClick = () =>{
      setOpen(true);
  }

  const naviagetAddTocart = () =>{
    Navigate('/addtocart');
  }

  

  return (
    <div className='text-black bg-white flex gap-[60px] mx-[75px] my-6 items-center justify-center'>
        <img src={Logo} alt='' className='h-14'></img>
        <div className=''><input className='bg-[#D9D9D9] w-[629px] h-[38px] rounded-[25px]' placeholder='Search for anything'></input></div>
        <div className='font-bold hover:cursor-pointer' onClick={loginButtonClick}><PersonIcon/>Sign in or Register</div>
        <div className='font-bold hover:cursor-pointer' onClick={naviagetAddTocart}><ShoppingCartIcon/>Add to cart</div>
    </div>
  )
}

export default Navbar