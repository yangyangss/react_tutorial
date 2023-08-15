import Backdrop from "../BackDrop/Backdrop.js";
import Card from "../Card/Card";
import "./ConfirmModal.css"

const ConfirmModal = props =>{
    return <Backdrop> 
        <Card className="confimModal">
            <div className="confirmText">
                <p>Please confirm it !</p>
            </div>
            
            <div className="confirmButton">
                <button className="okButton" onClick={props.onOk}>Confirm</button>
                <button onClick={props.onCancel}>Cancel</button>
            </div>
        </Card>
    </Backdrop>

    
};

export default ConfirmModal;