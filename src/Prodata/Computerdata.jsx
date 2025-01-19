import React from 'react'
import { computerData } from '../Stores/Data/computers'
import { useParams } from 'react-router-dom'
import { useCart } from '../Stores/Cart/Cart'
import Navbar from '../Stores/Components/Navbar'

const Computerdata = () => {


    const { id } = useParams();

const product = computerData.find((item) => item.id === id);

const { addToCart } = useCart();

  return (
    <div>


<>
      <Navbar/>
      <div className="ind-sec">
        <div className="ind-img">
          <img src={product.image} alt="" />
        </div>
        <div className="ind-det">
          <div className="ind-comp">
            <h3>{product.company}</h3>
          </div>
          <div className="ind-model">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-model">
            <h3>{product.price}</h3>
          </div>
          <div className="ind-des">
            <h3>{product.description}</h3>
          </div>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </>

    </div>
  )
}

export default Computerdata