import React from 'react'
// import
    import { menData } from '../Data/men'

const Mens = () => {

    const firstfiveimg=menData.slice(0,7)


    

  return (
    <div>


<>
    <h2  className='prohead'>Mens wear</h2>

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


    </div>
  )
}

export default Mens