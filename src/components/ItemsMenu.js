import React from 'react'

function ItemsMenu(props) {
    console.log(props.item)
    let url = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

  return (
    props.item &&
    <div>
     <div className='d-flex'>
     <h4>{props.title}</h4>
     <p>({props.item?.length})</p>
     </div>
      {props.item?.map((ele)=>{
         return <div className='d-flex justify-content-between'>
        <div>
        <h4>{ele.card.info.name}</h4>
        <p>{ele.card.info.price/100}</p>
        <p>{ele.card.info.ratings.aggregatedRating.rating
}</p>
<p>{ele.card.info.description}</p>
</div>
<div>
  {ele.card.info.imageId ? <img src={url+ele.card.info.imageId
} height={100} width={100}/>:''}
  </div>

          </div>
      })}
    </div>
  )
}

export default ItemsMenu