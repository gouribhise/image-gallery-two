import React from 'react'
import {useGlobalContext} from '../context'
import { FaSearch } from 'react-icons/fa'

const SearchForm = () => {
  //setsearchterm
  const { setSearchTerm } = useGlobalContext()
  //get searchvalue
  const [searchValue,setSearchValue]=React.useState('')



 

  function handleSubmit(e){
    e.preventDefault();
    //setsearchterm ->send it to context
    setSearchTerm(searchValue)
  }
  
  return(
    <section>
    <div className="col-md-7 offset-2 searchForm">
       <form onSubmit={handleSubmit}>
         <label htmlFor="name"><h5>Search Images</h5></label> &nbsp;
         <input type="text" name="name" id="name"
                onChange={(e)=>setSearchValue(e.target.value)}/>
         <button
                 className="btn btn-secondary btn-sm
                 rounded-pill rounded-lg"
                 style={{marginLeft:"20px",
                 paddingRight:"20px",paddingLeft:"20px"}}
                 type="btn"
          >
                <FaSearch/>  &nbsp; Search
          </button>
       </form>
       </div>
    </section>
  )
}

export default SearchForm
