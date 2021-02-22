import React, { Component } from "react";
import NavBar from "./NavBar";
import '../style/dashboard.scss';
import axios from "axios";
import ShowEvent from './event/ShowEvent';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ticket: "",
            active: [],
            upcoming: [],
            finished: []
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

        axios.put("http://localhost:3001/update_ticket", {
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
        this.props.history.push("/dashboard");
    }

    passLogout() {
        this.props.handleLogout();
        this.props.history.push("/");
    }

    getEvents() {
        axios.get("http://localhost:3001/events", { withCredentials: true })
            .then(response => {
                const data = response.data;
                this.setState({
                    active: data.active,
                    upcoming: data.upcoming,
                    finished: data.finished
                })
            })
            .catch(error => {
                console.log("event fetch error", error);
            })
    }

    componentDidMount(){
        this.getEvents();
    }

    render(){
        return (
            <div>
                {
                    this.props.data.loggedInStatus === "LOGGED_IN" ? (
                        <div>
                            <NavBar passLogout={this.passLogout} data={this.props.data}/>
                            <h1>Dashboard</h1>
                            <form className="buyTicket" onSubmit={this.buyTicket}>
                                <input type="number" min="1" name="ticket" placeholder="Number of tickets" value={this.state.ticket} onChange={this.handleChange} required />
                                <button className="buy" type="submit">Buy</button>
                            </form>
                            <h1>Events List</h1>
                            <ShowEvent data={this.state.active} title="Active Events" />
                            <ShowEvent data={this.state.upcoming} title="Upcoming Events" />
                            <ShowEvent data={this.state.finished} title="Finished Events" />
                        </div>
                        
                    ) : (
                        <h1>Status: {this.props.data.loggedInStatus}</h1>
                    )
                }
            </div>
        )
    }
}