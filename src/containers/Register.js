import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import firebase from "../firebase";

class SignUp extends React.Component {
    state = {
        emailId: "",
        password: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        try {
            const { emailId, password } = this.state;
            if (emailId && password) {
                let data = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(emailId, password);
                // data.user.updateProfile({
                //     displayName: name
                // });
                if (data) {
                    alert("Registered Successfully");
                    this.props.history.replace("/");
                }
            }
        } catch (error) {
            alert(error.message);
            console.log(error);
        }
    };
    render() {
        return (
            <div>
                <form onClick={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input
                                type="email"
                                name="emailId"
                                className="form-control"
                                placeholder="Email"
                                value={this.state.emailId}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                    <Link to="/" className="ml-2">
                        Login
                    </Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
