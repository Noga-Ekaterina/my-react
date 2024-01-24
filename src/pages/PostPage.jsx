import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hoocs/useFetch';
import PostService from '../API/PostService';
import Preloader from '../components/UI/preloader/preloader';
import PostItem from '../components/PostItem';
import ComentsList from '../components/ComentsList';

function PostPage() {
   const params= useParams()
   const [post, setPost] = useState({});
   const [fetchPost, postLoading, postError]= useFetch(async ()=>{
      const post= await PostService.getPost(params.id)
      setPost(post)
   })
   const [comments, setComments] = useState([]);
   const [fetchComents, comentsLoading, comentsError]= useFetch(async ()=>{
      const coments= await PostService.getComentsById(params.id)
      setComments(coments)
   })
   useEffect(() => {
      fetchPost()
      fetchComents()
   }, [])
   console.log(comments);
   return ( 
      <div>
         {
            postError&&<h1>Произошла ошибка: {postError}</h1>
         }
         {
            postLoading?
               <Preloader/>
            :<div>
               <h1>{post.title}</h1>
               <div>{post.body}</div>
            </div>
         }
         <h2>Коментарии</h2>
         {
            comentsError && <div>Произошла ошибка: {comentsError}</div>
         }
         {
            comentsLoading?
               <Preloader/>
            :<ComentsList coments={comments}/>
         }
      </div>
   );
}

export default PostPage;