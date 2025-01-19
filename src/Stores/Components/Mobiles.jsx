import React, { useEffect, useState } from 'react'
import "./Mobile.scss"

import { mobileData } from '../Data/mobiles';


const Mobiles = () => {
    const firstfiveimg=mobileData.slice(0,7)
//     const [data, SetData]=useState([]);
// useEffect(()=>{
  
// },[]);

// console.log(mobileData)


  return (

    <>
    <h2  className='prohead'>Mobiles</h2>

    <div className='prosec'>

{
    firstfiveimg.map((item, index)=>{
        console.log(item.image)
        return(
            <div  className='imgbox' key={index}>
                <img className='proimg' src={item.image} alt="" />
            </div>
        )
            
        
    })
}


    </div>
    </>

  )
}

export default Mobiles