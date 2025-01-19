import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import { useCart } from '../Cart/Cart'

const Navbar = () => {

    const{cartItems}=useCart()
  return (
    <>
    <div className='navsec'>
    <div className="title">
    <Link to="/">
    <h2>E-mart</h2>

    </Link>
    </div>
    <div className="search">
        <input type="text"  placeholder='search'/>
    </div>

    <div className="user">
        <div className="userdetails">
            <button>sign-in</button>
            <button>sign-up</button>
        </div>

        <Link to="/cart">
        <div className="cart">
            <h3>cart  <span>{cartItems.length} </span></h3>
        </div>
        
        </Link>
       
    </div>


    </div>

    <div className="submenu">
        <ul className='menu'>

        <Link to="/mobilepage">
        <li>mobiles</li>

        </Link>

        <Link to="/computerpage">
        <li>computer</li>

        </Link>

        <Link to="/fridgepage">

        <li>fridge</li>

        </Link>

<Link to="/menspage">
<li>mens</li>

</Link>

<Link to="/tvpage">
<li>Tv</li>

</Link>

<Link to="/watchpage">
<li>watches</li>

    
</Link>

<Link to="/acpage">
<li>Ac</li>

    
</Link>

<Link to="/furniturepage">
<li>Furniture</li>

    
</Link>






           
        </ul>
    </div>
    </>
  )
}

export default Navbar