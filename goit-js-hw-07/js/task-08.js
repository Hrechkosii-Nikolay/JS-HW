const refs = {
  inputRef: document.querySelector('[type = "number"]'),
  renderBtnRef: document.querySelector('[data-action="render"]'),
  destroyBtnRef: document.querySelector('[data-action="destroy"]'),
  boxesRef: document.querySelector("#boxes"),
};

let quantity = 0;
let width = 20;
let heigth = 20;

function creat(quantity) {
  quantity = refs.inputRef.value;
  const arr = [];
  refs.boxesRef.innerHTML = "";
  width = 20;
  heigth = 20;

  for (let i = 0; i < quantity; i += 1) {
    width += 10;
    heigth += 10;
    const newBox = document.createElement("div");
    newBox.style.width = width + "px";
    newBox.style.height = heigth + "px";
    newBox.style.backgroundColor = color();
    arr.push(newBox);
    arr.filter((value, index, array) => array.indexOf(value) === index);
  }
  return refs.boxesRef.append(...arr);
}

function clear() {
  refs.boxesRef.innerHTML = "";
  refs.inputRef.value = "";
  quantity = 0;
}
function color() {
  return (
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
  );
}

refs.renderBtnRef.addEventListener("click", creat);
refs.destroyBtnRef.addEventListener("click", () => {
  clear();
});
