import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Categories = () => {
  const categoriesData = useLoaderData();
  const categories = categoriesData.categories;
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            There is art in Cooking
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
        {categories.map((category) => (
          <Category key={category.idCategory} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
