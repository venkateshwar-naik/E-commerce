import React,{useState} from 'react'
import { fridgeData } from '../Data/fridge'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';



const Fridgepage = () => {

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
  fridgeData : fridgeData.filter((pro)=>selected.includes(pro.brand) )
  




  return (
    <>

<div className="products">
<div className="navv">
<Navbar/>

</div>

<div className="mob">
<div className="pro-selec">
  {
    fridgeData.map((fridge,index)=>{
      return(
        <div key={index}>
        <label>
          <input type="checkbox"
          checked={selected.includes(fridge.brand)}
            onChange={()=>companyHandler(fridge.brand)}
          /> 
          {fridge.brand}
          
        </label>


        </div>
      )
    })
  }
</div>


    <div className='pagesec'>

    {filter.map((item,index)=>{

        return(
            <div  className='fridge' key={index}>

            <Link to={`/fridge/${item.id}`}>
            <div className="pageimg">
                <img src={item.image} alt="" />
            </div>

            </Link>
           
            <div className="promodel">
            {item.brand},{item.model}

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

export default Fridgepage