

import React, { useState } from 'react'
import { tvData } from '../Data/tv - Copy'

import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Tvpage = () => {


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
  tvData : tvData.filter((pro)=>selected.includes(pro.brand) )
  return ( 



    <>

<div className="products">
<div className="navv">
<Navbar/>

</div>

<div className="mob">
<div className="pro-selec">
  {
    tvData.map((phone,index)=>{
      return(
        <div key={index}>
        <label>
          <input type="checkbox"
          checked={selected.includes(phone.brand)}
            onChange={()=>companyHandler(phone.brand)}
          /> 
          {phone.brand}
          
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

            <Link to={`/tv/${item.id}`}>
            <div className="pageimg">
                <img src={item.image} alt="" />
            </div>

            </Link>
           
            <div className="promodel">
            {item.company},{item.model}

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

export default Tvpage