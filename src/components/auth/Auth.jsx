import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
    Grid,
    Header,
    Image,
    Form,
    Segment,
    Button,
    Message,
    Divider,
} from "semantic-ui-react";
import { VnetworkContext } from "../../App";
import logo from "../../images/logo.png";
import { fbaseFacebookSignIn, fbaseGoogleSignin } from "./firebase/authManager";
const initialState = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const [formData, setFromData] = useState(initialState);

    const { loggedInUser, setLoggedInUser } = useContext(VnetworkContext);
    console.log(loggedInUser);

    const handleSwtich = () => {
        setIsSignUp(prevMode => !prevMode);
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = e => {
        setFromData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignIn = user => {
        setLoggedInUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };
    return (
        <Grid
            textAlign="center"
            style={{ height: "100vh" }}
            verticalAlign="middle"
        >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Image
                    as={Link}
                    to="/"
                    centered
                    src={logo}
                    alt="Logo"
                    size="medium"
                    bordered
                    style={{ padding: "8px" }}
                />
                <Divider hidden />
                {isSignUp ? (
                    <Header as="h1" textAlign="center">
                        Sign-Up for an Account.
                    </Header>
                ) : (
                    <Header as="h1" textAlign="center">
                        Log-in to your account
                    </Header>
                )}
                <Form size="large" onSubmit={e => handleFormSubmit(e)}>
                    <Segment>
                        {isSignUp && (
                            <Form.Input
                                name="fullName"
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="Full Name"
                                required
                                label="Enter Your Full Name"
                                onChange={e => handleChange(e)}
                            />
                        )}

                        <Form.Input
                            name="email"
                            fluid
                            icon="mail"
                            iconPosition="left"
                            placeholder="E-mail address"
                            required
                            label="Enter Your Email"
                            onChange={e => handleChange(e)}
                        />
                        <Form.Input
                            name="password"
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                            required
                            label="Enter your Password"
                            onChange={e => handleChange(e)}
                        />

                        {isSignUp && (
                            <Form.Input
                                name="confirmPassword"
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Confirm Password"
                                type="password"
                                required
                                label="Confirm Password"
                                onChange={e => handleChange(e)}
                            />
                        )}

                        {isSignUp ? (
                            <Button primary fluid size="large">
                                Sign Up
                            </Button>
                        ) : (
                            <Button secondary color="blue" fluid size="large">
                                Login
                            </Button>
                        )}
                    </Segment>
                </Form>
                {isSignUp ? (
                    <Message>
                        Already Have an account?{" "}
                        <Button primary onClick={handleSwtich}>
                            Log In
                        </Button>{" "}
                    </Message>
                ) : (
                    <Message>
                        New to us?{" "}
                        <Button secondary onClick={handleSwtich}>
                            Sign Up
                        </Button>{" "}
                    </Message>
                )}
                <Message>
                    Or Continue With...
                    <Divider hidden />
                    <div>
                        <Button
                            circular
                            color="facebook"
                            icon="facebook"
                            onClick={async () => {
                                try {
                                    const user = await fbaseFacebookSignIn();
                                    handleSignIn(user);
                                } catch (error) {
                                    console.log(error);
                                }
                            }}
                        />
                        <Button circular secondary icon="github" />

                        <Button
                            circular
                            color="google plus"
                            icon="google"
                            onClick={async () => {
                                try {
                                    const user = await fbaseGoogleSignin();
                                    handleSignIn(user);
                                } catch (error) {
                                    console.log(error);
                                }
                            }}
                        />
                    </div>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default Auth;
