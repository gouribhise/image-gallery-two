import React,{useState,useEffect,useContext} from 'react'
import {useCallback} from 'react'

const API_KEY=process.env.REACT_APP_PIXABAY_API_KEY
const url=`https://pixabay.com/api/?key=${API_KEY}`

const AppContext=React.createContext()

const AppProvider=({children})=>{
  const[loading,setLoading]=useState(true);
  const[searchTerm,setSearchTerm]=useState('a');
  const[images,setImages]=useState([]);

  return <AppContext.Provider value={{}}>
  {children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
  return useContext(AppContext)
}

export {AppContext,AppProvider}
