import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegComment, FaRegThumbsUp } from 'react-icons/fa'
import {useGlobalContext} from '../context'
import ShowImg from './ShowImg'
const DispImages = ({item}) => {
  const { image,images } = useGlobalContext()

  const {img,like,tag,takenBy,userImg,comment}=item
  console.log("what is img:",img)
  const getImage=(id)=>{
    const dispImg=images.filter(image=>images.id===id)

  }
  return (
            <div className="col-md-3">
                <article className='photo'>
                  <Link to={`/image/${item.id}`} > <img src={img} alt="" onClick={() =>getImage(item.id)}
                    /></Link>

                      <div className='photo-info'>
                          <div>
                           <strong className="likes"><FaRegThumbsUp />  {like}  &nbsp; &nbsp; <FaRegComment /> {comment} </strong>
                           <h5 className="tags">{tag}</h5>
                          </div>
                          <img src={userImg} alt='' className='user-img' />
                      </div>
                </article>
            </div>

          )
}

export default DispImages
