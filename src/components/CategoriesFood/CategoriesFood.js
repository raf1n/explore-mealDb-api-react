import React from "react";
import { useNavigate } from "react-router-dom";

const CategoriesFood = ({ meal }) => {
  const { strMealThumb, strMeal, idMeal } = meal;
  const navigate = useNavigate();
  const navigateHandle = () => {
    navigate(`/meal/${idMeal}`);
  };
  return (
    <div>
      <img
        className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
        src={strMealThumb}
        alt=""
      />
      <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
        {strMeal}
      </h5>
      <div className="mt-4">
        <button
          onClick={navigateHandle}
          className="h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-900 focus:shadow-outline focus:outline-none"
        >
          Meal Details
        </button>
      </div>
    </div>
  );
};

export default CategoriesFood;
