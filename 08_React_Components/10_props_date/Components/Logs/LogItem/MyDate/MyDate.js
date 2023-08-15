import React from 'react';

import './MyDate.css'


// JSX 中要保持整洁
const MyDate = (props) => {
    console.log('this is MyDate.js' + props.date)

    const mth = props.date.toLocaleString('en-SG', {month:'short'})
    const d = props.date.getDate()
    
    return  <div className="date">
                <div className="month">{mth}</div>                
                <div className="day">{d}</div>
            </div>        
};

export default MyDate;