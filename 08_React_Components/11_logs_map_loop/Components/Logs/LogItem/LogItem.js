import React from 'react';
import MyDate from './MyDate/MyDate';

import './LogItem.css'

const LogItem = (props) => {

// props is ready only
    return <div className='item'>
            <MyDate date={props.date} />
            
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <h2 className="time">{props.time} mins</h2>
            </div>
         </div>
};

export default LogItem;