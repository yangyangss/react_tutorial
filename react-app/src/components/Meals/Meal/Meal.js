import React from "react";
import classes from "./Meal.module.css"
import Counter from "../UI/Counter/Counter"
// food components
const Meal = (props) => {
    return(
        <div className={classes.Meal}>
           <div className={classes.ImgBox}>
                <img alt='burger' src={props.meal.img} />
           </ div>
           <div>
                <h2 className={classes.title}>{props.meal.title}</h2>
                <p className={classes.desc}>{props.meal.desc}</p>
                <div className={classes.PriceWrapper}>
                    <span className={classes.Price}>{props.meal.price}</span>
                    <Counter meal={props.meal}/>
                </div>
           </div>
        </div>
    )
};

export default Meal;