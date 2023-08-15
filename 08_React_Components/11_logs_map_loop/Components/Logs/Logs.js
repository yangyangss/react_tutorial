import LogItem from "./LogItem/LogItem";
import './Logs.css'

const Logs = () => {

    const logsData = [
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
    ]

 // map means - 根据一个已有数组生成一个新数组
                // 如果元素的位置不会变化，那么可以用index 做为key value
                //logsData.map((item, index) => <LogItem key={index} date={item.date} desc={item.desc} time={item.time}/>)

                //logsData.map(item => <LogItem {...item} />)

                // 如果元素的位置会变化, 要用元素里的id
    const lonItemDate =  logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time}/>);
    return <div className="Log">
            {/* <LogItem test="123" hello="{'name':'hello', age:10}" fn={()=>{console.log('hello, world')}} /> */}
            {
                lonItemDate
            }        
    
         </div>
};

export default Logs;