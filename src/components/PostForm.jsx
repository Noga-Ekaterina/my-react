import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function PostForm({create}) {
   const [post, setpost] = useState({title:"", body:""});

   const addPost = (e)=>{
      e.preventDefault()
      const newPost ={...post, id: Date.now}
      create(newPost)
      setpost({title:"", body:""})
   };
   return (
      <form>
            <MyInput value={post.title} onInput={(e)=> setpost({...post, title: e.target.value})}
            placeholder="Заголовок поста"/>
            <MyInput value={post.body} onInput={(e)=> setpost({...post, body: e.target.value})}
            placeholder="Пост"/>
            <MyButton type="submit" onClick={addPost}>Добавить пост</MyButton>
         </form>
   );
}

export default PostForm;