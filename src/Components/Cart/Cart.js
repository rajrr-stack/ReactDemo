import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../assets/store/cart-context";
import CartItem from '../Cart/CartItem'

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const cartItemRemoveHandler = (id) => {
cartCtx.removeItem(id)
	}

	const cartItemAddhandler = (item) => {
		cartCtx.addItem({...item,amount:1})
	}

	// const cartItems = [{ id: 1, name: "sushi", amount: 2, price: 12.99 }].map(
	// 	(item) => <li>{item.name} {item.price}</li>
	// );

	const cartItems = cartCtx.items.map((item) => (
		<CartItem
			key={item.id}
			amount={item.amount}
			price={item.price}
			name={item.name}
			onRemove={cartItemRemoveHandler.bind(null, item.id)}
			onAdd = {cartItemAddhandler.bind(null,item)}
		/>
	));
	const totalAmount = `$${cartCtx.totalAmount}`;
	const hasItems = cartCtx.items.length > 0;
	return (
		<Modal closeCart={props.closeCart}>
			<ul className={classes["cart-items"]}>{cartItems}</ul>
			{/* total amount */}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{/* close and order button */}
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.closeCart}>
					{" "}
					Close{" "}
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
