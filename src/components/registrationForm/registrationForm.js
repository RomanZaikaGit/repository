import React from 'react';

import Style from './registrationForm.module.css'



const RegistrationForm = () =>
    <form className={Style.formRegistration}>
            <div className={Style.formName}>
                <div>
                    <label htmlFor='firstName'>First name</label>
                    <input type='text' placeholder='First name'/>
                </div>
                <div>
                    <label htmlFor='lastName'>Last name</label>
                    <input type='text' placeholder='Last name'/>
                </div>
            </div>
            <label htmlFor='companyName'>Company name</label>
            <input type='text' placeholder='Company name'/>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Email'/>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Password'/>
            <label htmlFor='repeatPassword'>Repeat password</label>
            <input type='password' placeholder='Repeat password'/>
            <button>Create account</button>
        </form>


export default RegistrationForm