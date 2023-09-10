import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
	const amountInputRef = useRef();

	const [amountIsValid, setAmountIsValid] = useState(true);

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		const eneteredAmountNumber = +enteredAmount;
		if (
			enteredAmount.trim().length === 0 ||
			eneteredAmountNumber < 1 ||
			eneteredAmountNumber > 5
		) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(eneteredAmountNumber);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				input={{
					label: "amount",
					id: "amount_" + props.id,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>

			{/* when we will click on add item it should get added to the cart */}

			<button>+ Add</button>
			{!amountIsValid && <p>please input a correct amount</p>}
		</form>
	);
};

export default MealItemForm;
