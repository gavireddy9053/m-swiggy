import React from 'react'
import { useState,useEffect } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

function Body() {
let [restaurantsData,setRestaurantsData] = useState([])
let [searchItem,setSearchItem] = useState('')
let [filteredData,setFilteredData] = useState([])

async function fetchData(){

    let data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.30070&lng=80.46390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING') 
    let jsonData =await data.json()
    console.log(jsonData)
    let restaurantsArray = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
console.log(restaurantsArray)
setRestaurantsData(restaurantsArray)
  }
useEffect(()=>{
  fetchData()
},[])

useEffect(()=>{
  let filteredItems = restaurantsData.filter((item)=>{
    return (item.info.name.toUpperCase().includes(searchItem.toUpperCase()))
   })
   setFilteredData(filteredItems)
},[restaurantsData,searchItem])

  return (
    <div>
      <input type='text' onChange={(event)=>{
    setSearchItem(event.target.value)
      }}/>
      <div className='d-flex flex-wrap' >
    
      {filteredData.map((item)=>{
        return <Link to={'/restaurants/'+item.info.id}><Card item={item}/></Link>
        
      })}
     
    </div>
 
    </div>
     )
}

export default Body