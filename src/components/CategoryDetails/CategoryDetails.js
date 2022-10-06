import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoriesFood from "../CategoriesFood/CategoriesFood";

const CategoryDetails = () => {
  const categoryData = useLoaderData();
  const { meals } = categoryData;

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
        {meals.map((meal) => (
          <CategoriesFood key={meal.idMeal} meal={meal}></CategoriesFood>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
