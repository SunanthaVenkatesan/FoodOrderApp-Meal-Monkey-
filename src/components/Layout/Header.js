import React,{Fragment} from "react";
import classes  from './Header.module.css'
import mealsImage from '../../assets/foodimage.jpeg'
import HeaderCartButton from "./HeaderCartButton";

const Header=(props)=>{
    return(
    
        <Fragment>
            <header className={classes.header}>
                <h1>Meal Monkey</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Food that makes you say wow!!"/>
            </div>
        </Fragment>
        
    )
}
export default Header