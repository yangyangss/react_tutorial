import BackDrop from "../BackDrop/BackDrop.js";
import Card from "../Card/Card";
import "./ConfirmModal.css"

const ConfirmModal = props =>{
    return <BackDrop> 
        <Card className="confimModal">
            <div className="confirmText">
                <p>Please confirm it !</p>
            </div>
            
            <div className="confirmButton">
                <button className="okButton" onClick={props.onOk}>Confirm</button>
                <button onClick={props.onCancel}>Cancel</button>
            </div>
        </Card>
    </BackDrop>

    
};

export default ConfirmModal;