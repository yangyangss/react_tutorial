import React from 'react';
import MyDate from './MyDate/MyDate';
import Card from '../../UI/Card/Card'

import './LogItem.css'

const LogItem = (props) => {

    const deleteItemHandler = () =>{        
        const isDeleted = window.confirm('Confirm delete it ? ');
        if(isDeleted){
            props.onDelLog();
        };
    };

// props is ready only
    return <Card className='item'>
            <MyDate date={props.date} />
            
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <h2 className="time">{props.time} mins</h2>
            </div>

            <div>
                <div className='delete' onClick={deleteItemHandler}>x</div>
            </div>
         </Card>
};

export default LogItem;