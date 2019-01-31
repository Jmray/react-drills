import React from 'react';

export default function Todo(props){
    let taskList = props.taskList.map(task => <h4>{task}</h4>);
    return(
        <div>
            {taskList}
        </div>
    )
}