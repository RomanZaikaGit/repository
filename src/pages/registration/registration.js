import React from "react";
import Style from './registration.module.css'
import logo from "../../img/img.png";
import {NavLink} from "react-router-dom";
import RegistrationForm from "../../components/registrationForm/registrationForm";


const Registration = () => {
    return(
        <div className={Style.create}>
            <div className={Style.createForm}>
                <h1>Create an account</h1>
                <RegistrationForm />
                <div className={Style.logIn}>
                    Already have an account?<NavLink to='/'>Log in</NavLink>
                </div>

            </div>
            <div className={Style.img}>
                <img src={logo} />
            </div>
        </div>
    )
}

export default Registration