import { furnitureData } from '../Data/furniture'

import React, { useState } from 'react'
import "./Pages.scss"
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'


const Furniturepage = () => {


  
  const [selected,setSelected]=useState([]);
  const companyHandler=(comp)=>{
    if(selected.includes(comp) ){
      setSelected(setSelected.filter(item=>item!==comp) )
    }
    else{
      setSelected([comp])
    }

  }

  const filter= selected.length===0?
  furnitureData : furnitureData.filter((pro)=>selected.includes(pro.brand) )
  
  return (

    <>

<div className="products">
<div className="navv">
<Navbar/>

</div>

<div className="mob">
<div className="pro-selec">
  {
    furnitureData.map((furniture,index)=>{
      return(
        <div key={index}>
        <label>
          <input type="checkbox"
          checked={selected.includes(furniture.brand)}
            onChange={()=>companyHandler(furniture.brand)}
          /> 
          {furniture.brand}
          
        </label>


        </div>
      )
    })
  }
</div>


    <div className='pagesec'>

    {filter.map((item,index)=>{

        return(
            <div  className='moblies' key={index}>

            <Link to={`/furniturepage/${item.id}`}>
            <div className="pageimg">
                <img src={item.image} alt="" />
            </div>

            </Link>
           
            <div className="promodel">
            {item.category},{item.model}

            </div>

            </div>
            
            
        )
    }) }

    </div>

</div>


</div>



    </>

  )
}

export default Furniturepage