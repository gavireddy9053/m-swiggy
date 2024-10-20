import React, { useEffect, useState } from 'react'
import {json, useParams} from 'react-router-dom'
import ItemsMenu from './ItemsMenu'
import useGetData from './useGetData'

function RestaurantsMenu() {
  let [showItem,setShowItem] = useState(null)

  let id = useParams()
  let uniqueId = (id.restId)
  let url = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.30070&lng=80.46390&restaurantId='+uniqueId

 let jsonData  = useGetData(url)
  

  
 
    let result = jsonData?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
    console.log(result)
  
 
  return (

    <div className='w-5/12 m-auto'>
      {result?.map((item,index)=>{
        let handleItems = () => {
               index !== showItem ? setShowItem(index) : setShowItem(null)
        }
        return <ItemsMenu item = {item.card.card.itemCards} title = {item.card.card.title} showItems={showItem == index ? true : false} handleItems={handleItems}/>
      })}
    </div>
  )
}

export default RestaurantsMenu