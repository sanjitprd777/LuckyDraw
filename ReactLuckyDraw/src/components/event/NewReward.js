import React, { Component } from 'react';
import axios from 'axios';

export default class NewReward extends Component {
    constructor(){
        super();

        this.state = {
            reward_name: "",
            event_id: "",
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
            reward_name,
            event_id
        } = this.state;

        axios.post("http://localhost:3001/rewards", {
            reward_name: reward_name,
            event_id: event_id
        },
        ).then(response => {
            console.log("Reward add successful");
        }).catch(error => {
            console.log("reward add error", error);
        })

        e.preventDefault();
    }

    render(){
        return (
            <div>
                <form className="event" onSubmit={this.handleSubmit}>
                    <label>
                        Id of event
                        <input type="number" name="event_id" placeholder="Event id" value={this.state.event_id} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Name of Reward
                        <input type="string" name="reward_name" placeholder="Reward name" value={this.state.reward_name} onChange={this.handleChange} required />
                    </label>
                    <button type="submit">Add Reward</button>
                </form>
            </div>
        )
    }
}