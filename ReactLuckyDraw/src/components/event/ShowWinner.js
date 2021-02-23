import React from 'react';

function ShowWinner(props) {
    const prevData = props.data[0];
    const data = prevData.event_rewards;
    var title = "Winners List for event " + prevData.event_name;
    var tHead;
    var tableData;

    if(data[0].size === 1){
        title = "Winners List for event: " + prevData.event_name;
        tHead = ["User Email", "Reward Won"];
        tableData = data.map((row, index) => {
            return(
                <tr key={index}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                </tr>
            )
        })
    
    }
    else{
        title = "Reward List for event: " + prevData.event_name;
        tHead = ["Reward List"];
        tableData = data.map((row, index) => {
            return(
                <tr key={index}>
                    <td>{row[0]}</td>
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
        </div>
    )
}

export default ShowWinner;