import React from 'react';
import { useCart } from '../Cart/Cart';

const Usercart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      {cartItems.map((item) => (
        <div className='cartsec' key={item.id}>
          <div className="cartimg">
            <img src={item.image} alt={item.product} />
          </div>
          <div className="cartdetails">
            <h3>{item.product}</h3>
            <h3>{item.price}</h3>
            <h3>{item.model}</h3>
            <button onClick={() => removeFromCart(item.id)}>Remove</button> {/* Remove Button */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Usercart;
