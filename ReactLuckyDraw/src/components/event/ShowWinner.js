import React from 'react';

function ShowWinner(props) {
    const prevData = props.data[0];
    const title = "Winners List for event " + prevData.event_name;
    const tHead = ["User Email", "Reward Won"];
    const data = prevData.event_rewards;
    const tableData = data.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
            </tr>
        )
    })

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
        </div>
    )
}

export default ShowWinner;