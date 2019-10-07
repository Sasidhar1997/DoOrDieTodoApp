import React from "react";
import logo from "../assets/icons/icon.svg";
import moment from "moment";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { connect } from "react-redux";

class Header extends React.Component {
    state = {
        currentTime: moment().format("DD MMM YYYY, h:mm:ss A")
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentTime: moment().format("DD MMM YYYY, h:mm:ss A")
            });
        }, 1000);
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark header mg-top">
                <Link className="navbar-brand" to="/" replace>
                    <img
                        src={logo}
                        width={30}
                        height={30}
                        className="d-inline-block align-top"
                        alt=""
                    />
                    &nbsp; TODO - Every TODO has A story !!
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li
                            className={`nav-item ${
                                window.location.pathname === "/" ? "active" : ""
                            }`}
                        >
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li
                            className={`nav-item ${
                                window.location.pathname === "/aboutus"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link className="nav-link" to="/aboutus">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                {this.props.isLoggedIn && (
                    <div className="dropdown">
                        <span
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style={{
                                color: "white",
                                marginRight: 20,
                                cursor: "pointer"
                            }}
                        >
                            {this.props.displayName}
                        </span>
                        <div
                            className="dropdown-item"
                            aria-labelledby="dropdownMenuLink"
                        >
                            <span
                                onClick={() => firebase.auth().signOut()}
                                style={{
                                    cursor: "pointer",
                                    color: "white",
                                    marginBottom: 15,
                                    position: "relative"
                                }}
                                className="dropdown-item"
                            >
                                Logout
                            </span>
                        </div>
                    </div>
                )}
                <span style={{ color: "white" }}>{this.state.currentTime}</span>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    displayName: state.auth.userDetails.displayName,
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(
    mapStateToProps,
    null
)(Header);
