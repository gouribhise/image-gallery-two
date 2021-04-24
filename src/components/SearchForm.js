import React from 'react'
import {useGlobalContext} from '../context'

const SearchForm=()=>{
  const {setSearchTerm}=useGlobalContext()
//  const searchValue=React.useRef('')
  const [searchValue,setSearchValue]=React.useState('')



  const searchImage=()=>{
    setSearchTerm(searchValue.current.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    setSearchTerm(searchValue)
    }
  return(
    <section>
       <form onSubmit={handleSubmit}>
         <label htmlFor="name">Search Images</label>
         <input type="text" name="name" id="name"
         onChange={(e)=>setSearchValue(e.target.value)}/>
         <button
                  className="btn btn-secondary btn-sm
                  rounded-pill rounded-lg"
                  style={{marginLeft:"20px",
                  paddingRight:"20px",paddingLeft:"20px"}}
                  type="btn"
                  onSubmit={searchImage}>

                   Search
                  </button>
       </form>
    </section>
  )
}

export default SearchForm
