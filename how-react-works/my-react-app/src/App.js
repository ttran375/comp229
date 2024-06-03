import React from "react";
import ReactDOM from "react-dom";

const items = [
  "1 cup unsalted butter",
  "1 cup crunchy peanut butter",
  "1 cup brown sugar",
  "1 cup white sugar",
  "2 eggs",
  "2.5 cups all purpose flour",
  "1 teaspoon baking powder",
  "0.5 teaspoon salt",
];
function IngredientsList() {
  return React.createElement(
    "ul",
    { className: "ingredients" },
    items.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient)
    )
  );
}

ReactDOM.render(
  React.createElement(IngredientsList, { items }, null),
  document.getElementById("root")
);

export default IngredientsList;
