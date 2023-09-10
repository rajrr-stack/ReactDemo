import { useEffect, useState } from "react";
import classes from "../Meals/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
// const DUMMY_MEALS = [
// 	{
// 		id: "m1",
// 		name: "Sushi",
// 		description: "Finest fish and veggies",
// 		price: 22,
// 	},
// 	{
// 		id: "m2",
// 		name: "Schnitzel",
// 		description: "A german specialty!",
// 		price: 16,
// 	},
// 	{
// 		id: "m3",
// 		name: "Barbecue Burger",
// 		description: "American, raw, meaty",
// 		price: 12.99,
// 	},
// 	{
// 		id: "m4",
// 		name: "Green Bowl",
// 		description: "Healthy...and green...",
// 		price: 18.99,
// 	},
// ];
//normally we shouldny=t use async directly on use effect 
const AvailableMeals = () => {

	const [meals,setMeals] = useState([]);
	// useEffect(() => {
	// 	fetch("https://react-http-6b4a6.firebaseio.com/meals.json").then(() => {});
	// }, [])
	const [isLoading,setIsLoading] = useState(true)
	const[httpError,setHttpError] =  useState(null)



	//way to use async and await inside useEffect hook
	
		useEffect(() => {
			const fetchMeals = async () => {
			const response = 	await fetch("https://reactdummyproject-default-rtdb.firebaseio.com/meals.json");
			if(!response.ok){
				throw new Error('something went wrong')
				

			}
				const responseData = await response.json();

				const laodedMeals = [];
				//converting to array
				for(const key in responseData)
				{
					laodedMeals.push({
						id:key,
						name: responseData[key].name,
						description: responseData[key].description,
						price:  responseData[key].price,
					})
				}
				setMeals(laodedMeals)
				setIsLoading(false)
			}
			try{
			fetchMeals().catch(err=> {
				setIsLoading(false)
				setHttpError(err.message)
			})
			}
			catch(error){
				
			}
			
		}, []);
	


	const mealsList = meals.map((meals) => (
		<MealItem key={meals.id} id={meals.id} meals={meals} />
	));

	if(isLoading)
	{
		return(
			<div className={classes.alignCenter}>
		<div className={classes.loader}></div>
		</div>
		)
	}

	if(httpError)
	{
		return ( <p>{httpError}</p>)
	}
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
}

export default AvailableMeals
