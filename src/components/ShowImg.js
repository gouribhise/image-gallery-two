import React from 'react'
import {useGlobalContext} from '../context'
import { useParams, Link } from 'react-router-dom'
const API_KEY=process.env.REACT_APP_PIXABAY_API_KEY
const url=`https://pixabay.com/api/?key=${API_KEY}`
const ShowImg=(props)=>{
  const{images}=useGlobalContext()
  const {id}=useParams()
   console.log("id is:",id)
  async function getImage() {
   try {

         const response = await fetch(`${url}&id=${id}`)
         console.log("res",response);
          const data = await response.json()
          const {hits}=data
                 console.log("data",hits[0])

}

catch(error){}
}
getImage()
  return(
    <div><h1></h1></div>
  )
}

export default ShowImg
