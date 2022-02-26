import React, { Component } from "react";
import "./LoginHome.css";
import Grid from '@material-ui/core/Grid';
import { Avatar, Paper } from "@material-ui/core";
// import Firebase from "./../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration



class LoginHome extends Component {
    constructor(props) {

        const firebaseConfig = {
            apiKey: "AIzaSyC1xUTfBZWwfIlp4wavM0vntMZeMZH_iUs",
            authDomain: "facebook-clone-fee14.firebaseapp.com",
            projectId: "facebook-clone-fee14",
            storageBucket: "facebook-clone-fee14.appspot.com",
            messagingSenderId: "672840784520",
            appId: "1:672840784520:web:07a0aebcd7d187e7175d3d"
        };
        const app = initializeApp(firebaseConfig);

        super(props);



        this.state = {
            signIN: true,

            signin_email: null,
            signin_password: null,
            //signup 
            signup_name: null,
            signup_email: null,
            signup_password: null
        }
    }

    switchPanel = () => {
        if (this.state.signIN) {
            this.setState({ signIN: false });
        }
        else {
            this.setState({ signIN: true });
        }

    }
    signUP = () => {

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.state.signup_email, this.state.signup_password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                let payload = {
                    "userID": user.uid,
                    "userName": this.state.signup_name,
                    "userImageURL": this.getImage()

                }
                const requestOptions = {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                };
                fetch("http://localhost:8080/api/userService/save", requestOptions)
                    .then(reponse => Response.json())
                    .then(data => {
                        // const user = userCredential.user;
                        localStorage.setItem("user", JSON.stringify(data));
                        window.location.reload();
                    })
                    .catch(error => {

                    })


                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    getImage=()=>{
        return "dp"+Math.floor(Math.random() * 10);
    }
    signInMethod = () => {


        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.state.signin_email, this.state.signin_password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                fetch("http://localhost:8080/api/userService/getUser/"+user.uid)
                .then(reponse => Response.json())
                .then(data => {
                    // const user = userCredential.user;
                    localStorage.setItem("user", JSON.stringify(data));
                    window.location.reload();
                })
                .catch(error => {

                })

                // const user = userCredential.user;

             


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
    state = {}
    render() {
        return (

            <div className="main__container">
                <Grid className="main__content" container >
                    <Grid item xs={7}>
                        <div className="fblogo">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" width="300px" />
                        </div>
                        <div>
                            <h1 className="text">Facebook helps you connect and share with the people in your life.</h1>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className="logincard__container">
                            {
                                this.state.signIN == true ?

                                    <div container="login__panel" >
                                        <div>
                                            <input onChange={(event) => { this.state.signin_email = event.currentTarget.value }} type="text" className="login__input" placeholder="Email address" />
                                        </div>
                                        <div>
                                            <input onChange={(event) => { this.state.signin_password = event.currentTarget.value }} type="password" className="login__input" placeholder="Password" />
                                        </div>
                                        <div>
                                            <button onClick={this.signInMethod} className="login__button">Log in</button>
                                        </div>
                                        <div>
                                            <div className="forget_Text">Forgotten password?</div>
                                        </div>
                                        <div>
                                            <div className="dividor"></div>
                                        </div>
                                        <div>
                                            <button className="login__createnew" onClick={this.switchPanel}>Create New Account</button>
                                        </div>
                                    </div>
                                    :
                                    <div container="login__panel">
                                        <div>
                                            <input onChange={(event) => { this.state.signup_name = event.currentTarget.value }} type="text" className="login__input" placeholder="Name" />
                                        </div>
                                        <div>
                                            <input onChange={(event) => { this.state.signup_email = event.currentTarget.value }} type="text" className="login__input" placeholder="Email address" />
                                        </div>
                                        <div>
                                            <input onChange={(event) => { this.state.signup_password = event.currentTarget.value }} type="password" className="login__input" placeholder="Password" />
                                        </div>
                                        <div>
                                            <button onClick={this.signUP} className="login__button">Sign Up</button>
                                        </div>
                                        <div>
                                            <div onClick={this.switchPanel} className="forget_Text">Already have account?</div>
                                        </div>
                                    </div>
                            }

                        </Paper>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>

        );
    }
}

export default LoginHome;