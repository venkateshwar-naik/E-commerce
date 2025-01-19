import React from 'react'
import {furnitureData} from "../Data/furniture"
import "./Mobile.scss"


const Furniture = () => {
    const firstfiveimg=furnitureData.slice(0,7)

  return (
    <div>
    <h2 className='prohead'>furniture</h2>


<div className='prosec'>

{
    firstfiveimg.map((item, index)=>{
        return(
            <div  className='imgbox' key={index}>
                <img className='proimg' src={item.image} alt="" />
            </div>
        )
            
        
    })
}


    </div>
    </div>
  )
}

export default Furniture