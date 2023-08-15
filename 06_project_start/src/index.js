// 这个是js的入口文件 
// 引入 ReactDOM
// import ReactDOM from 'react-dom'; // 老版本没问题
import ReactDOM from 'react-dom/client'; // version 18 and above

//创建JSX
const App = <div>
    <h1>This is React Project</h1>
    <p>Finally got it !!</p>
</div>;

//获取根容器
const root = ReactDOM.createRoot(document.getElementById('root'));


//将App 渲染进根容器
root.render(App);