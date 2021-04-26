import React from 'react'
import {useGlobalContext} from '../context'
import DispImages from './DispImages';
const ImagesList=()=>{
  const { images, loading } = useGlobalContext()
  console.log(images)
  if(loading){
  return (
    <h1>loading</h1>
  )
  }
  if(images.length<1){
    return(
      <h1>No images found</h1>
    )
  }

  return (
   <div className="row">
{images.map((item)=>{
return <DispImages key={item.id} item={item}/>
})}
   </div>
  )
}

export default ImagesList
