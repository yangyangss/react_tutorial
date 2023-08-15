import './App.css';
import {useRef, useState} from "react";

const App = () => {

    /**
     * 在React 中， 当组件渲染完毕，再修改组件中的变量，不会使组件重新渲染
     * 需要一个特殊的变量，当这个变量被修改时，组件就会重新渲染
     * 就是 State, State 对当前组件，其他组件无法访问
     * State 相当于一个变量，只是这个变量在react里进行了注册，react会监控这个变量
     * 
     * import {useState} from "react";
     * 需要一个值作为参数，这个值就是state的初始值
     * 该函数会返回一个数组
     * 数组中第一个元素，是初始值
     *  - 初始值只用来显示数据， 直接修改不会触发组件重新渲染
     * 数组中第二个元素，是一个函数. 通常会命名为setxxx
     *  - 这个函数主要用来修改state, 调用修改state 然后组件会被重新渲染
     *      - 并且使用函数的值来来更改值
     * 
     */

    const result = useState(1);
    console.log(result)

    // h1Ref 是一个container, 所以可以用h1Ref.current 来获得想要获取的的element DOM.
    const h1Ref = useRef();

    const clickHandler = () =>{
        console.log(h1Ref);
    };



    return <div className={'app'} ref={h1Ref}>
        <h1 id='header'>this is title</h1>
        <button onClick={clickHandler}>1</button>
        <button>2</button>
         </div>
};

export default App;