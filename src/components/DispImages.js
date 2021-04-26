import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegComment, FaRegThumbsUp } from 'react-icons/fa'

const DispImages = ({item}) => {
  const {img,like,tag,takenBy,userImg}=item
  console.log("what is img:",img)
  return (
            <div className="col-md-3">
                <article className='photo'>
                    <img src={img} alt="" onClick={() => console.log("clicked")}
                    />
                      <div className='photo-info'>
                          <div>
                           <strong><FaRegThumbsUp />  {like}  &nbsp; <FaRegComment /> </strong>
                           <h4>{tag}</h4>
                          </div>
                          <img src={userImg} alt='' className='user-img' />
                      </div>
                </article>
            </div>

          )
}

export default DispImages