import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setButtonIsHighlighted] = useState(false);

 
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  //reduce is a method that allows us to transform an array into single data and as if we select 3 chicken briyani and the cart should be updated one time for the chicken briani and the total should be calculated for 3 counts ,so reduce is used which converts the 3 counts array into single item
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`; //empty string is given at the end as for the else condition no extra css needs to be added
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer=setTimeout(()=>{
        //this will highlight the bump for the cart button everytime we add items
        setButtonIsHighlighted(false)
    },300)
    //using const to store and cleanup timers
    return()=>{
        clearTimeout(timer)
    }
  }, [items]); //here for dependency cartCtx cannot be directly added as it contains other properties apart from item dependency for button,so object destructuring is used to pull out the items from cartCtx

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
