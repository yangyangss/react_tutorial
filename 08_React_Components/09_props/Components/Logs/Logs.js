import LogItem from "./LogItem/LogItem";
import './Logs.css'

const Logs = () => {
    return <div className="Log">
            {/* <LogItem test="123" hello="{'name':'hello', age:10}" fn={()=>{console.log('hello, world')}} /> */}

            <LogItem date={new Date()} desc={"learning front"} time={"50"} />
         </div>
};

export default Logs;