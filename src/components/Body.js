import React from 'react'
import { useState,useEffect } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { HOC } from './Card'
import useGetData from './useGetData'

function Body(props) {
let [searchItem,setSearchItem] = useState('')
let [filteredData,setFilteredData] = useState([])
let jsonData = useGetData('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.30070&lng=80.46390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
let HOCCard = HOC(Card)


    let restaurantsArray = jsonData?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
console.log(restaurantsArray)
  


useEffect(()=>{
  let filteredItems = restaurantsArray?.filter((item)=>{
    return (item.info.name.toUpperCase().includes(searchItem.toUpperCase()))
   })
   setFilteredData(filteredItems)
},[restaurantsArray,searchItem])

  return (
    <div>
      <input type='text' onChange={(event)=>{
    setSearchItem(event.target.value)
      }}/>
      <div className=' flex flex-wrap' >
    
      {filteredData?.map((item)=>{
        return <Link to={'/restaurants/'+item.info.id}>{item.info.veg?<HOCCard item={item} /> :<Card item={item} />}</Link>
        
      })}
     
    </div>
 
    </div>
     )
}

export default Body