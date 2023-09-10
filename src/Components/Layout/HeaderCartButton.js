
import { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../assets/store/cart-context";
const HeaderCartButton = (props) => {

    const cartCtx =  useContext(CartContext)

    const[btnISHighLighted,setBTnIsHighLighted]=useState(false)

    const{items} = cartCtx

    useEffect(() => {

        if(items.length ===0)
        {
            return;
        }

        setBTnIsHighLighted(true)

        setTimeout(() => {
            setBTnIsHighLighted(false)
        },300)

    },[items])

    const numberOfCartItems =cartCtx.items.reduce((curNumber,item) => {
        return Number(Number(curNumber)+ Number(item.amount))
    },0)
 
    const btnClasses = `${classes.button} ${btnISHighLighted ?classes.bump: ''}`

return <button className={btnClasses} onClick={props.showCart}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOfCartItems}</span>
</button>


}

export default HeaderCartButton;
