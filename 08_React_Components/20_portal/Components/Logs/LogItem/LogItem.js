import React from 'react';
import MyDate from './MyDate/MyDate';
import Card from '../../UI/Card/Card'

import './LogItem.css'
import ConfirmModal from '../../UI/ConfirmModel/ConfirmModal';

import {useState} from "react";

const LogItem = (props) => {

    // 添加一个state， 记录是否显示确认窗口

    const [showConfirm,  setShowConfirm] = useState(false);

    const deleteItemHandler = () =>{        
        // const isDeleted = window.confirm('Confirm delete it ? ');
        // if(isDeleted){
        //     props.onDelLog();
        // };
        setShowConfirm(true);       
    };
    const cancelHandler = () => {
        setShowConfirm(false);
    };

    const okHanlder = () => {
        props.onDelLog();
    };

// props is ready only
    return <Card className='item'>

            {showConfirm && <ConfirmModal  
                confirmText = "This cannot restore, please confirm it !"
                onCancel = {cancelHandler}
                onOk = {okHanlder}
            />}
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