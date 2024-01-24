import Error from "../pages/Error";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";

const routesPrivat = [
   {path:'/posts', element: <Posts/>},
   {path:'/posts/:id', element: <PostPage/>},
   {path:'/', element: <About/>},
   {path:'/error', element: <Error/>},
   {path:'/login', element: <Navigate to="/posts" replace/>},
   {path:'*', element: <Navigate to="/error" replace/>},
];
const routesPublic = [
   {path:'/', element: <About/>},
   {path:'/login', element: <Login/>},
   {path:'*', element: <Navigate to="/login" replace/>},
   
];
export{routesPrivat, routesPublic}