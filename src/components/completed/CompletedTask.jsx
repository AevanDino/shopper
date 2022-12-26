import React from 'react';
import "./CompletedTask.css";

export function CompletedTask(props) {
    const deleteTask = () => {
        props.children.removeTask(props.children.task.id);
    }

    return (
        <div className="completedTaskContainer" key={props.children.task.id}>
            <div className='box1'>
                <h5><s>{props.children.task.text}</s></h5>
            </div>
            <button className='box2' onClick={deleteTask}>
                <img width={25} alt="Delete" src="https://icons-for-free.com/download-icon-delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588_512.png" />
            </button>
        </div>
    );
}