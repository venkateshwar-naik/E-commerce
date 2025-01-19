import React,{useState} from 'react'
import { computerData } from '../Data/computers' 
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Fridge from '../Components/Fridge';

const Computerpage = () => {


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
  computerData : computerData.filter((pro)=>selected.includes(pro.company) )
  
  return (
    <>

<div className="products">
<div className="navv">
<Navbar/>

</div>

<div className="mob">
<div className="pro-selec">
  {
    computerData.map((computer,index)=>{
      return(
        <div key={index}>
        <label>
          <input type="checkbox"
          checked={selected.includes(computer.company)}
            onChange={()=>companyHandler(computer.company)}
          /> 
          {computer.company}
          
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

            <Link to={`/computers/${item.id}`}>
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

export default Computerpage