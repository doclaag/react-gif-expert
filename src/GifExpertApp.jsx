import { useState } from "react";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Eren Jaeger"]);

  const onAddCategory = (newCategory) => {
    if (
      !categories.findIndex(
        (category) => category.toLowerCase() === newCategory.toLowerCase()
      )
    )
      return;

    // console.log(newCategory)
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1 className="text-white text-2xl font-bold mb-4">GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
