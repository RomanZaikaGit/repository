import React from "react";
import Style from './singIn.module.css'
import logo from '../../img/img.png'
import { NavLink } from "react-router-dom";


const SingIn = () => {
    return (
        <div className={Style.loginBlock}>
            <div className={Style.loginForm}>
                <h1>Sing in</h1>
                <form className={Style.form}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Email'/>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter password'/>
                    <button>Sing in</button>
                    <NavLink to='/'>Forgot password?</NavLink>
                    <NavLink to='/registration'>Registration</NavLink>
                </form>
            </div>
            <div className={Style.img}>
                <img src={logo} />
            </div>
        </div>
    )
}


export default SingIn