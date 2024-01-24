import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

function PostItem(props) {
   const route= useNavigate()

   return (
      <div className="post">
         <div className="post__content">
            <strong>{props.number}. {props.post.title}</strong>
            <div>{props.post.body}</div>
         </div>
         <MyButton onClick={()=> props.remove(props.post)}>Удалить</MyButton>
         <MyButton onClick={()=> route(`./${props.post.id}`)}>Открыть</MyButton>
      </div>
   );
}

export default PostItem;