import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../error-page";
import About from "../About/About";
import Categories from "../Categories/Categories";
import CategoryDetails from "../CategoryDetails/CategoryDetails";
import Home from "../Home/Home";
import MealDetails from "../MealDetails/MealDetails";
import Meals from "../Meals/Meals";
import Root from "../Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        // all meals link for this api is not available so using only all meals by first letter C
        path: "meals",
        loader: async () => {
          return fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
          );
        },
        element: <Meals></Meals>,
      },
      {
        path: "meal/:mealId",
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
          );
        },
        element: <MealDetails></MealDetails>,
      },
      {
        path: "categories",
        loader: async () => {
          return fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
          );
        },
        element: <Categories></Categories>,
      },
      {
        path: "category/:catName",
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.catName}`
          );
        },
        element: <CategoryDetails></CategoryDetails>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);
