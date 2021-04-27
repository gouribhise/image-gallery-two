import React,{useState,useEffect,useContext} from 'react'
import {useCallback} from 'react'

const API_KEY=process.env.REACT_APP_PIXABAY_API_KEY
const url=`https://pixabay.com/api/?key=${API_KEY}`
console.log(url)
const AppContext=React.createContext()

const AppProvider=({children})=>{
  const[loading,setLoading]=useState(true);
  const[searchTerm,setSearchTerm]=useState('');
  const[images,setImages]=useState([]);
  console.log("searchterm ",searchTerm)

  //fetch images
  const fetchImages = useCallback( async () => {
  setLoading(true)
  try {
    const response = await fetch(`${url}&q=${searchTerm}`)
    console.log("what is response",response)
    const data = await response.json()
    console.log(data);
    const {hits}=data
    if (hits) {
        const newImages = hits.map((item) => {
          const {
            id,
            likes,
            comments,
            tags,
            user,
            userImage,
            webformatURL
          } = item

          return {
            id:id,
            like:likes,
            comment:comments,
            tag:tags,
            takenBy:user,
            userImg:userImage,
            img:webformatURL
          }
        })
        setImages(newImages)
      } else {
        setImages([])
      }
      setLoading(false)
    } catch (error) {

    console.log(error)
    setLoading(false)
  }
},[searchTerm])
useEffect(() => {
  fetchImages()
}, [searchTerm,fetchImages])

  return <AppContext.Provider value={{
    loading,images,searchTerm,setSearchTerm
  }}>
  {children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
  return useContext(AppContext)
}

export {AppContext,AppProvider}
