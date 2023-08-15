import LogItem from "./LogItem/LogItem";
import './Logs.css'

const Logs = () => {
    return <div className="Log">
            {/* <LogItem test="123" hello="{'name':'hello', age:10}" fn={()=>{console.log('hello, world')}} /> */}

            <LogItem date={new Date(2021, 6, 22, 17, 30, 15)} desc={"learning front"} time={"50"} />
            <LogItem date={new Date(2021, 7, 11, 14, 20, 15)} desc={"learning front"} time={"50"} />

         </div>
};

export default Logs;