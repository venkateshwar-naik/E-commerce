//
import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Landingpage from './Stores/Pages/Landingpage'
import Tvpage from './Stores/Pages/Tvpage'
import Mobilepage from './Stores/Pages/Mobilepage'
import Computerpage from './Stores/Pages/Computerpage'
import Fridgepage from './Stores/Pages/Fridgepage'
import Acpage from './Stores/Pages/Acpage'
import Watchpage from './Stores/Pages/Watchpage'
import Furniturepage from './Stores/Pages/Furniturepage'
import Menspage from './Stores/Pages/Menspage'
import Mobiledata from './Prodata/Mobiledata'
import Usercart from './Stores/Usercart/Usercart'
import Computerdata from './Prodata/Computerdata'
import Fridgedata from './Prodata/Fridgedata'
import Acdata from './Prodata/Acdata'
import Mensdata from './Prodata/Mensdata'
import Watchdata from './Prodata/Watchdata'
import Tvdata from './Prodata/Tvdataa'
import Furnituredata from './Prodata/Furnituredata'

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path='/'element={<Landingpage/>} />
      <Route path='/mobilepage'element={<Mobilepage/>} />
      <Route path='/computerpage'element={<Computerpage/>} />
      <Route path='/fridgepage'element={<Fridgepage/>} />
      <Route path='/watchpage'element={<Watchpage/>} />
      <Route path='/acpage'element={<Acpage/>} />
      <Route path='/furniturepage'element={<Furniturepage/>} />
      <Route path='/menspage'element={<Menspage/>} />
      <Route path='/tvpage'element={<Tvpage/>} />


      <Route path='/mobiles/:id'element={<Mobiledata/>} />
      <Route path='/computers/:id'element={<Computerdata/>} />
      <Route path='/fridge/:id'element={<Fridgedata/>} />
      <Route path='/ac/:id'element={<Acdata/>} />
      <Route path='/mens/:id'element={<Mensdata/>} />
      <Route path='/watch/:id'element={<Watchdata/>} />
      <Route path='/tv/:id'element={<Tvdata/>} />
      <Route path='/funiture/:id'element={<Furnituredata/>} />





      <Route path='/cart'element={<Usercart/>} />


      


      

      
      

        
      </Routes>
      
    </Router>
      
    </>
      

  )
}

export default App
