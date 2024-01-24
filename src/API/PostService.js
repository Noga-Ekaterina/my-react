import axios from "axios";

export default class PostService{
   static async getAll(limit=10, page=1){
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
         params:{
            _limit: limit,
            _page: page 
         }
      });
      return response
   }

   static async getPost(id){
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return response.data
   }
   
   static async getComentsById(id){
      const comments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      return comments. data
   }
}