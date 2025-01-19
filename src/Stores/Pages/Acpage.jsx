import React,{useState} from 'react'
import { Link } from 'react-router-dom'


import { acData } from '../Data/ac'
import Navbar from '../Components/Navbar';

const Acpage = () => {



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
  acData : acData.filter((pro)=>selected.includes(pro.company) )
  return (
    <>

<div className="products">
<div className="navv">
<Navbar/>

</div>

<div className="mob">
<div className="pro-selec">
  {
    acData.map((ac,index)=>{
      return(
        <div key={index}>
        <label>
          <input type="checkbox"
          checked={selected.includes(ac.company)}
            onChange={()=>companyHandler(ac.company)}
          /> 
          {ac.company}
          
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

            <Link to={`/ac/${item.id}`}>
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

export default Acpage