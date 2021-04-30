import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegComment, FaRegThumbsUp } from 'react-icons/fa'


const DispImages = ({item}) => {
  const {img,like,tag,comment}=item
 
  return (
    <div className="col-md-3">
      <article className='photo'>
          <Link to={`/image/${item.id}`}>
               <img src={img} alt=""
                   style={{ height: "100%", width: "100%" }} />
          </Link>

            <div className='photo-info'>
                <div>
            <strong className="likes">
              <FaRegThumbsUp />  {like}
                  &nbsp; &nbsp;
              <FaRegComment />  {comment}
            </strong>
            <h5 className="tags"> {tag} </h5>
                </div>

            </div>
      </article>
  </div>

          )
}

export default DispImages
