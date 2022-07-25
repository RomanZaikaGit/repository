import React from "react";
import Style from './loginForm.module.css'
import {NavLink} from "react-router-dom";



const LoginForm = () => {
    return(
        <form className={Style.form}>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Email'/>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter password'/>
            <button>Sing in</button>
            <NavLink to='/'>Forgot password?</NavLink>
            <NavLink to='/registration'>Registration</NavLink>
        </form>
    )
}
export default LoginForm