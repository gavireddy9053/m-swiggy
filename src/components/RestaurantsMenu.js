import React, { useEffect, useState } from 'react'
import {json, useParams} from 'react-router-dom'
import ItemsMenu from './ItemsMenu'

function RestaurantsMenu() {
  let [restaurantsMenu,setRestaurantsMenu] = useState(null)
  let id = useParams()
  
  let uniqueId = (id.restId)
  let url = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.30070&lng=80.46390&restaurantId='+uniqueId
  
  async function fetchData(){
    let data = await fetch(url)
    let jsonData = await data.json()
    let result = jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
setRestaurantsMenu(result)
    console.log(result)
  }
 useEffect(()=>{
  fetchData()
 },[])
  return (

    <div>
      {restaurantsMenu?.map((item)=>{
        return <ItemsMenu item = {item.card.card.itemCards} title = {item.card.card.title}/>
      })}
    </div>
  )
}

export default RestaurantsMenu