import Logs from "./Components/Logs/Logs";
import Card from "./Components/UI/Card/Card"
import LogsFrom from "./Components/LogsForm/LogsForm";

import "./App.css"

const App = () => {   
    return <div className="app">
            <LogsFrom />
            <Logs/>
         </div>;

};

export default App;