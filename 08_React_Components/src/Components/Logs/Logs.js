import LogItem from "./LogItem/LogItem";
import Card from "../UI/Card/Card"
import LogFilter from "./LogFilter/LogFilter";
import {useState} from "react";

import './Logs.css'


const Logs = (props) => {

    const [year, setYear] = useState(2022);
    console.log('default year value ' + year)
    let filterData = props.logsData.filter(item => item.date.getFullYear() === year);

    const changeYearHandler = (year) => {
        setYear(year);
    }

    let logItemData =  filterData.map((item, index) => <LogItem                                         
                                            onDelLog={() => props.onDelLog(item.id)}
                                            key={item.id} 
                                            date={item.date} 
                                            desc={item.desc} 
                                            time={item.time}/>);
    
    if(logItemData.length === 0)
    {
        logItemData = <p className="no-logs">No logs!</p>;
    }
   
    return <Card className="logs">
            <LogFilter  
            current={year}
            onYearChange={changeYearHandler}
            />
            {/* <LogItem test="123" hello="{'name':'hello', age:10}" fn={()=>{console.log('hello, world')}} /> */}
            {
                logItemData
            }         
         </Card>
};

export default Logs;