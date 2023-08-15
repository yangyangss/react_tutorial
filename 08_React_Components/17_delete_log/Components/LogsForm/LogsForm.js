import React from "react";
import Card from "../UI/Card/Card"
import {useState} from "react";

import "./LogsForm.css"

const LogsFrom = (props) => {

    // let inputDate = '';
    // let inputDesc = '';
    // let inputTime = 0 ;

    const [inputDate, setinputDate] = useState('');
    const [inputDesc, setinputDesc] = useState('');
    const [inputTime, setinputTime] = useState('');    

    const dateChangeHandler = (e) => {
        // 事件对象中保存了当前事件触发时所有的信息
        // console.log(e.target.value)
        setinputDate(e.target.value);

    };


    const timeChangeHandler = (e) => {
        // 事件对象中保存了当前事件触发时所有的信息
        // console.log(e.target.value)
        setinputTime(e.target.value);

    };

    const descChangeHandler = (e) => {
        // 事件对象中保存了当前事件触发时所有的信息
        // console.log(e.target.value)
        setinputDesc(e.target.value);

    };
//React 中，表单不用自行提交，应该通过React后台提交
    const formSubmitHandler = (e) =>{
        // 取消表单的默认提交行为
        e.preventDefault();

        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime
        };
        
        props.onSaveLog(newLog);

        // State和表单绑定 - 就是State 变化，表单一起变化
        // 反之， 表单发生变化，State 也开始变化
        // 我们称之为双向绑定
        // 这样一来，我们的表单成为了一个受控组件
        setinputDate('');
        setinputDesc('');
        setinputTime('');
        console.log(newLog)
        

    };

    return (
        <Card className="logs-form">
            <form onSubmit={formSubmitHandler}>
                <div className="form-item">
                    <label htmlFor="date">Date</label>
                    <input id="date" onChange={dateChangeHandler} value={inputDate} type="date"></input>
                </div>
                <div className="form-item">
                    <label htmlFor="desc">Content</label>
                    <input id="desc" onChange={descChangeHandler} value={inputDesc} type="text"></input>
                </div>
                <div className="form-item">
                    <label htmlFor="time">Time</label>
                    <input id="time" onChange={timeChangeHandler} value={inputTime}  type="number"></input>
                </div>
                <div className="form-btn">
                    <button>Add</button>
                </div>
            </form>
        </Card>
    );
};

export default LogsFrom;