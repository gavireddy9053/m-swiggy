import React from 'react'

function Card(props) {
    let url = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

  return (
    <div className='p-2'>
          <img src={url+props.item.info.cloudinaryImageId} height='90px' width='180px' className='rounded'/>
          <h6>{props.item.info.name}</h6>
          <p>{props.item.info.avgRating}</p>
          <p>{props.item.info.areaName}</p>
          <p>{props.item.info.sla.slaString}</p>
          </div>
  )
}

export default Card