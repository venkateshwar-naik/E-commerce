import React from 'react'
import {fridgeData} from "../Data/fridge"
import "./Mobile.scss"


const Fridge = () => {
    const firstfiveimg=fridgeData.slice(0,7)
    
  return (
    <div>
    <h2 className='prohead'>fridge</h2>


 
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

export default Fridge