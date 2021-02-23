import React, { useState } from 'react';
import axios from 'axios';
import ShowWinner from './ShowWinner';

function ShowEvent(props) {
    const [event_winner, setEventRewards] = useState({});
    const [found, setFound] = useState(false);
    const title = props.title;
    const data = props.data;
    var tHead = [];
    var tableData;

    function handleParticipate(e) {
        const id = e.target.value;

        axios.post("http://localhost:3001/participates", {
            id: id
        },
        { withCredentials: true}
        ).then(response => {
            if(response.data.status === "already_participated") {
                alert("Already Participated");
            } else if (response.data.status === "no_ticket_left") {
                alert("You have 0 ticket left")
            }
            else {
                alert("Participation Success");
            }
        }).catch(error => {
            console.log("participation error", error);
        })
        e.preventDefault();
    }

    function handleReward(e) {
        const event_id = e.target.value;

        axios.get("http://localhost:3001/rewards", {
                params: {
                    event_id: event_id
                }
            },
            { withCredentials: true })
            .then(response => {
                const data = response.data;
                if(data.found) {
                    setEventRewards([data.event_winner]);
                    setFound(data.found);
                } else {
                    alert("No winners found!")
                }
            })
            .catch(error => {
                console.log("reward fetch error", error);
            })
        e.preventDefault();
    }

    if(title === "Active Events"){
        tHead = ["Event Name", "Winners", "Time Left (days)", "Participate", "Rewards"]
        tableData = data.map((row, index) => {
            return(
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.winner}</td>
                    <td>{row.day}</td>
                    <td>
                        <button value={row.id} onClick={handleParticipate}>Participate</button>
                    </td>
                    <td>
                        <button value={row.id} onClick={handleReward}>Reward</button>
                    </td>
                </tr>
            )
        })
    }

    if(title === "Upcoming Events"){
        tHead = ["Event Name", "Winners", "Active On", "Rewards"]
        tableData = data.map((row, index) => {
            return(
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.winner}</td>
                    <td>{row.startDate}</td>
                    <td>
                        <button value={row.id} onClick={handleReward}>Reward</button>
                    </td>
                </tr>
            )
        })
    }

    if(title === "Finished Events"){
        tHead = ["Event Name", "Winners", "Reward List"]
        tableData = data.map((row, index) => {
            return(
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.winner}</td>
                    <td>
                        <button value={row.id} onClick={handleReward}>Show List</button>
                    </td>
                </tr>
            )
        })
    }

    const tableHead = tHead.map((index) => {
        return(
            <th key={index}>
                {index.toUpperCase()}
            </th>
        )
    })

    return(
        <div>
            <h2 id='title'>{title}</h2>
            <table id='students'>
                <thead>
                    <tr>{tableHead}</tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
            {found && <ShowWinner data={event_winner} />}
        </div>
    )
}

export default ShowEvent;