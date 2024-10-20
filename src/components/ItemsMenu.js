import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown , faAngleRight} from '@fortawesome/free-solid-svg-icons'
import increaseCount from '../utils/slice'
import {useDispatch} from 'react-redux'

function ItemsMenu(props) {
    console.log(props.item)
    let url = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'
let dispatch = useDispatch()
  return (
    props.item &&
    <div className='border-gray-200 border-b-2 shadow-md p-2'>
     <div className='d-flex justify-between'>
      <div className='font-bold'>
     <span >{props.title}</span>
     <span>({props.item?.length})</span>
     </div>
     <div>
     {props.showItems ? <FontAwesomeIcon icon={faAngleRight} onClick={()=>{
   props.handleItems()
     }}/> :<FontAwesomeIcon icon={faAngleDown} onClick={()=>{
   props.handleItems()
     }}/> 
}
     </div>
     </div>
      {props.showItems && props.item?.map((ele)=>{
         return <div className='flex border-gray-200 border-b-2 p-2'>
        <div className='w-9/12'>
        <h4>{ele.card.info.name}</h4>
        <p>{ele.card.info.price/100}</p>
        <p>{ele.card.info.ratings.aggregatedRating.rating
}</p>
<p>{ele.card.info.description}</p>
</div>
<div className='w-3/12 self-center'>
  {ele.card.info.imageId ? <img src={url+ele.card.info.imageId
} className='rounded h-20 w-24'/>:''}
<button className='bg-black text-white p-1 m-2 rounded' onClick={()=>{
dispatch(increaseCount())
}}>Add+</button>
  </div>

          </div>
      })}
    </div>
  )
}

export default ItemsMenu