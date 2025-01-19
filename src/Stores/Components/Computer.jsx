import React from 'react'
import { computerData} from "../Data/computers"
import "./Mobile.scss"



const Computer = () => {
    const firstfiveimg=computerData.slice(0,7)

  return (
    <div>
    <h2 className='prohead'>computers</h2>


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

export default Computer