import React from 'react';
import PostItem from "./PostItem"

function PostsList({posts, remove}) {
   return (  
      <div>
         <h1>Список постов</h1>
         {posts.map((post, index)=>
            <PostItem remove={remove} number={index+1} post={post} key={post.id}/>
         )}
      </div>
   );
}

export default PostsList;