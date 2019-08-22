import React from "react";
import logo from "../assets/icons/list.svg";
import moment from "moment";

class Header extends React.Component {
    state = {
        currentTime: moment().format("DD MMM YYYY, h:mm:ss A")
    };
    componentDidMount() {
        setInterval(() => {
            console.log(this);
            this.setState({
                currentTime: moment().format("DD MMM YYYY, h:mm:ss A")
            });
        }, 1000);
        console.log("currentTime");
    }
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark header">
                <span className="navbar-brand">
                    <img
                        src={logo}
                        width={30}
                        height={30}
                        className="d-inline-block align-top"
                        alt=""
                    />
                    &nbsp; DoOrDie
                </span>
                <span style={{ color: "white" }}>
                    {this.state.currentTime}
                    {/* {moment().format("DD MMM YYYY, h:mm:ss A")} */}
                </span>
            </nav>
        );
    }
}

export default Header;
