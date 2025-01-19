import React, { useState } from 'react'
import {mobileData} from "../Data/mobiles"
import "./Pages.scss"
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Mobilepage = () => {

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
  mobileData : mobileData.filter((pro)=>selected.includes(pro.company) )
  return (

<>

<div className="products">
<div className="navv">
<Navbar/>

</div>

<div className="mob">
<div className="pro-selec">
  {
    mobileData.map((phone,index)=>{
      return(
        <div key={index}>
        <label>
          <input type="checkbox"
          checked={selected.includes(phone.company)}
            onChange={()=>companyHandler(phone.company)}
          /> 
          {phone.company}
          
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

            <Link to={`/mobiles/${item.id}`}>
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

export default Mobilepage