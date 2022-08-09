import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Tandoori Chicken",
    description:
      "Chicken legs marinated in homemade fresh yogurt and freshly ground herbs,tenderly barbecued in our clay oven.",
    price: 322,
  },
  {
    id: "m2",
    name: "Chicken Tikka Masala",
    description:
      "Tender pieces of chicken tikka cooked with garlic, ginger, tomatoes and herbs",
    price: 216,
  },
  {
    id: "m3",
    name: "Malai Kofta",
    description:
      "Fresh vegetables and cheese croquettes simmered in a mild cream sauce.",
    price: 180,
  },
  {
    id: "m4",
    name: "Chicken Biryani",
    description: "Basmati rice cooked with boneless chicken",
    price: 250,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
