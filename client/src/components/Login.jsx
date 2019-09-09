import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {
constructor() {
super();
this.state = {
    username: "",
    password: "",
    redirectTo: null
};
this.handleSubmit = this.handleSubmit.bind(this);
this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
this.setState({
    [event.target.name]: event.target.value
});
}

handleSubmit(event) {
event.preventDefault();
console.log("handleSubmit");

axios
    .post("/user/login", {
    username: this.state.username,
    password: this.state.password
    })
    .then(response => {
    console.log("login response: ");
    console.log(response);
    if (response.status === 200) {
        // update App.js state
        this.props.updateUser({
        loggedIn: true,
        username: response.data.username
        });
        // update the state to redirect to home
        this.setState({
        redirectTo: "/"
        });
    }
    })
    .catch(error => {
    console.log("login error: ");
    console.log(error);
    });
}

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <h4>Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username"><p>Username:</p></label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password"><p>Password:</p> </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-primary col-1 col-mr-auto"
                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>
                    <a href="/auth/google" class="button">
=======
render() {
if (this.state.redirectTo) {
    return <Redirect to={{ pathname: this.state.redirectTo }} />;
} else {
    return (
    <div>
        <h4>Login</h4>
        <form action="/login" method="post">
        <div>
            <label>Username:</label>
            <input type="text" name="username" />
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name="password" />
        </div>
        <div>
            <input type="submit" value="Log In" />
        </div>
        </form>
        <a href="/auth/google" class="button">
        <div>
            <span class="svgIcon t-popup-svg">
            <svg
                class="svgIcon-use"
                width="25"
                height="37"
                viewBox="0 0 25 25"
            >
                <g fill="none" fill-rule="evenodd">
                <path
                    d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z"
                    fill="#4285F4"
                />
                <path
                    d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z"
                    fill="#34A853"
                />
                <path
                    d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z"
                    fill="#FBBC05"
                />
                <path
                    d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z"
                    fill="#EA4335"
                />
                </g>
            </svg>
            </span>
            <span class="button-label">Sign in with Google</span>
        </div>
        </a>
    </div>
    );
}
}
}

export default Login;
