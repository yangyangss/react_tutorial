import React from 'react';
import MyDate from './MyDate/MyDate';

import './LogItem.css'

const LogItem = (props) => {

    //在函数组件中， 属性就相当于函数的参数， 可以通过参数来访问
    //可以在函数组件的形参重定义一个props, props 指向的是一个对象
    // 它包含了父组件中传递的所有参数
    // 只支持属性，父传子
    //console.log(props.date);
    return <div className='item'>
            <MyDate date={props.date} />
            
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <h2 className="time">{props.time} mins</h2>
            </div>
         </div>
};

export default LogItem;