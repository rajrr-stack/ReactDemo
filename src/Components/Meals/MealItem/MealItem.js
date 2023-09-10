import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../assets/store/cart-context";

const MealItem = (props) => {
	const price = `$${props.meals.price}`;
	const cartCtx =  useContext(CartContext);

	const addToCartHandlerFunction = (numberOfItem) => {
		cartCtx.addItem ({
			id:props.meals.id,
			name: props.meals.name,
			amount : numberOfItem,
			price: props.meals.price
		})

	}
	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.meals.name}</h3>
				<div className={classes.description}>{props.meals.description}</div>
				<div className={classes.price}>{price}</div>
			</div>

			<div>
				<MealItemForm  onAddToCart = {addToCartHandlerFunction}></MealItemForm>
			</div>
		</li>
	);
};

export default MealItem;
