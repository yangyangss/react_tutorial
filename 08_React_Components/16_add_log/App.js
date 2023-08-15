import Logs from "./Components/Logs/Logs";
import Card from "./Components/UI/Card/Card"
import LogsFrom from "./Components/LogsForm/LogsForm";
import {useState} from "react";

import "./App.css"

const App = () => {   

    //数据
    const [logsData, setLogsData] = useState([
        {
            id: 1,
            date: new Date(2023, 1, 22, 17, 30, 15),
            desc: 'learning superset',
            time: 30
        },
        {
            id: 2,
            date: new Date(2023, 2, 23, 12, 22, 15),
            desc: 'learning nodejs',
            time: 20
        },
        {
            id: 3,
            date: new Date(2023, 3, 10, 9, 5, 15),
            desc: 'learning golang',
            time: 40
        }
    ]);

    const saveLogHandler = (newLog) => {
        //console.log(newLog);
        newLog.id = Date.now() + ''; // 从Date format 换成了 string;

        setLogsData([...logsData, newLog]); //展开数据集logsData, 在最后面加上newLog
       // setLogsData([newLog, ...logsData,]); //展开数据集logsData, 在最前面加上newLog


    }; 

    return <div className="app">
            <LogsFrom onSaveLog = {saveLogHandler} />
            <Logs logsData={logsData}/>
         </div>;

};

export default App;