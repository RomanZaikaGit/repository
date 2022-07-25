import React from 'react';


import RegistrationForm from '../../components/registrationForm/registrationForm';

import Style from './registration.module.css'
import logo from '../../img/img.png';

const Registration = () => {
    return(
        <div className={Style.create}>
            <div className={Style.createForm}>
                <h1>Create an account</h1>
                <RegistrationForm />
            </div>
            <div className={Style.img}>
                <img src={logo} />
            </div>
        </div>
    )
}

export default Registration