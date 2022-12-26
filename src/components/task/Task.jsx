import React from 'react';
import "./Task.css";

export function Task(props) {
    const deleteTask = () => {
        props.children.removeTask(props.children.task.id);
    }

    const completeTask = () => {
        props.children.complete(props.children.task.id);
    }
    
    return (
        <div className="taskContainer" key={props.children.task.id}>
            <div className='box1'>
                <h5>{props.children.task.text}</h5>
            </div>
            <div className='box2'>
                <button className='delete' onClick={deleteTask}>
                    <img width={25} alt="Delete" src="https://icons-for-free.com/download-icon-delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588_512.png" />
                </button>
                <button className='complete' onClick={completeTask}>
                    <img width={25} alt="Delete" src="https://www.freeiconspng.com/thumbs/checkmark-png/checkmark-png-5.png" />
                </button>
            </div>
        </div>
    );
}