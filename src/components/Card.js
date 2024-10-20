import React from 'react'
import { useContext } from 'react'
import { context } from '../App'

function Card(props) {
  let value = useContext(context)
    let url = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

  return (
    <div className='p-2 bg-gray-200 m-2 hover:bg-gray-300'>
          <img src={url+props.item.info.cloudinaryImageId} className='rounded h-20 w-40' />
          <h6 className='max-w-32'>{props.item.info.name}</h6>
          <p>{props.item.info.avgRating}</p>
          <p>{props.item.info.areaName}</p>
          <p>{props.item.info.sla.slaString}</p>
          <p>{value}</p>
          </div>
  )
}

export default Card

export function HOC(Card){
  return function(props){
    return <div className='relative'>
    <Card {...props}/>
    <p className='text-white bg-green-600 w-10 absolute top-0 left-2 pl-1 rounded-lg'>Veg</p>
    
   </div>
  }
  
}