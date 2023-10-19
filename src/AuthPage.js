import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

function AuthPage() {
    return (
        <div className="auth-page">
          
            <div className="auth-links">
                
            </div>
            <div className="auth-forms">
                <div className="auth-form">
                    <SignUp />
                </div>
                <div className="auth-form">
                    <SignIn />
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
