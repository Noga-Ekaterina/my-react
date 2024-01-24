import React, {useMemo} from 'react';

const useSortedPosts=(posts, sort)=> {
   const sortedPost = useMemo(()=>{
      if (sort!="") {
         return(
            [...posts].sort((a, b)=> a[sort].localeCompare(b[sort]))
         )
      } else {
         return posts   
      }
   }, [posts, sort]);
   return sortedPost
}

const usePost = (posts, sort, qvery)=>{
   const sortedPost = useSortedPosts(posts, sort);
   const sortedAndSearchedPost = useMemo(()=>{
      if (typeof sortedPost== 'object') {
      return sortedPost.filter(post=> post.title.toLowerCase().includes(qvery.toLowerCase()))
      } else {
         return []
      }
   }, [qvery, sortedPost]);
   return sortedAndSearchedPost
};

export {useSortedPosts, usePost}