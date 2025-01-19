import React from 'react'
import Mobiles from './Mobiles'
import Computer from './Computer'
import Fridge from './Fridge'
import TVV from './TVV'
// import LightSwitch from './Light'
import Furniture from './Furniture'
import ACs from './ACs'
import Watchess from './Watchess'
import Mens from './Mens'



const Products = () => {
  return (
    <div>
      <Mobiles/>
      <Computer/>
      <Fridge/>
      <TVV/>
      {/* <LightSwitch/> */}
      <Furniture/>
      <ACs/>
      <Watchess/>
      <Mens/> 
      
      
      
    </div>
  )
}

export default Products