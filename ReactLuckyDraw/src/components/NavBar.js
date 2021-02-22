import React, { Component } from "react";
import axios from 'axios';

export default class NavBar extends Component {

    constructor(props) {
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        axios.delete("http://localhost:3001/logout", { withCredentials: true })
        .then(response => {
            this.props.passLogout();
        })
        .catch(error => {
            console.log("logout error", error);
        })
    }

    render(){
        return (
            <div className="navBar">
                <span className="name">
                    Signed in as: {this.props.data.user.email}
                </span>
                <span>
                    |
                </span>
                <span className="ticket">
                    Tickets left: {this.props.data.user.ticket}
                </span>
                <button className="logout" onClick={() => this.handleLogoutClick()}>Logout</button>
            </div>
        )
    }
}