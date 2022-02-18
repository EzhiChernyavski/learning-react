import React from 'react';
import post from './Post.module.css';

const Posts = (props) => {  
  return (
    <div>
      <div className={post.item}>
        <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" className={post.item_img}/>
        <span>{props.message}</span>
        <div className={post.likes}>
          <span>{"Like " + props.likesCount}</span>
        </div>
      </div>
    </div>
  )
}

export default Posts;