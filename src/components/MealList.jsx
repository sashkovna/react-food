import React from 'react';
import MealItem from "./MealItem";

const MealList = ({meals}) => {
    return (
        <div className="catalog">
            {meals.map(meal =>
                <MealItem key={meal.idMeal} {...meal}/>
            )}
        </div>
    );
};

export default MealList;