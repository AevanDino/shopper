import React from 'react';
import "./TaskList.css";


export function TaskList(props) {
    return <div className='taskListContainer'  >
        {props.children}
    </div>
}