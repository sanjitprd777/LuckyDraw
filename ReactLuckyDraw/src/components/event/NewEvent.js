import React, { Component } from 'react';
import axios from 'axios';

export default class NewEvent extends Component {
    constructor(){
        super();

        this.state = {
            name: "",
            startDate: "",
            day: "",
            winner: "",
            active: "",
            finished: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value === ""? "" : e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
        })
    }

    handleSubmit(e) {
        const {
            name,
            startDate,
            day,
            winner,
            active,
            finished
        } = this.state;

        axios.post("http://localhost:3001/events", {
            name: name,
            startDate: startDate,
            day: day,
            winner: winner,
            active: active,
            finished: finished
        },
        ).then(response => {
            console.log("Event add successful");
        }).catch(error => {
            console.log("event add error", error);
        })

        e.preventDefault();
    }


    render(){
        return (
            <div>
                <form className="event" onSubmit={this.handleSubmit}>
                    <label>
                        Name of event
                        <input type="string" name="name" placeholder="Event Number" value={this.state.name} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Start Date
                        <input type="date" name="startDate" placeholder="Start Date" value={this.state.startDate} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Days to finish
                        <input type="number" min="1" name="day" placeholder="Days to finish" value={this.state.day} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Number of winners
                        <input type="number" min="1" name="winner" placeholder="Number of Winners" value={this.state.winner} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Event is active
                        <input type="number" min="0" max="1" name="active" value={this.state.active} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Event is finished
                        <input type="number" min="0" max="1" name="finished" value={this.state.finished} onChange={this.handleChange} required />
                    </label>
                    <button type="submit">AddEvent</button>
                </form>
            </div>
        )
    }
}