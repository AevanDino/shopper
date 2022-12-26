import React from 'react';
import "./TopBar.css"

export function TopBar(props) {

    return (
        <div className='flexbox'>
            <input className='box1' id='inputfield' type='text' onChange={props.children.onChange}/>
            <button className='box2' type="submit" onClick={props.children.onClick}>Create Task</button>
        </div>
    );

}