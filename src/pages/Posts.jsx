import React, { useState, useMemo, useEffect } from 'react';
import PostsList from '../components/PostsList';
import PostForm from '../components/PostForm';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import SortPost from '../components/SortPost';
import { useSortedPosts, usePost } from '../hoocs/usePosts';
import PostService from '../API/PostService';
import Preloader from '../components/UI/preloader/preloader';
import useFetch from '../hoocs/useFetch';
import { getTotalPages } from '../utils/getPages';
import ButtonsPages from '../components/ButtonsPages';

function Posts() {
   const [posts, setPosts] = useState([]);
   const [modalVisible, setModalVisible] = useState(false)
   const [filters, setFilters] = useState({ qvery: '', sort: '' });
   const [totalPages, setTotalPages] = useState(0);
   const [limit, setLimit] = useState(10);
   const [page, setPage] = useState(1);
   const [fetchPosts, postsLoading, postsError] = useFetch(async () => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data)
      const totalCount = (response.headers["x-total-count"]);
      setTotalPages(getTotalPages(totalCount, limit))
   });
   useEffect(() => {
      fetchPosts()
   }, [page])

   const sortedAndSearchedPost = usePost(posts, filters.sort, filters.qvery);

   const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModalVisible(false)
   };

   const removePost = (post) => {
      setPosts(posts.filter((p) => p.id != post.id))
   };
   return (
      <div className='Posts'>
         <MyButton onClick={() => setModalVisible(true)}>Добавить пост</MyButton>

         <MyModal visible={modalVisible} setVisible={() => setModalVisible(false)}>
            <PostForm create={createPost} />
         </MyModal>

         <hr style={{ margin: "10px 0" }} />

         <SortPost filters={filters} setFilters={setFilters} />
         {
            sortedAndSearchedPost.length != 0 ?
               <PostsList remove={removePost} posts={sortedAndSearchedPost} />
               : postsLoading ?
                  <Preloader />
                  : <h1>Посты не найдены</h1>
         }
         {
            postsError != "" && <h1>Произошла ошибка: {postsError}</h1>
         }
         <ButtonsPages totalPages={totalPages} setPage={setPage} />
      </div>
   )
}

export default Posts;