import React from 'react'
 import { watchData } from "../Data/watch - Copy"
 import "./Mobile.scss"

const Watchess = () => {
    const firstfiveimg=watchData.slice(0,7)

  return (
    <div>
<h2 className=' prohead'>watches</h2>



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

export default Watchess
