import React from 'react'

import { useState } from 'react'
import { Row } from 'react-bootstrap';

import SignIn from './SignIn';
import SignUp from './SignUp';

function Auth() {

    const [isSignIn, setIsSignIn] = useState(true);

    const handleSignIn = (data) => {
        console.log("test");
    }

    const handleSignUp = (data) => {
        console.log("test");
    }

    const handleSwitch = () => {
        if(isSignIn == true) {
            setIsSignIn(false);
        } else {
            setIsSignIn(true);
        }
    }

    return (
        <Row className="d-flex justify-content-center">
            { isSignIn ? 
                    <SignIn handleSignIn={(data) => handleSignIn(data)} handleSwitch={() => handleSwitch()}/>
            :
                    <SignUp handleSignUp={(data) => handleSignUp(data)} handleSwitch={() => handleSwitch()}/>
            }
        </Row>
    )
}

export default Auth
