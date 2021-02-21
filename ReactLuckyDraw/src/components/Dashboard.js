import React, { Component } from "react";
import NavBar from "./NavBar";
import '../style/dashboard.scss';
import axios from "axios";

export default class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ticket: ""
        };

        this.passLogout = this.passLogout.bind(this);
        this.buyTicket = this.buyTicket.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value === ""? "": parseInt(e.target.value)
        })
    }

    buyTicket(e) {
        const {
            ticket
        } = this.state;

        axios.put("http://localhost:3001/update", {
            user: {
                ticket: ticket
            }
        },
        { withCredentials: true }
        ).then(response => {
            console.log(response);
        }).catch(error => {
            console.log("buy ticket error", error);
        })
    }

    passLogout() {
        this.props.handleLogout();
    }

    render(){
        return (
            <div>
                <NavBar passLogout={this.passLogout} data={this.props.data}/>
                <h1>Dashboard</h1>
                <h1>Status: {this.props.data.loggedInStatus}</h1>
                <form className="buyTicket" onSubmit={this.buyTicket}>
                    <input type="number" min="1" name="ticket" placeholder="Number of tickets" value={this.state.ticket} onChange={this.handleChange} required />
                    <button className="buy" type="submit">Buy</button>
                </form>
            </div>
        )
    }
}