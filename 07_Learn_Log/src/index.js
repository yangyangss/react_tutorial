import ReactDOM from 'react-dom/client';

import './index.css'

//创建一个React元素
const App = <div className="logs">
    <div className="item">
        <div className="date">
            <div className="month">四月</div>
            <div className="day">19</div>
        </div>
        <div className="content">
            <h2 className="desc">Learning React</h2>
            <h2 className="time">40 mins</h2>
        </div>
    </div>
    
</div>;

// 获取根元素
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(App);
