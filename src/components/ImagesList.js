import React from 'react'
import {useGlobalContext} from '../context'
import DispImages from './DispImages';
const ImagesList = () => {
  //get data from conted
  const { images, loading } = useGlobalContext()
 
 
  if(loading){
     return (
            <h1>Loading...</h1>
           )
       }
 if(images.length<1){
    return(
      <>
         <div className="col-md-5 offset-3" style={{marginTop:"3%"}}>
             <h4>No images found</h4>
             <p>Enter new search term & try again</p>
         </div>
      </>
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
