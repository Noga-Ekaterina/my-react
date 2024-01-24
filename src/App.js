import React, { useEffect, useState } from 'react';
import AppRoutes from './components/AppRoutes';
import { AuthContext } from './context';

function App() {
   const [auth, setAuth] = useState(false);
   useEffect(()=>{
      setAuth(localStorage.getItem("auth"))
   }, [])
   return(
      <AuthContext.Provider value={[auth, setAuth]}>
         <div className='App'>
            <AppRoutes/>
         </div>
      </AuthContext.Provider> 
   )
}

export default App;
