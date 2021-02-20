import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        const {
            email,
            password,
            password_confirmation
        } = this.state;

        axios.post("http://localhost:3001/registrations", {
            user: {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        },
        { withCredentials: true }
        ).then(response => {
            if(response.data.status === 'created') {
                this.props.handleSuccessfulAuth(response.data);
            }
        }).catch(error => {
            console.log("registration error", error);
        });

        e.preventDefault();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" placeholder="something@domain.com" value={this.state.email} onChange={this.handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
                    <input type="password" name="password_confirmation" placeholder="Password Confirmation" value={this.state.password_confirmation} onChange={this.handleChange} required />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}