import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

function Login() {
   const [auth, setAuth] = useContext(AuthContext);
   const route= useNavigate()
   return ( 
      <div>
         <h1>Войдите</h1>
         <form onSubmit={e=>{
            e.preventDefault()
            setAuth(true) 
            route.replace("/")
            localStorage.setItem("auth", auth)
         }}>
            <MyInput placeholder="Имя"/>
            <MyInput placeholder="Пароль" type="password"/>
            <MyButton>Войти</MyButton>
         </form>
      </div>
   );
}

export default Login;