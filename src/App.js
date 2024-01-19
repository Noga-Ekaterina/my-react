import React, {useState, useMemo, useEffect} from 'react';
import Likes from "./components/Likes";
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import SortPost from './components/SortPost';
import { useSortedPosts, usePost } from './hoocs/usePosts';
import PostService from './API/PostService';

function App() {
   const [posts, setPosts] = useState([]);

   useEffect(()=>{
      fetchPosts()
   }, [])

   async function fetchPosts() {
      const posts = await PostService.getAll();
      console.log(posts);
      setPosts(posts)
   }

   const [modalVisible, setModalVisible] = useState(false);
   
   const [filters, setFilters] = useState({qvery: '', sort: ''});

   const sortedAndSearchedPost = usePost(posts, filters.sort, filters.qvery   );

   const createPost = (newPost)=>{
      setPosts([...posts, newPost])
      setModalVisible(false)
   };
   
   const removePost = (post)=>{
      setPosts(posts.filter((p)=> p.id!= post.id))
   };
   return(
      <div className='App'>
         <MyButton onClick={()=>setModalVisible(true)}>Добавить пост</MyButton>

         <MyModal visible={modalVisible} setVisible={()=> setModalVisible(false)}>
            <PostForm create={createPost}/>
         </MyModal>

         <hr style={{margin: "10px 0"}}/>
         
         <SortPost filters={filters} setFilters={setFilters}/>
         {
            sortedAndSearchedPost.length!=0?
               <PostsList remove={removePost} posts={sortedAndSearchedPost}/>
            : <h1>Посты не найдены</h1>
         }
      </div>
   )
}

export default App;
