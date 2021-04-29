import React from 'react'
import {useGlobalContext} from '../context'
import { useParams, Link } from 'react-router-dom'

const ShowImg=(props)=>{
  const{images}=useGlobalContext()
  const {id}=useParams()

   


  return(
    <div><h1></h1></div>
  )
}

export default ShowImg
