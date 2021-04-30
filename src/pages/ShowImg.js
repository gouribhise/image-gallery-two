import React,{useEffect,useState} from 'react'
 import { useParams} from 'react-router-dom'
const API_KEY=process.env.REACT_APP_PIXABAY_API_KEY
const url=`https://pixabay.com/api/?key=${API_KEY}`
const ShowImg=(props)=>{
const[image,setImage]=useState([])
console.log("the final image:",image)
  const {id}=useParams()
   console.log("id is:",id)
useEffect(() => {
  async function getImage() {
   try {

         const response = await fetch(`${url}&id=${id}&image_type=photo&pretty=true&safesearch=true`)
         console.log("res",response);
          const data = await response.json()
          const {hits}=data
                 console.log("data",hits[0])
                 setImage(hits[0])

}

catch(error){}
}
getImage()},[id])
  return(


<>
<div className="row">
<div class="col-md-7 offset-2 imgInfo">

</div>
</div>
  <div class="col-md-7 offset-2">

  <h5 className="takenBy"> Image By:&nbsp;

  <img src={image.userImageURL} alt={image.id} style={{ width: "50px", heigh: "50px",borderRadius:"50%"}}/>
   &nbsp;  <span class="badge badge-info" style={{padding:"15px",textTransform:"capitalize"}}>{image.user} </span>
   <br/>
   </h5>
    <img src={image.largeImageURL} alt={image.id} className="imgFrame" />
  </div>
  </>
  )
}

export default ShowImg
