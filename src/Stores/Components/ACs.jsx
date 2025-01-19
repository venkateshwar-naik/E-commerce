import React from 'react'


import {acData} from "../Data/ac"
import "./Mobile.scss"


const ACs = () => {
    const firstfiveimg=acData.slice(0,7)

  return (
    <div>
    <h2 className='prohead'>ACs</h2>


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

export default ACs