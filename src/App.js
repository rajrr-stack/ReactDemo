import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./assets/store/cartProvider";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};

	return (
		<CartProvider>
			{cartIsShown && <Cart closeCart={hideCartHandler} />}
			<Header showCart={showCartHandler}></Header>
			<main>
				<Meals></Meals>
			</main>
		</CartProvider>
	);
}

export default App;
