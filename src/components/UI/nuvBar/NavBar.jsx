import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cls from "./NavBar.module.css"
import { AuthContext } from '../../../context';
function NavBar() {
   const [auth, setAuth] = useContext(AuthContext);
   const route= useNavigate()
   const login=()=>{
      route("/login")
   }
   const goOut= ()=>{
      setAuth(false)
   }
   return ( 
      <div className={cls.navBar}>
         <Link to="/">О Нас</Link>
         <Link to="/posts">Посты</Link>
         <button onClick={auth? goOut :login}>{auth? "Выйти": "Войти"}</button>
      </div>
    );
}

export default NavBar;