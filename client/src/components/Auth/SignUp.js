import React from 'react'

import { GoogleLogin } from 'react-google-login'
import { Row, Container, Col, InputGroup, FormControl, Button } from 'react-bootstrap'

function SignUp({handleSignUp, handleSwitch}) {

    const responseGoogle = (response) => {
        handleSignUp(response);
    }

    const handleS = () => {
        handleSwitch();
    }

    return (
            <Col md={10} className="text-center">
                <h1 className="mt-5">Sign-Up</h1>
                
                <div className="d-grid">
                    <GoogleLogin
                        className="mb-3 mt-3"
                        clientId="492019737830-gmjrm3ntab32r9gvd2kfkj66lcqlhc4l.apps.googleusercontent.com"
                        buttonText="Google Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                    <FormControl
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                    <FormControl
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <div className="d-grid">
                    <Button className="mb-3 mt-2" >Sign-In</Button>
                    <Button onClick={handleS} className="mb-3 mt-2" >Create an Account</Button>
                </div>
                <br/>
            </Col>
    )
}

export default SignUp
