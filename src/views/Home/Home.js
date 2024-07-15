import React, { useEffect, useState } from 'react'
import "./Home.css"
import PlantCard from '../../compents/PlantCard/PlantCard'
import axios from 'axios'
import toast, { Toaster} from "react-hot-toast"

function Home() {
  
   const [Plants ,setPlants]=useState([])

   const loadPlants= async ()=>{
   toast.loading("Loading Plants...")
  const response  = await axios.get(`${process.env.REACT_APP_API_URL}/Plants`)
  toast.dismiss()
  toast.success("Plant loaded successfully!")
  setPlants(response.data.data)
   }
   useEffect(()=>{
    loadPlants()
   },[])
  return (
    <div>
    
      <h1>Plants</h1>
      {
        Plants.map((Plant,i)=>{
            const {
              _id,
                name,
                category,
                price,
                description
            }=Plant
            return( <PlantCard 
                key={i}
                _id={_id} 
                name={name}
                 category={category}
                  price={price}
                   decription={description}
                   />)
        
                  })
      }
    <Toaster  />
    </div>
  )
}

export default Home
