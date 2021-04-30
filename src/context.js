import React,{useState,useEffect,useContext} from 'react'
import {useCallback} from 'react'

const API_KEY=process.env.REACT_APP_PIXABAY_API_KEY
const url=`https://pixabay.com/api/?key=${API_KEY}`
 
const AppContext=React.createContext()

const AppProvider = ({ children }) => {
  //to show loading message
  const [loading, setLoading] = useState(true);
  //to get searchterm
  const [searchTerm, setSearchTerm] = useState('');
  //to store images data as an array
  const [images, setImages] = useState([]);
  
 
  //fetch images
  const fetchImages = useCallback( async () => {
  setLoading(true)
  try {
    const response = await fetch(`${url}&q=${searchTerm}&image_type=photo&pretty=true&safesearch=true`)
    //received data
    const data = await response.json()
 
    //get only hits array the actual data
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
