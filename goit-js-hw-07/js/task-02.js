const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListRef = document.querySelector("#ingredients");

const makeListRef = (arry) => {
  return arry.map((element) => {
    const itemListRef = document.createElement("li");
    itemListRef.textContent = element;
    return itemListRef;
  });
};

const items = makeListRef(ingredients);
ingredientsListRef.append(...items);
