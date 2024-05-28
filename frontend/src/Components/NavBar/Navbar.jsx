import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { shopContext } from '../../Context/Context'
const Navbar = () => {
    const {gettotalItems}=useContext(shopContext)
    const [menu,setMenu]=useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}} ><Link to='/' style={{textDecoration:'none', color:'#626262'}}>Shop</Link> {menu==="shop" ? <hr/> : <></>}</li>
            <li  onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none' ,color:'#626262'}}>Mens</Link> {menu==="mens" ? <hr/> : <></>}</li>
            <li  onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none',color:'#626262'}}>Womens</Link> {menu==="womens" ? <hr/> : <></>}</li>
            <li  onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none',color:'#626262'}}>Kids</Link> {menu==="kids" ? <hr/> : <></>}</li>
        </ul>
        <div className="nav-cart">
            <Link to='/loginpage' style={{textDecoration:'none',color:'#7a7a7a'}}><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{gettotalItems()}</div>
        </div>
        
    </div>
  )
}

export default Navbar