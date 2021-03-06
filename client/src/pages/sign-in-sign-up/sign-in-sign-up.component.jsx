import React from 'react'; 
import SignIn from '../../components/auth/sign-in/sign-in.component';
import SignUp from '../../components/auth/sign-up/sign-up.component';

import "./sign-in-sign-up.styles.scss"; 

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage; 