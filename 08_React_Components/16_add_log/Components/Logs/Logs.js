import LogItem from "./LogItem/LogItem";
import Card from "../UI/Card/Card"

import './Logs.css'


const Logs = (props) => {

    /*
        logsData 用来存储学习的日志，
        这个数据出了当前组件，logsform 也需要
        当遇到一个数据需要别多个组件使用时，可以把数据放入到这些组件的共同祖先元素中
        
        state 的提升
    */

  

 // map means - 根据一个已有数组生成一个新数组
                // 如果元素的位置不会变化，那么可以用index 做为key value
                //logsData.map((item, index) => <LogItem key={index} date={item.date} desc={item.desc} time={item.time}/>)

                //logsData.map(item => <LogItem {...item} />)

                // 如果元素的位置会变化, 要用元素里的id
    const lonItemDate =  props.logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time}/>);
    return <Card className="logs">
            {/* <LogItem test="123" hello="{'name':'hello', age:10}" fn={()=>{console.log('hello, world')}} /> */}
            {
                lonItemDate
            }         
         </Card>
};

export default Logs;