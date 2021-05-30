const listRef = document.querySelector("#categories");
const categoriesRef = listRef.children;
console.log(`В списке ${categoriesRef.length} категории.`);

const makeArryRef = Array.from(categoriesRef);

const fun = () => {
  return makeArryRef.forEach((el) => {
    const titleRef = el.firstElementChild.textContent;
    const categoryRef = el.querySelector("ul");
    const countCategoryRef = categoryRef.childElementCount;
    return console.log(`Категория: ${titleRef}
Количество элементов: ${countCategoryRef}`);
  });
};

fun(makeArryRef);
