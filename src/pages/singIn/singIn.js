import React from "react";
import Style from './singIn.module.css'
import logo from '../../img/img.png'
import { NavLink } from "react-router-dom";
import LoginForm from "../../components/loginForm/loginForm";


const SingIn = () => {
    return (
        <div className={Style.loginBlock}>
            <div className={Style.loginForm}>
                <h1>Sing in</h1>
                <LoginForm />
            </div>
            <div className={Style.img}>
                <img src={logo} />
            </div>
        </div>
    )
}


export default SingIn