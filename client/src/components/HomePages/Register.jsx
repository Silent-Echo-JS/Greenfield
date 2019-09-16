import React from "react";
import { Redirect } from "react-router-dom";
// import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      toDashboard: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    this.setState(() => ({
      toDashboard: true
    }));
  }

  // const newUser = {
  //   firstname: this.state.firstname,
  //   lastname: this.state.lastname,
  //   username: this.state.email,
  //   password: this.state.password
  // };

  // const register = newUser =>
  //   axios
  //     .post("/user/register", {
  //       firstname: newUser.first_name,
  //       lastname: newUser.last_name,
  //       email: newUser.email,
  //       password: newUser.password
  //     })
  //     .then(() => {
  //       console.log("Registered");
  //     });

  // register(newUser).then(res => {
  //   this.props.history.push("/register");
  // });

  render() {
    const { toDashboard, firstname, lastname, username, password } = this.state;
    if (toDashboard === true) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="col-md-6 mt-5 mx-auto">
        <form noValidate onSubmit={this.onSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Register</h1>
          <div className="form-group">
            <label htmlFor="name">
              First Name
              <input
                type="text"
                className="form-control"
                name="firstname"
                placeholder="Enter your first name"
                value={firstname}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="name">
              Last Name
              <input
                type="text"
                className="form-control"
                name="lastname"
                placeholder="Enter your last name"
                value={lastname}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="username">
              Username
              <input
                type="email"
                className="form-control"
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.onChange}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            Register!
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
