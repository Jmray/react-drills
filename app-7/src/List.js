import React from 'react';
import Todo from './Todo';

export default function List(props){
    let displayArr = props.tasks.map((item, index) => {
        return(
            <Todo key={index} listItem={item}/>
        )
    })
    return(
        <div>
            {displayArr}
        </div>

    )
}