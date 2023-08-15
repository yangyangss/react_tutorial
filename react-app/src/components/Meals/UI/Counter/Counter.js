import React, { useContext } from 'react';
import classes from './Counter.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../../store/cart-context';

// npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/react-fontawesome@latest
const Conuter = (props) => {

    // 用钩子函数把context 钩出来
    const ctx = useContext(CartContext);
    const addButtonHandler = () => {
        ctx.addItem(props.meal);
    };

    const removeButtonHandler = () => {
        ctx.removeItem(props.meal);
    };
    return (
        <div className={classes.Counter}> 
            {   
                (props.meal.amount && props.meal.amount !== 0) ? (
                    <>
                    <button 
                        onClick={removeButtonHandler}
                        className={classes.Sub}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button> 
                    <span className={classes.count}>{props.meal.amount}</span>
                    </>
                ) : null
            }             
            <button 
            onClick={addButtonHandler}
            className={classes.Add}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
};

export default Conuter;