import Logs from "./Components/Logs/Logs";
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
        ,
        {
            id: 4,
            date: new Date(2021, 3, 10, 9, 5, 15),
            desc: 'learning java',
            time: 10
        }
        ,
        {
            id: 5,
            date: new Date(2022, 3, 10, 9, 5, 15),
            desc: 'learning C#',
            time: 20
        }
    ]);

    const saveLogHandler = (newLog) => {
        //console.log(newLog);
        newLog.id = Date.now() + ''; // 从Date format 换成了 string;

        setLogsData([...logsData, newLog]); //展开数据集logsData, 在最后面加上newLog
       // setLogsData([newLog, ...logsData,]); //展开数据集logsData, 在最前面加上newLog


    }; 

    const delLogByIndex = (index) => {
        
        setLogsData(prevState => {
            const newLog = [...prevState];
            newLog.splice(index, 1);
            return newLog;
        })
        
        //logsData.splice(index, 1); // 破坏现有结构，要先复制
    }

    const delLogById = (id) => {
        
        setLogsData(prevState => {
            const newLog = prevState.filter(item => item.id !== id);
            return newLog;
        })
        
        //logsData.splice(index, 1); // 破坏现有结构，要先复制
    }

    return <div className="app">
            <LogsFrom onSaveLog = {saveLogHandler} />
            <Logs logsData={logsData} onDelLog={delLogById} />
         </div>;

};

export default App;