import React from 'react'
import {tvData} from "../Data/tv - Copy"
import "./Mobile.scss"


const TVV = () => {
    const firstfiveimg=tvData.slice(0,7)

  return (
    <div>
    <h2 className='prohead'>    Tv</h2>
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

export default TVV