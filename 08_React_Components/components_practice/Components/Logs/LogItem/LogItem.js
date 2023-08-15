import React from 'react';
import MyDate from './MyDate/MyDate';

import './LogItem.css'

const LogItem = () => {
    return <div className='item'>
            <MyDate />
            <div className="content">
                <h2 className="desc">Learning React</h2>
                <h2 className="time">40 mins</h2>
            </div>
         </div>
};

export default LogItem;