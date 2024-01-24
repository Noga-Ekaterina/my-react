import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './UI/nuvBar/NavBar';
import { routesPrivat, routesPublic } from '../routes';
import { AuthContext } from '../context';

function AppRoutes() {
   const [auth, setAuth] = useContext(AuthContext);
   
   return ( 
      <BrowserRouter>
         <NavBar/>
            <Routes>
               {
                  auth?
                     routesPrivat.map(route=>
                        <Route path={route.path} element={route.element} key={route.path}/>  
                     )
                     :routesPublic.map(route=>
                        <Route path={route.path} element={route.element} key={route.path}/>  
                     )
               }
            </Routes>
         </BrowserRouter>
   );
}

export default AppRoutes;